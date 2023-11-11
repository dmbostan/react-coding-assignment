const classNamesHandler = (passedStyles: string | undefined, moduleStyles: string | undefined) => {
  let classNames = '';

  if (passedStyles) {
    classNames = `${classNames} ${passedStyles}`;
  }

  if (moduleStyles) {
    classNames = `${classNames} ${moduleStyles}`;
  }

  return classNames.trim();
};

export default classNamesHandler;
