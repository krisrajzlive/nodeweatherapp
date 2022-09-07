const request = require('request')

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
                    latitude: jsonData.features[0].center[1],
                    location: jsonData.features[0].place_name
                })
            }
        }
    })
}

module.exports = geocode