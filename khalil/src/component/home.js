import React from 'react'
import Slider from './slider'
import nut from '../nutrition.jpg'
import nutr from './g.jpg'
import nutri from './co.jpg'
import Navbar1 from './navbar';
const home = () => {
  return (
    <div className='back'>
       <Navbar1/>
      <Slider />
      <div className="section-container">
      <img className="columns image"  src={nut} ></img>
    <div className="columns content">
       <div className="content-container">
          <h5>PLAN NUTRITION SANTÉ</h5>
          <p>
          Afin de maximiser vos résultats à la salle de sport, vous devez vous concentrer sur votre alimentation, car manger les mauvais aliments peut nuire à vos résultats de musculation. Adopter le bon régime alimentaire fera la différence dans la réalisation de vos objectifs. 
           </p>
       </div>
    </div>
 </div>

 <div className="section-container">
         <div className="columns content">
            <div className="content-container">
               <h5>DES ENTRAINEMENTS PERSONNALISÉS</h5>
               <p>
               Nous créons des entraînements personnalisés pour nos clients de coaching en ligne. Nous apprenons à connaître vos difficultés, vos objectifs et votre style de vie, et élaborons un programme qui correspond à votre emploi du temps.               </p>
            </div>
         </div>
       
         <img className="columns image"  src={nutr} ></img>
    
      </div>

      <div className="section-container" >
      <img className="columns image"  src={nutri} ></img>
         <div className="columns content">
            <div className="content-container">
               <h5>COACHING PRIVÉ</h5>
               <p>
               C’est un fait connu que les gens travaillent plus dur en présence des autres. Avoir un entraîneur à vos côtés peut vous fournir l'encouragement, l'énergie et la motivation dont vous avez besoin pour démarrer votre parcours de remise en forme.               </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default home
