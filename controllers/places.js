const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g54359-d1021135-Reviews-Black_Thai_Restaurant_Lounge-Myrtle_Beach_South_Carolina.html&psig=AOvVaw0C5-bosszUeS2xVkWxaUnC&ust=1683246851197000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD5hKe12v4CFQAAAAAdAAAAABAE'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://unsplash.com/photos/x-f-YuU1nw8'
  }]
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router