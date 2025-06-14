const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
   title: String,
   description: String,
    image: String,
    tags: [String],
    liveUrl: String,
    githubUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Projects", projectSchema);