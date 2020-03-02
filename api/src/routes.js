const express = require('express')
const toolsController = require('./controllers/toolsController')

module.exports = function (server) {
    // index, show, store, update, destroy
    const api = express.Router();
    
    api.get('/tools', toolsController.index);
    api.post('/tools', toolsController.store);
    api.delete('/tools', toolsController.destroy);
    
    server.use('/api', api);
}