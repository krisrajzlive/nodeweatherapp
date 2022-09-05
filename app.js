const request = require('request')

//const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query=37.8267,-122.4233'
const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query='
const mapapiurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3Jpc3JhanoiLCJhIjoiY2w3b3V4MTE3MDk1cjNvbnhrZW16cTZibCJ9.dQmfmeXG7hhINkaIensfgw'

const geoapikey = '16019e543f6a050b12418f449af16f49'
const mapapikey = 'pk.eyJ1Ijoia3Jpc3JhanoiLCJhIjoiY2w3b3V4MTE3MDk1cjNvbnhrZW16cTZibCJ9.dQmfmeXG7hhINkaIensfgw'

request({url: weatherapiurl}, (error, response) => {
    if (error)
        console.log('Unable to connect to weather service')
    else
    {
        const jsonData = JSON.parse(response.body)
        if(jsonData.success === false)
            console.log('Unable to find location')
        else{
        console.log(jsonData.current.weather_descriptions)
        console.log('It is currently ' + jsonData.current.temperature + ' degrees out')
        console.log('It feels like ' + jsonData.current.feelslike)
        }
    }
})  

request({url: mapapiurl}, (error, response) => {
    const jsonData = JSON.parse(response.body)
    console.log('Longitude: ' + jsonData.features[0].center[0])
    console.log('Latitude: ' + jsonData.features[0].center[1])
})