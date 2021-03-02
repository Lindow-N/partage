// == Import npm
import React, {Component, Fragment}from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';


// == Composant
class Faq extends Component {
render(){
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html 
<Fragment>
  <h1>FAQ</h1>
  <Header/>
  
  <Footer/>
</Fragment>


         )
        }
}



// == Export
export default Faq;
