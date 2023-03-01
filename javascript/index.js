const test = document.querySelector("h1");

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

  console.log(tokenList);

  return tokenList;
};

test.innerHTML = randomToken();
