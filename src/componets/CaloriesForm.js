import React, { useState, useEffect } from 'react';
import './CaloriesForm.css';
import MealSuggestions from './MealSuggestions'; 

function CalorieCalculatorForm() {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calorieNeeds, setCalorieNeeds] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [mealSuggestions, setMealSuggestions] = useState([]);

  useEffect(() => {
    if (calorieNeeds !== null) {
      fetchMealSuggestions();
    }
  }, [calorieNeeds]);

  const fetchMealSuggestions = () => {
    // Call your meal suggestion API here
    // Example:
    // fetch('https://api.example.com/meals?calories=' + calorieNeeds)
    //   .then(response => response.json())
    //   .then(data => setMealSuggestions(data))
    //   .catch(error => console.error('Error fetching meal suggestions:', error));

    // Dummy data for demonstration
    const dummyData = [
      { name: 'Grilled Chicken Salad', calories: 350 },
      { name: 'Vegetable Stir Fry', calories: 400 },
      { name: 'Salmon with Quinoa', calories: 450 }
    ];
    setMealSuggestions(dummyData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!age || !gender || !weight || !height || !activityLevel) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    
    // Define limits for height and weight
    const minHeight = 127; 
    const maxHeight = 213; 
    const minWeight = 23; 
    const maxWeight = 227; 
    
    // Check if height is within limits
    if (height < minHeight || height > maxHeight) {
      setErrorMessage('Please enter a valid height between 127 and 213 centimeters');
      return;
    }
    
    // Check if weight is within limits
    if (weight < minWeight || weight > maxWeight) {
      setErrorMessage('Please enter a valid weight between 23 and 227 kilograms');
      return;
    }

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      setErrorMessage('Age, weight, and height must be numeric values');
      return;
    }

    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Adjust BMR based on activity level
    let activityFactor = 1.2; // Sedentary by default
    if (activityLevel === 'lightlyActive') {
      activityFactor = 1.375;
    } else if (activityLevel === 'moderatelyActive') {
      activityFactor = 1.55;
    } else if (activityLevel === 'veryActive') {
      activityFactor = 1.725;
    } else if (activityLevel === 'extraActive') {
      activityFactor = 1.9;
    }

    const calculatedCalorieNeeds = Math.round(bmr * activityFactor);

    // Display the result
    setCalorieNeeds(calculatedCalorieNeeds);
  };

  return (
    <div className="calorie-calculator-container">
      <h2>Calorie Calculator</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Activity Level:
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="sedentary">Sedentary</option>
              <option value="lightlyActive">Lightly Active</option>
              <option value="moderatelyActive">Moderately Active</option>
              <option value="veryActive">Very Active</option>
              <option value="extraActive">Extra Active</option>
            </select>
          </label>
        </div>
        <button type="submit">Calculate</button> 
      </form>
      {calorieNeeds !== null && (
        <div className="result">
          <h3>Calorie Needs:</h3>
          <p>{calorieNeeds} calories per day</p>
             {/*button for meal suggestions*/}
          <button type="Button">Meal Suggestions</button>
          <h5>Powered by ChatGPT</h5>
        </div>  
      )}
      
    </div>
  );
}

export default CalorieCalculatorForm;
