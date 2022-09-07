const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherapiurl = 'http://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query=' 
    + latitude
    + ','
    + longitude

    request({url: weatherapiurl}, (error, response) => {
        if (error)
            callback('Unable to connect to weather service',undefined)
        else 
        {
            const jsonData = JSON.parse(response.body)
            if (jsonData.success === false)
               callback('Unable to get weather details')
            else
                {
                    callback('',
                    {
                        weather: jsonData.current.weather_descriptions,
                        temperature: jsonData.current.temperature,
                        feelslike: jsonData.current.feelslike
                    }
                    )
                }
        }
    }) 
}

module.exports = forecast