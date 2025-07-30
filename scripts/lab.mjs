// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// **** PART 1 ****
let divisableByFive = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
console.log(divisableByFive + " that all numbers are divisable by 5");

let biggerThan = n1 > n4;
console.log(biggerThan + " that the first number is bigger than the fourth number");

let sub = n2 - n1;
let multiply = sub * n3;
let reminder =  multiply % 4;
console.log(reminder + " is the reminder after we did all these calculations\n");

let underOrEqual25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(underOrEqual25 + " that all numbers are 25 or less");

// **** PART 2 ****
// Initalizing variables
let tripDistance = 1500;
let fiftyfiveMilesPerHour = 30;
let sixtyMilesPerHour = 28;
let seventyFiveMilesPerHour = 23;
let budget = 175;
let gallonCost = 3;

// calculating the number of gallons for each trip
let numOfGals1 = tripDistance / fiftyfiveMilesPerHour;
console.log(numOfGals1 + " gallons needed at 55 mph");
let numOfGals2 = tripDistance / sixtyMilesPerHour;
console.log(numOfGals2 + " gallons needed at 60 mph");
let numOfGals3 = tripDistance / seventyFiveMilesPerHour;
console.log(numOfGals3 + " gallons needed at 75 mph\n");

// calculating tbe gallons cost of each trip
let tripGalsCost1 = numOfGals1 * gallonCost;
console.log(tripGalsCost1 + " dollars needed for gas at 55 mph");
let tripGalsCost2 = numOfGals2 * gallonCost;
console.log(tripGalsCost2 + " dollars needed for gas at 60 mph");
let tripGalsCost3 = numOfGals3 * gallonCost;
console.log(tripGalsCost3 + " dollars needed for gas at 75 mph\n");

// checking if the gallons cost of each trip is in budget
let checkInBudget1 = budget > tripGalsCost1;
console.log(checkInBudget1 + " budget is enough at 55 mph");
let checkInBudget2 = budget > tripGalsCost2;
console.log(checkInBudget2 + " budget is enough at 60 mph");
let checkInBudget3 = budget > tripGalsCost3;
console.log(checkInBudget3 + " budget is enough at 75 mph\n");

// recommendation summary
console.log("Summary:");
console.log("55 mph: Most fuel efficient but slowest.");
console.log("60 mph: Balanced between time and cost.");
console.log("75 mph: Fastest but most expensive.");
