import { createConnectionObject } from "../DBConfig/DBConfig.js";
const connection = createConnectionObject();

export function loginUser(request, response) {
        const { email, password } = request.body;
        
        if (!email || !password) {
            return response.status(400).json({ message: 'Email and password are required' });
        }
        
        const query = `SELECT * FROM Users WHERE email = ?`;
        connection.query(query, [email], (error, results) => {
            if (error) {
                console.error('Database error:', error);
                return response.status(500).json({ message: 'Database error' });
            }

            
        if (results.length === 0) {
            return response.status(404).json({ message: 'User not found' });
        }
        const user = results[0];
       
        if (password === user.password) {
            return response.status(200).json({ message: 'User logged in successfully' });
        } else {
            return response.status(401).json({ message: 'Invalid password' });
        }
    });
}