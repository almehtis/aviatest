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

- Open terminal, `cd server` and `npm run dev`. It will launch the local development server for backend.
- Open terminal in the root directory and type `npm start`. It will start the local development server for frontend.
- After the home page success first loading it will be add coockies and some notes in your `LocalStorage` (for state storing). After that the frontend will make a request to the server for the new user creation `{id: 1, shared: false, email: null}`. You can see if the new user was created just by visiting `http://localhost:8080/visitor`. Now if you share link from the main page or send your email according changes will be visible on `http://localhost:8080/visitor`, for example, `{id: 1, shared: true, email: test@gmail.com}`. If didn't complete all steps and just closed the window with app after your return there will be no user created, but show an old one in your browser's console.
- If all the steps are completed the app will redirect the visitor to the `/final` page. This page isn't accessible if the visitor didn't complete all steps on the homepage. From this page user can't go back, because as I thought this is what pages like this create for.

## Media:

>**Screencast:**

https://user-images.githubusercontent.com/60067351/199887184-9f97f39b-afd2-475a-9c9f-f6a5679c2764.mp4

>**Screenshots:**

- Home page desktop
![home-desktop](https://user-images.githubusercontent.com/60067351/199887325-effc3c0c-deb1-4312-b8be-6d72c71bfaa6.jpeg)

- Home page mobile
![home-mobile](https://user-images.githubusercontent.com/60067351/199887304-d056191c-daa4-4777-a98d-580314c16f36.jpeg)

- Icon hover
![icon-hover](https://user-images.githubusercontent.com/60067351/199887313-f0271eec-d924-41cf-b9a1-55620b0600f5.png)

- Share link modal 
![share-link-modal](https://user-images.githubusercontent.com/60067351/199887318-dee8dbfb-2b7c-48b2-8a10-bd15beac8876.jpeg)

- Link is shared
![shared-link](https://user-images.githubusercontent.com/60067351/199887323-b94b8fe5-f41e-4eb7-b867-33b48b31df0b.png)

- Email is valid
![email-is-valid](https://user-images.githubusercontent.com/60067351/199887320-cc62870c-1790-43da-b80b-6cac9b9ac75b.png)

- Share email button hover
![hover-email-button](https://user-images.githubusercontent.com/60067351/199887328-090b0cc3-ae41-43af-b07f-d41019e9fd62.png)

- Email is shared 
![shared-email jpeg](https://user-images.githubusercontent.com/60067351/199887311-07f34097-286f-49ce-ac6e-8628df91ad5d.png)

- Final page desktop
![final-page](https://user-images.githubusercontent.com/60067351/199887315-ebf34f50-6ea1-4880-a768-ac53bc40550a.jpeg)

- Final page mobile
![final-mobile](https://user-images.githubusercontent.com/60067351/199887326-de9a63b4-6bea-41b4-abce-7a33b8cc6a2d.jpeg)
