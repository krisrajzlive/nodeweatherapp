const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (!location)
    console.log('Please provide location')
else
{
    //callback chaining
    geocode (location, (error, data) => {
        if (error)
        console.log('Error: ', error)
        else
        {
            console.log('Data: ' , data)
            forecast(data.latitude, data.longitude, (error, forecastdata) => {
                if (error)
                    console.log('Error: ', error)
                console.log('Data: ', forecastdata)
            })
        }
    })
}