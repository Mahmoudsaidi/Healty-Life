import React from 'react';
import './Home.css'; 
import { Button } from '../componets/Button';
import image from "../asset/Home_image.jpg"
function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the Calorie Calculator and Meal Suggestion Generator</h1>
      <p>This website helps you estimate your daily calorie needs based on factors such as age, gender, weight, height, and activity level. Additionally, we provide meal suggestions tailored to your nutritional requirements using the power of artificial intelligence.</p>
      <p>Simply enter your information in the form to calculate your daily calorie needs, and explore our meal suggestion feature to discover delicious and nutritious meal ideas.</p>
      <img src={image} alt="Healthy food" className="calorie-image" />
      <Button linkTo="/application" buttonStyle="btn--primary" buttonSize="btn--large">Get Started</Button>
    </div>
  );
}

export default HomePage;
