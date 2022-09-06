const request = require('request')

const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query=13.067439,80.237617'
//const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query='
const mapapiurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia3Jpc3JhanoiLCJhIjoiY2w3b3V4MTE3MDk1cjNvbnhrZW16cTZibCJ9.dQmfmeXG7hhINkaIensfgw'

request({url: weatherapiurl}, (error, response) => {
    if (error)
        console.log('Unable to connect to weather service')
    else 
    {
        const jsonData = JSON.parse(response.body)
        if (jsonData.success === false)
            console.log('Unable to get weather details')
        
        else
            {
                console.log(jsonData.current.weather_descriptions)
                console.log('It is currently ' + jsonData.current.temperature + ' degrees out')
                console.log('It feels like ' + jsonData.current.feelslike)
            }
    }
})  

request({url: mapapiurl}, (error, response) => {
    if (error)
        console.log('Unable to connect to geo location service')
    else
    {
        const jsonData = JSON.parse(response.body)
        if (!response || !response.body || jsonData.features.length === 0)
            console.log('Unable to find location')
        else
        {
            
            console.log('Longitude: ' + jsonData.features[0].center[0])
            console.log('Latitude: ' + jsonData.features[0].center[1])
        }
    }
})

const geocode = (address, callback) => {
    const mapapiurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia3Jpc3JhanoiLCJhIjoiY2w3b3V4MTE3MDk1cjNvbnhrZW16cTZibCJ9.dQmfmeXG7hhINkaIensfgw'
    
    request({url: mapapiurl}, (error, response) => {
        if (error)
            callback('Unable to connect to geo location service',undefined)
        else
        {
            const jsonData = JSON.parse(response.body)

            if (!response || !response.body || jsonData.features.length === 0)
                callback('Unable to find location. Try another location', undefined)
            else
            {
                
                callback('',{
                    longitude: jsonData.features[0].center[0],
                    latitude: jsonData.features[0].center[1]
                })
                //console.log('Longitude: ' + jsonData.features[0].center[0])
                //console.log('Latitude: ' + jsonData.features[0].center[1])
            }
        }
    })
}

geocode ('Kodaikanal', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ' , data)
})