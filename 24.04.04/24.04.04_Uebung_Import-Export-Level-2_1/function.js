// cities > 100.000
const bigCitiesFunc = (x) => {
  return x.filter((item) => item.population > 100000);
};

// cities > 100.000
const smallCitiesFunc = (x) => {
  return x.filter((item) => item.population < 100000);
};

export { bigCitiesFunc, smallCitiesFunc };
