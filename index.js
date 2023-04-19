function Monday() {
  exerciseRoutine(liftWeights);
}

// console.log(Monday());

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Tuesday() {
      console.log("Go for a five-mile run");
      console.log("Pump iron");
  }

  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(() => console.log("work baby work!"));

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
    return function(){};
}