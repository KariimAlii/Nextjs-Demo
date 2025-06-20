import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(db)
    return db.prepare('Select * from meals').all();

    // .run() to insert data
    // .all() to fetch data
    // .get() to fetch single row
}