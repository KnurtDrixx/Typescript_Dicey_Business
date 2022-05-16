let toggleCase: boolean = true;

$("#rollButton").click(function () {
  new Die();
  //! add dice rolling soundeffect
});
$("#addButton").click(function () {
  addDie();
});

$("#rerollButton").click(function () {
  Die.dieContainer.forEach((d) => {
    //roll
    d.dieRoll();
  });
});

$("#toggleButton").click(function () {
  toggleCase = !toggleCase;
  Die.dieContainer.forEach((d) => {
    if (toggleCase) {
      d.numbersIntoPips(); // not a function, returning error

      //display pips and change value of toggleCase
    } else {
      d.pipsIntoNumbers();

      //display numbers and change value of ToggleCase
    }
  });
});

function addDie() {
  let dieSum = 0;
  Die.dieContainer.forEach((d) => {
    dieSum += d.value;
  });

  console.log(dieSum);
  let dieTotal = document.createElement("h1");
  dieTotal.textContent = `Ervin Howell has rolled a total of ${dieSum}`;
  let sumContainer = $("#sum-container");
  sumContainer.append(dieTotal);
  setTimeout(function () {
    dieTotal.remove();
  }, 2500);
}

class Die {
value: number;
die: HTMLDivElement;
  static id = 1;
  static dieContainer: Die[] = []; //array to store the die divs when they are made

  constructor() {
    this.value = this.randNum(); //set value
    this.die = document.createElement("div");
    this.die.className = "border p-2 justify-content-start flex-wrap bg-danger";
    $("#die-container").append(document.body.appendChild(this.die));
    this.die.textContent = `${this.value}`;
    console.log(`before: ` + toggleCase);
    if (toggleCase) {
      this.numbersIntoPips();
    } else {
      this.pipsIntoNumbers();
    }
    console.log(`after: ` + toggleCase);
    Die.dieContainer.push(this);
    Die.id++;

    $(this.die).click(() => {
      //change die value when it is clicked
      this.dieRoll();
      // this.value = this.randNum();
      // this.die.textContent = `${this.value}`;
    });

    $(this.die).dblclick(() => {
      this.die.remove();
      let dieIndex = Die.dieContainer.indexOf(this);
      Die.dieContainer.splice(dieIndex, 1);
    });

    // add reroll function

    //// this.value_div = document.createElement("div");
  }
  randNum() {
    //function that determines the random value for the die
    return Math.floor(Math.random() * 6) + 1;
  }

  dieRoll() {
    this.value = this.randNum();
    this.die.textContent = `${this.value}`;
  }
  numbersIntoPips() {
    switch (this.die.textContent) {
      case `1`:
        this.die.textContent = `⚀`;
        break;
      case `2`:
        this.die.textContent = `⚁`;
        break;
      case `3`:
        this.die.textContent = `⚂`;
        break;
      case `4`:
        this.die.textContent = `⚃`;
        break;
      case `5`:
        this.die.textContent = `⚄`;
        break;
      case `6`:
        this.die.textContent = `⚅`;
    }
    //return this.die.textContent;
  }

  pipsIntoNumbers() {
    switch (this.die.textContent) {
      case "⚀":
        this.die.textContent = `1`;
        break;
      case "⚁":
        this.die.textContent = `2`;
        break;
      case "⚂":
        this.die.textContent = `3`;
        break;
      case "⚃":
        this.die.textContent = `4`;
        break;
      case "⚄":
        this.die.textContent = `5`;
        break;
      case "⚅":
        this.die.textContent = `6`;
    }
    //return this.die.textContent;
  }
}
console.log("typescript test")

// myButton = document.getElementById("rollButton");
// myButton.addEventListener("click", () => {
//   dieContainer.createElement("div");
// });
