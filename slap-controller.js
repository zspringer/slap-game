console.log("Here we go", 2)
//IS THE CODE THAT TALKS TO THE VIEW

function SlapController() {
    console.log("Here we go", 4)
    //PRIVATE PARTS
    var slapService = new GameService()

    document.getElementById("button-container").innerHTML = `
        <div class=""attack">
            <h3>Attack options</h3>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('slap')">Slap</button>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('punch')">Punch</button>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('kick')">Kick</button>
        </div>

        <div class="lessDamage">
            <h3>Take less damage</h3>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('shield')">Shield</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('bomb')">Bomb</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('sword')">Sword</button>
        </div>
`
   function update() {
        //a kenny getter function
        var kenny = slapService.getKenny()
        document.getElementById("health").innerHTML = kenny.health.toFixed(2)
        document.getElementById("name").innerHTML = kenny.name
        document.getElementById("hits").innerHTML = kenny.hits
        document.getElementById("options").innerHTML = slapService.sumMods()
    }

    //PUBLIC PARTS
    //create a new damage function
    //"this" makes it publicly available to the service
    this.damage = function damage(attackType){
        slapService.damage(attackType)
        update()
        console.log("Damage from controller")
    }
    //give item just like from damage above
    this.giveMod = function giveMod(modType){
        slapService.giveMod(modType)
        //slapService.giveMod[modType]
        update()
    }
    // this.health = function healthCheck(health){
    //     slapService.healthCheck(health)
    //     update()
    // }
    update()
}