
var container = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var gameButtons = document.getElementById("game-buttons");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");



start();

function start(){
    title.innerHTML = "For Honor";
    title.style.textAlign = "center";
    title.style.color = "black";
    console.log("Start");
    description.innerHTML = "Het spel speelt zich af in de tijd van de ridders/Vikingen en de Samoerai. Zelf zit je bij de Samoerai Factie. Het doel is om de oorlog tussen de samoerai, Vikingen en de Ridders voor altijd te beëindigen. Als je denkt dat je het aankan mag je beginnen!";
    container.style.backgroundImage = "url('images/beginscherm.jpg')";
    button1.innerHTML = "Start";
    button2.innerHTML = "Audio";
    button1.onclick = onbutton1clicked;
    button2.onclick = audio;
}

function onbutton1clicked(){
    container.style.backgroundImage = "url('images/samuraiKasteel.jpg')";
    title.innerHTML = "Samurai Fort";
    console.log("Samurai Fort");
    description.innerHTML = "Dit is het fort van jou factie: de Samoerai. Je word gevraagd voor het leger om ten strijden te trekken tegen de Vinkingen. Het doel is om het fort van de Vikingen te veroveren. Ga je ten strijden trekken, of weiger je het verzoek om het leger te joinen?"
    button1.innerHTML = "Join leger";
    button2.innerHTML = "Weiger";
    button1.onclick = strijden;
    button2.onclick = weiger;
}