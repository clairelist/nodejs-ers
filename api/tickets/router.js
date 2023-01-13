const router = require('express').Router();
const Ticket = require('./model');

router.get('/viewall', async (req, res, next)=>{
    //get ALL tickets, used for testing I think.
    try {
       const tix = await Ticket.getAll();
       res.status(200).json(tix);
    } catch (err) {
        next(err);
    }
})

module.exports = router;