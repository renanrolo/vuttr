const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const toolsController = require('./src/controllers/toolsController')

const mongoConnectionString = process.env.mongocs;
mongoose.connect(mongoConnectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello from Serverless!</h1>');
    res.end();
});
router.get('/tools', toolsController.index);
router.post('/tools', toolsController.store);
router.delete('/tools', toolsController.destroy);
express.use('/api', router);

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/api', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);