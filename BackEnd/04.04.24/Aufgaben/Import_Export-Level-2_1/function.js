const bigPopulation = (data) => {
  const filter = data.filter((item) => item.population > 100000);
  return filter;
};

const smallPopulation = (data) => {
  const filter = data.filter((item) => item.population < 100000);
  return filter;
};

export { bigPopulation, smallPopulation };
