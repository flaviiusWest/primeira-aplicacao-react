import React from 'react';
import logo from './logo.svg';
import './App.css';
import TemplateFlavio from './components/template/TemplateFlavio';
import CaixaQueSeguraOsCards from './components/CaixaQueSeguraOsCards';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <TemplateFlavio
        sider={<CaixaQueSeguraOsCards/>}
        content={<h1>Ainda nao fui criado</h1>}
      />
    </div>
  );
}

export default App;
