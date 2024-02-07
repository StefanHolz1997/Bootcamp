//FirstOption
//
// const berechnen = (event) => {
//   event.preventDefault();

//   const aufAbSchlag = document.querySelector(
//     "input[name='aufAbschlag']:checked"
//   ).id;
//   const steuerSatz = document.querySelector(
//     "input[name='steuersatz']:checked"
//   ).id;
//   const betrag = document.querySelector("#inputMoney").value;

//   if (aufAbSchlag === "aufschlag" && steuerSatz === "neunzehn") {
//     const steuerOutput = betrag * 0.19;
//     const bruttoOutput = Number(betrag) + Number(steuerOutput);
//     console.log(bruttoOutput);
//   }

//   if (aufAbSchlag === "aufschlag" && steuerSatz === "sieben") {
//     const steuerOutput = betrag * 0.7;
//     const bruttoOutput = Number(betrag) + Number(steuerOutput);
//     console.log(bruttoOutput);
//   }

//   if (aufAbSchlag === "abschlag" && steuerSatz === "neunzehn") {
//     const nettoOutput = betrag / 1.19;
//     const steuerOutput = Number(betrag) - Number(nettoOutput);
//     console.log(steuerOutput);
//   }
//   if (aufAbSchlag === "abschlag" && steuerSatz === "sieben") {
//     const nettoOutput = betrag / 1.07;
//     const steuerOutput = Number(betrag) - Number(nettoOutput);
//     console.log(nettoOutput);
//   }
// };

//  # SecOption

const berechnen = (event) => {
  event.preventDefault();
  const brutto = Boolean(document.querySelector("#aufschlag").checked);
  const netto = Boolean(document.querySelector("#abschlag").checked);
  const taxDefault = Boolean(document.querySelector("#neunzehn").checked);
  const taxReduced = Boolean(document.querySelector("#sieben").checked);

  if (brutto && taxDefault) {
    bruttoDefault();
  }
  if (brutto && taxReduced) {
    bruttoReduced();
  }
  if (netto && taxDefault) {
    nettoDefault();
  }
  if (netto && taxReduced) {
    nettoReduced();
  }
};

const bruttoDefault = () => {
  const bruttoOutput = document.querySelector("#inputMoney").value * 0.19;
  console.log(bruttoOutput);
  console.log(
    Number(document.querySelector("#inputMoney").value) + bruttoOutput
  );
};

const bruttoReduced = () => {
  const bruttoOutput = document.querySelector("#inputMoney").value * 0.07;
  console.log(bruttoOutput);
  console.log(
    Number(document.querySelector("#inputMoney").value) + bruttoOutput
  );
};

const nettoDefault = () => {
  const nettoOutput = document.querySelector("#inputMoney").value / 1.19;
  console.log(nettoOutput);
  console.log(
    Number(document.querySelector("#inputMoney").value) - nettoOutput
  );
};

const nettoReduced = () => {
  const nettoOutput = document.querySelector("#inputMoney").value / 1.07;
  console.log(nettoOutput);
  console.log(
    Number(document.querySelector("#inputMoney").value) - nettoOutput
  );
};
