# School Management API

A Node.js and Express.js API for managing school data, with MySQL as the database. Allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Features
- Add a new school
- List schools sorted by distance from a given location

## Requirements
- Node.js
- MySQL

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd school-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory with the following content:
   ```env
   MYSQL_HOST=your_mysql_host
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=your_database_name
   MYSQL_PORT=42440
   ```

4. **Set up the database:**
   - Run the SQL in `schema.sql` (see below) to create the `schools` table.

5. **Start the server:**
   ```bash
   npm run dev
   ```

6. **API Endpoints:**

### Add School
- **Endpoint:** `POST /api/addSchool`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "123 Main St",
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```
- **Response:**
  - `201 Created` on success
  - `400 Bad Request` for invalid input

### List Schools
- **Endpoint:** `GET /api/listSchools?latitude=12.9716&longitude=77.5946`
- **Response:**
  - List of schools sorted by distance from the given coordinates

## SQL Schema
See `schema.sql` for the table definition.

## License
MIT 