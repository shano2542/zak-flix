import React from 'react';
import styles from '@/app/styles/common.module.css'
import MovieCard from "@/app/Components/MovieCard";

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    const url = process.env.RAPID_KEY;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cbc7e471d9msh32e1cf41fa5e7b4p1aaf59jsn37405a556e46',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)
    const data = await res.json()
    const main_data = data.titles;


    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series and Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;