
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
//console.log(target)

//_______________________________________________________________
//constructor for items
var Item = function (name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

//this is the object that holds the arguments that will get passed to the constructor
var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield!"),
    bomb: new Item("Bomb", 0.9, "This is an awesome bomb!"),
    sword: new Item("Sword", 0.4, "This is an awesome sword!"),
}

var mod = []

function sumMods() {
    sum = 0;
    for (var i = 0; i < mod.length; i++){
        sum += mod[i]
    } return sum
    document.write('Total amount of modifiers is ' + sum)
}

function damage() {
    if (sumMods() > 0) {
    kenny.health += ((kenny.attackType.slap) * sumMods());
    } else {
       kenny.health += kenny.attackType.slap; 
    }
    kenny.hits += 1;
    update();
}

/*function spoof(attackType, mod){
    kenny.health += (attackType * total)
    kenny.hits += 1
    update();
}*/

/*function calculateModifiers() {
    for (var i = 0; sum = 0, i < this.items.length; sum +=[i++]);
    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i].modifier;
        modifierTotal += item[modifier];
    
    return sum
}*/


/*function damage(attackType) {
    //target.health += attackType;
    kenny.health += attackType * calculateModifiers();
    //debugger
    kenny.hits += 1
    //alert(health)
    update();
}*/

/*function giveShield() {
    kenny.items.push(items.shield)
}*/

function giveShield() {
    var shield = 0.3
    mod.push(shield)
}

function giveBomb() {
    var bomb = 0.9
    mod.push(bomb)
}

function giveSword() {
    var sword = 0.4
    mod.push(sword)
}

//console.log(items)
//target.items.push(items.shield, items.bomb, items.sword)


//________________________________________________________________




//target is actually the "player" gets passed through the player function
//to access the properties of the player, you need to use "target" as that is what variable I set the individual player to
document.getElementById("button-container").innerHTML = `
        <button class="button" type="button" onClick="damage(${kenny.attackType.slap})">Slap</button>
        <button class="button" type="button" onClick="damage(${kenny.attackType.punch})">Punch</button>
        <button class="button" type="button" onClick="damage(${kenny.attackType.kick})">Kick</button>
        <button class="button" type="button" onClick="giveShield()">Shield</button>
        <button class="button" type="button" onClick="giveBomb()">Bomb</button>
        <button class="button" type="button" onClick="giveSword()">Sword</button>
`


//responsible for updating the user interface whenever a value changes
function update() {
    document.getElementById("health").innerHTML = kenny.health
    document.getElementById("name").innerHTML = kenny.name
    document.getElementById("hits").innerHTML = kenny.hits
}