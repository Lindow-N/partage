// == Import npm
import React, {Component, Fragment}from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './styles.scss';

// == Composant
const Login = () => {
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html 
<Fragment>
<div class="wrapper">

    <section class="login-container">
        <div>
            <header>
                <h2>Identification</h2>
            </header>

            <form action="" method="post">
              
                <input type="text" name="username" placeholder="Nom d'utilisateur" required="required"/>
                <input type="password" name="password" placeholder="Mot de passe" required="required"/>
                <button type="submit">Connexion</button>

            </form>
        </div>
    </section>

</div>



</Fragment>


         )
  }

// == Export
export default Login;
