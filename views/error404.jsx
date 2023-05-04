const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div className='404Image'>
          <img href="public\images\404-PlaceKitten.jpg" alt="404 Kitten"/>
          <div className='404Author'>
            Photo by <a href="http://mark.james.name/">Mark James</a> on <a href="https://placekitten.com/">Place Kitten</a>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = error404