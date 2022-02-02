# Invite code challenge

The task of this code challenge is to send an invitation to each of the users from the list (located in `invite.component.ts`).
You need to make an API call sequentially for each email (consequent request should be done only when a response from API for the previous request is received).
After the last response from API is received redirect to `invite-list` page and display the collected results info on `invite-list.component.html`.

The error messages should be displayed individually with the information on the error content (for instance, _user1@comtravo.com already exists_). Other errors are also possible and depend on API responses.
You are not supposed to edit `server.express.js`. Reading through it though can give you an idea of what errors the server might return.
Successful invitations should all be given in the form of their total number (e.g. _5 users successfully invited_).

## Development server

Run `npm run start:all` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
