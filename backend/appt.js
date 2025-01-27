// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/clinic', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(cors());
app.use(bodyParser.json());

// Schema for Appointment
const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  dentist: String,
  reason: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// POST route to handle appointment booking
app.post('/api/book-appointment', async (req, res) => {
  const appointmentData = req.body;

  try {
    const newAppointment = new Appointment(appointmentData);
    await newAppointment.save();
    res.status(200).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ message: 'Error booking appointment' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
