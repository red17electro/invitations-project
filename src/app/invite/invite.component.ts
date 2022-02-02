import {Component, OnInit} from '@angular/core';
import {InviteService, User} from '../service/invite.service';
import {concat, EMPTY} from "rxjs";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

const users: User[] = [
  { email: 'user0@comtravo.com' },
  { email: 'user1@comtravo.com' },
  { email: 'user2@comtravo.com' },
  { email: 'user3@comtravo.com' },
  { email: 'user4@comtravo.com' },
  { email: 'user5@comtravo.com' },
  { email: 'user6@comtravo.com' },
  { email: 'user7@comtravo.com' },
  { email: 'user8@comtravo.com' },
  { email: 'user9@comtravo.com' },
  { email: 'user10@comtravo.com' }
];

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
  constructor(private inviteService: InviteService,
              private toastrService: ToastrService,
              private router: Router) {}

  ngOnInit(): void {
    console.log(users);
  }

  onSubmit(): void {
    let invitationsCount = 0;
    const requests = users.map(user => {
      return this.inviteService.invite({
        email: user.email
      } as User).pipe(catchError((err) => {
        if (err.status === 409) {
          this.toastrService.error(`409: User ${err.userEmail} already exists!`, 'Error');
        } else if (err.status === 500) {
          this.toastrService.error(`500: Server was not responding while inviting user ${err.userEmail}!`, 'Error');
        }
        return EMPTY;
      }));
    })

    concat(...requests).subscribe(user => {
      invitationsCount++;
      if (user.email === users[users.length - 1].email) {
        this.router.navigate(['/list']);
        this.toastrService.success(`${invitationsCount} users were successfully invited!`, 'Invitation process completed');
      }
      this.toastrService.success(`User ${user.email} has been invited`, 'Success');
    });
  }
}
