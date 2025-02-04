# Dealers Warehouse PHP Skill Assessment - Ryan Hubbuck

## Environment
This project was built in a Windows environment using XAMPP. This can be downloaded from [ApacheFriends](https://www.apachefriends.org/de/download.html) if needed. 

## Overview
Additionally, this project utilizes Laravel for the backend and Vue for the frontend. Each portion of the application were installed and created seperately as opposed to installing Vue on top of Laravel to replicate an environment in which the systems are running on different servers.

In addition to the requirements outlined in the rubric, I also encorporated a layer of authentication so that each user will be able to register and account and login. All users are allowed to view, alter, and delete any customer to replicate a system in which many individuals accross an organization may need to manage accounts. Bootstrap is used for styling purposes, but this is pulled in via their CDN, so no installation is required. 

Note: The local version of MySQL I use simply uses the root credentials without a password.

## Setup
1. Ensure Apache and MySQL are installed and running.
2. Use composer to create a new laravel project (my computer placed this in System32). The only required installation is Laravel Sanctum for auth, which can be installed via "php artisan install:api".
3. My Vue Project was created on my desktop with Pinia and Vue Router included in the installation via "npm create vue@latest". The only other required installation is Axios; "npm install axios".
4. Execute "php artisan serve" to run the Laravel backend and "npm run dev" to run the Vue frontend.
