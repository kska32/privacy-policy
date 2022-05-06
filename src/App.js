import './App.scss';

function App() {
  return (
    <div className="App">
        <h1>Privacy Policy</h1>
        <p>
          <div className='title'>
              Personal data
          </div>
          <div className='content'>
              We never collected and will never collect any personal data and 
              All necessary data, including encrypted data 
              just stored in the user's local browser.
          </div>
        </p>

        <p>
          <div className='title'>
              How and where to store
          </div>
          <div className='content'>
              We uses chrome storage local api for storing user's settings and 
              browser's Indexed database for storing user's encrypted data.
          </div>
        </p>

        <p>
          <div className='title'>
              How to delete personal data
          </div>
          <div className='content'>
              You just uninstall the extension and all your data will 
              be automatically deleted by the browser. 
          </div>
        </p>

        <p>
          <div className='title'>
              Therefore, before uninstalling,
          </div>
          <div className='content'>
              You'd better make a copy of critical personal data.
          </div>
        </p>

        <p>
          <div className='title'>
              Contact us 
          </div>
          <div className='content'>
              Feel free to contact us if you got any questions or 
              concerns about data privacy, we will be happy to help.
          </div>
        </p>
        <address>
            Updated: May 7, 2022 - <a href='mailto:kska32@gmail.com'>By Sparrow Team</a> 
        </address>
    </div>
  );
}

export default App;
