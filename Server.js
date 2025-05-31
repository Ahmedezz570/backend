const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT =  7000;
app.use(cors());
app.use(express.json());
const projectsRouter = require('./projectsSchema');
app.get('/', (req, res) => {
    res.send('Welcome to the Profile API');
}); 
app.post("/add", async (req, res) => {
  const { title,
   description,
    image,
    tags,
    liveUrl,
    githubUrl
     } = req.body;
  
  try {
    const newProject = new projectsRouter({
      title,
   description,
    image,
    tags,
    liveUrl,
    githubUrl
    });
    
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
});
app.get("/projects", async (req, res) => {
  try {
    const projects = await projectsRouter.find();
    res.status(200).json(projects); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Connect to MongoDB
mongoose.connect('mongodb+srv://profile:7253416@cluster0.dmxnwxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => { 
    console.error('MongoDB connection error:', err); 
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
