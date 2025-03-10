# mariaDB + Express + React
This template provides a minimal setup to get a Login system with:

Database: MariaDB
+
Backend: Express
+
Frontend: React with Vite

# Getting started
1. Update /backend/.env
2. [Install mariaDB](https://mariadb.org/)
3. Give execute permissions > Bash # `chmod +x create_db.sh`
4. Create db_user, database & users table > Bash # ``./create_db.sh`
5. Start backend express-server > Bash # `cd backend | npm start`
6. Start development frontend vite-server > Bash # `cd ../frontend | npm run dev`
7. visit [http://localhost:5173](http://localhost:5173)

## Backend key libraries:
- Hashing passwords with **bcrypt**
- Using the free standard **JWT (JSON Web Token)** for authenticating users
- Through cookies with **cookie-parser**
- Using **dotenv** to manage environment variables

## Frontend key libraries:
- **Axios** to facility AJAX
- **react-router-dom** to route
