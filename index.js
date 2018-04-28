// ES2015 module imports
// import express from 'express';

// common JS imports
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

// dynamic port binding - Heroku will inject PORT into env variable.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
