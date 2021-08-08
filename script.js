// define story inputs
const superName = ["Josh","Yyeeeeet","Hunky Boy","Mister Mediocre","Dynamo","Pfizzle"];
const superPower = ["walk kind of fast","have perfect 20/30 hindsight",
"turn gold into copper","travel 2 seconds into the future","fly but only 6 feet off the ground"];
const superFeat = ["stopping global warming","bringing world peace","ending terrorism","killing Thanos"];

// choose random story inputs
let choiceA = superName[Math.floor(Math.random()*superName.length)];
let choiceB = superPower[Math.floor(Math.random()*superPower.length)];
let choiceC = superFeat[Math.floor(Math.random()*superFeat.length)];

// output story
console.log(`Once upon a time, there was a superhero named ${choiceA}.`);
console.log(`${choiceA} was a unique hero wwith the ability to ${choiceB}.`);
console.log(`Using the ability to ${choiceB}, ${choiceA} saved the world by ${choiceC}.`)
console.log(`No one knows how this was accomplished, but ${choiceA} disappeared afterwards.`);
console.log(`${choiceA} is out there somewhere using the ability to ${choiceB} to make the world a better place.`);