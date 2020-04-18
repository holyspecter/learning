const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('../utils/geocode.js');
const forecast = require('../utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(path.join(__dirname, '../public')));
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Roman'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Meh'
    });
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'No address provided.'
        });
    }

    geocode(req.query.address, (err, { latitude, longitude, location } = {}) => {
        if (err) {
            console.log(err);
            return res.send({
                error: 'Address was not found.'
            });
        }

        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                console.log(err);
                return res.send({
                    error: 'Failed to retrieve forecast.'
                });
            }

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            });
        });
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found.'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found.'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
