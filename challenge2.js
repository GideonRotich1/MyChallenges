const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// function initialisation
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
// perform speedcheck and add points
  if (speed < speedLimit)
      return "Ok";

  const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

  if (points >= 12)
      return "License suspended";
  else
      return "Demerit points: " + points;
}

rl.question("Enter the speed of the car: ", (input) => {
  const speed = parseInt(input);

  if (!isNaN(speed)) {
    const result = checkSpeed(speed);
    console.log(result);
  } else {
    console.log("Please enter a valid number for the speed.");
  }

  rl.close();
});

