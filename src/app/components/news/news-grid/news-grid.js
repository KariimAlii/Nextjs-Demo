import classes from './news-grid.module.css';
import NewsItem from "@/app/components/news/news-item/news-item";

export default function NewsGrid({newsList}) {
    return (
        <ul className={classes.newsGridContainer}>
            {newsList.map(news => (
                <li key={news._id}>
                    <NewsItem {...news}/>
                </li>
            ))}
        </ul>

    );
}