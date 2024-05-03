# Setup
## Backend
0. Change into the backend directory
1. Run `npm install`
2. If changes are made run `npm run build` to build with those changes
4. To run the backend locally, execute `npm run start`

## Frontend
0. Change into the frontend directory
1. Run `npm install`
2. To run the frontend locally, execute `npm run dev`

# Database Setup and Management
## Dumping
We assume that you already have the PostgreSQL server set up.
On Windows
    0. Make sure PostgreSQL is running
    1. Add PostgreSQL/{version}/bin to PATH
    2. Add PostgreSQL/{version}/lib to PATH
    3. Open Windows PowerShell
    4. cd into a directory you want the database to export to
    5. Run the command `pg_dump -U {username} PromptLibrary > {filename}.txt`, replacing {username} and {filename} with your username and filename
    6. Type your password for the server
## Restoring a dump
To load the database from a dump
On Windows
    0. Delete your current database if you have one
    1. Remake a new one with the name PromptLibrary
    2. Open Windows PowerShell
    3. cd into the directory with the db dump
    4. Run the command "cat dump.txt | psql PromptLibrary postgres"
