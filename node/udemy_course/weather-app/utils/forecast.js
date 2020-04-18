const request = require('request');

module.exports = (latitiude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=95cefcd40557562352af195a28edc29d&query=' + latitiude + ',' + longitude;

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('Unable to connect to weather service!');
        } else if (body.error) {
            callback('Unable to find location.');
        } else {
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees out. Feels like ${body.current.feelslike} degrees out.`);
        }
    });
}
