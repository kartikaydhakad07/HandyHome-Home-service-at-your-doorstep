import { createConnectionObject } from "../DBConfig/DBConfig.js";

 const connection = createConnectionObject();
export function registerUser (request, response){
    const { name, email, password } = request.body;
    const query = `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`;
    connection.query(query, [name, email, password], (err) => {
        if (err) {
            console.log('Error inserting data:', err);
            response.status(500).json({ error: 'Failed to register user' });
            return;
        }
        response.status(201).json({ message: 'User registered successfully!' });
    });
}