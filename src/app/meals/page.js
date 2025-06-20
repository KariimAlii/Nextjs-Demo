﻿import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "@/app/components/meals/meal-grid/meals-grid";
import {getMeals} from "@/lib/meals";
export default async function Meals() {
    const meals = await getMeals();

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created { ' ' }
                    <span className={classes.highlight}>By you</span>
                </h1>
                <p>Choose your favorite Recipe and cook it yourself!</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Sharef your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <MealsGrid meals={meals}/>
            </main>
        </>
    )
}