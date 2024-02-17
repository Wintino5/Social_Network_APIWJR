const { Reaction } = require('../../models');
const router = require('express').Router();

router.post('/reactions', async (req, res) => {
    try {
        const reaction = await Reaction.create(req.body);

        res.json(reaction)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/reactions/:reactions_id', async (req, res) => {
    try {
        const reaction = await Reaction.deleteOne({_id: req.params.reactions_id});

        res.json({
            message: 'Reaction deleted successfully'
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router