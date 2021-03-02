// == Import npm
import React, {Component, Fragment}from 'react';
import Header from 'src/components/Header';

// import Footer from 'src/components/Footer';

import './styles.scss';
// == Composant
const Accueil = () => {
  
  return (
//Fragment remplace la div globale mais ne pollu pas le code html
<Fragment>
  <Header/>
    <section id="main-image">
        <div className="wrapperMid2">
                  <h1>Bienvenue au centre A.C.Mieux</h1>
        </div>
    </section>

  <section>
    <div className="wrapperMid">
      
      <div className="asideLeft"> 
        <h2>Le centre O'clock</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat quaerat mollitia, ipsum nemo maxime temporibus, eveniet nostrum, odit neque at unde? Laudantium, consequatur fuga. Error quas libero obcaecati reiciendis.
          Tempore esse vel molestiae repellendus laborum officiis natus est ipsa vero obcaecati vitae, ab, reprehenderit, quas hic. Quo vero rem, voluptate aperiam praesentium, libero, magni maxime impedit deserunt pariatur nisi?
          Sapiente praesentium esse dolores sequi recusandae repellat voluptate est deserunt dolor quis molestiae, quasi nam suscipit, reprehenderit cumque, minus odit odio perspiciatis. Iusto unde natus, ullam sed doloribus deserunt doloremque.
          Culpa quas necessitatibus maxime quod repellat ratione optio soluta odit ex doloremque, quo, sint reprehenderit temporibus officia dolorum aspernatur error rem maiores! Sequi voluptatibus vero consequatur est possimus quasi aliquid!</p>
          <a className="LienMid" href="/team">En savoir plus</a>
      </div>

      <div className="asideRight">
        <h2>Prochains évènement : <a className="program_link" href="/program">Voir tous les évènement</a></h2>

        <div className="eventsOne">
          <div className="eventsOne__images">
            <img src="https://www.votretourdumonde.com/wp-content/uploads/2018/03/canoe-trip-2019-1.jpg" alt="" />
          </div>
          <div className="eventsOne__text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, animi soluta nobis, nihil id, quisquam voluptate ut sit eius consequuntur fuga ipsa provident dolorum deserunt!</p>
          </div>
        </div>

        <div className="eventsTwo">
          <div className="eventsTwo__images">
            <img src="https://www.votretourdumonde.com/wp-content/uploads/2018/03/canoe-trip-2019-1.jpg" alt="" />
          </div>
          <div className="eventsTwo__text">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, animi soluta nobis, nihil id, quisquam voluptate ut sit eius consequuntur fuga ipsa provident dolorum deserunt!</p>
          </div>
        </div>
    
        </div>
    </div>
  </section>

  {/* <Footer /> */}
</Fragment>


         )
    }




// == Export
export default Accueil;
