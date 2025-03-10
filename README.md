# mariaDB + Express + React
This template provides a minimal setup to get a Login system with:

Database: MariaDB
+
Backend: Express
+
Frontend: React with Vite

## Getting started
1. Configure **.env** files > /backend/.env
2. [Install mariaDB](https://mariadb.org/)
3. [Install node](https://nodejs.org/)
4. Install backend dependencies > Bash # `cd backend | npm install`
5. Install frontend dependencies > Bash # `cd ../frontend | npm install`

### Create Database & Users table
1. Give execute permissions > Bash # `chmod +x create_db.sh`
2. Create db_user, database & users table > Bash # ``./create_db.sh`

### Start servers
1. Start backend express-server > Bash # `cd backend | npm start`
2. Start development frontend vite-server > Bash # `cd ../frontend | npm run dev`
3. Visit [http://localhost:5173](http://localhost:5173)
4. Enjoy!

---

## Backend key libraries:
- Hashing passwords with **bcrypt**
- Using the free standard **JWT (JSON Web Token)** for authenticating users
- Through cookies with **cookie-parser**
- Using **dotenv** to manage environment variables

## Frontend key libraries:
- **Axios** to facility AJAX
- **react-router-dom** to route
