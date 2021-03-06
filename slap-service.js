//The code that maintains data integrity

function GameService() {
    var slapService = this
    //Private parts
    var kenny = new Player("Stevie Janowski")

    function Player(name) {
        this.name = name;
        this.items = [];
        this.attackType = {
            "slap": -1,
            "punch": -5,
            "kick": -10
        };
        this.health = 100;
        this.hits = 0;

    }

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

    


    //Public parts

    slapService.getKenny = function getKenny() {
        var kennyCopy = JSON.parse(JSON.stringify(kenny))
        return kennyCopy
    }



    slapService.sumMods = function sumMods() {
        var modifiersBeingUsed = kenny.items;
        var sum = 0;
        for (var i = 0; i < modifiersBeingUsed.length; i++) {
            sum += modifiersBeingUsed[i].modifier
        } return sum
    }


    slapService.damage = function damage(type) {
        if (slapService.sumMods() > 0) {
            kenny.health += (kenny.attackType[type]) * slapService.sumMods();
        } else {
            kenny.health += kenny.attackType[type];
        }
        kenny.hits += 1;
        if (kenny.health <= 0){
            kenny.health = 0;
        }
    }

    slapService.giveMod = function giveMod(modType) {
        if (kenny.items.length <= 3){
        kenny.items.push(items[modType])
        } else {
            return
        }
    }

    slapService.reset = function reset() {
        kenny.health = 100
        kenny.hits = 0
        kenny.items = []
    }

}