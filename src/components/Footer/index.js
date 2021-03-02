// // == Import npm
import React, {Component, Fragment}from 'react';
import './style.scss';

// == Composant
const Footer = () => {
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html 
 <div>
    <div className="footer__time">
      <p>HORAIRES</p>
      <p>Lundi-Vendredi 7h-20h</p>
      <p>Lundi-Vendredi 7h-20h</p>
    </div>

    <div className="footer__adress">
      <p>ADRESSE</p>
      <p>15, rue des Chats</p>
      <p>75008 Paris</p>
      <p>01 23 45 67 89</p>
      <a href="/contact">Email: acmieux@centre.io</a>
    </div>

</div> 


         )
  };




// == Export
export default Footer;
