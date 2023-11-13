import React from 'react';
import styles from './PaginationButton.module.css';
import { PaginationButtonType } from './PaginationButton.type.ts';

const PaginationButton: React.FC<PaginationButtonType> = ({ target, currentPage, label, clickHandler, children }) => {
  const activeClass = target === currentPage ? styles.active : '';

  return (
    <button
      key={target}
      className={`${styles.button} ${activeClass}`}
      aria-label={label}
      onClick={() => clickHandler(target)}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
