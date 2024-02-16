const person = {
  name: "Stefan",
  age: 26,
  sagNameAlter: () => {
    alert(
      `Hallo, Mein Name ist ${person.name} und ich bin ${person.age} Jahre alt`
    );
  },
};

person.sagNameAlter();
