import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useState, useEffect } from 'react';

const url = 'https://61fb8d1087801d0017a2c592.mockapi.io/meal/'

const AvailableMeals = () => {
  let [meals, setMeals] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  let getData = async () => {
    await fetch(url)
      .then(response => response.json())
      .then(res => {
        setMeals(res)
      })
      .catch(err => {
        console.log(err)
      })
  }



  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
