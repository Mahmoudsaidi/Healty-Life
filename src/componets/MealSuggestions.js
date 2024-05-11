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
  
  /*
   Data not passed correctly:
   - Double-check how you're passing the data from the previous page to the Meal Suggestions page.
   - Ensure that you're passing all the necessary data and that it's structured correctly.

   State not set correctly:
   - On the previous page where you navigate to the Meal Suggestions page,
     make sure you're setting the state correctly.
   - Verify that you're including all the required data in the state object.

   State accessed correctly:
   - In the previous page, ensure that you're accessing the state correctly
     and passing it to the Link or history.push method.

   State may not be available:
   - If you're directly accessing the Meal Suggestions page without passing state,
     it will result in the "Missing or invalid data" error.
   - Make sure that the Meal Suggestions page is accessed only after passing the required state.

   Data validation:
   - Check if you're performing any data validation on the previous page
     before passing it to the Meal Suggestions page.
   - Ensure that all the required fields are filled and have valid values.
   
   */

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
