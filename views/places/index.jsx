const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place, i) => {
    return (
      <div key={i} className='col-sm-6'>
        <div key={i}>
          <h2>{place.name}</h2>
          <p className={`text-center ${i}`}>
            {place.cuisines}
          </p>
          <img src={`place.name ${i}`} alt={place.name}/>
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className='row'>
          {placesFormatted}
        </div>
      </main>
    </Def>
  )
}

module.exports = index