
var Player = function (name) {
    this.name = name;
    //this.modifier = modifier;//use the addMods section
    //this.description = description;
    this.items = [];
    this.attackType = {
        "slap": slap = -1,
        "punch": punch = -5,
        "kick": kick = -10
    };
    this.health = 100;
    this.hits = 0;

}
var kenny = new Player("Kenny Powers")

//_______________________________________________________________
//constructor for items
function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

//this is the object that holds the arguments that will get passed to the constructor
var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield!"),
    bomb: new Item("Bomb", 0.9, "This is an awesome bomb!"),
    sword: new Item("Sword", 0.4, "This is an awesome sword!")
}

//kenny.items.push(items.shield, items.bomb, items.sword)

var modifiersBeingUsed = kenny.items;

function sumMods() {
    sum = 0;
    for (var i = 0; i < modifiersBeingUsed.length; i++) {
        sum += modifiersBeingUsed[i].modifier
    } return sum
}

function damage(attackType, modifier) {
    if (sumMods() > 0) {
        kenny.health += ((attackType) * sumMods());
    } else {
        kenny.health += attackType;
    }
    kenny.hits += 1;
    update();
}

function giveMod(modType) {
    kenny.items.push(items[modType])
}

document.getElementById("button-container").innerHTML = `
        <div class=""attack">
            <h3>Attack options</h3>
                <button class="button" type="button" onClick="damage(${kenny.attackType.slap})">Slap</button>
                <button class="button" type="button" onClick="damage(${kenny.attackType.punch})">Punch</button>
                <button class="button" type="button" onClick="damage(${kenny.attackType.kick})">Kick</button>
        </div>
        <div class="lessDamage">
            <h3>Take less damage</h3>
                <button class="button" type="button" onClick="giveMod('shield')">Shield</button>
                <button class="button" type="button" onClick="giveMod('bomb')">Bomb</button>
                <button class="button" type="button" onClick="giveMod('sword')">Sword</button>
        </div>
`

//responsible for updating the user interface whenever a value changes
function update() {
    document.getElementById("health").innerHTML = kenny.health
    document.getElementById("name").innerHTML = kenny.name
    document.getElementById("hits").innerHTML = kenny.hits
    document.getElementById("options").innerHTML = sumMods()
}