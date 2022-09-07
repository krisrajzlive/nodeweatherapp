const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//callback chaining
geocode ('Chennai', (error, data) => {
    if (error)
       console.log('Error: ', error)
    
    console.log('Data: ' , data)
    forecast(data.latitude, data.longitude, (error, data) => {
        if (error)
            console.log('Error: ', error)
        console.log('Data: ', data)
    })
})