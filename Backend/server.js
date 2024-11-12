import express from 'express';
import cors from 'cors';
import { establishConnection } from './src/DBConfig/DBConfig.js';
import signUpRouter from './src/routers/SignUpRouter.js';
import loginRouter from './src/routers/LoginRouter.js';
import appointmentRouter from './src/routers/AppointmentRouter.js';

const app = express();
const PORT = 4000;


app.use(express.json());
app.use(cors());


app.use("/register", signUpRouter);
app.use("/login", loginRouter);
app.use('/appointment', appointmentRouter); 


app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
    establishConnection(); 
});
