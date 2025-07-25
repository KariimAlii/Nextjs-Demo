﻿import classes from './meals-grid.module.css'
import MealItem from "@/app/components/meals/meal-item/meal-item";
export default function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}