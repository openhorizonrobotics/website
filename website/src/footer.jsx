// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your main content goes here */}
      </header>
      <div style={{ position: 'relative' }}>
        <footer
          className="Footer"
          style={{
            background: '#3074FA',
            padding: '20px',
            color: 'white',
            textAlign: 'left',
            width: '1173.47px',
            height: '262.78px',
            position: 'absolute',
            top: '1108.41px',
            left: '137.6px',
            borderRadius: '6px',
          }}
        >
          <div style={{ 
            color: '#FF7704',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '20px',
            letterSpacing: '0em',
            textAlign: 'left',
            top: '1151.75px',
            left: '285.2px',
            width: '178px',
            height: '20px',
          }}>Receive Timely Updates</div>
          <div
          style={{
            fontFamily: 'Inter',
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: '32px',
            letterSpacing: '0em',
            textAlign: 'left',
            width: '257px',
            height: '32px',
            top: '1182.14px',
            left: '277.81px',
          }}>Join our newsletter</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
            type="text"
            placeholder="Enter your email..."
            style={{
              width: '284.95px',
              height: '48.45px',
              top: '1234.69px',
              left: '277.81px',
              borderRadius: '7.39px',
              border: '0.82px solid #ccc',
              outline: 'none',
              padding: '5px', }}
            />
            <button 
           style={{
            width: '141.24px',
            height: '47.63px',
            top: '1235.51px',
            left: '578.36px',
            borderRadius: '5.75px',
            background: '#FF7704',
            color: 'white',
            border: '0.82px',
            borderColor: '#FF7704',
            cursor: 'pointer', }}>Submit</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

/*import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your main content goes here *//*}
      </header>
      <div className="footerContainer">
        <footer className="Footer">
          <div className="updatesText">
            Receive Timely Updates
          </div>
          <div className="newsletterText">
            Join our newsletter
          </div>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search"
              className="searchInput"
            />
            <button className="submitButton">
              Submit
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;*/



