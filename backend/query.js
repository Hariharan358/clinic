import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// MongoDB connection URI (replace with your actual MongoDB connection URI)
const mongoURI = 'mongodb://localhost:27017/clinic';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define schema for the dental query form data
const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  issueType: String,
  query: String,
});

const Query = mongoose.model('Query', querySchema);

// POST route to handle form submission
app.post('/submit-query', async (req, res) => {
  const { name, email, issueType, query } = req.body;

  const newQuery = new Query({
    name,
    email,
    issueType,
    query,
  });

  try {
    await newQuery.save();
    res.status(200).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting query', error });
  }
});

// Start server
const port = 5007;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
