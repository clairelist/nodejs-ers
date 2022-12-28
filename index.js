const server = require('./api/server');
require('dotenv').config();
const PORT = 8080;

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});