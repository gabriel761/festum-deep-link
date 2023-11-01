
import { useEffect } from 'react';
import './App.css';


import logo from './assets/images/logo.png'

function App() {
  useEffect(() => {
    setTimeout(()=> {
      const path = window.location.pathname.replace('/', '');
      window.location.replace('festum://' + path)
    }, 25)
    
  },[])
  return (
    <div className="App">
      <div className='main-background'>
        <div className='main-text-wrap'>
          
          <img className='logo-text-wrap' src={logo} alt='logo'/>
          <p className='main-text'>Baixe o aplicativo usando o botão abaixo!</p>
          <div >
            <a className='google-button' href='https://play.google.com/store/apps/details?id=com.gabriel761.frontend&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
              <img className='google-button-img' alt='Disponível no Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png' />
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
