import promptSync from "prompt-sync";
const prompt = promptSync();
// Random Number Game Start
const arrOfRandom = [];
const arrOfGuess = [];
const colors: any = {
  0: "Red",
  1: "Green",
  2: "Blue",
  3: "White",
  4: "Black",
};

for (let i = 0; i <= 4; i++) {
  let guess: number = parseInt(
    prompt(
      `Match three colors to win 1 week Vications in Gulgitbaltistan:: 0 to 4! \n
     Match Two colors to win 1 book of your fav. Writer :: 0 to 4! \n
     Match one colors to win next round :: 0 to 4! \n
     Match three colors to win 1 week Vications in Gulgitbaltistan:: 0 to 4! \n
     0: Red, 1: Green, 2: Blue, 3: White, 4:Black \n
     ...  `
    )
  );
  let number: number = Math.floor(Math.random() * 4);

  arrOfGuess.push(colors[`${guess}`]);
  arrOfRandom.push(colors[`${number}`]);
}

console.log(arrOfGuess, arrOfRandom);
let j = 0;
for (let i = 0; i <= 4; i++) {
  if (arrOfGuess[i] === arrOfRandom[i]) {
    console.log(`Your Guess is perfect `);
    j++;
  }
}

switch (j) {
  case 0:
    console.log(`uppsss... Hard luck!`);
    break;
  case 1:
    console.log(`yup!... You Goat One!`);
    break;
  case 2:
    console.log(`Good... you won a Book!`);
    break;
  case 3:
    console.log(`Hurray... you Win A vications!`);
    break;
  case 4:
    console.log(`uppsss... eda tou maa da lal!`);
    break;

  default:
    break;
}
// Game End
