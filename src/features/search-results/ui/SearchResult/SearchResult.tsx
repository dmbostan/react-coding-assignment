import React from 'react';
import styles from './SearchResult.module.css';
import shortenStringToWords from "@shared/helpers/shortenStringToWords.ts";
import {ArticleType} from "@shared/types/Article.type.ts";

const SearchResult: React.FC<ArticleType> = ({title, description, teaser_image_urls, date, link}) => {

    const dateInstance = new Date(date);
    const humanReadableDate = dateInstance.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })

    const imageData = teaser_image_urls.find( image => image.width === 754);
    const imageSrc = imageData?.src;
    const imageWidth = imageData?.width;

    const label = `Read more about ${title}`;

    return (
        <article className={styles.searchResult}>
            {imageSrc && <a className={styles.image} href={link} aria-label={label}>
                <img src={imageSrc} alt={title} width={imageWidth} height="260" />
            </a>}
            <div className={styles.details}>
                <h3>
                    <a href={link} title={title} aria-label={label}>{title}</a>
                </h3>
                <div>Published on <time dateTime={date} /> {humanReadableDate}.</div>
                <p>{shortenStringToWords(description, 30)}</p>
            </div>
        </article>
    );
};

export default SearchResult;
