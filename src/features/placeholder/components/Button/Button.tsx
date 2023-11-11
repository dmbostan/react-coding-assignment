import { ButtonTypes } from './Button.types.ts';
import styles from './Button.module.css';
import classNamesHandler from '@shared/utils/classNamesHandler.ts';

const Button = ({ clickHandler, className, children }: ButtonTypes) => {
  const classNames = classNamesHandler(className, styles.button);

  return (
    <button onClick={clickHandler} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
