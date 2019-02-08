const request = require('request-promise');
const fetch = require('node-fetch');
const fs = require('fs');
const { join } = require('path');
const { parse } = JSON;
const streamCat = async (filePath) => {
    if (typeof filePath !== 'string') throw new TypeError(`File path must be a string, got ${typeof filePath}`);
    const fullPath = join(__dirname, '..', '..', filePath);
    fetch('https://aws.random.cat/meow').then(res => {
        res.body.pipe(fullPath);
    });
};

module.exports = streamCat;