# Tasks Application

A simple task management application allowing users to register, log in, and manage their tasks.

### Features

- User registration
- User login/logout
- Create, edit, and delete tasks
- View all tasks

### Requirements

- PHP 8.2 or higher
- MySQL
- Composer
- Node.js & npm (with React)
- Laravel 9.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:wsalazar/tasks.git
   cd tasks
2. **Install PHP dependencies**
    ```bash
   composer install
3. **Environment setup**
   - Copy .env.example to .env:
   ```bash
   cp .env.example .env
   ```
   - Generate the application key:
   ```bash
   php artisan key:generate
4. **Install JavaScript dependencies (including React)**
    ```bash
   npm install
   npm run dev

5. **Database setup**
   - Create a MySQL database named tasks:
    ```bash
     mysql -u root -p
    CREATE DATABASE tasks;
   ```
   - Run migrations:
   ```bash
   php artisan migrate
6. **Run the application**
   ```bash
   php artisan serve
   ```

7. Access the application Open your browser and go to: http://127.0.0.1:8000

## Notes ##
- Ensure you have PHP 8.2 installed to use the latest features and compatibility with the project.
- React is required for the front-end interface, so make sure it's properly set up using ***npm install*** and ***npm run dev***.





