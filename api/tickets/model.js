const lego = require('../../data/db-config');

function getAll(){
    return lego.select('*').from('tickets');
}

function add(ticket){
    return lego('tickets').insert(ticket, '*'); //RETURNING * IE 
}

module.exports = {
    getAll,
    add
}