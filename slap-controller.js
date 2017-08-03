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
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('shield')">Waterboarding</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('bomb')">Hang Nail</button>
                <button class="button" type="button" onClick="app.controllers.slapController.giveMod('sword')">Dry Skin</button>
        </div>

        <div class="reset">
            <button class="button" type="button" onclick="app.controllers.slapController.reset()">Reset Game</button>
        </div>
`

    var image = ""

    function changeImage(health) {
        if (health <= 100 && health>=90){
            image = "https://media.giphy.com/media/MW3Gwg1MOUyVa/giphy.gif"
        } else if(health <= 89 && health >= 80){
            image = "https://media.giphy.com/media/3unbiQ7uQS7KM/giphy.gif"
        } else if(health <=79 && health >= 70){
            image = "https://media.giphy.com/media/yS3SDst4seI12/giphy.gif"
        } else if(health <= 69 && health >= 60){
            image = "https://media.giphy.com/media/szvs1WoTl5rKE/giphy.gif"
        } else if(health <=59 && health >= 50){
            image = "https://media.giphy.com/media/RHs6L8WFoYIKI/giphy.gif"
        } else if (health <= 49 && health >=40) {
            image = "https://uproxx.files.wordpress.com/2013/11/stevie-kruger.jpg?w=650&quality=100&h=351"
        } else if(health <= 39 && health >= 30){
            image = "https://media.giphy.com/media/14ki4z0S8ahHvW/giphy.gif"
        } else if(health <= 29 && health >= 20){
            image = "https://media.giphy.com/media/NKE8QDHfSrr6U/giphy.gif"
        } else if(health <= 19 && health >=1){
            image = "https://media.giphy.com/media/VWmikxvnucQSY/giphy.gif"
        } else {
            image = "https://brooklynsteez.com/products/square/86144.png"
        }
    }

    function update() {
        //a kenny getter function
        var kenny = slapService.getKenny()
        document.getElementById("health").innerHTML = kenny.health.toFixed(2)
        document.getElementById("name").innerHTML = kenny.name
        document.getElementById("hits").innerHTML = kenny.hits
        changeImage(kenny.health);
        document.getElementById("image").innerHTML = `
        <img src="${image}">`
        document.getElementById("options").innerHTML = slapService.sumMods()
        if (kenny.health === 0) {
            alert("Your nightmare is over!!!")
        }
    }

    //PUBLIC PARTS
    //"this" makes it publicly available to the service
    this.damage = function damage(attackType) {
        slapService.damage(attackType)
        update()
    }
    //give item just like from damage above
    this.giveMod = function giveMod(modType) {
        slapService.giveMod(modType)
        update()
    }

    this.reset = function reset() {
        slapService.reset()
        update()
    }
    update()
}