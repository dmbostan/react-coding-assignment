import { LinkTypes } from './Link.types.ts';
import styles from './Link.module.css';
import classNamesHandler from '@shared/helpers/classNamesHandler.ts';

const Link = ({ target, href, className, children }: LinkTypes) => {
  const classNames = classNamesHandler(className, styles.link);

  return (
    <a target={target} href={href} className={classNames}>
      {children}
    </a>
  );
};

export default Link;
