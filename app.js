var toggleCase = true;
$("#rollButton").click(function () {
    new Die();
    //! add dice rolling soundeffect
});
$("#addButton").click(function () {
    addDie();
});
$("#rerollButton").click(function () {
    Die.dieContainer.forEach(function (d) {
        //roll
        d.dieRoll();
    });
});
$("#toggleButton").click(function () {
    toggleCase = !toggleCase;
    Die.dieContainer.forEach(function (d) {
        if (toggleCase) {
            d.numbersIntoPips(); // not a function, returning error
            //display pips and change value of toggleCase
        }
        else {
            d.pipsIntoNumbers();
            //display numbers and change value of ToggleCase
        }
    });
});
function addDie() {
    var dieSum = 0;
    Die.dieContainer.forEach(function (d) {
        dieSum += d.value;
    });
    console.log(dieSum);
    var dieTotal = document.createElement("h1");
    dieTotal.textContent = "Ervin Howell has rolled a total of ".concat(dieSum);
    var sumContainer = $("#sum-container");
    sumContainer.append(dieTotal);
    setTimeout(function () {
        dieTotal.remove();
    }, 2500);
}
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.value = this.randNum(); //set value
        this.die = document.createElement("div");
        this.die.className = "border p-2 justify-content-start flex-wrap bg-danger";
        $("#die-container").append(document.body.appendChild(this.die));
        this.die.textContent = "".concat(this.value);
        console.log("before: " + toggleCase);
        if (toggleCase) {
            this.numbersIntoPips();
        }
        else {
            this.pipsIntoNumbers();
        }
        console.log("after: " + toggleCase);
        Die.dieContainer.push(this);
        Die.id++;
        $(this.die).click(function () {
            //change die value when it is clicked
            _this.dieRoll();
            // this.value = this.randNum();
            // this.die.textContent = `${this.value}`;
        });
        $(this.die).dblclick(function () {
            _this.die.remove();
            var dieIndex = Die.dieContainer.indexOf(_this);
            Die.dieContainer.splice(dieIndex, 1);
        });
        // add reroll function
        //// this.value_div = document.createElement("div");
    }
    Die.prototype.randNum = function () {
        //function that determines the random value for the die
        return Math.floor(Math.random() * 6) + 1;
    };
    Die.prototype.dieRoll = function () {
        this.value = this.randNum();
        this.die.textContent = "".concat(this.value);
    };
    Die.prototype.numbersIntoPips = function () {
        switch (this.die.textContent) {
            case "1":
                this.die.textContent = "\u2680";
                break;
            case "2":
                this.die.textContent = "\u2681";
                break;
            case "3":
                this.die.textContent = "\u2682";
                break;
            case "4":
                this.die.textContent = "\u2683";
                break;
            case "5":
                this.die.textContent = "\u2684";
                break;
            case "6":
                this.die.textContent = "\u2685";
        }
        //return this.die.textContent;
    };
    Die.prototype.pipsIntoNumbers = function () {
        switch (this.die.textContent) {
            case "⚀":
                this.die.textContent = "1";
                break;
            case "⚁":
                this.die.textContent = "2";
                break;
            case "⚂":
                this.die.textContent = "3";
                break;
            case "⚃":
                this.die.textContent = "4";
                break;
            case "⚄":
                this.die.textContent = "5";
                break;
            case "⚅":
                this.die.textContent = "6";
        }
        //return this.die.textContent;
    };
    Die.id = 1;
    Die.dieContainer = []; //array to store the die divs when they are made
    return Die;
}());
console.log("typescript test");
// myButton = document.getElementById("rollButton");
// myButton.addEventListener("click", () => {
//   dieContainer.createElement("div");
// });
