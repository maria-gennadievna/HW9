//hw9
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', async (req, res) => {

  let lat = req.query.lat
  let lon = req.query.lon
  let resWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2906b093bfe0cb70f7c5e3e7b3baeb7`)
  let resWeatherJson = await resWeather.json()
    // res.json(resWeatherJson)
     res.json({
       'city' : resWeatherJson.name,
       'temp' : (resWeatherJson.main.temp) - 273 + 'C',
       'humidity' : (resWeatherJson.main.humidity) + '%',
       'wind' : (resWeatherJson.main.wind) + 'km/h'

     })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//я
