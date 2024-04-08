const randNumber = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.round(Math.random() * 10);
    if (randomNum < 6)
      throw "Number is smaller than 6. Your number is: " + randomNum;
    else throw "Your Number is: " + randomNum;

    resolve(randomNum);
  });
};

randNumber()
  .then((result) => {
    return console.log(result);
  })
  .catch((err) => console.log(err));
