import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize the app
const app = express();

// Middleware setup
app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse incoming JSON requests

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/clinic', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

// Connect to MongoDB
connectDB();

// MongoDB schema for appointments
const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'pending' },  // Possible values: pending, approved, rejected
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// MongoDB schema for dental queries with a reply field
const querySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  issueType: { type: String, required: true },
  query: { type: String, required: true },
  status: { type: String, default: 'pending' },  // Possible values: pending, resolved
  reply: { type: String, default: '' },  // Store the reply from the admin
});

const Query = mongoose.model('Query', querySchema);

// Route to fetch all appointments
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

// Route to update appointment status
app.put('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }  // Return the updated document
    );
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment status' });
  }
});

// Route to fetch all queries
app.get('/queries', async (req, res) => {
  try {
    const queries = await Query.find();
    res.json(queries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching queries' });
  }
});

// Route to update query status and send a reply
app.put('/queries/:id', async (req, res) => {
  const { id } = req.params;
  const { status, reply } = req.body;  // Include reply in the request body

  try {
    const updatedQuery = await Query.findByIdAndUpdate(
      id,
      { status, reply },  // Update both the status and reply
      { new: true }  // Return the updated document
    );
    if (!updatedQuery) {
      return res.status(404).json({ message: 'Query not found' });
    }
    res.json(updatedQuery);  // Send back the updated query with status and reply
  } catch (error) {
    res.status(500).json({ message: 'Error updating query status and reply' });
  }
});

// Define a port for the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
