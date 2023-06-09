const React = require('react');
const Def = require('./default')

function home () {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div className='homeImage'>
          <img src='https://fitfoodiefinds.com/wp-content/uploads/2019/03/CHIA-SMOOTHIE-SQ.jpg' alt='Chia Fruit Shake'/>
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