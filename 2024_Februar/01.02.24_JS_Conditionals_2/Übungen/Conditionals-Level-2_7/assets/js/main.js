function showtxt() {
  const listSelect = document.querySelector("#mylist").value;
  //   console.log(listSelect);
  const masseInfo = document.querySelector("#masse");
  //   masseInfo.innerHTML = "Test";
  const description = document.querySelector(".boxMasse b");
  //   description.innerHTML = "Test";

  switch (listSelect) {
    case "0":
      description.innerHTML = "Brief und Postkarte";
      masseInfo.innerHTML = " L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";

      break;
    case "1":
      description.innerHTML = "DHL Paket 2 kg";
      masseInfo.innerHTML = " bis 60 x 30 x 15 cm";

      break;
    case "2":
      description.innerHTML = "DHL Paket 5 kg";
      masseInfo.innerHTML = " bis 120 x 60 x 60 cm";

      break;
    case "3":
      description.innerHTML = "DHL Paket 10 kg";
      masseInfo.innerHTML = " bis 120 x 60 x 60 cm";

      break;

    default:
      description.innerHTML = "Extra große Größe";
      break;
  }
}
