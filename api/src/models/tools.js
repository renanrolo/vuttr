const mongoose = require('mongoose');

const toolScheme = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    link: { type: String },
    tags: { type: [String] }
})

module.exports = mongoose.model('tools', toolScheme)
