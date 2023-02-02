// Array

let array = ["bobin", "johndoe", "millance", "abram", "orllio"];

// console.log(array[2]);

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(element);
}

// Object

let humanReadable = {
  name: "bobin",
  age: 20,
  gender: "male",
  height: "60cm",
  weight: "75kg",
  hairColor: "brown",
  friend: ["johm", "johndoe", "utchen", "yrandy"],
  country: "United States",
  father: {
    name: "johndoe",
    age: 20,
  },
};

// console.log(humanReadable.friend[3]);
for (let i = 0; i < humanReadable.friend.length; i++) {
  const element = humanReadable.friend[i];
  // console.log(element);
}

// Function

function sum(number1, number2) {
  return number1 + number2;
}

const myNumber = sum(200, 500);
// console.log(myNumber);

function writeSorry() {
  for (let i = 0; i < 20; i++) {
    // console.log("Sorry");
  }
}

writeSorry();

function convertMiles(km) {
  const result = km * 0.62;
  return result;
  return km * 0.62;
}

let miles = convertMiles(100);
// console.log(miles);

function workout(name) {
  let bicepWorkout = ["cable", "one-handed", "two-handed", "three-handed"];
  let trichepWorkout = ["trichep", "one-handed", "two-handed", "three"];

  if (name == "chest") {
    return bicepWorkout;
  } else if (name == "bicep") {
    return trichepWorkout;
  } else {
    return "I do not know";
  }
}

let myPlan = workout("bicep");
// console.log(myPlan);

function myDays(days) {
    let firstDayCost = 500;
    let secondDayCost = 1000;
    let thirdDayCost = 1500;

    if (days == "day1") {
      return firstDayCost;
} else if (days == "day2") {
    return secondDayCost;
} else if (days == "day3") {
    return thirdDayCost;
} else{ "Room is not available"}
}

let myCost = myDays("day1");
console.log(myCost);
