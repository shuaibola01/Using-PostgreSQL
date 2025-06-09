# Express.js + PostgreSQL CRUD API

This is a simple RESTful API built with Express.js and PostgreSQL. It allows you to perform CRUD operations on a `users` table.

## Requirements

- Node.js
- PostgreSQL

## Setup Instructions

1. Clone or download this repository.
2. Install dependencies:

```bash
npm install
```

3. Set up your PostgreSQL database and run the SQL in `schema.sql` to create the `users` table.
4. Create a `.env` file in the root directory with the following:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database_name
PORT=4000
```

5. Run the server:

```bash
node index.js
```

## API Endpoints

- `GET /users` - Get all users
- `GET /users/:id` - Get a specific user
- `POST /users` - Create a new user
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user