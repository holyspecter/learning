const https = require('http');
const url = 'http://api.weatherstack.com/current?access_key=95cefcd40557562352af195a28edc29d&query=Kiev';

const request = https.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.end();
