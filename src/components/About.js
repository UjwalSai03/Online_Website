import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style = {{ backgroundImage: `url(${ MultiplePizzas })` }}>
        
      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p> 
        Welcome to Gusto Haven Bistro, where culinary excellence meets a warm and inviting ambiance. Located in the heart of downtown, Gusto Haven is the perfect destination for food enthusiasts seeking a delightful dining experience.

        Ambiance:
        Step into our beautifully designed restaurant and be greeted by an atmosphere that blends modern sophistication with cozy charm. The soft lighting, earthy color palette, and tasteful decor create an ambiance that is perfect for both intimate dinners and celebratory gatherings. Our spacious dining area offers comfortable seating arrangements, ensuring that every guest feels relaxed and at home.

        Cuisine:
        At Gusto Haven Bistro, we take pride in our diverse menu that showcases a fusion of flavors from around the world. Our talented chefs are dedicated to using the finest locally-sourced ingredients to craft dishes that are not only visually stunning but also bursting with flavor. From classic Italian pastas to exotic Asian-inspired creations, there's something to satisfy every palate.

        Signature Dishes:

        Truffle Risotto: Creamy Arborio rice infused with truffle oil and topped with shaved Parmesan cheese, a true indulgence for truffle lovers.
        Pan-Seared Sea Bass: Sustainably sourced sea bass served with a citrus beurre blanc sauce and accompanied by sautéed seasonal vegetables.
        Gusto Burger: A mouthwatering blend of Angus beef, caramelized onions, bacon, and aged cheddar served on a toasted brioche bun.
        </p>
      </div>
    </div>
  );
}

export default About;
