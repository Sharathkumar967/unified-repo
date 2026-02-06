# Eksaq Unified Monorepo

This monorepo contains the Eksaq unified mobile and web applications, built with React Native (Expo) and React, respectively. It is managed as a Turborepo and uses `pnpm` for package management.

## Creating the Monorepo

This project was created using the Turborepo CLI:

```sh
npx create-turbo@latest
```

## Creating the Apps

### Web (React)

The web application was created using Vite:

```sh
pnpm create vite apps/web --template react-ts
```

### Mobile (React Native with Expo)

The mobile application was created using Expo:

```sh
npx create-expo-app apps/mobile --template
```

## PNPM

We use `pnpm` as our package manager. `pnpm` is fast and efficient with disk space. It uses a content-addressable store to save all package files on disk. When you install a package, `pnpm` checks if the file is already in the store. If it is, it creates a hard link to it, avoiding redundant downloads and saving disk space.

### Installing Dependencies

When a new package is added to any of the projects, or to the root `package.json`, you need to run the following command from the root of the monorepo to install all dependencies:

```sh
pnpm install
```

## Running the Applications

### From the Root

You can run both the mobile and web applications from the root of the monorepo using Turborepo commands:

- **Web:**

  ```sh
  pnpm dev --filter web
  ```

- **Mobile:**

  ```sh
  pnpm dev --filter mobile
  ```

### From the App Directories

You can also run the applications from their respective directories.

- **Web:**
  1.  Navigate to the web app directory:

      ```sh
      cd apps/web
      ```

  2.  Start the development server:

      ```sh
      pnpm dev
      ```

- **Mobile:**
  1.  Navigate to the mobile app directory:

      ````sh
      cd apps/mobile
              ```

          2.  Start the development server:

              ```sh
              pnpm start
              ```

      ## Adding Shared Packages

      To add a new shared package to the `packages` directory (e.g., for services, utils, etc.), follow these steps:

      1.  **Create a directory for your new package:**

          For example, to create a `services` package:

          ```sh
          mkdir -p packages/services
          cd packages/services
          ```

      2.  **Initialize a `package.json` file:**

          Run `pnpm init` to create a `package.json` file.

          ```sh
          pnpm init
          ```

      3.  **Name your package with the `@unified` scope:**

          Open the newly created `package.json` file and change the `name` field to give it a scoped name. For example:

          ```json
          {
            "name": "@unified/services",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [],
            "author": "",
            "license": "ISC"
          }
          ```

      4.  **Add your code to the package.**

      5.  **Install the new package in your apps:**

          To use the new package in your `web` or `mobile` app, add it to the `dependencies` in the respective `package.json` file. For example, in `apps/web/package.json`:

          ```json
          "dependencies": {
            "@unified/services": "workspace:*",
            // ... other dependencies
          },
          ```

      6.  **Install all dependencies from the root:**

          Navigate back to the root of the monorepo and run `pnpm install`.

          ```sh
          cd ../..
          pnpm install
          ```

          This will install the new package and create a symlink to it in the `node_modules` directory of the apps that use it. You can verify this by checking for a `@unified` folder inside `node_modules` at respective apps level.

      ````
