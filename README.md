# AdonisJS Ratelimit Starter

---

## Overview

This a starter AdonisJS application which implements rate limiting with Unkey Ratelimit feature. There are two endpoints, a public one and a protected one that is limited to two request per 30 seconds.

## Features

- Public endpoint accessible without authenticationn
- Protected endpoint ratelimited to two requests per 30 seconds

## Quickstart

---


## Set up the example

1. Clone the repository:

   ```bash
   git clone https://github.com/Ionfinisher/unkey-adonisjs-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Change the .env.example to .env file and add the following:

   ```bash
   UNKEY_ROOT_KEY=your-root-key
   ```

Get the root key from https://app.unkey.com/settings/root-keys

5. Start the server

   ```bash
   cd to the root of the project directory
   node ace serve --watch
   ```

6. curl the unprotected route

   ```bash
    curl http://127.0.0.1:3333/api/v1/public
   ```

   It should return Heeyaaa!! Touchdown to the public and unlimited endpoint!!

7. curl the protected route

   ```bash
    curl http://127.0.0.1:3333/api/v1/protected
   ```

   It should return Woohoo!! Touchdown to the protected endpoint!! But after two requests in 30 seconds it should return WoW! Try again later.


## License

This project is licensed under the MIT License.

## Further information

For further information, go to [unkey](https://app.unkey.com/).
