## Used stack: `React`, `Redux Toolkit`, `redux-persist`, `React router`, `Postgres`, `js-cookie`.

## Before run this app locally:

- Open postgres on your machine: `psql -U postgres`.
- If you have problems with localization, add this command: `psql \! chcp 1251`.
- Then you should create a database (I called it `visitors`): `CREATE DATABASE visitors;`.
- `\c visitors` or `\c "visitors"`
- And create the table (I called it `visitor`) `CREATE TABLE visitor (
  id INT,
  share BOOLEAN,
  email VARCHAR(254));`.

All commands described above you can find in the `server/src/database/database.sql` file.

- Note that you should edit `server/src/database.ts` too: paste your postgres username, password and database name you created earlier, I left some comments.

### That's it, now you are ready to start this app.

## Start the app and manage it locally.

- Open terminal, `cd server` and `npm run server`. It will launch the local development server for backend.
- Open terminal in the root directory and type `npm start`. It will start the local development server for frontend.
- After the home page success first loading it will be add coockies and some notes in your `LocalStorage` (for state storing). After that the frontend will make a request to the server for the new user creation `{id: 1, shared: false, email: null}`. You can see if the new user was created just by visiting `http://localhost:8080/visitor`. Now if you share link from the main page or send your email according changes will be visible on `http://localhost:8080/visitor`, for example, `{id: 1, shared: true, email: test@gmail.com}`. If didn't complete all steps and just closed the window with app after your return there will be no user created, but show an old one in your browser's console.
- If all the steps are completed the app will redirect the visitor to the `/final` page. This page isn't accessible if the visitor didn't complete all steps on the homepage. From this page user can't go back, because as I thought this is what pages like this create for.
