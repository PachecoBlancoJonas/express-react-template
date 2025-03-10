# Login System with MariaDB, Express, and React

This template provides a minimal setup for a login system using:

-   **Database**: MariaDB
-   **Backend**: Express
-   **Frontend**: React with Vite

## Getting Started

### 1. [Install MariaDB](https://mariadb.org/)
### 2. [Install node](https://nodejs.org/)
### 3. Configure **.env** files in `/backend/.env`. Example variables needed:

```.env
PORT=5000

DB_ROOT_USER=[root]
DB_ROOT_PASSWORD=[root_password]
DB_USER=[db-username]
DB_PASSWORD=[db_password]
DB_HOST=localhost
DB_NAME=[db_name]

FRONTEND_URL=http://localhost:5173

JWT_SECRET=[my-very-secret-key]

NODE_ENV=development
```
### 4. Configure **.env** files in `/frontend/.env`. Example variables needed:

```.env
VITE_API_URL=http://localhost:5000
```

### 5. Install backend dependencies:

```bash
cd backend && npm install
```

### 6. Install frontend dependencies:

```bash
cd ../frontend && npm install
```

### 7. Give execute permissions to the database creation script:

```bash
chmod +x create_db.sh
```

### 8. Run the script to create the database, user, and users table:

```bash
./create_db.sh
```
### 9. Start backend express-server:

```bash
cd backend && npm start
```

### 10. Start development frontend vite-server:

```bash
cd ../frontend && npm run dev
```

### 11. Visit [http://localhost:5173](http://localhost:5173) and enjoy ❤️



## Backend key libraries:

-   Hashing passwords with **bcrypt**
-   Using the free standard **JWT (JSON Web Token)** for authenticating users
-   Through cookies with **cookie-parser**
-   Using **dotenv** to manage environment variables
-   mysql2 to manage SQL querys

## Frontend key libraries:

-   **Axios** to facility AJAX
-   **react-router-dom** to route
