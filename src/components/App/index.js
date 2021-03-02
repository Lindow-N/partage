// == Import npm
import React from 'react';

// == Import : local
// Composants
import Header from 'src/components/Header';
import Accueil from 'src/components/Accueil';
 import Faq from 'src/components/Faq';
 import Contact from 'src/components/Contact';
 import Equipe from 'src/components/Equipe';
 import Programmes from 'src/components/Programmes';
 import Login from 'src/components/Login';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Accueil />
    <Footer />
    
  </div>

);

// == Export
export default App;
