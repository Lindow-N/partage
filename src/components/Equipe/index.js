// == Import npm
import React, {Component, Fragment}from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

// == Composant
const Equipe = () => { 
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html 
<Fragment>
  <h1>Equipe </h1>
  <Header/>
  
  <Footer/>
</Fragment>


         )
}



// == Export
export default Equipe ;
