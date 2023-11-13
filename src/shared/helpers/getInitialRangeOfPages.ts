const getInitialRangeOfPages = (maxPages: number, pagesTowShow: number) => {
  if (maxPages <= pagesTowShow) {
    return maxPages;
  }

  return pagesTowShow;
};

export default getInitialRangeOfPages;
