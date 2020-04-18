const fs = require('fs');

const rawData = fs.readFileSync('1-json.json').toString();

const data = JSON.parse(rawData);

data.name = 'Roman';
data.age = 27;
fs.writeFileSync('1-json.json', JSON.stringify(data));
