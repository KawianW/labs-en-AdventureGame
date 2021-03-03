// hier haal ik de id op uit de html en heb ik globale conatanten toegevoegd
const container = document.getElementById("game-container");
const title = document.getElementById("title");
const description = document.getElementById("description");
const gameButtons = document.getElementById("game-buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const inventory = document.getElementById("inventoryItem");
var sword = false;
const afbeeldingMap = "url(" + "images" + "/";
// hier heb ik een array gemaakt met alle titels, omschrijvingen en afbeeldingen die gebruikt worden
const spelScript = [
    {title: "For Honor", description:"Het spel speelt zich af in de tijd van de ridders/Vikingen en de Samoerai. Zelf zit je bij de Samoerai Factie. Het doel is om de oorlog tussen de samoerai, Vikingen en de Ridders voor altijd te beëindigen. Als je denkt dat je het aankan mag je beginnen!", afbeelding: afbeeldingMap + "beginscherm.jpg)"},
    {title: "Samurai Fort", description: "Dit is het fort van jou factie: de Samoerai. Je word gevraagd voor het leger om ten strijden te trekken tegen de Vinkingen. Het doel is om het fort van de Vikingen te veroveren. Ga je ten strijden trekken, of weiger je het verzoek om het leger te joinen?", afbeelding: afbeeldingMap + "samuraiKasteel.jpg)"},
    {title: "De reis", description: "Je trekt ten strijden tegen de Vikingen. Na drie lange dagen zijn jullie eindelijk in het gebied van de vikingen aangekomen. Jullie bespreken de tactiek, maar de ene helft van de troepen wilt overdag via de poort aanvallen en elke Viking afslachten die ze tegenkomen. Maar de andere helft wil 's nachts het fort binnen dringen als een soort verrassinges aanval. De leider vraagt het aan jou. Het hangt er allemaal af van wat jij kiest. Wat word het? Overdag of 's nachts", afbeelding: afbeeldingMap + "b892326be286e88083f3c025c92edef5.png)"},
    {title: "Vechten voor de poort", description: "Het was jou keuze dus dat respecteerd iedereen. Jullie stormen op de poort af en breken hem open. Het is een hevige strijd. Je verslaat een Vinking met een hoge rang. Hij dropt zn zwaard, wil je deze oppakken of laten liggen?", afbeelding: afbeeldingMap + "army.jpg)"},
    {title: "De confrontatie", description: "Je laat het zwaard liggen en vecht je weg door het fort totdat de leider van de Vikingen je naam roept en je uitdaagd voor een duel. Ga je dit dual aan of niet?", afbeelding: afbeeldingMap + "samuraiFight.jpg)"},
    {title: "Duel", description: "Je vecht tegen de leider van de Vikingen. Het gaat gelijk op totdat iemand anders van de Vikingen zich er mee gaat bemoeien en met zijn bijl je hoofd eraf hakt.", afbeelding: afbeeldingMap + "viking death.jpg)"},
    {title: "Geen duel", description: "Nu heb je de leider helemaal boos gemaakt. eerst zn fort binnen vallen en dan zijn duel afslaan. je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.", afbeelding: afbeeldingMap + "viking death.jpg)"},
    {title: "Vechten om de poort", description: "Je kan nu twee zwaardern te gelijk gebruiken. Jullie vechten je weg door het fort totdat de leider van de Vikingen je naam roept en een duel met je wil aangaan. Ga je dit duel aan of niet?", afbeelding: afbeeldingMap + "aramusha.jpg)"},
    {title: "Duel", description: "Je gaat het gevecht aan. Je gebruikt 1 zwaard voor dit gevecht. Het gaat gelijk op tegen de leider van de Vikingen, totdat iemand anders van de vikingen zich ermee gaat bemoeien en je probeert aan te vallen. Je trekt snel je 2e zwaard en blokkeerd deze aanval en steekt hem daarna neer. Je word boos en gaat de leider aanvallen met je 2 zwaarden. De leider is kansloos.", afbeelding: afbeeldingMap + "viking win.jpg)"},
    {title: "Einde", description: "Het is je gelukt om het leger van de vikingen te verzwakken door hun grootste fort over te nemen. De Samurai zijn nu de strekste factie. Maar het doel om de oorlog voor altijd te beëindigen is niet gelukt. Iedereen vecht voor eer en macht en dat zal altijd zo blijven. Dus de Samoerai zijn nu wel de sterkste factie, maar wie weet of dat over een jaar nog zo is.", afbeelding: afbeeldingMap + "einde.jpg)"},
    {title: "Geen Duel", description: "Nu heb je de leider helemaal boos gemaakt. eerst zn fort binnen vallen en dan zijn duel afslaan. je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.", afbeelding: afbeeldingMap + "viking death.jpg)"},
    {title: "Dood", description: "De leger leider vind het niet acceptabel en executeert je ter plekke.", afbeelding: afbeeldingMap + "wejm2va3fruy.jpg)"},
    {title: "Soort van stealth", description: "Jullie zetten een kamp op en wachten tot dat het donker word. Als het eindelijk donker is gaan jullie richting het fort. De scouts hebben een zwakke plek gevonden in de patrouille van de Vikingen. Als ze even niet opletten slaan jullie toe. ze worden compleet overlopen door ons leger. je komt bij een splitsing, waar ga je heen links of rechts?", afbeelding: afbeeldingMap + "y9aJxMGkQzaYfx93SYG2sZ-970-80.jpg)"},
    {title: "De Leider", description: "Je slaat je weg door het fort. Je komt verschillende vijanden tegen, de een wat sterker dan de andere. Je komt aan bij het kasteel van de leider. Hij zit rustig te eten want hij weet dat het zn laatste maal zal zijn.", afbeelding: afbeeldingMap + "VikingFort.jpg)"},
    {title: "Was nou toch maar naar links gegaan", description: "Je loopt door het fort en komt niemand meer tegen. Je gaat met je groepje uitrusten. Na een tijdje besluiten jullie om weer door te gaan. Juliie lopen door een straatje met veel zijwegen. Uit het niets komen er meer dan 20 vikingen uit de zijstraatjes, het was een val. Niemand overleefde de verrassingsaanval.", afbeelding: afbeeldingMap + "shaman-feat-2.jpg)"}
];

start();
// hier roep ik een functie op die een andere functie opent.
function opnieuw(){
	start();
}

// dit is de home pagina van de game
function start(){
    title.innerHTML = spelScript[0].title;
    title.style.color = "black";
    console.log("Start");
    description.innerHTML = spelScript[0].description;
    container.style.backgroundImage = spelScript[0].afbeelding;
    inventory.style.display = "none";
    button1.style.display = "block";
    button2.style.display = "block";
    button1.innerHTML = "Start";
    button2.innerHTML = "Audio";
    button1.onclick = onbutton1clicked;
    button2.onclick = music;
}

// button 1 --------------------------------------------------------

function onbutton1clicked(){
    container.style.backgroundImage = spelScript[1].afbeelding;;
    title.innerHTML = spelScript[1].title;
    console.log("Samurai Fort");
    description.innerHTML = spelScript[1].description;
    button1.innerHTML = "Join leger";
    button2.innerHTML = "Weiger";
    button1.onclick = strijden;
    button2.onclick = weiger;
}

function strijden(){
	container.style.backgroundImage = spelScript[2].afbeelding;;
	title.innerHTML = spelScript[2].title;
	title.style.color = "black";
	console.log("De reis");
	description.innerHTML = spelScript[2].description;
	description.style.color = "white";
	button1.innerHTML = "overdag";
	button2.innerHTML = "nacht";
	button1.onclick = overdag;
	button2.onclick = nacht;
}

function overdag(){
	container.style.backgroundImage = spelScript[3].afbeelding;;
	title.innerHTML = spelScript[3].title;
	title.style.color = "white";
	console.log("Vechten voor de poort");
	description.innerHTML = spelScript[3].description;
	description.style.color = "white";
	button1.innerHTML = "oppakken";
	button2.innerHTML = "doorgaan";
	button1.onclick = zwaard; {
		sword = true;
		console.log(sword);
	}
	button2.onclick = doorgaan;
}

function zwaard() {
	container.style.backgroundImage = "none";
	container.style.backgroundColor= "black";
	description.style.display = "none";
	title.style.color = "black";

	var swordImage = document.createElement("img");
	container.appendChild(swordImage);
	swordImage.src = "images/zwaard.jpg";
	swordImage.style.display = "block";
	swordImage.style.margin = "0 auto";

	swordImage.onclick = duel; {
		console.log(inventory);
		inventory.style.display = "block";
		inventory.src = "images/zwaard.jpg";
	};
	button1.style.display = "none";
	button2.style.display = "none";
}

function doorgaan(){
    swordImage.style.display = "none";
	container.style.backgroundImage = spelScript[4].afbeelding;
	title.innerHTML = spelScript[4].title;
	console.log("Doorgaan");
	title.style.color = "black";
	description.innerHTML = spelScript[4].description;
	description.style.color = "white";
	button1.innerHTML = "duel";
	button2.innerHTML = "geen duel";
	button1.onclick = kansloos;
	button2.onclick = ondergang;
}
function kansloos(){
	container.style.backgroundImage = spelScript[5].afbeelding;
	title.innerHTML = spelScript[5].title;
	title.style.color = "white";
	console.log("Duel");
	description.innerHTML = spelScript[5].description;
	button1.innerHTML = "Respawn";
	button1.onclick = opnieuw;
	button2.style.display = "none";
}opnieuw();

function ondergang(){
	container.style.backgroundImage = spelScript[6].afbeelding;
	title.innerHTML = spelScript[6].title;
	title.style.color = "white";
	console.log("Geen duel");
	description.innerHTML = spelScript[6].description;
	button1.innerHTML = "Respawn";
	button1.onclick = opnieuw;
	button2.style.display = "none";
}opnieuw();

function oppakken(){
	container.style.backgroundImage = spelScript[7].afbeelding;
	title.innerHTML = spelScript[7].title;
	console.log("Oppakken");
	description.innerHTML = spelScript[7].description;
    inventory.style.display = "block";
	button1.innerHTML = "duel";
	button2.innerHTML = "geen duel";
	button1.onclick = duel;
	button2.onclick = geenDuel;
}

function duel(){
	container.style.backgroundImage = spelScript[8].afbeelding;
	title.innerHTML = spelScript[8].title;
	title.style.color = "white";
	console.log("Duel");
	description.style.display = "block";
	description.innerHTML = spelScript[8].description;
	button1.style.display = "block"; 
	button1.innerHTML = "doorgaan";
	button1.onclick = einde;
}

function einde(){
	container.style.backgroundImage = spelScript[9].afbeelding;
	title.innerHTML = spelScript[9].title;
	console.log("Einde");
	title.style.color = "white";
	description.innerHTML = spelScript[9].description;
	description.style.marginLeft = "650px";
    inventory.style.display = "none";
	button1.innerHTML = "Play again";
	button1.onclick = function() {
		description.style.marginLeft = "20px";
		opnieuw();
	}
	button2.style.display = "none";
}

function geenDuel(){
	container.style.backgroundImage = spelScript[10].afbeelding;
	title.innerHTML = spelScript[10].title;
	console.log("Geen Duel");
	description.innerHTML = spelScript[10].description;
	button1.innerHTML = "Respawn";
	button2.style.display = "none";
}opnieuw();