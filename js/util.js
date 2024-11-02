function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  if (min<0 || max<0) {
    return -1;
  }

  return parseFloat(str);
};

export { getRandomFloat };

