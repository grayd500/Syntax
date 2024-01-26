const express = require('express');
const router = express.Router();
const merchSeed = require('../../seeds/merchSeed').default;
const Merch = require('../models/merch.js');

merchSeed();

router.get('/merch', async (req, res) => {
    try {
        const merchData = await Merch.find();
        res.json(merchData);
    } catch (error) {
        console.error('Error fetching merch data', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;