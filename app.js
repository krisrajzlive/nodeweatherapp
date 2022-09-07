const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query=13.067439,80.237617'
//const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query='
//const mapapiurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3Jpc3JhanoiLCJhIjoiY2w3b3V4MTE3MDk1cjNvbnhrZW16cTZibCJ9.dQmfmeXG7hhINkaIensfgw'

geocode ('Ujjain', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ' , data)
})

forecast(13.067439, 80.237617, (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})