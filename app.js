let noOfMoves = 0;
let canClick = true;
//animal Selector
let dog = document.getElementById("dog");

let cat = document.getElementById("cat");

let horse = document.getElementById("horse");

let name = document.getElementById("name");

let userName = "[enter name]";
let charSelected = "Dog";

let animalAction = document.getElementById("animalAction");

let animalImg = document.getElementById("animalImg");

let charCreated;
let gameOver = false;

function doAction() {
    setTimeout( ()=> {
        animalAction.textContent = charCreated.action;
        charCreated.subtract();
        update();
        callback();
    }, 5000)
}

function callback() {
    setTimeout( ()=> {
        animalAction.textContent = "-";
        doAction();
    }, 5000)
}


userNameBtn.addEventListener("click", () => {
    userName = document.getElementById("userNameText").value;
    name.textContent = `${userName} the ${charSelected}`;
})


dog.addEventListener("click",()=>{
    // console.log("Dog clicked");
    charSelected = "Dog";
    charCreated = new Dog(userName);
    name.textContent = `${userName} the ${charSelected}`;
    animalImg.setAttribute("src", "images/dog.jpg");

    doAction();

})

cat.addEventListener("click",()=>{
    console.log("cat clicked");
    charSelected = "Cat";
    charCreated = new Cat(userName);
    name.textContent = `${userName} the ${charSelected}`;
    animalImg.setAttribute("src", "images/cat.jpg");
    doAction();


})

horse.addEventListener("click",()=>{
    console.log("horse clicked");
    charSelected = "Horse";
    charCreated = new Horse(userName);
    name.textContent = `${userName} the ${charSelected}`;
    animalImg.setAttribute("src", "images/horse.jpg");
    doAction();

})

//action variables
let feedBtn = document.getElementById("feedBtn");
let giveWaterBtn = document.getElementById("giveWaterBtn");
let playBtn = document.getElementById("playBtn");

//status numbers
let moves = document.getElementById("moves");
let hungerLevel = document.getElementById("hungerLevel");
let thirstLevel = document.getElementById("thirstLevel");
let happinessLevel = document.getElementById("happinessLevel");


//animal class
class Animal {
    constructor(name) {
        this._name = name;
        this._hungerLevel = 10;
        this._thirstLevel = 10;
        this._happiness = 10; 
    }

    get name() {
        return this._name;
    }
    get hungerLevel() {
        return this._hungerLevel;
    }
    get thirstLevel() {
        return this._thirstLevel;
    }
    get happiness () {
        return this._happiness;
    }
    subtract() {
        this._happiness--;
        this._hungerLevel--;
        this._thirstLevel--;
    }
    giveFood() {
        this._hungerLevel += 3;
        this._thirstLevel -= 2;
        this._happiness--;
    }
    giveDrink() {
        this._thirstLevel += 3;
        this._hungerLevel -= 2;
        this._happiness--;
    }
    play() {
        this._happiness++;
        this._hungerLevel -= 2;
        this._thirstLevel -= 2;
    }

}


class Dog extends Animal {
    constructor(name) {
        super(name);
        this._type = "dog";
        this._action = "woof";
    }
    get type(){
        return this._type;
    }
    get action(){
        return this._action;
    }
}

// let doggie = new Dog("DoggieDave");
// console.log(doggie._type);

// let doggie = new Dog("doggieDave");
// let objectName = doggie;
//buttons

class Cat extends Animal {
    constructor(name) {
        super(name);
        this._type = "cat";
        this._action = "meow";
    }
    get type(){
        return this._type;
    }
    get action(){
        return this._action;
    }
}

class Horse extends Animal {
    constructor(name) {
        super(name);
        this._type = "horse";
        this._action = "neigh";
    }
    get type(){
        return this._type;
    }
    get action(){
        return this._action;
    }
}


feedBtn.addEventListener("click", ()=> {
    charCreated.giveFood();
    if(canClick == true) { noOfMoves++; }
    update();
});

giveWaterBtn.addEventListener("click", ()=> {
    charCreated.giveDrink();
    if(canClick == true) { noOfMoves++; }
    update();
});

playBtn.addEventListener("click", ()=> {
    charCreated.play();
    if(canClick == true) { noOfMoves++; }
    update();
});

const update = () => {
    hungerLevel.innerHTML = charCreated.hungerLevel;
    thirstLevel.innerHTML = charCreated.thirstLevel;
    happinessLevel.innerHTML = charCreated.happiness;
    moves.innerHTML = noOfMoves;


    if(charCreated.hungerLevel < 1 || charCreated.thirstLevel < 1 || charCreated.happinessLevel < 1) {
        name.textContent = `You lose [in ${noOfMoves} moves] ${userName} the ${charSelected}`;
        hungerLevel.style.visibility = "hidden";
        thirstLevel.style.visibility = "hidden";
        happinessLevel.style.visibility = "hidden";
        moves.style.visibility = "hidden";
        canClick = false;
    }
}

resetBtn.addEventListener("click", ()=> {
    location.reload();
})