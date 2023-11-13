import React from 'react';
import styles from './SearchResult.module.css';
import shortenStringToWords from '@shared/helpers/shortenStringToWords.ts';
import { ArticleType } from '@shared/types/Article.type.ts';
import Heading from "@shared/ui/Heading/Heading.tsx";
import Paragraph from "@shared/ui/Paragraph/Paragraph.tsx";
import Link from "@shared/ui/Link/Link.tsx";

const SearchResult: React.FC<ArticleType> = ({ title, description, teaser_image_urls, date, link }) => {
  const dateInstance = new Date(date);
  const humanReadableDate = dateInstance.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const imageData = teaser_image_urls.find((image) => image.width === 754);
  const imageSrc = imageData?.src;
  const imageWidth = imageData?.width;

  const label = `Read more about ${title}`;

  return (
    <article className={styles.searchResult}>
      {imageSrc && (
        <Link className={styles.image} href={link} aria-label={label}>
          <img src={imageSrc} alt={title} width={imageWidth} height="260" />
        </Link>
      )}
      <div className={styles.details}>
        <Heading as="h3">
          <Link href={link} aria-label={label}>
            {title}
          </Link>
        </Heading>
        <Paragraph>
          Published on <time dateTime={date} /> {humanReadableDate}.
        </Paragraph>
        <Paragraph>
          {shortenStringToWords(description, 30)}
        </Paragraph>
      </div>
    </article>
  );
};

export default SearchResult;
