import NewsGrid from "@/app/components/news/news-grid/news-grid";

export default async function News() {
    const response = await fetch('http://localhost:8080/news');
    if(!response.ok) {
        throw new Error('Failed to fetch News!')
    }

    const news = await response.json();

    // if(error) {
    //     return <p>Error: {error}</p>;
    // }
    // if(isLoading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <>
            <h1>News Page</h1>
            <NewsGrid newsList={news} />
        </>

    );
}