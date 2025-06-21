import classes from './news-item.module.css'
import Image from "next/image";
import Link from "next/link";
export default function NewsItem({ _id, title, slug, image, date, content }) {
    return (
        <article className={classes.news}>
            <header>
                <div className={classes.image}>
                    {/*<Image src={image} alt={title} fill/>*/}
                </div>
                <div className={classes.headerText}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
            </header>
            <div className={classes.content}>
                <p className={classes.summary}>{date}</p>
                <div className={classes.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    );
}