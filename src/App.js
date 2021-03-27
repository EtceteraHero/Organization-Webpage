import logo from './images/cat-logo.png';  // Rotating cat logo (Logo subject to change)
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>EtceteraHero | Development</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1 className="w3-jumbo w3-animate-top">UNDER DEVELOPMENT</h1>
          <hr className="w3-border-grey" style={{margin: 'auto', width: '40%'}} /> {/* Creates grey underline!!! */}
          <p className="w3-large w3-center">Please check back again.</p>
        </p>
      </header>
    </div>
  );
}

export default App;
