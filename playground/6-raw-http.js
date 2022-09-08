const https = require('https')
const url = 'https://api.weatherstack.com/current?access_key=16019e543f6a050b12418f449af16f49&query='

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()      
    })

    response.on('end', () => {
        const jsonData = JSON.parse(data)
        console.log(jsonData)
    })

    
})

request.on('error', (error) => {
    console.log('An error occurred: ', error)
})

request.end()