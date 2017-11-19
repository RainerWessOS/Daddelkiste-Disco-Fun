//*******************************************************************
//      Daddelkiste Disco Fun Version 0.90 
//      Javascript implementation of a penny arcade casino game
//
//      Copyright (C) 2017 Rainer Wess, Osnabr�ck, Germany
//      Open Source / Freeware - released under GPL 2.0
//*******************************************************************

// Lokalisierung f�r Dattelkiste Disco Fun v0.90

// Supported Languages: 
// de, en, fr, it, nl, es , pt , sv
// default: en

 // Zum Testen:
 // var lang = "de-CH";
 // lang = lang.substring(0,2);
    
 var lang = navigator.language.substring(0,2);

var infoText = new Array();
var btnText = new Array();
var playfield = new Array();
var settingsText = new Array();
var c_anl = " ";
var c_think = " ";
var c_github = " ";
var c_hint = " ";

switch (lang) {
	
// **********************************

	case "de": 

// Deutsch
	
infoText = [
"Einstellungen gespeichert",
"Bitte Geld einwerfen",
"Guthaben wird auf Punktespeicher &uuml;bertragen",
"Zum Starten START-Taste dr&uuml;cken",
"Startautomatik AUS",
"Startautomatik AN",
"Autostart AUS",
"Autostart AN",
"Risikoautomatik AUS",
"Risikoautomatik AN",
"Risikostufe rechte Seite gesetzt",
"Risikostufe linke Seite gesetzt",
"Gewinn: " ,
"Teilgewinn: ", 
" Punkte angenommen",
" Sonderspiele angenommen",
"Der Gewinn wurde bereits angenommen",
"Kein Gewinn zum Annehmen vorhanden",
"Der Gewinn ist nicht weiter teilbar",
"Die H&ouml;chststufe ist nicht teilbar",
"Grosse Ausspielung rechte Seite",
"Grosse Ausspielung linke Seite",
"* * GROSSE AUSSPIELUNG * *",
"Sonderspielez&auml;hler bleibt auf 1 bis Gewinn"
];

btnText = [
"START",
"AutoStart",
"STOP",
"RISIKO",
"TEILEN",
"ANNEHMEN",
"Geldeinwurf +10",
"Einstellungen",
"Schliessen"
];

playfield = [
"Daddelkiste",
"Disco fun",
"GELD",
"PUNKTE",
"GEWINN",
"EINSATZ",
"SONDERSPIELE",
"MULTI-SPIELE",
"AUSSPIELUNG"
];

settingsText = [
"Einstellungen",
"Gewinnwahrscheinlichkeit bei Risiko:",
"Spielablaufdauer:  < schnell -- langsam >",
"Risikoautomatik setzt ein nach:",
"Automatische Gewinnannahme nach:",
" Sekunden",
"Anleitung",
"Nachdenkliches",
"&Uuml;ber"
];

c_anl = "Simulation eines Geldspielautomaten mit drei Scheiben, die in der Reihenfolge links, rechts, mitte stoppen. Die linke Scheibe kann einmal nachgestartet, die beiden anderen k&ouml;nnen gestoppt werden.<p>Die Startatomatik wird ein- bzw. ausgeschaltet, indem w&auml;hrend des bereits laufenden Spiels die Start-Taste bet&auml;tigt wird. Mit Startautomatik startet das n&auml;chste Spiel automatisch.<p>Mit der mittleren Taste kann die AutoStart Automatik ein- und aus geschaltet werden, die die linke Scheibe einmal neu startet, wenn keine Sonne erschienen ist.<p>Zeigen die Scheiben 3x den gleichen Betrag oder 2x den gleichen Betrag und die Sonne auf der mittleren Scheibe, wird dieser gewonnen. Gibt es zwei Gewinnkombinationen - nur bei Sonne in der Mitte m&ouml;glich- , wird der h&ouml;here Gewinn gegeben.<p>Wenn auf den drei Scheiben jeweils eine Sonne erscheint, gibt es eine Serienausspielung auf der rechten Seite - von 5 bis 90 Sonderspiele. Erscheinen vier Sonnen, gibt es eine Serienausspielung auf der linken Seite - von 3 bis 100 Sonderspiele.Bei f&uuml;nf Sonnen wird die grosse Ausspielung in der Mitte gegeben - 10 bis 100 Sonderspiele.<p>Alle Gewinne k&ouml;nnen risikiert werden. Gewinne oberhalb des Mindestgewinns der jeweiligen Risikoleiter k&ouml;nnen geteilt werden, auch mehrmals nacheinander, so oft gew&uuml;nscht. Nach dem Teilen wird dann eine Stufe tiefer zum Risiko angeboten und die Differenz wird auf dem jeweilen Punkte- oder Sonderspiele-Z&auml;hler aufgez&auml;hlt.<p>Es kann eine Risiko-Automatik eingeschaltet werden, die jeden Gewinn risikiert. Die H&ouml;he bis zu der automatisch riskiert werden soll ist frei einstellbar, indem bei eingeschalteter Risikoautomatik auf die entsprechenden Felder auf der rechten und linken Risikoleiter getippt bzw. geklickt wird. Die eingestellte H&ouml;he ist an dem kleinen hellgr&uuml;nen Balken im jeweiligen Risikofeld ersichtlich.<p>Im Sonderspiel werden bei Gewinnkombination und bei  gestreiften Feldern auf der mittleren Scheibe 200 Punkte gewonnen. In Sonderspielen kann nur bei Sonne auf der mittleren Scheibe, oder bei bei einem Sonderspielz&auml;hlerstand kleiner als 10 riskiert werden, wobei 40 Punkte gleich angenommen und der Rest zum Risiko angeboten wird.  Es k,&ouml;nnen unbegrenzt viele Sonderspiele gewonnen werden. Wird bei Ablauf von Sonderspielen kein Gewinn erzielt, bleibt der Sonderspielz&auml;hler auf 1, bis  gewonnen wird.<p>Allle Ereignisse werden auch klanglich untermalt. Bei erreichen der H&ouml;chststufe auf der jeweiligen Risikoleiter, also bei 90 oder 100 Sonderspielen, wird eine  Lichtanimation gestartet und der Radetzky-Marsch gespielt.<p>";

c_think = "Eine Auszahlung ist nicht vorgesehen, oder um es mal mit U2 zu sagen:<p>U2 - Every Breaking Wave<p>Every breaking wave on the shore<br>Tells the next one there will be one more<br><b>And every gambler knows that to lose<br>Is what you are really there for.</b><p>Denk mal dr&uuml;ber nach!  Vielleicht, wenn du mal wieder in die Spielo gehst: Du bist da um zu verlieren.  An der Stelle wirst du jetzt widersprechen, nat&uuml;rlich willst du gewinnen. Du holst das raus was die Anderen reingeworfen haben, richtig? Du magst ein echter Gl&uuml;ckspilz sein, aber auf lange Sicht kannst du nur verlieren, den die Mathematik ist  gegen dich.<p>Schmeisst du da einen Euo rein und bekommst rein rechnerisch 60% wieder raus, hast du nur 40 Cent verloren. Schmeist du da im Laufe der Zeit eine Million rein, sind schon 400000 Euro weg.<p>In der Spielo sind sie nicht nett und geben sie dir keinen Kaffee aus, weil sie dich m&ouml;gen, sondern weil es Peanuts sind, im Verh&auml;ltnis zu dem Batzen Geld, den der durchschnittliche Gast da l&auml;st. Wenn du einsam bist geh in Vereine, oder such die ein nettes Hobby. Spiel Billard, Schach oder Tischtennis, da gibts Menschen die echt nett sind, nicht nur weil es ihr Job ist nett zu sein.";

c_github = "Herunterladen kannst du dir die aktuellste Version auf Github.com:";

c_hint = "Daddelkiste wird von mir nicht mehr weiter entwickelt. Wer mag, kann das Projekt weiterf&uuml;hren. Der Quellcode ist leicht verst&auml;ndlich und gut kommentiert.";

break;

// **********************************

case "fr":

// Franz�sisch

infoText = [
"Parametres enregistres",
"S'il vous plait inserer des pieces",
"Les pieces sont converties en points",
"Appuyez sur START pour commencer le jeu",
"Start-automatique de",
"Start-automatique commute",
"Autostart de",
"Autostart commute",
"Risque-automatique de",
"Risque-automatique commute",
"Niveau de risque droit ensemble de site",
"Niveau de risque laisse ensemble de site",
"Victoire: ",
"Victoire partielle: ",
" POINTS - accepte",
" JEUX SPECIAUX - accepte",
"La victoire a deja ete acceptee",
"Pas de victoire a accepter",
"Le b�n�fice n'est pas divisible",
"Le niveau maximum n'est pas divisible",
"GRAND PLAYOUT bon site",
"GRAND PLAYOUT quitte le site",
"* * GRAND PLAYOUT * *",
"Compteur de jeu special reste a 1 jusqu'a gagner"
]

btnText = [
"DeBUT",
"AutoStart",
"ARR�T",
"RISQUE",
"DIVISe",
"PRENDRE",
"inserer 10 pieces",
"Parametres",
"Fermer"
]

playfield = [
"Daddelkiste",
"Disco fun",
"ARGENT",
"POINTS",
"GAGNER",
"PARI",
"JEUX SPECIAUX",
"MULTI JEUX",
"PLAYOUT"
]

settingsText = [
"Parametres:",
"Pourcentage de gain de risque:",
"Vitesse de jeu:  < rapide -- lente >",
"Risque automatique engage apres:",
"Acceptation gagnante automatique apres:",
" Secondes",
"Instructions:",
" ",
"Sur:"
]

c_anl = "Cette simulation d'une machine a sous fonctionne exactement comme celle de l'arcade a penny. Lorsque le demarrage automatique est active, les jeux sont automatiquement lances. Le demarrage automatique redemarre le premier disque quand il n'y a pas de soleil. -automatic va risquer la victoire jusqu'au niveau de risque defini, si active, en cliquant sur le champ dans l'echelle de risque gauche ou droite La hauteur de consigne est indiquee par la petite barre vert clair dans le champ de risque respectif. ";

c_github = "Vous pouvez telecharger la derniere version de Github.com:";

c_hint = "Daddelkiste n'est plus developpe par moi Si vous le souhaitez, vous pouvez continuer le projet Le code source est facile a comprendre et a commenter.";

break;

// **********************************

case "it":

// Italienisch

infoText = [
"Impostazioni salvate",
"Inserisci denaro",
"Il credito viene trasferito allo storage di punti",
"Premere il tasto START per avviare",
"Avvio automatico OFF",
"Avvia automatica ON",
"Autostart OFF",
"Autostart ON",
"Rischio automatico fuori",
"Gestione automatica dei rischi",
"Livello di rischio livello destro",
"Livello di rischio livello sinistro set", "Profit",
"Profitto parziale:",
" Punti accettati",
" Giochi speciali accettati",
"Il profitto e gia stato accettato",
"Nessun profitto da accettare",
"Il profitto non e divisibile",
"Il livello massimo non e divisibile",
"Big payout right side",
"Grande versamento a sinistra",
"* * BIG DISPLAY * *",
"Il contatore di gioco speciale rimane a 1 per vincere"
]; 

btnText = [
"START",
"AutoStart",
"STOP",
"RISCHIO",
"SPLIT",
"ACCETTO",
"Inserisci denaro +10", "Impostazioni",
"Chiudi"
]; 

playfield = [
"Daddelkiste",
"Disco fun",
"MONEY",
"PUNTI",
"WIN",
"USO",
"GIOCHI SPECIALI",
"Multi-Games",
"PLAYOUT"
]; 

settingsText = [
"Impostazioni",
"Probabilita di profitto a rischio:",
"Durata del gioco: < veloce - lento >",
"Controllo automatico dei rischi",
"Accettazione automatica dei profitti dopo:",
" Secondi",
"Istruzioni:",
" ",
"Note sul gioco:"
]; 

c_anl = "Questa simulazione di una macchina da gioco funziona esattamente come in sala giochi. Con attivato automaticamente avviare l'automatich giri. avvio lancia il primo disco nuovo quando c'e il sole. Il rischio automatica rischia il profitto fino al livello stabilito di rischio. questo e quando attivo, impostato cliccando sulla casella sul gestore rischio sinistra o destra dovrebbe essere fino al rischiava automaticamente il livello impostato e visibile al piccolo fascio verde brillante nella rispettiva zona di rischio.";

c_github = "Puoi scaricare l'ultima versione da Github.com:";

c_hint = "Daddelkiste non e piu in fase di sviluppo da me Se ti piace, il progetto puo continuare, il codice sorgente e facile da capire e ben commentato.";

break;

// **********************************

case "nl":

// Niederl�ndisch

infoText = [ 
"Instellingen opgeslagen",
"Voer geld in",
"Geld wordt overgedragen naar puntopslag",
"Druk op de START-knop om te starten",
"Start automatisch UIT",
"Start automatisch AAN",
"AutoStart UIT",
"AutoStart AAN",
"Automatisch risicobeheer UIT", 
"Automatisch risicobeheer AAN", 
"Rechter set risiconiveau",
"Linker set risiconiveau",
"Winst: ",
"Gedeeltelijke winst: ",
" Points aangenomen",
" Speciale Spellen aangenomen",
"De winst is al aangenomen",
"Geen winst om te accepteren",
"De winst is niet deelbaar",
"Het maximale niveau is niet deelbaar",
"Grote spelling rechterkant",
"Grote  spelling linkerkant",
"* * GROTE SPELLING * *",
"Speciale spelteller blijft op 1 om te winnen"
]; 

btnText = [
"START",
"AutoStart",
"STOP",
"RISICO",
"AANDEEL",
"NEMEN",
"Geldstorting +10",
"Instellingen",
"Sluiten"
]; 
playfield = [
"Daddelkiste",
"Disco fun",
"Geld",
"Points",
"Winst",
"Inzet",
"Speciale Spellen",
"Multi Spellen",
"Playout" 
]; 

settingsText = [ 
"Instellingen:",
"Winst waarschijnlijkheid risico:",
"Spelduur:  < snel -- langzaam >",
"Automatische risicobeheersing:",
"Automatische winstacceptatie na:",
" Seconden",
"Instructies:",
" ",
"Over het spel:"
]; 

c_anl = "Deze simulatie van een gaming machine werkt precies zoals in de arcade. Bij geactiveerde automatische start de spins automatich. Startup lanceert de eerste schijf weer als het geen zon is. Het risico Automatic risico's waarmee de winst tot de ingestelde niveau van het risico. dit is wanneer actief is, door te klikken op de doos op de linker- of rechterkant risicomanager moet aan de automatisch riskeerde het ingestelde niveau is te zien op het kleine heldere groene balk in het betreffende gebied van de risico's in te stellen.";

c_github = "Je kunt de nieuwste versie downloaden van Github.com:";

c_hint = "Daddelkiste niet langer wordt ontwikkeld door me Als u wilt, kan het project voort te zetten, de broncode is eenvoudig te begrijpen en goed commentaar.";

break;

// **********************************

case "es":

// Spanisch

infoText = [ 
"Configuraciones guardadas",
"Por favor inserta monedas",
"Las monedas se convierten en puntos",
"Presiona START para comenzar el juego",
"Inicio-apagado automatico",
"Inicio automatico encendido",
"Autostart desactivado",
"Inicio automatico encendido",
"Desconexion automatica de riesgo",
"Risk-automatic ON",
"Paso de riesgo, conjunto de sitios correcto",
"Paso de riesgo dejo sitio establecido",
"Ganar: ",
"Victoria parcial: ",
" Puntos aceptados",
" Juegos Especiales aceptados",
"La victoria ya ha sido aceptada",
"No hay que ganar para aceptar", 
"El beneficio no es divisible",
"El nivel maximo no es divisible",
"BIG PLAYOUT sitio correcto",
"BIG PLAYOUT salio del sitio",
"* * BIG PLAYOUT * *",
"El contador especial del juego se mantiene en 1 hasta ganar"
]; 

btnText = [ 
"COMIENZO",
"AutoStart",
"DETENER",
"RIESGO",
"DIVISION",
"TOMAR",
"insertar 10 monedas",
"Configuraciones",
"Cerca"
]; 

playfield = [ 
"Daddelkiste",
"Disco fun",
"MONEDAS",
"PUNTOS",
"GANAR",
"APUESTA",
"JUEGOS ESPECIALES",
"JUEGOS MULTIPLES",
"PLAYOUT"
]; 

settingsText = [
"Configuraciones:",
"Porcentaje de ganancia de riesgo",
"Velocidad del juego:  < rapido -- lento >",
"Risk-automatic se compromete despues:",
"Aceptacion ganadora automatica despues de:",
" Segundo",
"Instrucciones:",
" ",
"Acerca de:"
]; 

c_anl = "Esta simulacion de una maquina tragamonedas funciona igual que la de la sala de peniques. Cuando se enciende el sistema automatico de inicio, los juegos se inician automaticamente. El inicio automatico reinicia el primer disco cuando no hay sol sobre el. -automatic arriesgara la ganancia hasta el nivel de riesgo establecido. Esto se establece, si esta activo, haciendo clic en el campo de la escalera de riesgo izquierda o derecha. La altura del conjunto se indica mediante la pequena barra verde clara en el campo de riesgo correspondiente."; 

c_github = "Puede descargar la ultima version de Github.com:";

c_hint = "Daddelkiste ya no lo estoy desarrollando. Si lo desea, puede continuar con el proyecto. El codigo fuente es facil de comprender y bien comentado.";

break;

// **********************************

case "pt":

// Portogiesisch

infoText = [
"Configuracoes salvas",
"Por favor, insira dinheiro",
"O credito e transferido para o armazenamento de pontos",
"Pressione o botao START para iniciar",
"Inicio automatico OFF",
"Inicio automatico ON",
"Autostart OFF",
"Autostart ON",
"Automatico de Riscos Off",
"Automatico de Riscos ON",
"Nivel do nivel de risco definido",
"Nivel do nivel do lado esquerdo definido",
"Lucro:",
"Lucro parcial:",
" Pontos aceitos",
" Jogos especiais aceitos",
"O lucro ja foi aceito",
"Sem lucro para aceitar",
"O lucro nao e divisivel",
"O nivel maximo nao e divisivel",
"Grande lado direito do pagamento",
"Grande lado do pagamento do lado esquerdo",
"* * BIG DISPLAY * *",
"Contador de jogo especial fica em 1 para ganhar"
]; 

btnText = [
"START",
"AutoStart",
"STOP",
"RISCO",
"SHARE",
"ACEITAR",
"Deposito de dinheiro +10",
"Configuracoes",
"Fechar"
];

playfield = [
"Daddelkiste",
"Disco fun",
"DINHEIRO",
"PONTOS",
"WIN",
"USO",
"Jogos Especiais",
"Multi Jogos",
"Playout"
];

settingsText = [ 
"Configuracoes",
"Probabilidade de lucro em risco:",
"Duracao do jogo: < rapido - lento >",
"Controle de Risco Automatico:",
"Aceitacao de lucro automatico apos:",
" Segundos",
"Instrucoes:",
" ",
"Notas sobre o jogo:"
];

c_anl = "Esta simulacao de uma slot machine funciona da mesma maneira que na sala de jogos de arcade. Quando a funcao de inicio automatico e ativada, os jogos sao iniciados automaticamente. O AutoStart reinicia o primeiro disco quando nao ha sol. O mecanismo de risco automatico arrisca o lucro ate o nivel de risco definido. Isto e definido, se ativo, clicando no campo na escada de risco esquerda ou direita, que deve ser automaticamente arriscado. A altura ajustada e indicada pela pequena barra verde clara no respectivo campo de risco."; 

c_github = "Voce pode baixar a versao mais recente do Github.com:";

c_hint = "Daddelkiste ja nao esta sendo desenvolvido por mim e quem gosta de poder continuar o projeto, o codigo-fonte e facil de entender e bem comentado.";

break;

// **********************************

case "sv":

// Schwedisch

infoText = [ 
"Installningar sparade",
"Vanligen satt in mynt",
"Mynt konverteras till poang",
"Tryck pa START for att starta spelet",
"Start-automatic OFF",
"Start-automatic ON",
"Autostart OFF",
"Autostart ON",
"Risk-automatic OFF",
"Risk-automatisk PA",
"Risksteg hoger sida set",
"Risksteg vanster sida set",
"Vinn ",
"Delvis vinst ",
" Punkter accepterade",
" Special Spel accepterat",
"Vinnaren har redan accepterats",
"Ingen vinna dar for att acceptera",
"Vinsten ar inte delbar",
"Maximal niva ar inte delbar",
"BIG PLAYOUT right site",
"BIG PLAYOUT left site",
"* * BIG PLAYOUT * *",
 "Special Game Counter stannar vid 1 for att vinna"
]; 

btnText = [ 
"START",
"AutoStart",
"SLUTA",
"RISK",
"DELA",
"TA",
"satt in 10 mynt",
"Installningar",
"Stanga" 
]; 

playfield = [ 
"Daddelkiste",
"Disco fun",
"MYNT",
"POANG",
"VINNA",
"SLA VAD",
"SPECIAL SPEL",
"MULTI SPEL",
"SPELA UT"
]; 

settingsText = [
"Installningar:",
"Riskvinstprocent:",
"Spelhastighet:  < snabb -- langsam > ",
"Risk-automatisk engagerar sig efter:",
"Automatisk vinnande acceptans efter:",
" Sekunder",
"Instruktioner:",
" ",
"Handla om:"
];

c_anl = "Denna simulering av en spelautomat fungerar precis som den i penny arkaden. Nar startautomatiken ar paslagen startas spelen automatiskt. Autostart startar om den farsta skivan nar det inte finns nagon sol pa den. Risk-automatisk riskerar vinsten upp till den faststallda risknivan. Den har installningen ar aktiv, genom att klicka pa faltet till vanster eller hoger riskstege. Den installda hojden anges med den lilla ljusgrona faltet i respektive riskfalt. "; 

c_github = "Du kan ladda ner den senaste versionen fran Github.com:";

c_hint = "Daddelkiste utvecklas inte langre av mig. Om du vill kan du fortsatta projektet. Kallkodenar latt att forsta och val kommenterad.";

break;

// **********************************

default: 

// Englisch

infoText = [
"Settings saved",
"Please insert coins",
"Coins are converted to points",
"Press START to start the Game",
"Start-automatic OFF",
"Start-automatic ON",
"Autostart OFF",
"Autostart ON",
"Risk-automatic OFF",
"Risk-automatic ON",
"Risk step on the right site set",
"Risk step on the left site set",
"Win: ",
"Partial win: ", 
" POINTS - accepted",
" SPECIAL GAMES - accepted",
"The win has already been accepted",
"No win there to accept",
"The win is not divisible",
"The maximum level is not divisible",
"BIG PLAYOUT right site",
"BIG PLAYOUT left site",
"* * BIG PLAYOUT * *",
"Special game counter stays at 1 till win"
];

btnText = [
"START",
"AutoStart",
"STOP",
"RISK",
"SPLIT",
"TAKE",
"insert 10 Coins",
"Settings",
"Close"
];

playfield = [
"Daddelkiste",
"Disco fun",
"COINS",
"POINTS",
"WIN",
"BET",
"SPECIAL GAMES",
"MULTI GAMES",
"PLAYOUT"
];

settingsText = [
"Settings:",
"Risk winning percentage:",
"Game duration:  < fast -- slow >",
"Risk-automatic engages after:",
"Automatic winning acceptance after:",
" Seconds",
"Instructions:",
" ",
"About:"
];

c_anl = "This simulation of a slot machine works just like the one in the penny arcade. When the start-automatic is switched on, the games are automatically started. Autostart restarts the first disc when there is no sun on it. The risk-automatic will risk the win up to the set risk level. This is set, if active, by clicking on the field on the left or right risk ladder. The set height is indicated by the small light green bar in the respective risk field.";

c_github = "You can download the latest version from Github.com:";

c_hint = "Daddelkiste is no longer being developed by me. If you like, you can continue the project. The source code is easy to understand and well commented.";


}

// END