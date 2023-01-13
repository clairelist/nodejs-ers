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
});

router.post('/new', async (req, res, next)=>{
    try {
        const inserted = await Ticket.add(req.body); //this SHOULD work, will need to actually play with later...
        res.status(201).json(inserted);
    } catch (err) {
        next(err);
    }
})

module.exports = router;