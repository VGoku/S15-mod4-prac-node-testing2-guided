# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Project Setup

- [ ] clone this repository.
- [ ] move inside the project folder.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run migrate` to run migrations.
- [ ] type `npm run seed` to seed the db.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.

MyNotes:
npm i
npm run resetDb
npm i -D jest supertest cross-env
"test": "cross-env NODE_ENV=testing jest --verbose --watchAll --runInBand"
npm run server
npm i -D @types/jest
supertest = server.test.js