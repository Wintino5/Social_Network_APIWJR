const router = require('express').Router();
const { User } = require('../../models');

// The `/api/users` endpoint

router.get('/users', async (req, res) => {
    try {
        const user = await User.find();

        res.json(user)
    } catch (err) {
        console.log(err)
    }
});

router.get('/users/:user_id', async (req, res) => {
    try {
        const user = await User.findById(request.params.user_id);

        if (!user) return res.status(404).json({
            message: 'User with that ID does not exist'
        })
        // Add populated thought and friend data

        res.json(user)
    } catch (err) {
        console.log(err)
    }
});

router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)

        res.json(user)
    } catch (err) {
        console.log(err)
    }
})

router.put('/users/:user_id', async (req, res) => {
    try {
        const user = await User.update(req.params.id);

        res.json(user)
    } catch (err) {
        console.log(err)
    }
})