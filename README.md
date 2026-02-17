# Unified Monorepo

A monorepo for a unified web and mobile application experience, managed with pnpm and Turborepo.

## Overview

This project is a monorepo that contains a web application built with Next.js and a mobile application built with React Native (Expo). Both applications share code through a set of local packages, ensuring a consistent user experience and development workflow.

This Turborepo was created using the official create command:
npx create-turbo@latest unified repo

## Tech Stack

- **Frameworks:** Next.js (Web), React Native with Expo (Mobile)
- **Language:** TypeScript
- **State Management:** Redux
- **Package Manager:** pnpm
- **Monorepo Tool:** Turborepo
- **Linting:** ESLint

## Monorepo Structure

The repository is organized into two main directories: `apps` and `packages`.

- `apps/`: Contains the individual applications.
  - `web`: The Next.js web application.
  - `mobile`: The React Native (Expo) mobile application.
- `packages/`: Contains the shared code.
  - `api`: Shared API client and endpoint definitions.
  - `core`: Core utilities and constants.
  - `hooks`: Shared React hooks.
  - `redux`: Redux store, slices, and provider.
  - `services`: Application-specific services.
  - `types`: Shared type definitions.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd unified-repo
    ```

2.  **Install dependencies from the root of the monorepo:**
    ```bash
    pnpm install
    ```
    `pnpm` is fast and efficient. It uses a content-addressable store to save package files, creating hard links to them to avoid redundant downloads and save disk space.

## Running the Applications

You can run the applications from the root of the monorepo or from their individual directories.

### From the Root

Use the `--filter` flag to run a script for a specific app.

- **Web (Next.js):**

  ```bash
  pnpm --filter web dev
  ```

  The web application will be available at `http://localhost:3000`.

- **Mobile (Expo):**
  ```bash
  pnpm --filter mobile start
  ```

### From the App Directories

- **Web (Next.js):**
  1.  Navigate to the web app directory:
      ```bash
      cd apps/web
      ```
  2.  Start the development server:
      ```bash
      pnpm dev
      ```

- **Mobile (Expo):**
  1.  Navigate to the mobile app directory:
      ```bash
      cd apps/mobile
      ```
  2.  Start the development server:
      ```bash
      pnpm start
      ```

## Adding Shared Packages

To add a new shared package (e.g., for redux, services, etc.) to the `packages` directory:

1.  **Create a directory for your new package:**

    ```bash
    mkdir -p packages/your-package-name
    cd packages/your-package-name
    ```

2.  **Initialize a `package.json` file:**

    ```bash
    pnpm init
    ```

3.  **Name your package with a scope (e.g., `@repo`).** Open the new `package.json` and set the `name`:

    ```json
    {
      "name": "@repo/your-package-name",
      "version": "1.0.0",
      ...
    }
    ```

4.  **Add your code to the package.**

5.  **Install the new package in your apps.** Add it to the `dependencies` in the `package.json` of the app that needs it, using the `workspace:*` protocol. For example, in `apps/web/package.json`:

    ```json
    "dependencies": {
      "@repo/your-package-name": "workspace:*",
      // ... other dependencies
    },
    ```

6.  **Install all dependencies from the root.** Navigate back to the root of the monorepo and run:
    ```bash
    pnpm install
    ```
    This will symlink your new package into the `node_modules` directory of the apps that use it.
