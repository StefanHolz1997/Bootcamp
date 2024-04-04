const howOld = (yearBorn) => {
  let iAm = 2024 - yearBorn;
  return iAm;
};

console.log(howOld(1997));

const diffAge = (age1, age2) => {
  let alterDiff = age1 - age2;
  return alterDiff;
};

console.log(diffAge(24, 18));

const diffAge2 = (age1, age2) => {
  return age1 <= age2 ? age2 - age1 : age1 - age2;
};

console.log(diffAge2(12, 30));
