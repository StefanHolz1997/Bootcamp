const doubleNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (typeof number != "number") throw "not a number";

    setTimeout(() => {
      const double = number * 2;
      resolve(double);
    }, 2000);
  });
};

doubleNumber(5)
  .then((double) => console.log(double))
  .catch((err) => console.log(err));

doubleNumber("test")
  .then((double) => console.log(double))
  .catch((err) => console.log(err));
