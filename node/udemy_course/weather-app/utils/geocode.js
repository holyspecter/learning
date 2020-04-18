const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaG9zcGVjdCIsImEiOiJjazh1bDFsb2UwNzZjM3NwOHp4cHhhZ3l2In0.nFnmyVeQYGt930uY6E9LvA&limit=1';

    request({url, json: true}, (err, {body}) => {
        if (err) {
            callback('Unable to connect to location service!');
        } else if (body.features.length === 0) {
            callback('Unable to find location.');
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name,
            });
        }
    });
}

module.exports = geocode;
