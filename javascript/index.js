const listString = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const randomIndex = () => {
  var numberToTen = Math.floor(Math.random() * 10);
  return numberToTen;
};

const randomToken = () => {
  let tList = [];
  for (let i = 0; i < 5; i++) {
    if (i == 2 || i == 4) {
      tList.push(listString[randomIndex()]);
    } else {
      tList.push(randomIndex());
    }
  }
  const tokenList = tList.join().replaceAll(",", "");

  return tokenList;
};

/*---------------------*/
const tokenRender = document.querySelector("#token");

const nameInput = document.querySelector("#name");
const tokenInput = document.querySelector("#input_token");

function login(e) {
  e.preventDefault();
  const enterPass = {
    name: nameInput.value,
    tokenKey: tokenInput.value,
  };
  enterPass.tokenKey = enterPass.tokenKey.toUpperCase();

  alert(`Nome: ${enterPass.name} Token: ${enterPass.tokenKey}`);
}

tokenRender.innerHTML = randomToken();
