import { Router } from 'express';
import { addAppointment , displayAppointment, deleteAppointment } from '../controllers/appointmentController.js';


const appointmentRouter = Router();

appointmentRouter.post('/addAppointment', addAppointment);
appointmentRouter.get('/displayAppointment', displayAppointment);
appointmentRouter.delete('/deleteAppointment/:id', deleteAppointment);

export default appointmentRouter;
