// ES2015 module imports
// import express from 'express';

// common JS imports
const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

app.listen(5000);
