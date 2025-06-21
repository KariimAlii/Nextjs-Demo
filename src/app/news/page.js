'use client';
import {useEffect, useState} from "react";
import NewsGrid from "@/app/components/news/news-grid/news-grid";

export default function News() {
    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchNews() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/news');
            if(!response.ok) {
                setIsLoading(false);
                setError('Failed to fetch News!')
            }
            const data = await response.json();
            console.log(data)
            setNews(data);
            setIsLoading(false);
        }
        fetchNews();
    }, [])

    if(error) {
        return <p>Error: {error}</p>;
    }
    if(isLoading) {
        return <p>Loading...</p>;
    }

    let newsContent;
    if(news) {
        newsContent = <NewsGrid newsList={news} />
    }
    return (
        <>
            <h1>News Page</h1>
            {newsContent}
        </>

    );
}