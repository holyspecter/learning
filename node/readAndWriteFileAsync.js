'use strict';

const fs = require('fs');

fs.readFile('example_file.txt', 'utf8', (err, buffer) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Buffer length:' + buffer.length);
    const lines = buffer.toString().split('\n').filter(line => !!line);
    const content = lines.join('\n');
    fs.writeFile('example2.txt', content, err => {
        if (err) console.log(err);
        console.log('New file size: ' + content.length);
    });
});
