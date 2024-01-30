# HireSafe

_Employee Verification Portal_

## Overview

HireSafe is a web application and backend API designed to facilitate the background verification process for employees, as directed by clients. The verification process includes multiple steps such as Education Verification, Employment Verification, National Identity Verification, Police Verification, and more.

## Features

- **Education Verification:** Verify the educational background of employees.
- **Employment Verification:** Confirm the employment history of individuals.
- **National Identity Verification:** Verify the national identity details of employees.
- **Police Verification:** Conduct background checks through police records.
- **Customizable Verification Steps:** Easily configure additional verification steps based on client requirements.
- **User Management:** Manage user roles, permissions, and authentication.

## Technologies Used

- **Frontend:**

  - [Angular](https://angular.io/) - A JavaScript library for building user interfaces.

- **Backend:**
  - [MariaDB](https://mariadb.org/) - An open-source relational database.
  - [TypeORM](https://typeorm.io/) - An Object-Relational Mapping (ORM) library for TypeScript and JavaScript.
  - [NestJS](https://nestjs.com/) - A progressive Node.js framework for building efficient and scalable server-side applications.

## Pre-requisites

- Install `nvm` using one of these

  - [macOS](https://tecadmin.net/install-nvm-macos-with-homebrew/)
  - [windows](https://www.freecodecamp.org/news/nvm-for-windows-how-to-download-and-install-node-version-manager-in-windows-10/)

- Install `make`

- Below commands that has to be ran before using this repo

```bash
nvm install 18.18.0
nvm use 18.18.0

npm i -g nx pnpm yarn npm env-cmd @angular/cli @nrwl/cli @nx/workspace @nestjs/cli rimraf pm2 react
```

1. **Clone the Repository:**

```bash
git clone https://github.com/naushadnizarali/hire-safe-apps.git
cd hire-safe-apps
```

2. **Install Dependencies:**

   Go to the root of repo and run below to install node dependencies

```bash
pnpm install
```

3. **Serving applications**

   To start the development server of frontend angular application run

```bash
nx run web-portal:serve
```

To start the development server of backend node application run

```bash
nx run gateway:serve
```

To start all application at once run

```bash
nx run-many --target=serve --projects=web-portal,gateway
```

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Contributing

We welcome contributions! To contribute to the Smart Contracts project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.

Please ensure that your code follows the project's coding standards and includes relevant tests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

We appreciate all contributors and the open-source community for their support and feedback.

Feel free to reach out with questions, feedback, or feature requests.

Happy coding and estimating!
