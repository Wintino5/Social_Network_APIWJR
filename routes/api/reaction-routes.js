const { Thought } = require('../../models');
const router = require('express').Router();

router.post('/thoughts/:thought_id/reactions', async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({_id: req.params.thought_id}, {reaction: req.body}, {new: true});

        res.json(reaction)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/thoughts/:thought_id/reactions/:reaction_id', async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({_id: req.params.thought_id}, {$pull: {reaction:{_id: req.params.reaction_id}}}, {new:true});

        res.json({
            message: 'Reaction deleted successfully'
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router