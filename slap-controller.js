//IS THE CODE THAT TALKS TO THE VIEW

function SlapController() {
    //PRIVATE PARTS
    var slapService = new GameService()

    document.getElementById("button-container").innerHTML = `
        <div class="attack">
            <h3>Kick Stevie's Butt</h3>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('slap')">Slap</button>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('punch')">Punch</button>
                <button class="button" type="button" onClick="app.controllers.slapController.damage('kick')">Kick</button>
        </div>

        <div class="lessDamage">
            <h3>Slow his demise</h3>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('shield')">Shield</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('bomb')">Bomb</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('sword')">Sword</button>
        </div>

        <div class="reset">
            <button class="button" type="button" onclick="app.controllers.slapController.reset()">Reset Game</button>
        </div>
`
   function update() {
        //a kenny getter function
        var kenny = slapService.getKenny()
        document.getElementById("health").innerHTML = kenny.health.toFixed(2)
        document.getElementById("name").innerHTML = kenny.name
        document.getElementById("hits").innerHTML = kenny.hits
        if (kenny.health === 0){
            alert("Your nightmare is over!!!")
            slapService.reset()
            update()
        }
        document.getElementById("options").innerHTML = slapService.sumMods()
    }

    //PUBLIC PARTS
    //create a new damage function
    //"this" makes it publicly available to the service
    this.damage = function damage(attackType){
        slapService.damage(attackType)
        update()
    }
    //give item just like from damage above
    this.giveMod = function giveMod(modType){
        slapService.giveMod(modType)
        //slapService.giveMod[modType]
        update()
    }

    this.reset = function reset(){
        slapService.reset()
        update()
    }
    update()
}