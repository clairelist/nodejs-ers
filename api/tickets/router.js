const router = require('express').Router();
const Ticket = require('./model');
const {restricted} = require('./middlewares');

router.get('/viewall', restricted, async (req, res, next)=>{ //only a MANAGER should be able to view ALL tix.
    //get ALL tickets, used for testing I think.
    try {
       const tix = await Ticket.getAll();
       res.status(200).json(tix);
    } catch (err) {
        next(err);
    }
});

router.get('/:userid', async (req, res, next)=>{ //get by user id, to see all tix by that user.
    //req.params.userid = user_id
    //getAllTixByUser(user_id)
})

router.post('/new', restricted, async (req, res, next)=>{
    try {
        const inserted = await Ticket.add(req.body); //this SHOULD work, will need to actually play with later...
        res.status(201).json(inserted);
    } catch (err) {
        next(err);
    }
})

router.patch('/:id', restricted, async (req, res, next)=>{
    try {
        const updated = await Ticket.update(req.params.id, req.body); //TODO: MUST TEST THIS!
        res.status(200).json(updated);
    } catch (err) {
        next(err); //TODO: BUILD ERROR HANDLING!
    }
})

module.exports = router;