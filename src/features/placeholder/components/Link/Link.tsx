import { LinkTypes } from './Link.types.ts';
import styles from './Link.module.css';
import classNamesHandler from '@shared/utils/classNamesHandler.ts';

const Link = ({ target, href, className, children }: LinkTypes) => {
  const classNames = classNamesHandler(className, styles.button);

  return (
    <a target={target} href={href} className={classNames}>
      {children}
    </a>
  );
};

export default Link;
