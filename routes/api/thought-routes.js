const router = require('express').Router();
const {Thought, Reaction} = require('../../models');

// The `/api/thoughts` endpoint

router.get('/thoughts', async (req, res) => {
    try {
        const thought = await Thought.find();

        res.json(thought)
    } catch (err) {
        console.log(err)
    }
});

router.get('/thoughts/:thought_id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thought_id)

        res.json(thought)
    } catch (err) {
        console.log(err)
    }
})


router.post('/thoughts', async (req, res) => {
    try {
        const thought = await Thought.create(req.body)

        res.json(thought)
    } catch (err) {
        console.log(err)
    }
});

router.put('/thoughts/:thought_id', async (req, res) => {
    try {
        const thought = await Thought.update(req.params.thought_id);

        res.json(thought)
    } catch (err) {
        console.log(err)
    }
})

router.delete('/thoughts/:thoughts_id', async (req, res) => {
    try {
        const thought = await Thought.deleteOne({_id: req.params.thought_id});

        res.json({
            message: 'Thought deleted successfully'
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router