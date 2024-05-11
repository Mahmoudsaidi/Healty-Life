import React from 'react';
import { useLocation } from 'react-router-dom';

function MealSuggestionsPage() {
  const location = useLocation();
  const { age, gender, weight, height, activityLevel, calorieNeeds } = location.state || {};

  if (!age || !gender || !weight || !height || !activityLevel || !calorieNeeds) {
    return (
      <div>
        <h2>Meal Suggestions</h2>
        <p>Error: Missing or invalid data</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Meal Suggestions</h2>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Activity Level: {activityLevel}</p>
      <p>Calorie Needs: {calorieNeeds} calories per day</p>
    </div>
  );
}

export default MealSuggestionsPage;
