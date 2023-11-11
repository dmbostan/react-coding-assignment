import React from 'react';
import styles from './PaginationButton.module.css';
import {PaginationButtonTypes} from './PaginationButton.types';

const PaginationButton: React.FC<PaginationButtonTypes> = ({page, currentPage, label, clickHandler, children}) => {

  const activeClass = page === currentPage ? styles.active : '';

  return (
      <button key={page}
              className={`${styles.button} ${activeClass}`}
              aria-label={label}
              onClick={() => clickHandler(page)}>
        {children}
      </button>
  );
};

export default PaginationButton;
