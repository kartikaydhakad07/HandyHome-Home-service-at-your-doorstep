import { createConnectionObject } from "../DBConfig/DBConfig.js";

const connection = createConnectionObject();

export function addAppointment(request, response) {
    try {
        const AppInfo = request.body;
        const values = [AppInfo.name, AppInfo.contact, AppInfo.address, AppInfo.package];

        
        const insertitemqry = `INSERT INTO bookings (name, contact, address, package) VALUES (?, ?, ?, ?)`;
        
        connection.query(insertitemqry, values, (error) => {
            if (error) {
                console.log(error);
                
                response.status(500).send({ message: "Failed to add appointment!!"  } );
            } else {
                response.status(200).send({ message: "Appointment added successfully!!" });
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Failed to fetch appointment database!!" });
    }
}



export function displayAppointment(request, response) {
    try {
        const selectQuery = `SELECT * FROM bookings`;

        connection.query(selectQuery, (error, result) => {
            if (error) {
                console.log(error);
                response.status(500).send({ message: "Failed to fetch appointments!!" });
            } else {
                response.status(200).send(result); 
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Failed to fetch appointment database!!" });
    }
}



export function deleteAppointment(request, response) {
    try {
        const { id } = request.params; // Extract the id from URL parameters
        
        const deleteQuery = `DELETE FROM bookings WHERE id = ?`;
        
        connection.query(deleteQuery, [id], (error, result) => {
            if (error) {
                console.log(error);
                response.status(500).send({ message: "Failed to delete appointment!!" });
            } else if (result.affectedRows === 0) {
                response.status(404).send({ message: "Appointment not found!!" });
            } else {
                response.status(200).send({ message: "Appointment deleted successfully!!" });
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({ message: "Failed to delete appointment!!" });
    }
}