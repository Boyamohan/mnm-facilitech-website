const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const contact = new Contact({ name, email, phone, service, message });
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: 'Facility Management', description: 'Comprehensive facility management solutions' },
    { id: 2, name: 'Housekeeping Services', description: 'Professional housekeeping for offices and spaces' },
    { id: 3, name: 'Office Support', description: 'Corporate office support services' },
    { id: 4, name: 'Contract Staff', description: 'Skilled contract staff management' },
    { id: 5, name: 'Greenfield Setup', description: 'Complete greenfield office setup' }
  ]);
});

app.get('/api/testimonials', (req, res) => {
  res.json([
    { id: 1, name: 'Ravi Kumar', company: 'Tech Solutions Pvt Ltd', rating: 5, text: 'Excellent service and professional staff.' },
    { id: 2, name: 'Sneha Reddy', company: 'Corporate Hub', rating: 5, text: 'Best facility management in Hyderabad.' },
    { id: 3, name: 'Arun Kumar', company: 'Business Center', rating: 4, text: 'Very responsive and reliable team.' }
  ]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
