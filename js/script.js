
const container = document.getElementById("game-container");
const title = document.getElementById("title");
const description = document.getElementById("description");
const gameButtons = document.getElementById("game-buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const inventory = document.getElementById("inventoryItem");
var sword = false;



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
    button2.onclick = music;
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

function strijden(){
	container.style.backgroundImage = "url('images/b892326be286e88083f3c025c92edef5.png')";
	title.innerHTML = "De reis";
	title.style.color = "black";
	console.log("De reis");
	description.innerHTML = "Je trekt ten strijden tegen de Vikingen. Na drie lange dagen zijn jullie eindelijk in het gebied van de vikingen aangekomen. Jullie bespreken de tactiek, maar de ene helft van de troepen wilt overdag via de poort aanvallen en elke Viking afslachten die ze tegenkomen. Maar de andere helft wil 's nachts het fort binnen dringen als een soort verrassinges aanval. De leider vraagt het aan jou. Het hangt er allemaal af van wat jij kiest. Wat word het? Overdag of 's nachts";
	description.style.color = "white";
	button1.innerHTML = "overdag";
	button2.innerHTML = "nacht";
	button1.onclick = overdag;
	button2.onclick = nacht;
}

function overdag(){
	container.style.backgroundImage = "url('images/army.jpg')";
	title.innerHTML = "vechten voor de poort";
	title.style.color = "white";
	console.log("Vechten voor de poort");
	description.innerHTML = "Het was jou keuze dus dat respecteerd iedereen. Jullie stormen op de poort af en breken hem open. Het is een hevige strijd. Je verslaat een Vinking met een hoge rang. Hij dropt zn zwaard, wil je deze oppakken of laten liggen?";
	description.style.color = "white";
	button1.innerHTML = "oppakken";
	button2.innerHTML = "doorgaan";
	button1.onclick = function() {
		Zwaard();
		sword = true;
		console.log(sword);
	}
	button2.onclick = doorgaan;
}

function Zwaard() {
	container.style.backgroundImage = "none";
	container.style.backgroundColor= "black";
	description.style.display = "none";
	title.style.color = "black";

	var swordImage = document.createElement("img");
	container.appendChild(swordImage);
	swordImage.src = "images/zwaard.jpg";
	swordImage.style.display = "block";
	swordImage.style.margin = "0 auto";

	swordImage.onclick = function(){
		duel();
		console.log(inventory);
		swordImage.style.display = "none";
		inventory.style.display = "block";
		inventory.src = "images/zwaard.jpg";
	};
	button1.style.display = "none";
	button2.style.display = "none";
}

function doorgaan(){
	container.style.backgroundImage = "url('images/samuraiFight.jpg')";
	title.innerHTML = "vechten voor de poort";
	console.log("Doorgaan");
	title.style.color = "black";
	description.innerHTML = "Je laat het zwaard liggen en vecht je weg door het fort totdat de leider van de Vikingen je naam roept en je uitdaagd voor een duel. Ga je dit dual aan of niet?";
	description.style.color = "white";
	button1.innerHTML = "duel";
	button2.innerHTML = "geen duel";
	button1.onclick = DUEL;
	button2.onclick = GEENduel;
}