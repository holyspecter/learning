const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if (!location) {
    console.log('Required argument is not provided.');
    return;
}

geocode(location, (err, {latitude, longitude, location}) => {
    if (err) {
        console.log('Error: ', err);
        return;
    }

    forecast(latitude, longitude, (err, forecastData) => {
        if (err) {
            console.log('Error: ', err);
        }
        
        console.log(location);
        console.log(forecastData);
    });
});
