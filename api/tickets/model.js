const lego = require('../../data/db-config');

function getAll(){
    return lego.select('*').from('tickets');
}

function add(ticket){
    return lego('tickets').insert(ticket, '*'); //RETURNING * IE 
}

function update(id, body){ //BODY:: ie the string of the update, 
    return lego('tickets').where('ticket_id', id).update('status', body); //TODO:: DOES update query take two params? !docs time
}

module.exports = {
    getAll,
    add
}