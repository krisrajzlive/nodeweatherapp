const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location)
    console.log('Please provide location')
else
{
    //callback chaining
    geocode (location, (error, {latitude, longitude, location}) => {
        if (error)
            return console.log('Error: ', error)
        else
        {
            console.log('Location: ', location)
            console.log('Latitude: ' , latitude)
            console.log('Longitude: ', longitude)

            forecast(latitude, longitude, (error, {weather, temperature, feelslike}) => {
                if (error)
                    return console.log('Error: ', error)

                console.log('Weather: ', weather)
                console.log('Temperature: ', temperature)
                console.log('Feelslike: ', feelslike)
            })
        }
    })
}