const lego = require('../../data/db-config');

function getAll(){
    return lego.select('*').from('tickets');
}

function add(ticket){
    return lego('tickets').insert(ticket, '*'); //RETURNING * IE 
}

function update(id, body){
    return lego('tickets').update(body, '*').where('ticket_id', id);
}

module.exports = {
    getAll,
    add
}