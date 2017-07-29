

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
    this.addMods = function () {
        var modifierTotal = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            modifierTotal += item.modifier;
        }
        return modifierTotal
    }
}
var target = new Player("Kenny Powers")
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


console.log(target)

//console.log(items)
//target.items.push(items.shield, items.bomb, items.sword)


//________________________________________________________________

function damage(attackType) {
        //target.health += attackType;
        target.health += attackType * target.addMods();
        //debugger
        target.hits += 1
        //alert(health)
        update();
}


//target is actually the "player" gets passed through the player function
//to access the properties of the player, you need to use "target" as that is what variable I set the individual player to
document.getElementById("button-container").innerHTML = `
        <button class="button" type="button" onClick="damage(${target.attackType.slap})">Slap</button>
        <button class="button" type="button" onClick="damage(${target.attackType.punch})">Punch</button>
        <button class="button" type="button" onClick="damage(${target.attackType.kick})">Kick</button>
        <button class="button" type="button" onClick="damage(${modifierPush})">Shield</button>
        <button class="button" type="button" onClick="damage(${modifierPush})">Bomb</button>
        <button class="button" type="button" onClick="damage(${modifierPush})">Sword</button>
`


//responsible for updating the user interface whenever a value changes
function update() {
    document.getElementById("health").innerHTML = target.health
    console.log(target.health)
    document.getElementById("name").innerHTML = target.name
    document.getElementById("hits").innerHTML = target.hits
}