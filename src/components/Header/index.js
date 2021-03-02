// == Import npm
import React, {Component, Fragment} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Accueil from 'src/components/Accueil';
import Faq from 'src/components/Faq';
import Contact from 'src/components/Contact';
import Equipe from 'src/components/Equipe';
import Programmes from 'src/components/Programmes';
import Login from 'src/components/Login';
import Footer from 'src/components/Footer';



import './style.scss';

// == Composant
class Header extends Component {
render(){
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html 
<Fragment>
  
<div className="RaccourcisHeader">
  <div className="Logo"><a id="ImgLogo" href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/9_years_old_boy_walking_in_the_mountains_-_1992.jpg/800px-9_years_old_boy_walking_in_the_mountains_-_1992.jpg" /></a></div>

   <ul>
   <li><Link to ="/">Actualités</Link></li>
   <li><Link exact to ="/programs">Programmes</Link></li>
   <li><Link to ="/teams">L'équipe</Link></li>
   <li><Link to ="/faq">FAQ</Link></li>
   <li><Link to ="/contact">Contact</Link></li>
  </ul> 
 
    <Switch>
        <Route exact path='/'/>
        <Accueil />
        <Route />
        <Route exact path='/programs'/>
        <Programmes />
        <Route />
        {/* <Route exact path='/faq' component={Faq}/>
        <Route exact path='/contact' component={Contact}/> 
        <Route exact path='/team' component={Equipe}/> 
        <Route exact path='/program' component={Programmes}/>  */}
    </Switch>
        
    
   <div><a href="/login" className="login">Se connecter</a></div>
</div>
  
</Fragment>


         )
        }
}



// == Export
export default Header;
