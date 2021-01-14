# Aspen Street Lodge Splash

## Requirements

- [Composer](https://getcomposer.org/)
- [Docker](https://www.docker.com/)
- [Node Version Manager](https://github.com/creationix/nvm)
- [Node.js](https://nodejs.org/)
- [OpenSSL](https://www.openssl.org/)
- [Sass](https://sass-lang.com/)

## Setup

1. Use the Node.js version specified in the `.nvmrc` file.

   ```sh
   nvm use
   ```

2. Install the dependencies.

   ```sh
   npm install
   composer install
   ```

3. Run the build.

   ```sh
   npm run build
   ```

4. Add the following entries to your hosts file:

   - `127.0.0.1 diversifywebsite.test`.
   - `127.0.0.1 www.diversifywebsite.test`.

5. Generate a self-signed certificate.

   ```sh
   mkdir certs
   openssl req \
     -newkey rsa:2048 -nodes -keyout certs/diversifywebsite.test.key \
     -x509 -days 365 -out certs/diversifywebsite.test.crt \
     -subj "/CN=diversifywebsite.test" \
     -addext "subjectAltName=DNS:diversifywebsite.test,DNS:www.diversifywebsite.test"
   ```

6. Change the trust settings of the certificate for SSL on your device.

7. Start the local development environment.

   ```sh
   docker-compose up -d
   ```

8. Open https://diversifywebsite.test/ in a web browser.

## Docker Commands

### Create a new user in WordPress

```sh
docker run -it --rm \
  --volumes-from diversifywebsite-wordpress \
  --network container:diversifywebsite-wordpress \
  wordpress:cli user create bob bob@example.com --role=administrator
```

Replace `bob` with the user’s username and `bob@example.com` with the user’s email.
