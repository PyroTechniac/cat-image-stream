const request = require('request-promise');
const fs = require('fs');
const path = require('path');
const streamCat = (filePath) => {
    if (typeof filePath !== 'string') throw new TypeError(`File path must be a string, got ${typeof filePath}`);
    console.log(path.join(__dirname, filePath));
};

module.exports = streamCat;