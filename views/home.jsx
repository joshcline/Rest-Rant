const React = require('react');
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div className='homeImage'>
          <img src='public\images\chia-fruit-drink.jpg' alt='Chia Fruit Shake'/>
          <div className='homeAuthor'>
            <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href='https://unsplash.com/photos/MsTOg6rhRVk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
          </div>
        </div>
        <a href='/places'>
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home