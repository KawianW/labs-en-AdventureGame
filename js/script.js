// hier haal ik de id op uit de html en heb ik globale constanten toegevoegd
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
    {button1: 1, title: "For Honor", description:"Het spel speelt zich af in de tijd van de ridders/Vikingen en de Samoerai. Zelf zit je bij de Samoerai Factie. Het doel is om de oorlog tussen de samoerai, Vikingen en de Ridders voor altijd te beëindigen. Als je denkt dat je het aankan mag je beginnen!", afbeelding: afbeeldingMap + "beginscherm.jpg)", buttonText1: "start", buttonText2: "audio"},
    {button1: 2, button2: 11, title: "Samurai Fort", description: "Dit is het fort van jou factie: de Samoerai. Je word gevraagd voor het leger om ten strijden te trekken tegen de Vinkingen. Het doel is om het fort van de Vikingen te veroveren. Ga je ten strijden trekken, of weiger je het verzoek om het leger te joinen?", afbeelding: afbeeldingMap + "samuraiKasteel.jpg)", buttonText1: "join leger", buttonText2: "weiger"},
    {button1: 3, button2: 12, title: "De reis", description: "Je trekt ten strijden tegen de Vikingen. Na drie lange dagen zijn jullie eindelijk in het gebied van de vikingen aangekomen. Jullie bespreken de tactiek, maar de ene helft van de troepen wilt overdag via de poort aanvallen en elke Viking afslachten die ze tegenkomen. Maar de andere helft wil 's nachts het fort binnen dringen als een soort verrassinges aanval. De leider vraagt het aan jou. Het hangt er allemaal af van wat jij kiest. Wat word het? Overdag of 's nachts", afbeelding: afbeeldingMap + "b892326be286e88083f3c025c92edef5.png)", buttonText1: "overdag", buttonText2: "nacht"},
    {button1: 7, button2: 4, title: "Vechten voor de poort", description: "Het was jou keuze dus dat respecteerd iedereen. Jullie stormen op de poort af en breken hem open. Het is een hevige strijd. Je verslaat een Vinking met een hoge rang. Hij dropt zn zwaard, wil je deze oppakken of laten liggen?", afbeelding: afbeeldingMap + "army.jpg)", buttonText1: "oppakken", buttonText2: "doorgaan"},
    {button1: 5, button2: 6, title: "De confrontatie", description: "Je laat het zwaard liggen en vecht je weg door het fort totdat de leider van de Vikingen je naam roept en je uitdaagd voor een duel. Ga je dit dual aan of niet?", afbeelding: afbeeldingMap + "ForHonor8.jpg)", buttonText1: "duel", buttonText2: "geen duel"},
    {button1: 0, title: "Duel", description: "Je vecht tegen de leider van de Vikingen. Het gaat gelijk op totdat iemand anders van de Vikingen zich er mee gaat bemoeien en met zijn bijl je hoofd eraf hakt.", afbeelding: afbeeldingMap + "viking death.jpg)", buttonText1: "respawn", buttonText2: "dud"},
    {button1: 0, title: "Geen duel", description: "Nu heb je de leider helemaal boos gemaakt. Eerst zijn fort binnen vallen en dan zijn duel afslaan. Je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.", afbeelding: afbeeldingMap + "viking-death.jpg)", buttonText1: "respawn", buttonText2: "dud"},
    {button1: 8, button2: 10, title: "Vechten om de poort", description: "Je kan nu twee zwaarden te gelijk gebruiken. Jullie vechten je weg door het fort totdat de leider van de Vikingen je naam roept en een duel met je wil aangaan. Ga je dit duel aan of niet?", afbeelding: afbeeldingMap + "aramusha.jpg)", buttonText1: "duel", buttonText2: "geen duel"},
    {button1: 9, title: "Duel", description: "Je gaat het gevecht aan. Je gebruikt 1 zwaard voor dit gevecht. Het gaat gelijk op tegen de leider van de Vikingen, totdat iemand anders van de vikingen zich ermee gaat bemoeien en je probeert aan te vallen. Je trekt snel je 2e zwaard en blokkeerd deze aanval en steekt hem daarna neer. Je word boos en gaat de leider aanvallen met je 2 zwaarden. De leider is kansloos.", afbeelding: afbeeldingMap + "viking-win.jpg)", buttonText1: "doorgaan", buttonText2: "dud"},
    {button1: 0, title: "Einde", description: "Het is je gelukt om het leger van de vikingen te verzwakken door hun grootste fort over te nemen. De Samurai zijn nu de sterkste factie. Maar het doel om de oorlog voor altijd te beëindigen is niet gelukt. Iedereen vecht voor eer en macht en dat zal altijd zo blijven. Dus de Samoerai zijn nu wel de sterkste factie, maar wie weet of dat over een jaar nog zo is.", afbeelding: afbeeldingMap + "einde.jpg)", buttonText1: "opnieuw", buttonText2: "dud"},
    {button1: 0, title: "Geen Duel", description: "Nu heb je de leider helemaal boos gemaakt. Eerst zijn fort binnen vallen en dan zijn duel afslaan. Je loopt weg en je draait je om. De viking leider loopt achter je aan en hakt je door midden.", afbeelding: afbeeldingMap + "viking-death.jpg)", buttonText1: "respawn", buttonText2: "dud"},
    {button1: 0, title: "Dood", description: "De leger leider vind het niet acceptabel en executeert je ter plekke.", afbeelding: afbeeldingMap + "wejm2va3fruy.jpg)", buttonText1: "respawn", buttonText2: "dud"},
    {button1: 13, button2: 14, title: "Soort van stealth", description: "Jullie zetten een kamp op en wachten tot dat het donker word. Als het eindelijk donker is gaan jullie richting het fort. De scouts hebben een zwakke plek gevonden in de patrouille van de Vikingen. Als ze even niet opletten slaan jullie toe. De Vikingen worden compleet overlopen door ons leger. Je komt bij een splitsing, waar ga je heen links of rechts?", afbeelding: afbeeldingMap + "y9aJxMGkQzaYfx93SYG2sZ-970-80.jpg)", buttonText1: "links", buttonText2: "rechts"},
    {button1: 9, title: "De Leider", description: "Je slaat je weg door het fort. Je komt verschillende vijanden tegen, de een wat sterker dan de andere. Je komt aan bij het kasteel van de leider. Hij zit rustig te eten want hij weet dat het zn laatste maal zal zijn.", afbeelding: afbeeldingMap + "VikingFort.jpg)", buttonText1: "doorgaan", buttonText2: "dud"},
    {button1: 0, title: "Was nou toch maar naar links gegaan", description: "Je loopt door het fort en komt niemand meer tegen. Je gaat met je groepje uitrusten. Na een tijdje besluiten jullie om weer door te gaan. Jullie lopen door een straatje met veel zijwegen. Uit het niets komen er meer dan 20 vikingen uit de zijstraatjes, het was een val. Niemand overleefde de verrassingsaanval.", afbeelding: afbeeldingMap + "shaman-feat-2.jpg)", buttonText1: "respawn", buttonText2: "dud"}
];

start();

// dit is de home pagina van de game
function start(){
    title.style.color = "black";
    console.log();
    inventory.style.display = "none";
    button1.style.display = "block";
    button2.style.display = "block";
    loadScene(0);
}
// deze functie load de volgende scene door de volgorde van de array uit te lezen
function loadScene(index){
    console.log(spelScript[index].button1);
    console.log(spelScript[index].button2);
    container.style.backgroundImage = spelScript[index].afbeelding;
    title.innerHTML = spelScript[index].title;
    description.innerHTML = spelScript[index].description;
    button1.innerHTML = spelScript[index].buttonText1;
    button2.innerHTML = spelScript[index].buttonText2;
    button2.style.display = "block";

    // bedoeling van deze functie is dat het een functie uitvoerd die niet in de array staat
    // dit gebeurt door de index te checken van de array waar deze funtie aangeroepen moet worden
    button1.onclick = function(){
        if(index == 3){
            description.style.display = "block";
            button1.style.display = "block";
            zwaard();
        }else {
            loadScene(spelScript[index].button1);
        }
    }
    button2.onclick = function(){
        loadScene(spelScript[index].button2);
    }

    // deze functie zorgt ervoor dat button 2 bij bepaalde vragen weg gehaald word
    if(spelScript[index].buttonText2 == "dud"){
        button2.style.display = "none";
    }else if(spelScript[index].buttonText2 == button2){
        button2.style.display = "block";
    }

    // bij vraag 5,6,9,10,11,13,14 button 2 weg
    // daarna als je weer bij start komt button 2 weer laten zien
}

// Dit is het inventory item die je kan oppakken in de game
function zwaard(){
    sword = true;
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
        loadScene(7);
		console.log(inventory);
        swordImage.style.display = "none";
        description.style.display = "block";
        button1.style.display = "block";
	    button2.style.display = "block";
		inventory.style.display = "block";
		inventory.src = "images/zwaard.jpg";
	}
	button1.style.display = "none";
	button2.style.display = "none";
}

// ja dit spreekt voor zich voor wat het doet
button2.onclick = music;
var startMusic = new Audio("audio/backgroundMusic.mp3");
function music(){
	console.log("Music Turned on");
	startMusic.loop = true;
	startMusic.play();
}