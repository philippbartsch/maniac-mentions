var imgPath = 'img/';
var scenePath = 'img/scenes/';
var sndPath = 'snd/';

var questSrc = [
    { // ----------------------------------------------------------------------------------------------------  
        // quest and necessary conditions to advance to next quest
        index: 0,
        name: 'Accomplish the coding session',
        igName: ['Coding session accomplished.', 'Programmier–Session beenden.'],
        log: [
                ['Accomplish the coding session !', 'Beende Programmier-Session !'],
                ['At least 30+ Line of code .', 'Mindestens 30+ Zeilen Code .'],
                ['Therefor use the desk ! .', 'Benutze dafür den Schreibtisch !']
              ],
        inPockets: [],
        used: [],
        dialog: [],
        speech: ['Done. It was important that I finished - I\'m so oblivious.', 'Fertig. Es war wichtig, dass ich das beendet habe - ich bin doch so vergesslich.'] 
    },
    { // ----------------------------------------------------------------------------------------------------  
        index: 1,
        name: 'Leave the apartment',
        igName: ['Ready to go.','Ausgehfertig.'],
        log: [
                ['Leave the apartment !', 'Verlasse das Apartment !'],
                ['Put in a few things !', 'Steck ein paar Dinge ein !'],
                ['Look for the Keys . . .', 'Finde die Schlüssel . . .'],
                ['Take the mobile . . .', 'Nimm das Handy mit . . .'],
                // ['Some change . . .', 'Etwas Kleingeld . . .'],
                // ['Don\'t forget the lighter  .', 'Vergiss das Feuerzeug nicht . . .'],
                ['And put some clothes on .', 'Und zieh etwas an .']
              ],
        inPockets: ['Mobile', 'Keys'], //'Change', 'Mobile'],
        used: [],
        dialog: [],
        speech: ['I think I got it all. I can leave the apartment now.', 'Ich glaube, ich hab alles. Ich kann das Apartment jetzt verlassen.'] 
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 2,
        name: 'Leave Scene 1',
        igName: ['Stretch your feet.', 'Die Füße vertreten.'],
        log: [
                ['Stretch your feet !', 'Die Füße vertreten !'],
                ['Leave the apartment !', 'Verlasse das Apartment !'],
                ['Go outside !', 'Geh nach draußen !']
             ],
        inPockets: [],
        used: [],
        dialog: [],
        speech: ['I wonder what Luca got for me.', 'Was Luca wohl für mich hat?']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 3,
        name: 'get the message from Luca',
        igName: ['Got the message.', 'Nachricht von Luca erhalten.'],
        log: [
                ['Get the message !', 'Hole die Nachricht ab !'],
                ['Talk to Luca at the pizzeria !', 'Sprich mit Luca in der Pizzeria !']
             ],
        inPockets: ['Small Note M2'],
        used: [],
        dialog: [
                    //['John Doe', 2] // name & npcChat.index[0]
                ],
        speech: ['Got the message in my Pocket.', 'Hab die Nachricht.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 4,
        name: 'talk to pizzeria people',
        igName: ['Talk to people at the pizzeria.', 'Mit Leuten bei der Pizzeria sprechen.'],
        log: [
                ['Talk to the people !', 'Sprich mit den Leuten !'],
                ['Eliot & Steven at the pizzeria.', 'Eliot & Steven bei der Pizzeria.']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    ['Eliot', 1],
                    ['Guitar Guy', 1] // name & npcChat.index[0]
                ],
        speech: ['Interesting.', 'Interessant.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 5,
        name: 'throw money at Steven',
        igName: ['Eager to spend.', 'Spendierfreude.'],
        log: [
                ['Convince Steven !', 'Überzeuge Steven !'],
                ['Give Steven a few coins !', 'Gib Steven ein paar Münzen !'],
                ['There\'s some change at home.!', 'Zuhause ist Kleingeld.']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    //['John Doe', 2] // name & npcChat.index[0]
                ],
        speech: ['You are welcome.', 'Gern geschehen.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 6,
        name: 'find Zoë',
        igName: ['Find Zoë.', 'Finde Zoë.'],
        log: [
                ['Find Zoë !', 'Finde Zoë !'],
                ['Look around the alley !', 'Schau dich in der Gasse um !'],
                ['The camera is extraordinary .', 'Die Kamera ist außergewöhnlich.']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    ['Zoë', 0] // name & npcChat.index[0]
                ],
        speech: ['Freaky, I didn\'t expect that in my hood.', 'Kurios, das hätte ich in meiner direkten Nachbarschaft nicht erwartet.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 7,
        name: 'find notes',
        igName: ['Eight notes found.', 'Acht Notizzettel gefunden.'],
        log: [
                ['Find all small notes !', 'Finde alle Notizzettel !'],
                ['There are eight of them.', 'Es sind acht.']
             ],
        inPockets:  ['Small Note A1', 'Small Note M2', 'Small Note L3', 'Small Note E4', 'Small Note U5', 'Small Note R6', 'Small Note O7', 'Small Note T9'],
        used: [],
        dialog: [
                    //['John Doe', 2] // name & npcChat.index[0]
                ],
        speech: ['I think I got all notes.', 'Ich glaub, ich hab alle Notitzen.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 8,
        name: 'access code',
        igName: ['Access Code.', 'Zugangscode.'],
        log: [
                ['Figure out the access code !', 'Finde den Zugangscode heraus !'],
                ['Create a meaningful anagram . . .', 'Bilde ein sinnvolles Anagramm . . .'],
                ['Or write at least 40+ lines of code !', 'Oder schreibe 40+ Zeilen Code !'],
                ['Use your desk for that !', 'Benutze deinen Schreibtisch !']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    //['John Doe', 2] // name & npcChat.index[0]
                ],
        speech: ['That wasn\'t so hard : § Emulator =  4 2 5 3 1 9 7 6.', 'Das war doch gar nicht so schwer : § Emulator =  4 2 5 3 1 9 7 6.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 9,
        name: 'What\'s going on?',
        igName: ['What\'s going on in the basement?', 'Was geht im Keller vor?'],
        log: [
                ['\"Emulator\" =  4 2 5 3 1 9 7 6', '\"Emulator\" =  4 2 5 3 1 9 7 6'],
                ['Unravel the basement\'s secret !', 'Lüfte das Geheimnis des Kellers !'],
                ['Talk to Zoë & Eliot !', 'Sprich mit Zoë & Eliot !']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    ['Zoë', 4],
                    ['Eliot', 3],
                ],
        speech: ['Wow.', 'Wow.']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 10,
        name: 'a mystery unveiled',
        igName: ['Mystery unveiled.', 'Geheimnis gelüftet.'],
        log: [
                ['Something\'s not right.', 'Irgendetwas stimmt nicht.'],
                ['Get more information !', 'Erlange mehr Informationen !'],
                ['Talk to Zoë & Eliot !', 'Sprich mit Zoë & Eliot !'],
                ['Pick the dandelion !', 'Pflücke den Löwenzahn !']
             ],
        inPockets: [],
        used: [],
        dialog: [
                    ['Zoë', 5],
                    ['Eliot', 4],
                ],
        speech: ['Wow.', 'Wow']
    },
    { // ----------------------------------------------------------------------------------------------------
        index: 11,
        name: 'the whole enchilada',
        igName: ['The world is a simulation.', 'Die Welt ist eine Simulation.'],
        log: [
                ['The world is a simulation.', 'Die Welt ist eine Simulation.'],
                ['What to do?', 'Was tun?'],
                ['No further tasks.', 'Keine weiteren Aufgaben.']
             ],
        inPockets: [],
        used: [],
        dialog: [],
        speech: ['I\'m not real. Or am I?', 'Ich bin nicht real. Oder bin ich?']
    }
];

var sceneSrc = [
    {
        index: 0,
        name: ['Apartment', 'Apartment'],
        bgImgSrc: scenePath + 'sc00_apartment.png',
        fgImgSrc: scenePath + 'sc00_apartment_fg.png',
        gridParam: [[210, 370], [760, 100], 20, false, '#888'],
        PFmap:  [
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
        exitZones:  [   // [coordinates top-left of click area], [size of click area], [exit point of char], scene.index of next scene, cursor, active
                        [[null, null], [null, null]],                       // top
                        [[980, 220], [44, 235], [960, 420], 1, 'right', false],      // right
                        [[null, null], [null, null]],                       // bottom
                        [[null, null], [null, null]]                        // left
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[960, 420], [900, 440]],
                        [[960, 420], [700, 440]],
                        [[240, 420], [320, 420]]
                     ],
        itemsInScene: [ // name, state (reg or used), coordinates, inPlay, usability, portability, disposable, special
                        
                        // ['Vanilla Cake', 'reg', [700, 240], true, true, true],
                        // ['Chocolate Cake', 'reg', [800, 260], true, false, false],
                        // ['TestItem', 'reg', [920, 240], true, true, true],
                        ['Desk', 'reg', [602, 370], true, true, false, false, true], //special
                        ['Mobile', 'reg', [658, 321], true, true, true, false, true], //special
                        ['Hitchhiker', 'reg', [157, 280], true, false, true],
                        ['Lighter', 'reg', [332, 356], true, false, true],
                        // ['Couch', 'reg', [800, 380], false, false],
                        ['Keys', 'reg', [889, 404], true, false, true],
                        ['Change', 'reg', [183, 340], true, false, true, 7],
                        ['Bootle of Water', 'reg', [691, 378], true, false, false],
                        ['Reading', 'reg', [794, 356], true, false, false],
                        ['Che Guevara', 'reg', [811, 280], true, false, false],
                        ['2001', 'reg', [923, 316], true, false, false],
                        ['Router', 'reg', [314, 392], true, false, false],
                        ['Guitar', 'reg', [500, 356], true, false, false],
                        ['Pizza Box', 'reg', [418, 344], true, false, false],
                        ['Files', 'reg', [464, 370], true, false, false],
                        ['Note', 'reg', [477, 282], true, false, false],
                        ['Snowden', 'reg', [530, 236], true, false, false],
                        ['Map', 'reg', [719, 286], true, false, false],
                        ['Laptop', 'reg', [188, 412], true, false, false],
                        ['Tardis', 'reg', [82, 376], true, false, false],
                        ['Running Shoes', 'reg', [940, 486], true, false, true, 1],
                        ['Parka', 'reg', [956, 406], true, true, true, false, true] //special
                      ], 
        npcInScene: [   // name, state, coordinates, previously spoken, active
                        // ['John Doe', 'idling', [200, 522], false, true],
                        // ['Jane Doe', 'idling', [620, 522], false, true],
                    ],
        special: true       
    },
    {
        index: 1,
        name: ['Hallway', 'Treppenhaus'],
        bgImgSrc: scenePath + 'sc01_hallway.png',
        fgImgSrc: scenePath + 'dummyPixel.png',
        gridParam: [[25, 388], [980, 80], 20, false, '#888'],
        PFmap:  [ // 48 x 4
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ], 
        exitZones:  [
                        [[710, 280], [190, 100], [760, 390], 2, 'down', true],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[1, 220], [40, 240], [60, 440], 0, 'left', true]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[760, 390], [690, 430]],
                        [[30, 440], [100, 440]]
                     ],
        itemsInScene: [
                        // ['Strawberry Cake', 'reg', [700, 260], true, false, true],
                        // ['Couch', 'reg', [220, 370], false, false, false]
                        ['Doorbell A1', 'reg', [54, 335], true, false, false],
                        ['Doorbell A2', 'reg', [970, 336], true, false, false],
                        ['Fuse Box', 'reg', [133, 344], true, true, false, false, true],     // usable
                        ['Bulletin Board', 'reg', [250, 314], true, false, false],
                        ['Fire Extinguisher', 'reg', [333, 366], true, false, false],
                        ['Elevator', 'reg', [461, 386], true, false, false],
                        ['Pen', 'reg', [589, 400], true, false, true, 1], // portable, disposable
                        ['Pink Slipper', 'reg', [952, 418], true, false, false],
                        ['Small Note R6', 'reg', [941, 424], true, false, true, false, true], //portable, special
                        ['Slip Hazard', 'reg', [644, 412], true, false, false],
                        ['Fire Alarm', 'reg', [638, 292], true, false, false],
                        ['Light Switch', 'reg', [693, 296], true, true, false, false, true], //special
                        ['Flicker Light', 'reg', [422, 464], false, false, false],
                        ['Loose Wire', 'reg', [1200, 298], true, false, true, 1] // portable, outside canvas
                        // ['Apartment Door Open', 'reg', [1005, 458], false, false, false]
                      ],
        npcInScene: [
                        ['Knittel', 'idling', [1010, 448], false, false]
                    ],
        special: true
    },
    {
        index: 2,
        name: ['Street: No. 42', 'Straße: Nr. 42'],
        bgImgSrc: scenePath + 'sc02_street.png',
        fgImgSrc: scenePath + 'sc02_street_fg.png', 
        gridParam: [[20, 388], [980, 120], 20, false, '#fff'],
        PFmap:  [ // puddle
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,],
                    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,],
                ],
        exitZones:  [   
                        [[410, 180], [160, 210], [500, 390], 1, 'up', true],   
                        [[970, 300], [54, 150], [980, 440], 3, 'right', true],
                        [[null, null], [null, null]],
                        [[1, 300], [53, 170], [60, 440], 6, 'left', true]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[995, 440], [900, 440]],
                        [[470, 390], [510, 410]],
                        [[30, 440], [100, 440]]
                     ],
        itemsInScene: [
                        ['Small Note L3', 'reg', [921, 288], true, false, true], // portable
                        ['Small Note E4', 'reg', [57, 484], true, false, true], // portable
                        ['Paper Mug', 'reg', [141, 482], true, false, true, 2], // portable
                        ['Teddy', 'reg', [82, 408], true, false, true, 1], // portable
                        ['Maiko Graffiti', 'reg', [278, 322], true, false, false],
                        ['Trash Can Down', 'reg', [200, 412], true, true, false, false, true], // usable
                        ['Numberplate 42', 'reg', [634, 202], true, false, false],
                        ['Window Cat', 'reg', [771, 212], false, false, false],
                        ['Newspaper Harke', 'reg', [776, 386], true, false, false],
                        ['Newspaper Bild', 'reg', [820, 380], true, false, false],
                        ['Ron Gilbert Str', 'reg', [910, 184], true, false, false],
                        ['Pylon', 'reg', [964, 510], true, false, false],
                        ['Apple Core', 'reg', [904, 480], true, false, true, 3], // portable, disposable as organic waste
                        ['Beer Bottles', 'reg', [908, 378], true, false, true, 5]
                        // ['Mobile Overlay', 'reg', [512, 512], false, false, false]
                      ],
        special: true
    },
    {
        index: 3,
        name: ['Street: Pizzeria', 'Straße: Pizzeria'],
        bgImgSrc: scenePath + 'sc03_pizzeria.png',
        fgImgSrc: scenePath + 'sc03_pizzeria_fg.png',
        gridParam: [[20, 388], [980, 120], 20, false, '#fff'],
        PFmap:  [ 
                    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,],
                ],
        exitZones:  [   
                        [[410, 200], [110, 200], [450, 390], 4, 'up', true],   
                        [[970, 300], [54, 160], [980, 440], 5, 'right', true],
                        [[null, null], [null, null]],
                        [[1, 300], [53, 170], [60, 440], 2, 'left', true]
                    ],
        entryRoutes: [
                        [[450, 390], [450, 440]],
                        [[995, 440], [900, 440]],
                        [[null, null], [null, null]],
                        [[30, 440], [100, 440]]
                     ],
        itemsInScene: [
                        ['ATM', 'reg', [101, 394], true, false, false],
                        ['VotF_PSO J318.5-22', 'reg', [272, 276], true, false, false],
                        ['Postings sc03', 'reg', [374, 320], true, false, false],
                        ['Luca Pizzeria Sign', 'reg', [594, 88], true, false, false],
                        ['Guitar Case', 'reg', [572, 404], true, false, false],
                        ['Change Mug', 'reg', [582, 412], true, false, false],
                        ['Pizza Box sc03', 'reg', [743, 310], true, false, false],
                        ['Small Note U5', 'reg', [772, 314], true, false, true], //portable
                        ['Hydrant', 'reg', [841, 406], true, false, false],
                        ['AC Fan', 'reg', [923, 108], false, false, false],
                        ['Side Entrance sc03', 'reg', [918, 386], true, false, false],
                        ['Doggo', 'reg', [176, 416], true, false, false] // have to be last
                      ],
        npcInScene: [
                        ['Guitar Guy', 'idling', [702, 400], false, true]
                    ],
        dropZones:  [   // coordinaten, size, type, active
                        [[570, 386], [24, 30], 7, true]     // change
                    ],
        special: true
    },
    {
        index: 4,
        name: ['Luca Pizzeria', 'Luca Pizzeria'],
        bgImgSrc: scenePath + 'sc04_pizzeria_inside.png',
        gridParam: [[20, 392], [980, 80], 20, false, '#fff'],
        PFmap:  [ 
                    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
                ],
        exitZones:  [   
                        [[null, null], [null, null]], 
                        [[null, null], [null, null]],
                        [[970, 220], [54, 240], [980, 440], 3, 'right', true], // exit zone 'down' as workaround (actual exit zone 'right')
                        [[null, null], [null, null]]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[995, 450], [760, 440]],
                        [[null, null], [null, null]]
                     ],
        itemsInScene: [
                        ['Fridge', 'reg', [46, 418], true, false, false],
                        ['Pizza Menu', 'reg', [174, 256], true, false, false],
                        ['Pizza Menu', 'reg', [370, 254], true, false, false],
                        ['Pizza Deals', 'reg', [476, 180], true, false, false],
                        ['Stack Pizzaboxes', 'reg', [626, 284], true, false, false],
                        ['Lisa Card', 'reg', [412, 308], true, false, false],
                        ['Pizza Peel', 'reg', [464, 370], true, false, false],
                        ['Awards', 'reg', [795, 318], true, false, false],
                        ['Photos', 'reg', [713, 312], true, false, false],
                        ['TV Pizzeria', 'reg', [857, 178], true, false, false],
                        ['Napkin', 'reg', [854, 306], true, false, true, 1],
                        ['Guitar Guy Outside', 'reg', [931, 330], true, false, false],
                        ['Small Note M2', 'reg', [1100, 300], true, false, true] // outside canvas, have to be last
                      ],
        npcInScene: [
                        ['Luca', 'idling', [518, 304], false, true],
                        ['Eliot', 'idling', [138, 410], false, true] // have to be last
                    ],
        special: true
    },
    {
        index: 5,
        name: ['Dumping Place', 'Müllsammelstelle'],
        bgImgSrc: scenePath + 'sc05_dumping_place.png',
        fgImgSrc: scenePath + 'sc05_dumping_place_fg.png',
        gridParam: [[20, 395], [980, 120], 20, false, '#fff'],
        PFmap:  [ 
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                ],
        exitZones:  [   
                        [[null, null], [null, null]], 
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[1, 380], [53, 90], [60, 440], 3, 'left', true]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[30, 440], [100, 440]]
                     ],
        itemsInScene: [
                        ['Bottle Bank Brown', 'reg', [696, 396], true, false, false], // have to be itemsInScene[0] thereby carl is hoverable 
                        ['Bottle Bank Green', 'reg', [506, 396], true, false, false],
                        ['Bottle Bank White', 'reg', [868, 396], true, false, false],
                        ['Organic Waste Bin', 'reg', [44, 404], true, false, false],
                        ['Recyling Bin', 'reg', [144, 412], true, false, false],
                        ['Residual Waste Bin', 'reg', [318, 416], true, false, false],
                        ['Wine Bottle Crate', 'reg', [395, 396], true, false, true, 4], // portable, disposable
                        ['Empty Wine Bottles', 'reg', [570, 404], true, false, true, 4], // portable, disposable
                        // ['Blue Garbage Bag', 'reg', [369, 414], true, false, true, 1], // portable, disposable
                        ['Small Note O7', 'reg', [744, 408], true, false, true], // portable
                        ['Swarm', 'reg', [674, 140], false, false, false]
                      ],
        npcInScene: [
                        ['Carl', 'idling', [670, 420], false, true]
                    ],
        dropZones:  [   // coordinaten, size, type, active
                        [[17, 289], [54, 20], 3, true],     // organic
                        [[84, 296], [54, 20], 2, true],     // recycable
                        [[153, 302], [54, 20], 2, true],    // recycable
                        [[292, 302], [54, 20], 1, true],    // residual waste
                        [[441, 243], [128, 24], 4, true],   // green glass
                        [[633, 243], [128, 24], 5, true],   // brown glass
                        [[816, 262], [40, 28], 6, true]     // white glass
                    ],
        special: true
    },
    {
        index: 6,
        name: ['Back Alley', 'Seitengasse'],
        bgImgSrc: scenePath + 'sc06_back_alley.png',
        fgImgSrc: scenePath + 'sc06_back_alley_fg.png',
        gridParam: [[20, 388], [980, 120], 20, false, '#fff'],
        PFmap:  [ 
                    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,],
                    [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                ],
        PFmapAlt:  [ 
                    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,],
                    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
                ],
        exitZones:  [   
                        [[350, 150], [110, 230], [470, 390], 7, 'up', true],
                        [[970, 300], [54, 190], [980, 440], 2, 'right', true], 
                        [[150, 270], [100, 120], [220, 390], 8, 'down', false], // 'false': door to cellar is locked
                        [[null, null], [null, null]]
                    ],
        entryRoutes: [
                        [[470, 390], [470, 430]],
                        [[995, 440], [900, 440]],
                        [[180, 390], [250, 430]],
                        [[null, null], [null, null]]
                     ],
        itemsInScene: [
                        ['Camera', 'reg', [142, 162], true, true, false, false, true], // special case
                        ['Garbage Can', 'reg', [87, 438], true, false, false],
                        ['Mouse', 'reg', [84, 330], false, false, false],
                        ['Plastic Bottle', 'reg',  [16, 472], true, false, true, 2], // portable, disposable
                        ['Plastic Bag', 'reg',  [220, 511], true, false, true, 2], // portable, disposable
                        ['Battery', 'reg',  [670, 398], true, false, true, 8], // portable, disposable
                        ['Rubber Duck', 'reg',  [390, 410], true, false, true, 1], // portable, disposable
                        ['Tin Can', 'reg',  [836, 398], true, false, true, 2], // portable, disposable
                        ['Maneki-neko', 'reg', [707, 350], true, false, false],
                        ['Dandelion', 'reg', [756, 390], true, false, true, false, true], // special
                        ['Tim Schafer Str', 'reg', [870, 215], true, false, false],
                        ['Small Note T9', 'reg', [912, 354], true, false, true], // portable
                        ['Sleeping Doggo', 'reg', [1200, 426], true, false, false] // have to bee last
                      ],
        npcInScene: [
                        ['Zoë', 'idling', [1200, 270], false, true] // out of canvas view 
                    ],
        special: true
    },
    {
        index: 7,
        name: ['Rooftop', 'Dach'],
        bgImgSrc: scenePath + 'sc07_rooftop.png',
        fgImgSrc: scenePath + 'sc07_rooftop_fg.png',
        gridParam: [[60, 338], [880, 120], 20, false, '#fff'],
        PFmap:  [ 
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ],
        exitZones:  [   
                        [[283, 210], [4, 4], [270, 340], 10, 'up', true],
                        [[null, null], [null, null]],
                        [[190, 426], [80, 80], [260, 450], 6, 'down', true],
                        [[null, null], [null, null]]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[250, 450], [360, 420]],
                        [[270, 340], [360, 420]]
                     ],
        itemsInScene: [
                        ['Brush', 'reg',  [298, 350], true, false, true, 1], // portable, disposable
                        ['Skylight', 'reg', [370, 372], true, false, false],
                        ['Champagne Bottle', 'reg', [650, 350], true, false, true, 6], //portable, disposable
                        ['Candle', 'reg', [684, 324], true, false, true, 1], //portable, disposable
                        ['Crow', 'reg', [991, 116], true, false, false],
                        ['Small Note A1', 'reg', [896, 294], true, false, true], //portable
                        ['Canabis', 'reg', [909, 414], true, false, false],
                        ['Satellite Dish', 'reg', [338, 504],  true, false, false],
                        ['Cathedral', 'reg', [791, 240],  true, false, false]
                      ],
        special: true  
    },
    {
        index: 8,
        name: ['Cellar', 'Keller'],
        bgImgSrc: scenePath + 'sc08_cellar.png',
        fgImgSrc: scenePath + 'sc08_cellar_fg.png',
        gridParam: [[24, 366], [920, 100], 20, false, '#fff'],
        PFmap:  [ 
                    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
        exitZones:  [   
                        [[1, 190], [55, 240], [50, 390], 6, 'left', true], // up insteat of left
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]]

                    ],
        entryRoutes: [
                        [[50, 370], [130, 400]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]]
                     ],
        itemsInScene: [
                        ['Server', 'reg', [293, 370], true, false, false],
                        ['Shelf', 'reg', [978, 444], true, false, false],
                        ['Fire Extinguisher s08', 'reg', [89, 366], true, false, false],
                        ['Mate crates', 'reg', [129, 378], true, false, false],
                        ['Router Pro', 'reg', [339, 162], true, false, false],
                        ['VotF_titan', 'reg', [504, 276], true, false, false],
                        ['VotF_ceres', 'reg', [624, 246], true, false, false],
                        ['VotF_earth', 'reg', [744, 246], true, false, false],
                        ['Laptop Pro', 'reg', [493, 314], true, false, false],
                        ['Client PC', 'reg', [630, 314], true, false, false],
                        ['Display Pro 2', 'reg', [578, 302], false, false, false],
                        ['Display Pro 1', 'reg', [678, 293], false, false, false],
                        ['Hacker Drinks', 'reg', [659, 319], true, false, false],
                        ['Display Pro 3', 'reg', [764, 296], false, false, false],
                        ['Mate', 'reg', [631, 386], true, false, true],
                        ['Pizza Box sc08', 'reg', [788, 324], true, false, false],
                        ['Arcade', 'reg', [868, 400], true, false, false]
                        
                      ],
        npcInScene: [
                        ['Zoë', 'idling', [408, 400], false, true],
                        ['Eliot', 'idling', [960, 450], false, true]
                    ],
        special: true  
    },
    {
        index: 9,
        name: 'Menu',
        bgImgSrc: scenePath + 'sc09_menu.png',
        gridParam: [[304, 312], [700, 200], 20, false, '#777'],
        PFmap:  [ // game menu
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
                ],
        exitZones:  [   
                        [[620, 140], [120, 180], [680, 320], 0, 'up', true],   
                        [[550, 284], [36, 36], [550, 320], 0, 'up', true],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]]
                    ],
        entryRoutes: [
                        [[680, 320], [480, 380]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]]
                     ],
        itemsInScene: [
                        // ['Vanilla Cake', 'reg', [700, 240], true, true, true],
                        ['Resume', 'reg', [570, 284], true, false, false],
                        ['Main Menu', 'reg', [892, 210], true, false, false],
                        ['Couch', 'reg', [896, 356], true, false, false],
                        ['Red Herring', 'reg', [930, 314], true, false, true, 3]
                      ],
        special: true 
    },
    {
        index: 10,
        name: ['Loft', 'Loft'],
        bgImgSrc: scenePath + 'sc10_loft.png',
        gridParam: [[140, 380], [860, 140], 20, false, '#fff'],
        PFmap:  [ // loft
                    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                    [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
        exitZones:  [   
                        [[null, null], [null, null]],
                        [[980, 220], [44, 280], [990, 490], 7, 'right', true],
                        [[null, null], [null, null]],
                        [[null, null], [null, null]]
                    ],
        entryRoutes: [
                        [[null, null], [null, null]],
                        [[null, null], [null, null]],
                        [[990, 490], [790, 470]],
                        [[null, null], [null, null]]
                     ],
        itemsInScene: [
                        // ['Vanilla Cake', 'reg', [700, 240], true, true, true],
                        // ['Main Menu', 'reg', [892, 210], true, false, false],
                        // ['Couch', 'reg', [896, 360], true, false, false],
                        // ['Red Herring', 'reg', [930, 314], true, false, true],
                        // ['TestItem', 'reg', [920, 240], true, true, true],
                      ],
        special: false
    }   
];

var charSrc = [
    {   // 0
        name: 'Bennet',
        state: 'idling',
        src: imgPath + 'bennet_idling_front.png', 
        seq: [0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              1, 2, 3, 4, 4, 3, 3, 4, 4, 3, 3, 4, 4, 2, 1, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5],
        size: [80,192],
        row: 0,
        fpS: 2, // frames per sprite
        hold: 8
    },
    {   // 1
        name: 'Bennet',
        state: 'walking',
        src: imgPath + 'bennet_walking_all.png', 
        seq: [0,1,2,3,4,5,6,7,8,9,10,11],
        size: [80,192],
        row: 0,
        fpS: 2
    },
    {   // 2
        name: 'Bennet',
        state: 'talking',
        src: imgPath + 'bennet_talking_front_parka.png', 
        seq: [0, 2],
        size: [80,192],
        row: 0,
        fpS: 8
    },
    {   // 3
        name: 'Knittel',
        igName: ['Mrs. Knittel', 'Frau Knittel'],
        state: 'idling',
        src: imgPath + 'knittel_idling.png', 
        seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        size: [52, 194],
        row: 0,
        fpS: 8
    },
    {   // 4
        name: 'Knittel',
        igName: 'Bennet',
        state: 'talking',
        src: imgPath + 'knittel_talking.png', 
        seq: [0, 1],
        size: [52, 194],
        row: 0,
        fpS: 8
    },
    {   // 5
        name: 'Luca',
        state: 'idling',
        src: imgPath + 'luca_idling.png', 
        seq: [1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1],
        size: [60, 112],
        row: 0,
        fpS: 4
        // hold: 5
    },
    {   // 6
        name: 'Luca',
        state: 'talking',
        src: imgPath + 'luca_talking.png', 
        seq: [0, 1],
        size: [60, 112],
        row: 0,
        fpS: 8
        // hold: 5
    },
    {   // 7
        name: 'Eliot',
        state: 'idling',
        src: imgPath + 'mrRobot_idling.png', 
        seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        size: [54, 190],
        row: 0,
        fpS: 8
        // hold: 5
    },
    {   // 8
        name: 'Eliot',
        state: 'talking',
        src: imgPath + 'mrRobot_talking.png', 
        seq: [0, 1],
        size: [54, 190],
        row: 0,
        fpS: 8
        // hold: 5
    },
    // {
    //     name: 'Eliot inverted',
    //     state: 'idling',
    //     src: imgPath + 'mrRobot_idling_inverted.png', 
    //     seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //           0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     size: [54, 190],
    //     row: 0,
    //     fpS: 8
    //     // hold: 5
    // },
    // {
    //     name: 'Eliot inverted',
    //     state: 'talking',
    //     src: imgPath + 'mrRobot_talking_inverted.png', 
    //     seq: [0, 1],
    //     size: [54, 190],
    //     row: 0,
    //     fpS: 8
    //     // hold: 5
    // },
    {   // 9
        name: 'Carl',
        state: 'idling',
        src: imgPath + 'carl_idling.png', 
        seq: [0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 4, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        size: [54, 196],
        row: 0,
        fpS: 8,
        // hold: 4
    },
    {   // 10
        name: 'Carl',
        state: 'talking',
        src: imgPath + 'carl_talking.png', 
        seq: [0, 1],
        size: [54, 196],
        row: 0,
        fpS: 8
        // hold: 5
    },
    {   // 11
        name: 'Zoë',
        state: 'idling',
        src: imgPath + 'zoe_idling.png', 
        seq: [0, 0, 0, 0, 0, 1, 0, 2, 0, 2],
        size: [42, 194],
        row: 0,
        fpS: 8,
        // hold: 4
    },
    {   // 12
        name: 'Zoë',
        state: 'talking',
        src: imgPath + 'zoe_talking.png', 
        seq: [0, 1],
        size: [60, 194],
        row: 0,
        fpS: 8,
        // hold: 4
    },
    {   // 13
        name: 'Guitar Guy',
        igName: ['Steven', 'Steven'],
        state: 'idling',
        src: imgPath + 'guitar_guy_idling.png', 
        seq: [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 3, 5, 5, 4, 4, 5, 5, 4, 4, 5, 5, 4, 4],
        size: [114, 190],
        row: 0,
        fpS: 6,
    },
    {   // 14
        name: 'Guitar Guy',
        state: 'talking',
        src: imgPath + 'guitar_guy_talking.png', 
        seq: [0, 1],
        size: [114, 190],
        row: 0,
        fpS: 8,
        // hold: 4
    },
    // {
    //     name: 'Guitar Guy',
    //     state: 'talking',
    //     src: imgPath + 'zoe_talking.png', 
    //     seq: [0, 1],
    //     size: [60, 194],
    //     row: 0,
    //     fpS: 8,
    //     // hold: 4
    // },
    {
        name: 'John Doe',
        state: 'idling',
        src: imgPath + 'john_doe.png', 
        seq: [0],
        size: [46,192],
        row: 0,
        fpS: 2 // frames per sprite
        // hold: 5
    },
    // {
    //     name: 'John Doe',
    //     state: 'talking',
    //     src: imgPath + 'john_doe_talking.png', 
    //     seq: [0, 2],
    //     size: [46,192],
    //     row: 0,
    //     fpS: 8 // frames per sprite
    //     // hold: 5
    // },

    // {
    //     name: 'JohnDoe',
    //     state: 'walking',
    //     src: imgPath + 'bennet_walking_all.png', 
    //     seq: [0,1,2,3,4,5,6,7,8,9,10,11],
    //     size: [80,192],
    //     row: 0,
    //     fpS: 2
    // },
    // {
    //     name: 'John Doe',
    //     state: 'talking',
    //     src: imgPath + 'bennet_walking_all.png', 
    //     seq: [0],
    //     size: [80,192],
    //     // row: 4,
    //     fpS: 2 
    // }
];

var npcChatSrc = [
    { // index 0
        name: 'Knittel',
        index: [0, 0],
        chatBoxBgColor: '#98bd77',
        speech: [
                    [   // use ' § ' as line wrap indicator
                        ['Where are you going?', 'Wo wollen sie hin?'],
                        ['Fiddle-dee-dee, you\'re at the cleaning schedule this week. Have you made these yet?', 'Papperlapapp, sie sind diese Woche mit der Hausordnung dran. Haben sie die schon gemacht?'], 
                        ['This hallway is a mess. You have to mop the floor properly, you hear?!', 'Hier sieht\'s aus, wie bei den Hottentotten. Sie müssen ordentlich feudeln, hören sie?!'],
                        ['Whoever believes it will be happy. I\'m checking it out', 'Wer\'s glaubt, wird selig. § Ich kontrolliere das!'],
                        ['Don\'t get fresh! I can do something completely different.', 'Na na na, nicht frech werden! Ich kann auch ganz anders . . .'],
                        ['Not just sweep, § YOU HAVE TO MOP IT WET, § that\'s clear!', 'Nicht nur fegen, § NASS DURCHFEUDELN, § dass das klar ist!'],
                        // ['Tomorrow night at the latest.', 'Bis spätestens morgen Abend.'],
                        ['I\'ve got my eye on you, young man.', 'Ich habe sie im Auge, junger Mann.']
                    ],
                    
                    ['Lorem Ipsum 1-0', 'Lorem Ipsum 1-1', , 'Lorem Ipsum 1-2', 'I don\'t wanna talk anymore.'],
                    ['Lorem Ipsum 2-0', 'Lorem Ipsum 2-1', , 'Lorem Ipsum 2-2']
                ],
        response: [ // bennet
                    [
                        ['Um . . . , hello Mrs. Knittel.', 'Ähm . . . , hallo Frau Knittel.'],
                        ['Uh . . . uh . . ., I\'ve got to go.', 'Äh . . . äh . . ., ich muss dringend  weg.'],
                        ['Uff . . . uh . . ., right, the cleaning schedule, well . . .', 'Uff . . . äh . . ., ach die Hausordnung, also . . .  '],
                        ['Uh . . . sure, Mrs. Knittel, I was going to do that tomorrow.', 'Ähm  . . . klar, Frau Knittel, das wollte ich morgen gleich erledigen.'],
                        ['Well, I\'ll be damned.', 'Also, das glaube ich sofort.'],
                        ['No reason, I\'ll sweep the hallway tomorrow.', 'Kein Grund, ich fege morgen den Flur.'],
                        // ['All right, I will.', 'Schon gut, mach ich.'],
                        ['Okay. *Sigh*', 'Ok. *Seufz*'],

                    ],
                    ['Lorem Ipsum 1-0', 'Lorem Ipsum 1-1', , 'Lorem Ipsum 1-2'],
                    ['Lorem Ipsum 2-0', 'Lorem Ipsum 2-1', , 'Lorem Ipsum 2-2']
                  ]
    },
    { // index 1
        name: 'Luca',
        index: [0, 0],
        chatBoxBgColor: '#ccc', //'#d09999',
        speech: [
                    [   // use ' § ' as line wrap indicator
                        ['Ciao Bennet!', 'Ciao Bennet!'],
                        ['Indeed. Someone left a note for you.', 'Tatsächlich. Jemand hat einen Zettel für dich abgegeben.'], 
                        ['Una ragazza molto bella. § A young lady with blue hair.  I\'ve never seen them in my pizzeria before.', 'Una ragazza molto bella. Eine junge Dame mit blauen Haaren. Die hat auch schon mal Pizza hier gekauft.'],
                        ['Ah sì. § \"Give this to Bennet. He have to take care of the details!\"  Those were her words.', 'Ah sì. § \"Gib das Bennet. Er soll auf die Details achten!\"  Das waren ihre Worte.'],
                        ['You\'re right.', 'Veramente.'],
                        ['Ciao ragazzo. § Maybe Steven knows who the girl is. The chitarrista always plays in front of the pizzeria, you should talk to him.', 'Ciao ragazzo. § Vielleicht weiß Steven, wer das Mädchen ist. Der Chitarrista spielt immer vor der Pizzeria, du solltest ihn fragen.'],
                    ],
                    [
                        ['Ciao Bennet, you\'re back - is there anything else I can do for you?', 'Ciao Bennet, da bist du ja wieder - kann ich noch etwas für dich tun?'], 
                        ['You are always welcome, ragazzo!', 'Du bist immer herzlich willkommen, ragazzo!']
                    ]
                ],
        response: [
                    [
                        ['Hello Luca!', 'Hallo Luca!'],
                        ['There\'s a message for me?', 'Du hast eine Nachricht für mich?'],
                        ['What does someone mean?', 'Was heißt jemand?'],
                        ['With blue hair, really? And she didn\'t say anything else?','Mit blauen Haaren, wirklich? § Und sie hat nichts weiter gesagt?'],
                        ['Strange, isn\'t it?','Merkwürdig.'],
                        ['Hmmm . . . § I have to think about that. Thanks, and goodbye Luca!','Hmmm . . . darüber muss ich nachdenken. Mach\'s gut Luca - und vielen Dank!'],
                    ],
                    [
                        ['Hey!', 'Hey!'], 
                        ['Um . . . later I come over for a little Napoli.', 'Hmm . . . später komme ich für eine kleine Napoli vorbei.']
                    ]
                  ]
    },
    { // index 2
        name: 'Eliot',
        index: [0, 0],
        chatBoxBgColor: '#ccc', //'#98bd77',
        speech: [
                    [   // use ' § ' as line wrap indicator
                        ['Hmm . . . let\'s see, for me a little pizza Margherita and then some . . . ?', 'Hmm . . . mal sehen, für mich eine kleine Pizza Margherita und dann noch § . . . ?']
                    ],
                    [
                        ['Hi, and you\'re Bennet. I noticed you\'re into lucas\' hot stuff, too.', 'Moin, und du bist Bennet. Ich habe bemerkt, dass du auch auf Lucas heiße Ware stehst.'],
                        ['Well, I wouldn\'t say I know everyone here. Every now and then I buy two pizzas here for myself and my dog mate.', 'Naja, kennen würde ich nicht sagen. Ab und zu kaufe ich hier zwei Pizzen für mich und meinen Hunde–Kumpel.'],
                        ['Yeah, his name is Marvin. § He\'s all about salami pizza.', 'Aber ja, er heißt Marvin. § Er steht voll auf Salami–Pizza.'], 
                        ['Blue hair? I don\'t know, it doesn\'t ring a bell. § But I just remembered Marvin\'s favorite pizza is actually Quattro Stagioni.', 'Blaue Haare? Keine Ahnung, da klingelt nichts. § Aber mir fällt gerade ein - Marvins Lieblingspizza ist eigentlich Quattro Stagioni.'],
                        ['If I think about it - maybe he likes pizza with everything - yes, exactly, with everything.', 'Wenn ich mir\'s recht überlege - vielleicht mag er doch Pizza mit Allem am liebsten - ja genau, mit Allem.'],
                        ['Ummm . . . so let\'s see, for me a little Margherita and for Marvin an extra big one . . . ?', 'Hmmm . . . also mal sehen, für mich eine kleine Margherita und für Marvin eine extra große . . . ?'],
                    ],
                    [
                        ['Pizza Margherita for me, but what can I get for Marvin?', 'Pizza Margherita für mich, aber was nehme ich nur für Marvin?'], 
                        ['Ok, thanks. I\'ll think about it.', 'Okay Danke, ich überlege es mir.']
                    ],
                    [
                        ['Sorry Bennet, I can\'t make things too easy for you. Sorry about that little white lie.', 'Sorry Bennet, aber ich durfte es dir nicht zu leicht machen. Die kleine Notlüge tut mir leid.'],
                        ['Marvin? He had the extra big one with everything - he thought it was great!', 'Marvin? Der hatte die Extragroße mit Allem - fand er super!'],
                        ['Anyone who gets access to this basement should have a certain mindset, you know? This is a special place.', 'Jeder, der Zugang zu diesem Keller erhält, sollte ein gewisse Geisteshaltung mitbringen, verstehst du? Das ist ein besonderer Ort hier.'],
                        ['We hack the world, so to speak. Ask Zoe, she\'ll explain it to you.', 'Wir hacken die Welt, sozusagen. Frag Zoë, sie wird es dir erklären.']
                    ],
                    [
                        ['Finally you\'re asking the right questions. What do you mean exactly?', 'Endlich stellst du die richtigen Fragen. Was meinst du genau?'], 
                        ['You noticed the glitches?', 'Du hast die Glitches bemerkt?'],
                        ['Exactly. Now eliminate the subjunctive in your sentence!', 'Ganz genau. Jetzt eliminiere den Konjunktiv in deinem Satz!'],
                        ['Right. The world isn\'t what you think it is. Not everything that should be possible is actually doable.', 'Richtig. Die Welt ist nicht das, wofür du sie hältst. Nicht alles was möglich sein sollte, ist tatsächlich machbar.'],
                        ['Why don\'t you try picking the dandelion outside? Can you do that?', 'Versuch doch mal den Löwenzahnn draußen vor der Tür zu pflücken. Kannst du das tun?']
                    ],
                    [
                        ['I\'m the same way. You can\'t pick the dandelion. No way.', 'Geht mir genauso. Man kann den Löwenzahn nicht pflücken. Unmöglich.'], 
                        ['Whatever Zoë says, I\'m in. Talk to her!', 'Was immer Zoë sagt, ich bin dabei. Sprich mit ihr!']
                    ]
                ],
        response: [
                    [
                        ['Um, excuse me . . . ', 'Ähm, Entschuldigung . . . ']
                    ],
                    [
                        ['Hello, your name is Eliot, right?', 'Hallo, deine Name ist Eliot, stimmt\'s?'],
                        ['Hehe, that\'s right. § Tell me something, do you know the people that go in and out of Luca\'s pizzeria?', 'Hehe, genau. § Sag mal, kennst du die Leute, die bei Luca ein und aus gehen?'],
                        ['I see, then Doggo outside is with you?', 'Verstehe, dann gehört Doggo draußen zu Dir?'],
                        ['I can imagine. § One question: Have you ever noticed a girl with blue hair?', 'Kann ich mir vorstellen. § Ein Frage :  Ist dir hier mal ein Mädchen mit blauen Haaren aufgefallen?'],
                        ['What? . . . oh Marvin, of course.', 'Wie? . . . Ach so Marvin, na klar.'],
                        ['I\'m sure he is.','Das glaube ich gern.']
                    ],
                    [
                        ['You still haven\'t decided?', 'Immernoch nicht entschieden?'], 
                        ['Luca makes a great Napoli - my favorite pizza.', 'Luca macht ne prima Napoli - meine Lieblingspizza.']
                    ],
                    [
                        ['Hi, Eliot. You here too? And you\'ve never seen the blue-haired girl before, have you?', 'Hi Eliot, du auch hier? Und du hast das blauhaarige Mädchen also noch nie zuvor gesehen, richtig?'],
                        ['That\'s ok. I just hope Marvin had his favorite pizza.', 'Schon okay. Ich hoffe nur, Marvin hatte seine Lieblingspizza.'],
                        ['And that little scavenger hunt was some kind of test?', 'Und die kleine Schnitzeljagd war so eine Art Test?'],
                        ['I see. And what are you doing here?', 'Verstehe. Und was macht ihr hier?']
                    ],
                    [
                        ['Tell me, Eliot, do you ever have the feeling that something\'s wrong?', 'Sag mal Eliot, hast du auch manchmal das Empfinden, dass irgendetwas nicht stimmt?'], 
                        ['Well, sometimes the world twitches and flickers like a TV when reception is poor. Then I get the feeling in my stomach, like in a downhill accelerating elevator.', 'Naja, bisweilen zuckt und flattert die Welt, wie beim Fernsher wenn der Empfang schlecht ist. Im Bauch bekomme ich dann das Gefühl, wie in einem abwährts beschleunigenden Fahrstuhl.'],
                        ['Glitches - that short errors in an electronic system? Like it\'s a video game?', 'Glitches - diese kurzen Fehler in einem elektronischen System? Als wäre es ein Videospiel?'],
                        ['Oh . . . that means . . .', 'Oh . . . soll das heißen, . . .'],
                        ['Um, for instance?', 'Ähm, zum Beispiel?']
                    ],
                    [
                        ['Every time I touch the dandelion, the world goes off the rails and in my stomach it spins.', 'Jedesmal wenn ich den Löwenzahn berühre, gerät die Welt kurz aus den Fugen und in meinem Magen dreht es sich.'], 
                        ['We should advise on how to deal with it!', 'Wir sollten beraten, wie wir damit umgehen!']
                    ]
                  ]
    },
    { // index 3
        name: 'Carl',
        index: [0, 0],
        chatBoxBgColor: '#ccc', //'#98bd77',
        speech: [
                    [   // use ' § ' as line wrap indicator
                        ['Hi Bennet!', 'Servus Bennet!']
                    ],
                    [
                        ['Lorem Ipsum 1-0 eng', 'Hallo mein Freund!'], 
                        ['Lorem Ipsum 1-1 eng', 'Lorem Ipsum 2'],
                        ['Lorem Ipsum 1-2 eng', 'Lorem Ipsum 3'],
                        ['Lorem Ipsum 1-2', 'Lorem Ipsum 4']
                    ]
                ],
        response: [
                    [
                        ['Hi Carl!', 'Hallo Carl!']
                    ],
                    [
                        ['Lorem Ipsum 1-0 eng', 'Hallo!'], 
                        ['Lorem Ipsum 1-1 eng', 'Lorem Ipsum 2'],
                        ['Lorem Ipsum 1-2 eng', 'Lorem Ipsum 3'],
                        ['Lorem Ipsum 1-2', 'Lorem Ipsum 4']
                    ]
                  ]
    },
    { // index 4
        name: 'Zoë',
        index: [0, 0],
        chatBoxBgColor: '#eda5ca', // #eda5ca9cafd1
        speech: [
                    [   // use ' § ' as line wrap indicator
                        ['Well, look who\'s here.', 'Wen haben wir denn da?'],
                        ['What do you want?', 'Was willst du?'], 
                        ['Oh really?  And you do that by waving hysterically at a security camera?', 'Oh wirklich?  Und das machst du, indem du hysterisch in eine Überwachungskamera winkst?'],
                        ['You caught me, Sherlock.','Du hast mich überführt, Sherlock.'],
                        ['Find out!  You have the detective gene, don\'t you?','Finde es heraus, du hast doch das Detektiv-Gen, oder nicht?!'],
                        ['Look around, Columbo!  I can\'t let you in without the code.','Schau dich um, Columbo!  Ohne Code kann ich dich nicht rein lassen.']
                    ],
                    [
                        ['Ah, Nick Knatterton is back. How can I help you this time?', 'Ah, Nick Knatterton ist wieder da. Wie kann ich dir diesmal behilflich sein?'], 
                        ['So watch out, I\'ll just say it once, Miss Marple : § The note with the \"two\" you\'re already holding in your hands.', 'Also pass auf, ich sag\'s nur einmal, Miss Marple : § Den Zettel mit der \"Zwei\" hältst du schon in Händen.'],
                        ['The code you need has eight digits - does Dick Tracy understand that?', 'Der Code, den du bei mir benötigst, hat acht Stellen - versteht das Dick Tracy?'],
                        ['Well then, keep looking around and combine well, Marlowe!', 'Na dann, sieh dich weiter um und kombiniere fleißig, Marlowe!']
                    ],
                    [
                        ['The chief inspector is back. How\'s it going?', 'Unser Meisterdetektiv ist wieder da. Und was macht die Kunst?'], 
                        ['What do you mean by that?', 'Was sagt uns das?'],
                        ['What did I tell you? Combine, Poirot!', 'Was habe ich gesagt? Kombinieren, Poirot!'],
                        ['All right, you whiz : § Anagram is the magic word - that\'s how you find the right sequence of § numbers!', 'Also gut du Leuchte : § Anagramm ist das Zauberwort - so findest du die richtige Nummernfolge !'],
                    ],
                    [
                        ['Bravo Sherlock! § And the sequence of numbers is?', 'Bravo Sherlock! § Und die Zahlenfolge lautet?']
                    ],
                    [
                        ['So you managed to find it here.', 'Hast du\'s also geschafft hierher zu finden.'], 
                        ['You can pat yourself on the back, my little master detective - but don\'t carry your head into the clouds!', 'Kannst dir auf die Schulter klopfen, mein kleiner Meisterdetektiv - aber nicht den Kopf in die Wolken tragen !'],
                        ['Welcome to § \"The hacker\'s paradise in your neighbourhood\"!', 'Willkommen im § \"Hackerparadies ganz in deiner Nähe\"!']
                    ],
                    [
                        ['You notice something\'s wrong? Did you ever touch the dandelion in the alley?', 'Dir ist aufgefallen, dass irgendetwas nicht stimmt? Hast du mal den Löwenzahn in der Seitengasse berührt?'], 
                        ['The glitches you noticed are real because they are part of our world. And we found out more.', 'Die Glitches, die du bemerkst, sind real, weil sie Teil unserer Welt sind. Und wir haben noch mehr herausgefunden.'],
                        ['We are a computer program, Bennet - a simulation or emulation, no matter how you want to interpret it!', 'Wir sind ein Computerprogramm, Bennet - eine Simulation oder Emulation, ganz gleich wie du es interpretieren möchtest!'],
                        ['You as a coder will not find it so difficult to understand: I can give you detailed data on our host system, which we call \"The World\".', 'Dir als Programmierer wir es nicht so schwer fallen, das zu verstehen: Ich kann dir detailierte Daten über unser Host-System, das wir \"Die Welt\" nennen, geben.'],
                        ['With the data at our disposal, we may be able to look beyond the horizon. We\'re working on it. § We\'re hacking the world.', 'Mit den Daten, die uns zur Verfügung stehen, können wir vielleicht über den Horizont hinausschauen. Wir arbeiten daran. § Wir hacken die Welt.']
                    ],
                    [
                        ['You tell me! We should definitely plan with one voice.', 'Sag du es mir! Wir sollten auf jeden Fall einhellig planen.'], 
                        ['That dramatic?', 'So dramatisch?'],
                        ['All right, Bennet, let\'s make a decision!', 'Ok Bennet, lass uns eine Entscheidung treffen!']
                    ]
                ],
        response: [
                    [
                        ['Huhuuu . . . , § can anybody see me?', 'Huhuuu . . . , § kann mich jemand sehen?'],
                        ['Hooray! § What a surprise.', 'Oha! § Na so eine Überraschung.'],
                        ['Um . . . I\'m looking for Zoë.', 'Ähm . . . ich suche Zoë.'],
                        ['No . . . well . . . though . . . § But wait, do I see a blue hair streak? Are you Zoë?','Nein . . . also . . . doch . . . § Aber warte, sehe ich da nicht eine blaue Strähne. Bist du Zoë?'],
                        ['Haha . . . § But tell me something, what is this mysterious door about?','Haha . . . § Du sag mal, was ist das hier für eine geheimnisvolle Tür?'],
                        ['Are you kidding me?', 'Machst du dich lustig?']
                    ],
                    [
                        ['Hello . . . ?', 'Hallo . . . ?'], 
                        ['All right, I get it. Maybe I really am not the smartest, but . . . § * Mumble *', 'Alles klar, ich hab\'s kapiert. Vielleich bin ich ja wirklich nicht der Hellste, aber . . . § * Grummel *'],
                        ['Um . . . I see. And . . .', 'Ähm . . . ach so. Und . . .'],
                        ['Sure! * ? *', 'Klaro! * ? *']
                    ],
                    [
                        ['It\'s me again.', 'Ich bin\'s wieder.'], 
                        ['I found all the notes, I think.', 'Ich habe alle Notizen gefunden, denke ich.'],
                        ['Perhaps I didn\'t understand everything correctly?!', 'Vielleicht habe ich ja nicht alles korrekt verstanden?!'],
                        ['Um . . .', 'Ähm . . .']
                    ],
                    [
                        ['The only useful anagram is \"Emulator\".', 'Das einzig sinnvolle Anagramm ist \"Emulator\".']
                    ],
                    [
                        ['Nice to finally meet you, Zoë.', 'Schön, dich endlich richtig kennenzulernen, Zoë.'], 
                        ['You didn\'t make it easy for me, but . . .', 'Du hast es mir nicht leicht gemacht, aber . . .'],
                        ['All right, but tell me, § what is this place?', 'Alles klar - aber sag mal : § Was ist das hier für ein Ort?']
                    ],
                    [
                        ['Hey Zoe, Eliot mentioned you guys are \"hacking the world\" - that\'s what he said.', 'Hey Zoe, Eliot hat erwähnt, dass ihr hier \"die Welt hackt\" - so hat er sich ausgedrückt.'], 
                        ['Ah, quite right, I often have this weak feeling in my stomach. Steven, the musician in front of the pizzeria, can tell you a thing or two about it.', 'Ah, ganz recht, häufig habe ich dieses flaue Gefühl in der Magengegend. Steven, der Musiker vor der Pizzeria, kann ein Lied davon singen.'],
                        ['Oh, what is it?', 'Oha, was ist es?'],
                        ['We? You and me? And everything that surrounds us?', 'Wir? Du und ich? Und alles was uns umgibt?'],
                        ['I am part of a computer program - I don\'t know how to understand it?', 'Ich bin Teil eines Computerprogramms - ich weiß nicht, wie ich das finden soll?']
                    ],
                    [
                        ['What do you think we should do, Zoë?', 'Was denkst du Zoë, was sollen wir jetzt tun?'], 
                        ['At the end of the day, it\'s the red or the blue pill!', 'Letztendlich heißt es: die rote oder die blaue Pille!'],
                        ['Are we hacking the world or not?!', 'Hacken wir die Welt oder nicht?!']
                    ]
                  ]
    },
    { // index 5
        name: 'Guitar Guy',
        index: [0, 0],
        chatBoxBgColor: '#ccc', //'#98bd77',
        speech: [
                    [   // use ' § ' as line wrap indicator                        
                        ['Hi, I\'m Steven.', 'Ahoi, ich bin Steven.'],
                        ['No, the track is by Jason Shaw. Glad you like it.', 'Nein, das Stück ist von Jason Shaw. Freut mich das es dir gefällt.'], 
                        ['You can usually find me in front of Lucas Pizzeria.', 'Du findest mich meist hier vor Lucas Pizzeria.']
                    ],
                    [
                        ['What can I do for you?', 'Was kann ich für dich tun?'], 
                        ['Ah, you mean Zoë', 'Ah, du meinst bestimmt Zoë.'],
                        ['I may . . . § Zoë is a particularly generous girl. I would hate to talk about her privately to people I don\'t know their intentions.', 'Womöglich. § Zoë ist ein besonders großherziger Mensch. Ich würde ungern Privates über sie ausplaudern gegenüber Personen deren Absichten ich nicht kenne.'],
                        ['Buddy, you could be a little charitable.', 'Spendierfreude ist selten ein schlechtes Zeichen, Kumpel.']
                    ],
                    [
                        ['Thank you for your kind donation. I\'ll drink the after-hours beer with.', 'Vielen Dank für die Spende. Das Bier zum Feierabend werde ich damit auf dich trinken.'], 
                        ['Zoë? § There\'s a somewhat run-down alley, I think it\'s Tim Schafer Street, - I\'d take a look around.', 'Zoë? § Es gibt eine etwas runtergekommende Gasse, ich glaube es ist die Tim Schafer Straße, - da würde ich mich mal umschauen.'],
                        ['Well then . . .', 'Na dann . . .'],
                        ['You know where I am.', 'Du weißt, wo du mich findest.']
                    ],
                    [
                        ['Whoa, what was that?', 'Wow, was war das ?'],
                        ['So you found Zoë.', 'Hast du also Zoë gefunden.'], 
                        ['I can\'t say for sure . . . § um . . . something is different. I just suddenly knew.', 'Kann ich nicht genau sagen . . . ähm . . . irgendetwas ist anders. Ich wusste es plötzlich einfach so.'],
                        ['You can say that.', 'Kannste laut sagen.'],
                        ['Woah!', 'Wow!']
                    ]
                ],
        response: [
                    [
                        ['Hello, my name is Bennet.', 'Hallo, mein Name ist Bennet.'],
                        ['I like what you\'re playing. Did you write this?', 'Ich mag, was du da spielst. Ist das von dir?'],
                        ['Okay, thanks for the excellent sound.', 'Ok, danke für den exzellenten Sound.']
                    ],
                    [
                        ['Hey', 'Hey.'], 
                        ['Luca told me about a young lady. A girl with blue hair who orders pizza here occasionally. Do you know her?', 'Luca hat mir von einer jungen Dame erzählt. Ein Mädchen mit blauen Haaren, dass hier gelegentlich Pizza bestellt. Kennst du sie?'],
                        ['Zoë it is. Do you know where I can find her?', 'Zoë also. Weißt du wo ich sie finden kann?'],
                        ['Okay. How can I convince you of my commitment?', 'Ok. Wie kann ich dich von meinem Engagement überzeugen?']
                    ],
                    [
                        ['Hey, it\'s me again.', 'Hey, ich bin\'s nochmal.'], 
                        ['Remember my question?', 'Kannst du dich an meine Frage erinnern?'],
                        ['Okay, I know the neighborhood. I live very near by.', 'Ok, die Gegend kenne ich. Ich wohne gleich da um die Ecke.'],
                        ['Thanks.', 'Danke.']
                    ],
                    [
                        ['Oh!', 'Oha!'],
                        ['I don\'t know.', 'Keine Ahnung.'],
                        ['Uh . . . how do you know?', 'Öhm . . . woher weißt du?'],
                        ['It\'s really weird.', 'Wirklich seltsam.'],
                        ['Still, I have to go on, I\'ll see you!', 'Trotzdem, ich muss weiter, man sieht sich!']
                    ]
                  ]
    }
];

var itemSrc = [
    {   // ----------- Couch -----------
        name: 'Couch',
        igName: ['Couch', 'Sofa'],
        site: 'inScene',
        desc: ['My old sofa. I don\'t know how this got here.', 'Mein altes Sofa. Keine Ahnung wie das hier her gelangt ist.'],
        deny: ['I don\'t want it anymore, so I disposed of it.', 'Ich will es nicht mehr, darum hab ich es entsorgt.'],
        denyUse: ['That must have been here for a long time - so I\'d rather not.', 'Das muss schon ziemlich lange hier stehen - also lieber nicht.'],
        src: imgPath + 'couch_iS.png', 
        scene: 0,
        seq: [0],
        size: [240, 106],
        row: 0
    },
    {   // ----------- Hitchhiker's guide to the galaxy -----------
        name: 'Hitchhiker',
        igName: ['The Hitchhiker', 'Der Anhalter'],
        site: 'inScene',
        desc: ['The Hitchhiker\'s Guide to the Galaxy.', 'Per Anhalter durch die Galaxis.'],
        denyUse: ['Viewed a thousand times.', 'Tausend mal gelesehen.'],
        src: imgPath + 'hitchhiker_iS.png', 
        scene: 0,
        seq: [0],
        size: [10, 50],
        row: 0
    },
    {
        name: 'Hitchhiker',
        site: 'inHand',
        src: imgPath + 'hitchhiker_iH.png', 
        scene: 0,
        seq: [0],
        size: [52, 74],
        grip: [26, 64],
        row: 0
    },
    {
        name: 'Hitchhiker',
        igName: ['The Hitchhiker', 'Der Anhalter'],
        site: 'inPocket',
        desc: ['You can always have the hitchhiker with you. Probably should be.', 'Den Anhalter kann man immer dabei haben. Sollte man wahrscheinlich auch.'],
        denyUseInv: ['Sorry, no time for that.', 'Leider keine Zeit gerade.'],
        src: imgPath + 'hitchhiker_iP.png', 
        scene: 0,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Keys -----------
        name: 'Keys',
        igName: ['Keys', 'Schlüssel'],
        site: 'inScene',
        desc: ['My apartment keys.', 'Meine Wohnungsschlüssel.'],
        denyUse: ['I\'d better take this.', 'Die sollte ich wohl besser einstecken.'],
        src: imgPath + 'keys_iS.png', 
        scene: 0,
        seq: [0],
        size: [20, 14],
        // grip: [1, 0],
        row: 0,
        once: false,
        fpS: 2
    },
    {
        name: 'Keys',
        site: 'inHand',
        src: imgPath + 'keys_iH.png', 
        scene: 0,
        seq: [0],
        size: [38, 34],
        grip: [20, 28],
        row: 0,
        once: false,
        fpS: 2
    },
    {
        name: 'Keys',
        igName: ['Keys', 'Schlüssel'],
        site: 'inPocket',
        desc: ['The keys are rattling in my pocket.', 'Die Schlüssel klappern in der Tasche.'],
        denyUseInv: ['I don\'t have to do that now.', 'Das muss ich gerade nicht tun.'],
        src: imgPath + 'keys_iP.png', 
        scene: 0,
        seq: [0],
        size: [48, 32],
        row: 0,
        once: false,
        fpS: 2
    },
    {   // ----------- Running Shoes -----------
        name: 'Running Shoes',
        igName: ['Running Shoes', 'Laufschuhe'],
        site: 'inScene',
        desc: ['My old running shoes. I\'ll have to get rid of them sometime. I don\'t jog enough anyway.', 'Meine alten Laufschuhe benutze ich viel zu selten. Die könnten auch weg.'],
        denyUse: ['Not yet.', 'Jetzt nicht.'],
        src: imgPath + 'running_shoes_iS.png', 
        scene: 0,
        seq: [0],
        size: [82, 30],
        row: 0
    },
    {
        name: 'Running Shoes',
        site: 'inHand',
        src: imgPath + 'running_shoes_iS.png', 
        scene: 0,
        seq: [0],
        size: [82, 30],
        grip: [42, 24],
        row: 0
    },
    {
        name: 'Running Shoes',
        igName: ['Running Shoes', 'Laufschuhe'],
        site: 'inPocket',
        desc: ['If I had four feet, it would make sense to have them with me.', 'Wenn ich vier Füße hätte, würde es Sinn machen, die dabei zu haben.'],
        denyUseInv: ['So not right now, really.', 'Also jetzt gerade wirklich nicht.'],
        src: imgPath + 'running_shoes_iP.png', 
        scene: 0,
        seq: [0],
        size: [48, 32],
        row: 0
    },    
    {   // ----------- Lighter -----------
        name: 'Lighter',
        igName: ['Lighter', 'Feuerzeug'],
        site: 'inScene',
        desc: ['Light it up', 'Erleuchte mich.'],
        denyUse: ['I don\'t need it till 4:20.', 'Brauche ich erst um 4 Uhr 20.'],
        src: imgPath + 'lighter_iS.png', 
        scene: 0,
        seq: [0],
        size: [16, 18],
        row: 0,
        once: false,
        fpS: 6
    },
    {
        name: 'Lighter',
        site: 'inHand',
        src: imgPath + 'lighter_iH.png', 
        scene: 0,
        seq: [0,1,2,3,4],
        size: [36, 44],
        grip: [22, 40],
        row: 0,
        once: false,
        fpS: 6
    },
    {
        name: 'Lighter',
        igName: ['Lighter', 'Feuerzeug'],
        site: 'inPocket',
        desc: ['I\'ve got a fire in my pants.', 'Ich hab Feuer in der Hose.'],
        denyUseInv: ['No, I don\'t think so.', 'Nah, lieber nicht.'],
        src: imgPath + 'lighter_iP.png', 
        scene: 0,
        seq: [0],
        size: [48, 32],
        row: 0,
        once: false,
        fpS: 2
    },
    {   // ----------- Mobile -----------
        name: 'Mobile',
        igName: ['Mobile', 'Handy'],
        site: 'inScene',
        desc: ['My mobile phone.', 'Mein Mobiltelefon.'],
        denyUse: ['I have to put mobile in my pocket first.', 'Mein Mobiltelefon benutzte ich am Mann.'],
        src: imgPath + 'mobile_iS.png', 
        scene: 0,
        seq: [0],
        size: [30, 16],
        row: 0,
        fpS: 1
    },
    {
        name: 'Mobile',
        site: 'inHand',
        src: imgPath + 'mobile_iH.png', 
        scene: 0,
        seq: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        size: [40, 78],
        grip: [20, 68],
        row: 0,
        once: true,
        fpS: 1
    },
    {
        name: 'Mobile',
        igName: ['Mobile', 'Handy'],
        site: 'inPocket',
        desc: ['My mobile phone is almost fully charged.', 'Mein Handy ist gut geladen.'],
        src: imgPath + 'mobile_iP_ring.png', 
        scene: 0,
        seq: [0], //[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        size: [48, 32],
        row: 0,
        fpS: 2
    },
    {   // ----------- Change -----------
        name: 'Change',
        igName: ['Change', 'Kleingeld'],
        site: 'inScene',
        desc: ['A glass of change.', 'Wechselgeld im Glas.'],
        deny: ['I already have.', 'Hab ich schon.'],
        denyUse: ['I can\'t pay myself. § Or can I . . . ?', 'Ich kann mich nicht selber bezahlen. § Oder kann ich . . . ?'],
        src: imgPath + 'change_iS.png', 
        scene: 0,
        seq: [0],
        size: [26, 38],
        row: 0
    },
    {
        name: 'Change',
        igName: ['Change', 'Kleingeld'],
        site: 'inHand',
        src: imgPath + 'change_iH.png', 
        scene: 0,
        seq: [0],
        size: [40, 28],
        grip: [22, 24],
        row: 0
    },
    {
        name: 'Change',
        igName: ['Change', 'Kleingeld'],
        site: 'inPocket',
        desc: ['Some coins of change.', 'Einige Münzen Wechselgeld.'],
        denyUseInv: ['I can\'t pay myself. § Or can I . . . ?', 'Ich kann mich nicht selber bezahlen. § Oder kann ich . . . ?'],
        src: imgPath + 'change_iP.png', 
        scene: 0,
        seq: [0],
        size: [48, 32],
        row: 0
    },
        // Scene 0 =====================================================================================
        // non portables -------------------------------------------------------------------------------
    {   // ----------- Desk -----------
        name: 'Desk',
        igName: ['Desk', 'Schreibtisch'],
        site: 'inScene',
        desc: ['This is where all the magic takes place.', 'Hier findet die ganze Magie statt.'],
        deny: ['I can\'t take the desk.', 'Ich kann den Schreibtisch nicht mitnehmen.'],
        src: imgPath + 'desk_iS.png', 
        scene: 0,
        seq: [0],
        size: [156, 120],
        row: 0
    },
    {   // ----------- Waterbottle -----------
        name: 'Bootle of Water',
        igName: ['Bootle of water', 'Wasserflasche'],
        site: 'inScene',
        desc: ['Simpele mineral water', 'Einfaches Mineralwasser'],
        deny: ['Nope, I don\'t feel like.', 'Och nö, keine Lust.'],
        denyUse: ['I\'m not thirsty now.', 'Ich bin nicht durstig.'],
        src: imgPath + 'waterbottle_iS.png', 
        scene: 0,
        seq: [0],
        size: [14, 40],
        row: 0
    },
    {   // ----------- Book on Bed -----------
        name: 'Reading',
        igName: ['Reading', 'Lektüre'],
        site: 'inScene',
        desc: ['Science fiction', 'Science-Fiction'],
        deny: ['I\'d rather read that at home.', 'Das lese ich lieber gemütlich zu Hause.'],
        denyUse: ['I don\'t want to read now.', 'Ich will jetzt nicht lesen.'],
        src: imgPath + 'reading_iS.png', 
        scene: 0,
        seq: [0],
        size: [32, 20],
        row: 0
    },
    {   // ----------- Che Guevara Poster -----------
        name: 'Che Guevara',
        igName: ['Che Guevara', 'Che Guevara'],
        site: 'inScene',
        desc: ['Ernesto Rafael Guevara de la Serna', 'Ernesto Rafael Guevara de la Serna'],
        deny: ['It stays where it is.', 'Der bleibt schön, wo er ist.'],
        src: imgPath + 'che_iS.png', 
        scene: 0,
        seq: [0],
        size: [62, 80],
        row: 0
    },
    {   // ----------- 2001 Space Odysee -----------
        name: '2001',
        igName: ['2001', '2001'], // short for log
        site: 'inScene',
        desc: ['2001: A Space Odyssey. The Masterpiece of 1968.', '2001: Odyssee im Weltraum. Das Meisterwerk aus dem Jahr 1968.'],
        deny: ['It just wrinkles in the pocket.', 'Das zerknittert nur in der Tasche.'],
        src: imgPath + '2001_iS.png', 
        scene: 0,
        seq: [0],
        size: [50, 120],
        row: 0
    },
    {   // ----------- Laptop -----------
        name: 'Laptop',
        igName: ['Laptop', 'Laptop'],
        site: 'inScene',
        desc: ['The old coding machine.', 'Die alte Kodier-Maschine.'],
        deny: ['I don\'t need that right now.', 'Den brauch ich gerade nicht.'],
        denyUse: ['At home I can use the desktop PC.', 'Zuhause kann ich den Desktop-PC benutzen.'],       
        src: imgPath + 'laptop_iS.png', 
        scene: 0,
        seq: [0],
        size: [56, 36],
        row: 0
    },
    {   // ----------- Tardis -----------
        name: 'Tardis',
        igName: ['T.A.R.D.I.S.', 'T.A.R.D.I.S.'],
        site: 'inScene',
        desc: ['Time and relative dimensions in space.', 'Trips aufgrund relativer Dimensionen im Sternenzelt.'],
        deny: ['A space-time machine in your pocket - that\'s ridiculous.', 'Eine Raum-Zeit-Maschine in der Hosentasche - das ist absurd.'],
        denyUse: ['I can\'t go back in time without a sonic screwdriver.', 'Ohne Schall-Schraubenzieher kann ich nicht auf Zeitreise gehen.'], 
        src: imgPath + 'tardis_iS.png', 
        scene: 0,
        seq: [0],
        size: [36, 70],
        row: 0
    },
    {   // ----------- Router -----------
        name: 'Router',
        igName: ['Router', 'Router'],
        site: 'inScene',
        desc: ['Full access with open source firmware.', 'Volle Kontrolle dank Open Source Firmware.'],
        deny: ['That\'s not what I mean by \"mobile internet.\"', 'Das ist es nicht, was ich unter \'Mobilem Internet\' verstehe.'],
        denyUse: ['Switched on and optimally configured - there is nothing to do.', 'Eingeschaltet und bestens konfiguriert - da gibt es nichts zu tun.'], 
        src: imgPath + 'router_iS.png', 
        scene: 0,
        seq: [0],
        size: [26, 30],
        row: 0
    },
    {   // ----------- Pizza Box -----------
        name: 'Pizza Box',
        igName: ['Pizza Boxes', 'Pizzaschachteln'],
        site: 'inScene',
        desc: ['Pizza from Luca Pizzaria is the best.', 'Pizza von Luca Pizzeria ist die beste.'],
        deny: ['Why the heck would I carry around empty pizza boxes?.', 'Warum zum Kuckuck sollte ich leere Pizzaschachteln mit mir herumtragen?'],
        denyUse: ['I already used it.', 'Hab ich schon benutzt.'],
        src: imgPath + 'pizzabox_iS.png', 
        scene: 0,
        seq: [0],
        size: [56, 26],
        row: 0
    },
    {   // ----------- Files -----------
        name: 'Files',
        igName: ['Files', 'Papiere'],
        site: 'inScene',
        desc: ['Invoices and all that crap.', 'Rechnungen und der ganze Mist.'],
        deny: ['Why would I want to take this?', 'Warum sollte ich das mitnehmen wollen?'],
        denyUse: ['The point of a still-to-complete stack is ignorance.', 'Der Sinn eines noch-zu-erledigen Stapels ist Ignoranz.'],
        src: imgPath + 'files_iS.png', 
        scene: 0,
        seq: [0],
        size: [28, 36],
        row: 0
    },
    {   // ----------- Guitar -----------
        name: 'Guitar',
        igName: ['Guitar', 'Gitarre'],
        site: 'inScene',
        desc: ['Gibson Les Paul.', 'Gibson Les Paul.'],
        deny: ['I like to play them at home.', 'Die spiel ich am liebsten daheim.'],
        denyUse: ['The muse has to kiss me.', 'Die Muse muss mich küssen.'],
        src: imgPath + 'guitar_iS.png', 
        scene: 0,
        seq: [0],
        size: [32, 52],
        row: 0
    },
    {   // ----------- Note on wall -----------
        name: 'Note',
        igName: ['Note', 'Zettel'],
        site: 'inScene',
        desc: ['Sometimes I actually have a useful thought.', 'Manchmal habe ich tatsächlich einen brauchbaren Gedanken.'],
        deny: ['If I take this off, I\'ll forget what I wanted to remember.', 'Wenn ich den jetzt abnehme, vergesse ich, was ich mir merken wollte.'],
        denyUse: ['I don\'t have anything to write down right now.', 'Gerade hab ich nichts zum aufschreiben.'],
        src: imgPath + 'note_iS.png', 
        scene: 0,
        seq: [0],
        size: [22, 34],
        row: 0
    },
    {   // ----------- Snowden -----------
        name: 'Snowden',
        igName: ['E. J. S.', 'E. J. S.'],
        site: 'inScene',
        desc: ['\"The law is no substitute for morality, here or then.\"', '\"Das Gesetz ist kein Ersatz für Moral, weder heute noch früher.\"'],
        deny: ['There\'s a good spot.', 'Da hängte es gut.'],
        src: imgPath + 'snowden_iS.png', 
        scene: 0,
        seq: [0],
        size: [30, 28],
        row: 0
    },
    {   // ----------- Map on wall -----------
        name: 'Map',
        igName: ['City map', 'Stadtplan'],
        site: 'inScene',
        desc: ['Knowing where it is.', 'Damit ich weiß, wo ich hin muss.'],
        deny: ['No, I\'m just gonna lose it again.', 'Nein, den verlier ich doch nur wieder.'],
        denyUse: ['Let\'s see . . . hm . . . yes, okay.', 'Mal schauen . . . hm . . . ja . . . aha, ok.'],
        src: imgPath + 'map_iS.png', 
        scene: 0,
        seq: [0],
        size: [78, 84],
        row: 0
    },
    {   // ----------- Parka -----------
        name: 'Parka',
        igName: ['Parka', 'Parka'],
        site: 'inScene',
        desc: ['Classical \'feldgrau\'.', 'Klassisch feldgrau.'],
        src: imgPath + 'parka_iS.png', 
        scene: 0,
        seq: [0],
        size: [40, 140],
        row: 0
    },
    // Scene 1 ========================================================================================
    {   // ----------- Small Note R6 -----------
        name: 'Small Note R6',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteR6_iS.png', 
        scene: 1,
        seq: [0],
        size: [22, 12],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Small Note R6',
        site: 'inHand',
        src: imgPath + 'smallNoteR6_iH.png', 
        scene: 1,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note R6',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"R\" is written on the front and the number \"6\" on the back.', 'Da ist vorne der Buchstabe \"R\" und hinten die Zahl \"6\" drauf notiert.'],
        src: imgPath + 'smallNoteR6_iP.png', 
        scene: 1,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Pen -----------
        name: 'Pen',
        igName: ['Pen', 'Kugelschreiber'],
        site: 'inScene',
        desc: ['A pen. I rarely find one, much more often I lose it.', 'Ein Kugelschreiber. Selten finde ich mal einen, viel öfter verliere ich die.'],
        denyUse: ['I don\'t want to.', 'Das will ich nicht.'],
        src: imgPath + 'pen_iS.png', 
        scene: 1,
        seq: [0],
        size: [26, 16],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Pen',
        site: 'inHand',
        src: imgPath + 'pen_iH.png', 
        scene: 1,
        seq: [0],
        size: [52, 24],
        grip: [28, 18],
        row: 0
    },
    {
        name: 'Pen',
        igName: ['Pen', 'Kugelschreiber'],
        site: 'inPocket',
        desc: ['An ordinary pen.', 'Ein Kugelschreiber.'],
        denyUseInv: ['Pfff . . . writing manually with pen and paper - am I a Neanderthal?', 'Pfff . . . händisch schreiben mit Stift und Papier - bin ich Neandertaler?'],
        src: imgPath + 'pen_iP.png', 
        scene: 1,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Loose Wire -----------
        name: 'Loose Wire',
        igName: ['Loose Wire', 'Loser Draht'],
        site: 'inScene',
        desc: ['A loose piece of wire.', 'Ein loses Stück Draht.'],
        denyUse: ['I don\'t want to cause a short.', 'Ich will keinen Kurzschluss verursachen.'],
        src: imgPath + 'loose_wire_iS.png', 
        scene: 1,
        seq: [0],
        size: [12, 36],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Loose Wire',
        site: 'inHand',
        src: imgPath + 'loose_wire_iH.png', 
        scene: 1,
        seq: [0],
        size: [24, 44],
        grip: [10, 38],
        row: 0
    },
    {
        name: 'Loose Wire',
        igName: ['Wire', 'Draht'],
        site: 'inPocket',
        desc: ['A loose piece of red wire.', 'Ein loses Stück Draht. Farbe :  Rot.'],
        denyUseInv: ['Hmm . . .', 'Hmm . . .'],
        src: imgPath + 'loose_wire_iP.png', 
        scene: 1,
        seq: [0],
        size: [48, 32],
        row: 0
    },   
    // non portables ----------------------------------------------------------------------------------
    {   // ----------- Flicker Light -----------
        name: 'Flicker Light',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'hallway_flicker_light_iS.png', 
        scene: 1,
        seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        size: [844, 416],
        row: 0,
        fpS: 8
    },
    {   // ----------- Doorbell A1 -----------
        name: 'Doorbell A1',
        igName: ['My Doorbell.', 'Meine Klingel.'],
        site: 'inScene',
        desc: ['I\'m not home right now.', 'Ich bin gerade nicht zu Hause.'],
        deny: ['Then I\'d have to report myself for bell theft.', 'Dann müsste ich mich selbst anzeigen wegem Klingel-Diebstahls.'],
        denyUse: ['Only if I forgot the keys. Then I can let myself in.', 'Nur wenn ich die Schlüssel vergessen habe. Dann kann ich mich selber hereinlassen.'],
        src: imgPath + 'doorbellA1_iS.png', 
        scene: 1,
        seq: [0],
        size: [12, 22],
        row: 0
    },
    {   // ----------- Doorbell A2 -----------
        name: 'Doorbell A2',
        igName: ['Doorbell \'Knittel\'', 'Klingel \'Knittel\''],
        site: 'inScene',
        desc: ['This is where Mrs. Knittel lives. The name says it all.', 'Hier wohnt Frau Knittel. Der Name ist Programm.'],
        deny: ['Don\'t even think about it! She\'s definitely standing at the peephole right now.', 'Bloß nicht! Die Knittel steht mit Sicherheit gerade am Türspion.'],
        denyUse: ['Oh no, don\'t wake the sleeping dragon.', 'Oh nein, wecke nicht den schlafenden Drachen.'],
        src: imgPath + 'doorbellA2_iS.png', 
        scene: 1,
        seq: [0],
        size: [12, 22],
        row: 0
    },
    {   // ----------- Fuse Box -----------
        name: 'Fuse Box',
        igName: ['Fuse Box', 'Sicherungskasten'],
        site: 'inScene',
        desc: ['Fuses and RCCBs.', 'Sicherungen und FI-Schalter.'],
        deny: ['The whole fuse box? Rather not.', 'Den ganzen Sicherungskasten? Lieber nicht.'],
        src: imgPath + 'fuseBox_iS.png', 
        scene: 1,
        seq: [0],
        size: [78, 96],
        row: 0
    },
    {   // ----------- Bulletin Board -----------
        name: 'Bulletin Board',
        igName: ['Bulletin Board', 'Aushang'],
        site: 'inScene',
        desc: ['House rules. Tenant info. Janitor\'s number.', 'Hausordnung. Mieter-Info. Nummer des Hausmeisters.'],
        deny: ['No need.', 'Kein Bedarf.'],
        src: imgPath + 'bulletin_iS.png', 
        scene: 1,
        seq: [0],
        size: [92, 94],
        row: 0
    },
    {   // ----------- Fire Extinguisher -----------
        name: 'Fire Extinguisher',
        igName: ['Fire Extinguisher', 'Feuerlöscher'],
        site: 'inScene',
        desc: ['Actually bearing the current inspection sticker.', 'Tatsächlich mit aktueller Prüfplakette.'],
        deny: ['What\'s burning?', 'Wo brennt\'s denn?.'],
        denyUse: ['Foam party is so 90s.', 'Schaum-Party ist so 90er.'],
        src: imgPath + 'fireExtinguisher_iS.png', 
        scene: 1,
        seq: [0],
        size: [30, 66],
        row: 0
    },
    {   // ----------- Elevator -----------
        name: 'Elevator',
        igName: ['Elevator', 'Fahrstuhl'],
        site: 'inScene',
        desc: ['It\'s been broken for ages.', 'Seit Ewigkeiten schon außer Betrieb.'],
        deny: ['I can\'t.', 'Das kann ich nicht.'],
        denyUse: ['Still broken, I\'m afraid.', 'Leider immer noch kaputt.'],
        src: imgPath + 'elevator_iS.png', 
        scene: 1,
        seq: [0],
        size: [194, 212],
        row: 0
    },
    {   // ----------- Slip Hazard -----------
        name: 'Slip Hazard',
        igName: ['Slip Hazard', 'Rutschgefahr'],
        site: 'inScene',
        desc: ['Whether or not it was waxed or not - that\'s always there.', 'Ob gebohnert oder nicht - das Schild steht da immer.'],
        deny: ['Then what do I do with it?', 'Und was mach ich dann damit?'],
        src: imgPath + 'slipHazard_iS.png', 
        scene: 1,
        seq: [0],
        size: [76, 90],
        row: 0
    },
    {   // ----------- Fire Alarm -----------
        name: 'Fire Alarm',
        igName: ['Fire Alarm', 'Feuermelder'],
        site: 'inScene',
        desc: ['Activates the fire alarm.', 'Löst den Feueralarm aus.'],
        deny: ['No way.?', 'Auf keinen Fall.'],
        denyUse: ['Not without reason.', 'Nicht ohne Grund.'],
        src: imgPath + 'fireAlarm_iS.png', 
        scene: 1,
        seq: [0],
        size: [36, 36],
        row: 0
    },
    {   // ----------- Light Switch -----------
        name: 'Light Switch',
        igName: ['Light Switch', 'Lichtschalter'],
        site: 'inScene',
        desc: ['Sometimes the fuse blows when you use it.', 'Manchmal fliegt die Sicherung raus, wenn man den benutzt.'],
        deny: ['I can\'t pick it up, but I can use it.', 'Einstecken kann ich den nicht, aber benutzen.'], //['What a nonsense.', 'Wem soll ich Licht an\'s Fahrrad machen.'],
        src: imgPath + 'lightSwitch_iS.png', 
        scene: 1,
        seq: [0],
        size: [18, 18],
        row: 0
    },
    {   // ----------- Pink Slipper -----------
        name: 'Pink Slipper',
        igName: ['Pink Slipper', 'Rosa Pantoffeln'],
        site: 'inScene',
        desc: ['I\'ve never seen Mrs. Knittel wear these before. Maybe you don\'t want to.', 'Ich hab nie gesehen, dass Frau Knittel die trägt. Vielleicht will man das auch nicht.'],
        deny: ['Mrs. Knittel\'s slipper? Oh, nope.', 'Frau Knittels Puschen? Och nö, lass mal.'],
        denyUse: ['*Uhhh* Not the ugly slippers of the Mrs. Knittel.', '*Aaargh* Nicht die hässlichen Pantoffeln der Knittel.'],
        src: imgPath + 'pinkSlipper_iS.png', 
        scene: 1,
        seq: [0],
        size: [28, 16],
        row: 0
    },
    {   // ----------- Apartment Door Open -----------
        name: 'Apartment Door Open',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'apartment_door_open_iS.png', 
        scene: 1,
        seq: [0],
        size: [36, 270],
        row: 0
    },
    // Scene 2 ========================================================================================
    {   // ----------- Small Note L3 -----------
        name: 'Small Note L3',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteL3_iS.png', 
        scene: 2,
        seq: [0],
        size: [18, 20],
        row: 0
    },
    {
        name: 'Small Note L3',
        site: 'inHand',
        src: imgPath + 'smallNoteL3_iH.png', 
        scene: 2,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note L3',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"L\" is written on the front and the number \"3\" on the back.', 'Da ist vorne der Buchstabe \"L\" und hinten die Zahl \"3\" drauf notiert.'],
        src: imgPath + 'smallNoteL3_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Small Note E4 -----------
        name: 'Small Note E4',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteE4_iS.png', 
        scene: 2,
        seq: [0],
        size: [14, 20],
        row: 0
    },
    {
        name: 'Small Note E4',
        site: 'inHand',
        src: imgPath + 'smallNoteE4_iH.png', 
        scene: 2,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note E4',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The Letter \"E\" is written on the front and the number \"4\" on the back.', 'Da ist vorne der Buchstabe \"E\" und hinten die Zahl \"4\" drauf notiert.'],
        src: imgPath + 'smallNoteE4_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Paper Mug -----------
        name: 'Paper Mug',
        igName: ['Paper Mug', 'Pappbecher'],
        site: 'inScene',
        desc: ['A carelessly discarded paper cup.', 'Ein unachtsam weggeworfener Pappbecher.'],
        denyUse: ['There\'s nothing in it.', 'Da ist nichts drin.'],
        src: imgPath + 'paper_mug_iS.png', 
        scene: 2,
        seq: [0],
        size: [26, 18],
        row: 0
    },
    {
        name: 'Paper Mug',
        site: 'inHand',
        src: imgPath + 'paper_mug_iH.png', 
        scene: 2,
        seq: [0],
        size: [26, 60],
        grip: [20, 30],
        row: 0
    },
    {
        name: 'Paper Mug',
        igName: ['Paper Mug', 'Pappbecher'],
        site: 'inPocket',
        desc: ['Paper cups are coated inside. They must be disposed of as recyclable packaging.', 'Pappbecher sind innen beschichtet. Sie müssen als recycelbare Verpackung entsorgt werden.'],
        denyUseInv: ['It\'s useless. Maybe I should just dispose of this.', 'Leer zu nichts zu gebrauchen. Vielleicht sollte ich den einfach nur entsorgen.'],
        src: imgPath + 'paper_mug_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Old Teddy -----------
        name: 'Teddy',
        igName: ['Teddy Bear', 'Plüschbär'],
        site: 'inScene',
        desc: ['A battered stuffed bear.', 'Ein ramponierter Stoffbär.'],
        denyUse: ['It looks dirty. I really don\'t want to cuddle with.', 'Der sieht dreckig aus. Kuscheln will ich damit wirklich nicht.'],
        src: imgPath + 'teddy_iS.png', 
        scene: 2,
        seq: [0],
        size: [68, 70],
        row: 0
    },
    {
        name: 'Teddy',
        site: 'inHand',
        src: imgPath + 'teddy_iH.png', 
        scene: 2,
        seq: [0],
        size: [60, 68],
        grip: [30, 60],
        row: 0
    },
    {
        name: 'Teddy',
        igName: ['Teddy Bear', 'Plüschbär'],
        site: 'inPocket',
        desc: ['Heartbreaking, even though it\'s seen better days.', 'Herzzerreißend, auch wenn er schon bessere Tage gesehen hat.'],
        denyUseInv: ['It looks dirty. I really don\'t want to cuddle with.', 'Der sieht dreckig aus. Kuscheln will ich damit wirklich nicht.'],
        src: imgPath + 'teddy_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Apple Core -----------
        name: 'Apple Core',
        igName: ['Apple Core', 'Apfelgriebs'],
        site: 'inScene',
        desc: ['One apple a day keeps the doctor away.', 'Der Apfel ist bereits gegessen.'],
        denyUse: ['* Urgs *', '* Urgs *'],
        src: imgPath + 'apple_core_iS.png',
        seq: [0],
        size: [32, 16],
        row: 0
    },
    {
        name: 'Apple Core',
        site: 'inHand',
        src: imgPath + 'apple_core_iH.png', 
        scene: 2,
        seq: [0],
        size: [26, 48],
        grip: [13, 40],
        row: 0
    },
    {
        name: 'Apple Core',
        igName: ['Apple Core', 'Apfelgriebs'],
        site: 'inPocket',
        desc:  ['Sometimes I wonder what I put in my pockets ?!', 'Manchmal wundere ich mich, was ich mir alles in die Taschen stecke ?!'],
        denyUseInv: ['One apple a day keeps the doctor away.', 'Der Apfel ist bereits gegessen.'],
        src: imgPath + 'apple_core_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Beer Bottles -----------
        name: 'Beer Bottles',
        igName: ['Beer Bottles', 'Bier Flaschen'],
        site: 'inScene',
        desc: ['Beer bottles without deposits.', 'Bierflaschen ohne Pfand.'],
        denyUse: ['Drunk to the last. * Urgs *', 'Ausgetrunken. * Urgs *'],
        src: imgPath + 'beer_bottles_iS.png',
        seq: [0],
        size: [38, 38],
        row: 0
    },
    {
        name: 'Beer Bottles',
        site: 'inHand',
        src: imgPath + 'beer_bottles_iH.png', 
        scene: 2,
        seq: [0],
        size: [44, 66],
        grip: [22, 56],
        row: 0
    },
    {
        name: 'Beer Bottles',
        igName: ['Beer Bottles', 'Bier Flaschen'],
        site: 'inPocket',
        desc:  ['Beer bottles without deposits.', 'Bierflaschen ohne Pfand.'],
        denyUseInv: ['I can only get rid of them.', 'Die kann ich nur noch entsorgen.'],
        src: imgPath + 'beer_bottles_iP.png', 
        scene: 2,
        seq: [0],
        size: [48, 32],
        row: 0
    },  
    // non portables ----------------------------------------------------------------------------------    
    {   // ----------- Trash Can Down -----------
        name: 'Trash Can Down',
        igName: ['Trash Can', 'Mülltonne'],
        site: 'inScene',
        desc: ['The trash can fell again.', 'Die Mülltonne ist schon wieder umgestürzt.'],
        deny: ['Nah, it\'s impossible. But I can keep my hood clean. It\'s not that hard for me.', 'Nah, mitnehmen ist unmöglich. Aber ich kann in meiner Nachbarschaft für ein bisschen Ordnung sorgen. Da bricht mir kein Zacken aus der Krone.'],
        src: imgPath + 'trash_can_down_iS.png', 
        scene: 1,
        seq: [0],
        size: [162, 116],
        row: 0
    },    
    {   // ----------- Maiko Graffiti -----------
        name: 'Maiko Graffiti',
        igName: ['Maiko Graffiti', 'Maiko Graffiti'],
        site: 'inScene',
        desc: ['Japanese graffiti art. Nice.', 'Japanische Graffitikunst. Schick.'],
        deny: ['Can\'t do that.', 'Kann ich nicht.'],
        denyUse: ['I really can\'t.', 'Das kann ich wirklich nicht.'],
        src: imgPath + 'maiko_graffiti_iS.png', 
        scene: 2,
        seq: [0],
        size: [156, 158],
        row: 0
    },
    {   // ----------- Numberplate 42 -----------
        name: 'Numberplate 42',
        igName: ['House Number 42', 'Hausnummer 42'],
        site: 'inScene',
        desc: ['Answer to the ultimate question of life, the universe, and everything.', 'Die Antwort auf das Leben das Universum und den ganzen Rest.'],
        deny: ['Then what am I supposed to tell the pizza delivery man where to deliver?', 'Was soll ich dann dem Pizzaboten sagen, wohin er liefern soll?'],
        denyUse: ['How\'s that supposed to work?', 'Wie soll das gehen?'],
        src: imgPath + 'numberplate42_iS.png', 
        scene: 2,
        seq: [0],
        size: [24, 24],
        row: 0
    },     
    {   // ----------- Window Cat -----------
        name: 'Window Cat',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'windowCat_iS.png', 
        scene: 2,
        seq: [0, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 0],
        size: [34, 42],
        row: 0,
        once: false,
        fpS: 4
    },
    {   // ----------- Newspaper Bild -----------
        name: 'Newspaper Bild',
        igName: ['\"The Silly\'.', '\"Die Blöd\".'],
        site: 'inScene',
        desc: ['Fear, hate, tits and the weather report.', '\'Angst, Hass, Titten und der Wetterbericht.\''],
        deny: ['I don\'t have any fish to wrap right now.', 'Ich hab gerade keinen Fisch zum einwickeln.'],
        denyUse: ['There\'s no way I\'m reading that gossip paper', 'Ich werde auf keinen Fall dieses Drecksblatt lesen.'],
        src: imgPath + 'newspaperBild_iS.png', 
        scene: 2,
        seq: [0],
        size: [40, 94],
        row: 0
    },
    {   // ----------- Newspaper Harke -----------
        name: 'Newspaper Harke',
        igName: ['\"The Rake\".', '\"Die Harke\".'],
        site: 'inScene',
        desc: ['The local newspaper.', 'Das Lokalblatt.'],
        deny: ['I don\'t need it right now.', 'Brauch ich gerade nicht.'],
        denyUse: ['I read the local news online.', 'Ich lese die Lokalnachrichten online.'],
        src: imgPath + 'newspaperHarke_iS.png', 
        scene: 2,
        seq: [0],
        size: [48, 92],
        row: 0
    },
    {   // ----------- Ron Gilbert Str -----------
        name: 'Ron Gilbert Str',
        igName: ['Ron Gilbert Street.', 'Ron Gilbert Str.'],
        site: 'inScene',
        desc: ['Actual, very near lives a guy by the name of \'Threepwood\'.', 'Um die Ecke wohnt tatsächlich ein Kerl mit dem Namen \'Dreiholz\'.'],
        deny: ['Nope.', 'Nö.'],
        denyUse: ['Some things you should never \'use\'!', 'Manche Dinge sollte man niemals \'benutzen\'!'],
        src: imgPath + 'streetname_ron_iS.png', 
        scene: 2,
        seq: [0],
        size: [88, 18],
        row: 0,
    }, 
    {   // ----------- Pylon -----------
        name: 'Pylon',
        igName: ['Traffic Cone', 'Absperrkegel'],
        site: 'inScene',
        desc: ['Either an advertising display for media player software or an ordinary pothole.', 'Entweder ein Werbeaufsteller für Media-Player-Software oder ein ordinäres Schlagloch.'],
        deny: ['Shall I put this on my head?', 'Soll ich den auf den Kopf setzen?'],
        src: imgPath + 'pylon_iS.png', 
        scene: 2,
        seq: [0],
        size: [54, 74],
        row: 0
    },
    // Scene 3 =====================================================================================
    {   // ----------- Small Note U5 -----------
        name: 'Small Note U5',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteU5_iS.png', 
        scene: 3,
        seq: [0],
        size: [20, 14],
        row: 0
    },
    {
        name: 'Small Note U5',
        site: 'inHand',
        src: imgPath + 'smallNoteU5_iH.png', 
        scene: 3,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note U5',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"U\" is written on the front and the number \"5\" on the back.', 'Da ist vorne der Buchstabe \"U\" und hinten die Zahl \"5\" drauf notiert.'],
        src: imgPath + 'smallNoteU5_iP.png', 
        scene: 3,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    // non portables -------------------------------------------------------------------------------
    {   // ----------- ATM -----------
        name: 'ATM',
        igName: ['ATM', 'Geldautomat'],
        site: 'inScene',
        desc: ['Cash with card and PIN.', 'Bargeld mit Karte und PIN.'],
        deny: ['I prefer the classic in-store bank robbery with stocking mask.', 'Ich bevorzuge den klassischen Bankraub mit Strumpfmaske in der Filiale.'],
        denyUse: ['I\'m afraid not. Account balance irrelevant.', 'Leider nichts zu holen. Kontostand unerheblich.'],
        src: imgPath + 'atm_iS.png', 
        scene: 3,
        seq: [0],
        size: [70, 198],
        row: 0
    },
    {   // ----------- Doggo -----------
        name: 'Doggo',
        igName: ['Doggo', 'Doggo'],
        site: 'inScene',
        desc: ['Doggo is attached to the downpipe. He looks friendly.', 'Doggo ist am Fallrohr angebunden und guckt freundlich drein.'],
        deny: ['Come on.', 'Nicht doch.'],
        denyUse: ['I\'m afraid not. Account balance irrelevant.', 'Vermutlich mag er auch Pizza. Jeder Hund mag Pizza.'],
        src: imgPath + 'doggo_iS.png', 
        scene: 3,
        seq: [0, 1],
        size: [76, 106],
        row: 0,
        fpS: 12,
    },
    {   // ----------- Luca Pizzeria Sign -----------
        name: 'Luca Pizzeria Sign',
        igName: ['Luca Pizzeria Sign', 'Luca Pizzeria Schild'],
        site: 'inScene',
        desc: ['Luca\'s Pizzeria is known for the best pizzas in town.', 'Lucas Pizzeria ist bekannt für die besten Pizzen der Stadt.'],
        deny: ['No idea what to do with it?!', 'Keine Ahnung, was ich damit soll?!'],
        src: imgPath + 'luca_pizzeria_sign_iS.png', 
        scene: 3,
        seq: [0],
        size: [400, 72],
        row: 0
    },
    {   // ----------- Postings -----------
        name: 'Postings sc03',
        igName: ['Old notes and stickers.', 'Alte Zettel und Sticker.'],
        site: 'inScene',
        desc: ['\"Kater Felix escape\" to \"Free beer in a retirement home\" everything is included.', 'Von \"Kater Felix entlaufen\" bis \"Freibier im Altenheim\" alles dabei.'],
        deny: ['I\'m not gonna cut that.', 'Das knipper ich nicht ab.'],
        src: imgPath + 'postings_sc03_iS.png', 
        scene: 3,
        seq: [0],
        size: [60, 124],
        row: 0
    },
    {   // ----------- Guitar Case -----------
        name: 'Guitar Case',
        igName: ['Guitar Case', 'Gitarrenkoffer'],
        site: 'inScene',
        desc: ['If this were a mafia epic, I\'d assume it contained a submachine gun.', 'Wäre dies ein Maffia-Epos, würde ich eine Maschinenpistole darin vermuten.'],
        deny: ['That\'s not mine at all.', 'Das gehört mir gar nicht.'],
        denyUse: ['What am I supposed to put in there?', 'Was soll ich denn da reinlegen?'],
        src: imgPath + 'guitar_case_iS.png', 
        scene: 3,
        seq: [0],
        size: [64, 122],
        row: 0
    },
    {   // ----------- Change Mug -----------
        name: 'Change Mug',
        igName: ['Mug', 'Becher'],
        site: 'inScene',
        desc: ['Mug of change.', 'Becher mit Kleingeld.'],
        deny: ['No way! It isn\'t mine.', 'Auf keinen Fall!  Gehört mir doch gar nicht.'],
        denyUse: ['I could give some change.', 'Ich könnte etwas Kleingeld geben.'],
        src: imgPath + 'change_mug_iS.png', 
        scene: 3,
        seq: [0],
        size: [18, 22],
        row: 0
    },
    {   // ----------- Pizza Box sc03 -----------
        name: 'Pizza Box sc03',
        igName: ['Pizza Box', 'Pizzaschachtel'],
        site: 'inScene',
        desc: ['A pizza box in front of a pizzeria ... Yeah!', 'Eine Pizzaschachtel vor einer Pizzeria . . . Wow!'],
        deny: ['I have a complete collection at home.', 'Zu Hause habe ich eine komplette Sammlung.'],
        src: imgPath + 'pizzabox_sc03_iS.png', 
        scene: 3,
        seq: [0],
        size: [62, 20],
        row: 0
    },
    {   // ----------- Hydrant -----------
        name: 'Hydrant',
        igName: ['Fire Hydrant', 'Hydrant'],
        site: 'inScene',
        desc: ['Quite an old-fashioned model.', 'Ein ziemlich altmodisches Modell.'],
        deny: ['Then where\'s Doggo gonna pee on?', 'Und wo soll Hundchen dann sein Geschäft verichten?'],
        src: imgPath + 'hydrant_iS.png', 
        scene: 3,
        seq: [0],
        size: [38, 82],
        row: 0
    },
    {   // ----------- Side Entrance -----------
        name: 'Side Entrance sc03',
        igName: ['Side Entrance', 'Nebeneingang'],
        site: 'inScene',
        desc: ['That\'s probably going straight into Luca\'s kitchen.', 'Da geht\'s wahrscheinlich direkt in Lucas Küche.'],
        deny: ['I can\'t take an entrance. Not even a side entrance.', 'Einen Eingang kann ich nicht nehmen. Selbst einen Nebeneingang nicht.'],
        denyUse: ['It\'s always locked', 'Da ist immer verschlossen.'],
        src: imgPath + 'side_entrance_sc03_iS.png', 
        scene: 3,
        seq: [0],
        size: [80, 192],
        row: 0
    },
    {   // ----------- Visions of the Future: PSO J318.5-22-----------
        name: 'VotF_PSO J318.5-22',
        igName: ['PSO J318.5-22', 'PSO J318.5-22'],
        site: 'inScene',
        desc: ['Visions of the Future:      PSO J318.5-22 - rogue planet at a distance of 80 light years.', 'Visions of the Future:      PSO J318.5-22 - freifliegnder Planet in 80 Lichtjahren Entfernung.'],
        deny: ['jpl.nasa.gov/visions-of-the-future', 'jpl.nasa.gov/visions-of-the-future'],
        denyUse: ['It just seems decorative, I can\'t use that.','Das scheint nur Deko, das kann ich nicht benutzen.'],
        src: imgPath + 'VotF_PSO J318.5-22_iS.png', 
        scene: 3,
        seq: [0],
        size: [92, 136],
        row: 0
    },
    {   // ----------- AC Fan -----------
        name: 'AC Fan',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'ac_fan_iS.png', 
        scene: 3,
        seq: [0, 1, 2, 3],
        size: [78, 84],
        row: 0,
        fpS: 2
    },
    // Scene 4 =====================================================================================
    {   // ----------- Small Note M2 -----------
        name: 'Small Note M2',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteM2_iH.png', 
        scene: 43,
        seq: [0],
        size: [48, 48],
        row: 0
    },
    {
        name: 'Small Note M2',
        site: 'inHand',
        src: imgPath + 'smallNoteM2_iH.png', 
        scene: 3,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note M2',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"M\" is written on the front and the number \"2\" on the back.', 'Da ist vorne der Buchstabe \"M\" und hinten die Zahl \"2\" drauf notiert.'],
        src: imgPath + 'smallNoteM2_iP.png', 
        scene: 4,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Napkins -----------
        name: 'Napkin',
        igName: ['Napkin', 'Serviette'],
        site: 'inScene',
        desc: ['A paper napkin dispenser.', 'Ein Papierservietten Spender.'],
        deny: ['I already have.', 'Hab ich schon.'],
        src: imgPath + 'napkin_iS.png', 
        scene: 4,
        seq: [0],
        size: [28, 20],
        row: 0
    },
    {
        name: 'Napkin',
        igName: ['Napkin', 'Serviette'],
        site: 'inHand',
        src: imgPath + 'napkin_iH.png', 
        scene: 4,
        seq: [0],
        size: [40, 50],
        grip: [22, 44],
        row: 0
    },
    {
        name: 'Napkin',
        igName: ['Napkin', 'Serviette'],
        site: 'inPocket',
        desc: ['Simple paper napkin.', 'Eine einfache Papierserviette.'],
        src: imgPath + 'napkin_iP.png', 
        scene: 4,
        seq: [0],
        size: [48, 32],
        row: 0
    },    
    // non portables -------------------------------------------------------------------------------
    {   // ----------- Drinks Refrigerator -----------
        name: 'Fridge',
        igName: ['Fridge', 'Kühlschrank'],
        site: 'inScene',
        desc: ['Soft drinks and beer.', 'Soft Drinks und Bier.'],
        deny: ['If I\'m thirsty, I\'ll buy one - not now.', 'Wenn ich Durst habe, kauf ich eins - jetzt nicht.'],
        src: imgPath + 'fridge_iS.png', 
        scene: 4,
        seq: [0],
        size: [84, 204],
        row: 0
    },
    {   // ----------- Pizza Menu -----------
        name: 'Pizza Menu',
        igName: ['Pizza Menu', 'Pizza Karte'],
        site: 'inScene',
        desc: ['All classic pizzas at a good price.', 'Alle Pizza-Klassiker zum fairen Preis.'],
        deny: ['I already have a flyer at home.', 'Ich hab bereits einen Flyer zu Hause.'],
        denyUse: ['I know Luca\'s offer well enough', 'Ich kenne Lucas Angebot gut genug.'],
        src: imgPath + 'pizza_menu_iS.png', 
        scene: 4,
        seq: [0],
        size: [16, 32],
        row: 0
    },
    {   // ----------- Pizza Deals -----------
        name: 'Pizza Deals',
        igName: ['Pizza Deals', 'Pizza Angebote'],
        site: 'inScene',
        desc: ['Everything the pizza heart desires.', 'Alles was das Pizza-Herz begehrt.'],
        deny: ['Just how?', 'Wie denn?'],
        src: imgPath + 'pizza_deals_iS.png', 
        scene: 4,
        seq: [0],
        size: [344, 90],
        row: 0
    },
    {   // ----------- Lisa Card -----------
        name: 'Lisa Card',
        igName: ['Lisa card', 'Lisa Karte'],
        site: 'inScene',
        desc: ['Lisa Card accepted.', 'Lisa Karte akzeptiert.'],
        deny: ['I just take Mexican Excess.', 'Ich nehme nur Mexican Exzess.'],
        src: imgPath + 'lisa_iS.png', 
        scene: 4,
        seq: [0],
        size: [44, 30],
        row: 0
    },
    {   // ----------- Pizza Peel -----------
        name: 'Pizza Peel',
        igName: ['Pizza Peel', 'Pizzaschaufel'],
        site: 'inScene',
        desc: ['An old pizza peel, optional insect slap for oversized creatures.', 'Eine alte Pizzaschaufel, wahlweise Insektenklatsche für übergroße Viecher.'],
        deny: ['I don\'t want to take that.', 'Das möchte ich nicht nehmen.'],
        denyUse: ['Who should I slap?', 'Wen soll ich ohrfeigen?'],
        src: imgPath + 'pizza_peel_iS.png', 
        scene: 4,
        seq: [0],
        size: [136, 46],
        row: 0
    },
    {   // ----------- Stack of Pizza Boxes -----------
        name: 'Stack Pizzaboxes',
        igName: ['Pizza Boxes', 'Pizzaschachteln'],
        site: 'inScene',
        desc: ['A whole stack of empty pizza boxes.', 'Ein ganzer Stapel leerer Pizzaschachteln.'],
        deny: ['It doesn\'t make any sense until Luca\'s got nothing in there.', 'Bevor Luca nichts reingetan hat, macht das überhaupt keinen Sinn.'],
        src: imgPath + 'stack_pizzaboxes_iS.png', 
        scene: 4,
        seq: [0],
        size: [72, 52],
        row: 0
    },  
    {   // ----------- Awards & Mentions -----------
        name: 'Awards',
        igName: ['Awards & Mentions', 'Auszeichnungen'],
        site: 'inScene',
        desc: ['Word\'s got around how well Luca understands his trade.', 'Hat sich wohl rumgesprochen, dass Luca sein Handwerk versteht.'],
        deny: ['I would never do that.', 'Das würde ich nie tun.'],
        src: imgPath + 'awards_iS.png', 
        scene: 4,
        seq: [0],
        size: [104, 138],
        row: 0
    },    
    {   // ----------- Photos -----------
        name: 'Photos',
        igName: ['Pictures', 'Bilder'],
        site: 'inScene',
        desc: ['Photographs of the local celebrities visiting Luca.', 'Fotografien der lokalen Prominenz zu Besuch bei Luca.'],
        deny: ['They\'re of no value to me.', 'Die haben keinen Wert für mich.'],
        src: imgPath + 'photos_sc04_iS.png', 
        scene: 4,
        seq: [0],
        size: [40, 142],
        row: 0
    },    
    {   // ----------- TV Pizzeria -----------
        name: 'TV Pizzeria',
        igName: ['TV', 'TV'],
        site: 'inScene',
        desc: ['News from Luca\'s homeland.', 'Nachrichten aus Lucas Heimat.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'TV_pizzeria_iS.png', 
        scene: 4,
        seq: [0, 1, 2, 3],
        size: [110, 76],
        row: 0,
        fpS: 8
    },
    {   // ----------- Guitar Guy -----------
        name: 'Guitar Guy Outside',
        igName: ['Steven', 'Steven'],
        site: 'inScene',
        desc: ['Steven\'s guitar playing is still good to hear in here.', 'Stevens Gitarrenspiel kann man auch hier drinnen noch gut hören.'],
        deny: ['Baloney.', 'Unsinn.'],
        src: imgPath + 'guitar_guy_outside_iS.png', 
        scene: 4,
        seq: [0],
        size: [34, 102],
        row: 0
    },
    // Scene 5 - Dumping Place =====================================================================================
    {   // ----------- Small Note O7 -----------
        name: 'Small Note O7',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteO7_iS.png', 
        scene: 5,
        seq: [0],
        size: [28, 10],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Small Note O7',
        site: 'inHand',
        src: imgPath + 'smallNoteO7_iH.png', 
        scene: 5,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note O7',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"O\" is written on the front and the number \"7\" on the back.', 'Da ist vorne der Buchstabe \"O\" und hinten die Zahl \"7\" drauf notiert.'],
        src: imgPath + 'smallNoteO7_iP.png', 
        scene: 5,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    // {   // ----------- Blue Garbage Bag -----------
    //     name: 'Blue Garbage Bag',
    //     igName: ['Blue Garbage Bag', 'Blauer Müllbeutel'],
    //     site: 'inScene',
    //     desc: ['A blue garbage bag with residual waste.', 'Ein blauer Müllbeutel mit Restmüll.'],
    //     denyUse: ['Just trash. I\'m not gonna poke around in it.', 'Nur Müll. Ich werde nicht darin herumstochern.'],
    //     src: imgPath + 'blue_bag_iS.png', 
    //     scene: 5,
    //     seq: [0],
    //     size: [42, 40],
    //     row: 0
    // },
    // {
    //     name: 'Blue Garbage Bag',
    //     site: 'inHand',
    //     src: imgPath + 'blue_bag_iH.png', 
    //     scene: 5,
    //     seq: [0],
    //     size: [48, 68],
    //     grip: [24, 58],
    //     row: 0
    // },
    // {
    //     name: 'Blue Garbage Bag',
    //     igName: ['Blue Garbage Bag', 'Blauer Müllbeutel'],
    //     site: 'inPocket',
    //     desc: ['A blue garbage bag with residual waste.', 'Ein blauer Müllbeutel mit Restmüll.'],
    //     denyUseInv: ['Disgusting.', 'Ein bisschen eklig.'],
    //     src: imgPath + 'blue_bag_iP.png', 
    //     scene: 5,
    //     seq: [0],
    //     size: [48, 32],
    //     row: 0
    // },
    {   // ----------- Wine Bottle Crate -----------
        name: 'Wine Bottle Crate',
        igName: ['Wine Bottles Crate', 'Stiege mit Flaschen'],
        site: 'inScene',
        desc: ['Empty wine bottles in a crate.', 'Leere Weinflaschen in einer Stiege.'],
        denyUse: ['There\'s nothing in there - what to do with it?', 'Da ist nichts drin - was also damit anstellen?'],
        src: imgPath + 'wine_bottle_crate_iS.png', 
        scene: 5,
        seq: [0],
        size: [66, 54],
        row: 0
    },
    {
        name: 'Wine Bottle Crate',
        site: 'inHand',
        src: imgPath + 'empty_wine_bottles_iH.png', 
        scene: 5,
        seq: [0],
        size: [36, 76],
        grip: [18, 50],
        row: 0
    },
    {
        name: 'Wine Bottle Crate',
        igName: ['Empty wine bottles', 'Leere Weinflaschen'],
        site: 'inPocket',
        desc: ['Empty wine bottles - they must be thrown into the appropriate container.', 'Leere Weinflaschen - die müssen in den passenden Container geworfen werden.'],
        denyUseInv: ['Empty.', 'Leer.'],
        src: imgPath + 'empty_wine_bottles_iP.png', 
        scene: 5,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Empty Wine Bottles -----------
        name: 'Empty Wine Bottles',
        igName: ['Empty wine bottles', 'Leere Weinflaschen'],
        site: 'inScene',
        desc: ['Empty wine bottles - they must be thrown into the appropriate container.', 'Leere Weinflaschen - die müssen in den passenden Container werfen.'],
        denyUse: ['Empty.', 'Leer.'],
        src: imgPath + 'empty_wine_bottles_iS.png', 
        scene: 5,
        seq: [0],
        size: [44, 40],
        row: 0
    },
    {
        name: 'Empty Wine Bottles',
        site: 'inHand',
        src: imgPath + 'empty_wine_bottles_iH.png', 
        scene: 5,
        seq: [0],
        size: [36, 76],
        grip: [18, 50],
        row: 0
    },
    {
        name: 'Empty Wine Bottles',
        igName: ['Empty wine bottles', 'Leere Weinflaschen'],
        site: 'inPocket',
        desc: ['Empty wine bottles - they must be thrown into the appropriate container.', 'Leere Weinflaschen - die müssen in den passenden Container werfen.'],
        denyUseInv: ['Empty.', 'Leer.'],
        src: imgPath + 'empty_wine_bottles_iP.png', 
        scene: 5,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    // non portables -------------------------------------------------------------------------------
    {   // ----------- Organic Waste Bin -----------
        name: 'Organic Waste Bin',
        igName: ['Organic Waste Bin', 'Biotonne'],
        site: 'inScene',
        desc: ['The right place for organic waste.', 'Für organische Abfälle.'],
        deny: ['Nah, it stinks.', 'Nah, das müffelt doch.'],
        denyUse: ['I don\'t have anything to dispose of right now.', 'Hätte ich eine Bananenschale, müsste ich mich entscheiden, die hier fachgerecht zu entsorgen oder als klassische Ausrutsch-Falle in der Gegend zu platzieren. Hab aber keine - Glück gehabt.'],
        src: imgPath + 'organic_waste_bin_iS.png', 
        scene: 5,
        seq: [0],
        size: [48, 116],
        row: 0
    },
    {   // ----------- Recyling Bin -----------
        name: 'Recyling Bin',
        igName: ['Recyling Bin', 'Gelbe Tonne'],
        site: 'inScene',
        desc: ['For recyclable packages.', 'Für wiederverwertbare Verpackungen.'],
        deny: ['Putting it in comes first.', 'Reintun geht vor Rausnehmen.'],
        denyUse: ['I don\'t have anything to dispose of right now.', 'Plastikdeckel leerer Verpackungen sind hier richtig aufgehoben. Verwendet man sie allerdings als Rassel zwischen den Faharadspeichen, ist man natürlich die coolste Sau im Dorf.'],
        src: imgPath + 'recycling_bin_iS.png', 
        scene: 5,
        seq: [0],
        size: [118, 116],
        row: 0
    },
    {   // ----------- Residual Waste Bin -----------
        name: 'Residual Waste Bin',
        igName: ['Residual Waste Bin', 'Restmüll-Tonne'],
        site: 'inScene',
        desc: ['For waste that cannot be disposed of elsewhere, with the exception of hazardous waste, of course.', 'Für den Müll, der nicht an anderer Stelle entsorgt werden kann, mit Ausnahme von Sondermüll natürlich.'],
        deny: ['No.', 'Nein.'],
        denyUse: ['Dispose of the cat\'s litter box here.', 'Ein sauberes Katzenklo macht die Katze froh. Hier zu entsorgen.'],
        src: imgPath + 'residual_waste_bin_iS.png', 
        scene: 5,
        seq: [0],
        size: [48, 116],
        row: 0
    },
    {   // ----------- Bottle Bank Green -----------
        name: 'Bottle Bank Green',
        igName: ['Bottle Bank', 'Altglascontainer'],
        site: 'inScene',
        desc: ['The bottle bank for green glass.', 'Der Altglascontainer für grünes Glas.'],
        deny: ['Shards bring good luck, but no thanks.', 'Scherben bringen zwar Glück, aber nein danke.'],
        denyUse: ['Funfact :  Blue glass also belongs here.', 'Funfact :  Blaues Glas gehört auch hier rein.'],
        src: imgPath + 'bottle_bank_green_iS.png', 
        scene: 5,
        seq: [0],
        size: [158, 126],
        row: 0
    },
    {   // ----------- Bottle Bank Brown -----------
        name: 'Bottle Bank Brown',
        igName: ['Bottle Bank', 'Altglascontainer'],
        site: 'inScene',
        desc: ['The bottle bank for brown glass.', 'Der Altglascontainer für braunes Glas.'],
        deny: ['Shards bring good luck, but no thanks.', 'Scherben bringen zwar Glück, aber nein danke.'],
        denyUse: ['The other day I sat on my sunglasses. I was able to dispose of the ruined glasses here. § * Hmpf *', 'Neulich hab ich mich auf meine Sonnenbrille gesetzt. Die ruinierten Gläser konnte ich hier entsorgen. § * Hmpf *'],
        src: imgPath + 'bottle_bank_green_iS.png', 
        scene: 5,
        seq: [0],
        size: [158, 126],
        row: 0
    },
    {   // ----------- Bottle Bank White -----------
        name: 'Bottle Bank White',
        igName: ['Bottle Bank', 'Altglascontainer'],
        site: 'inScene',
        desc: ['The bottle bank for white glass.', 'Der Altglascontainer für weißes Glas.'],
        deny: ['Shards bring good luck, but no thanks.', 'Scherben bringen zwar Glück, aber nein danke.'],
        denyUse: ['At last I disposed of the unspeakably ugly vase of Mrs. Knittel, which she had generously given me when I moved in.', 'Zuletzt habe ich die unsagbar hässliche Vase von Frau Knittel, die sie mir bei meinem Einzug generös überreicht hatte, hier entsorgt.'],
        src: imgPath + 'bottle_bank_white_iS.png', 
        scene: 5,
        seq: [0],
        size: [124, 100],
        row: 0
    },
    {   // ----------- Swarm of Birds -----------
        name: 'Swarm',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'swarm_iS.png', 
        scene: 5,
        seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        size: [168, 38],
        row: 0,
        fpS: 6
    },
    // Scene 6 - Back Alley =====================================================================================
    {   // ----------- Plastic Bottle -----------
        name: 'Plastic Bottle',
        igName: ['Plastic Bottle', 'Plastik-Flasche'],
        site: 'inScene',
        desc: ['An empty plastic bottle without a deposit.', 'Eine leere Plastik-Flasche ohne Pfand.'],
        denyUse: ['Empty.', 'Nichts drin.'],
        src: imgPath + 'plastic_bottle_iS.png', 
        scene: 6,
        seq: [0],
        size: [18, 48],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Plastic Bottle',
        site: 'inHand',
        src: imgPath + 'plastic_bottle_iH.png', 
        scene: 6,
        seq: [0],
        size: [28, 80],
        grip: [14, 64],
        row: 0
    },
    {
        name: 'Plastic Bottle',
        igName: ['Plastic Bottle', 'Plastik-Flasche'],
        site: 'inPocket',
        desc: ['An empty plastic bottle without a deposit.', 'Eine leere Plastik-Flasche ohne Pfand.'],
        denyUseInv: ['Empty.', 'Nichts drin.'],
        src: imgPath + 'plastic_bottle_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    }, 
    {   // ----------- Plastic Bag -----------
        name: 'Plastic Bag',
        igName: ['Plastic Bag', 'Einkaufstüte'],
        site: 'inScene',
        desc: ['A grocery bag from Addi supermarket.', 'Eine Einkaufstüte vom Addi-Supermarkt.'],
        denyUse: ['No, I can\'t do anything with it.', 'Nein, ich kann damit nichts anfangen.'],
        src: imgPath + 'plastic_bag_iS.png', 
        scene: 6,
        seq: [0],
        size: [124, 46],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Plastic Bag',
        site: 'inHand',
        src: imgPath + 'plastic_bag_iH.png', 
        scene: 6,
        seq: [0],
        size: [66, 70],
        grip: [33, 4],
        row: 0
    },
    {
        name: 'Plastic Bag',
        igName: ['Plastic Bag', 'Einkaufstüte'],
        site: 'inPocket',
        desc: ['A grocery bag from the Addi supermarket.', 'Eine Einkaufstüte vom Addi-Supermarkt.'],
        denyUseInv: ['I don\'t know what to do with it.', 'Ich weiß nicht, was ich damit anfengen soll.'],
        src: imgPath + 'plastic_bag_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Rubber Duck -----------
        name: 'Rubber Duck',
        igName: ['Rubber Duck', 'Badeente'],
        site: 'inScene',
        desc: ['An old rubber duck.', 'Ein altes Qietscheentchen.'],
        denyUse: ['* Quack, quack *', '\" Die Ente bleibt draußen! \"'],
        src: imgPath + 'rubber_duck_iS.png', 
        scene: 6,
        seq: [0],
        size: [34, 30],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Rubber Duck',
        site: 'inHand',
        src: imgPath + 'rubber_duck_iH.png', 
        scene: 6,
        seq: [0],
        size: [50, 52],
        grip: [26, 45],
        row: 0
    },
    {
        name: 'Rubber Duck',
        igName: ['Battery', 'Batterie'],
        site: 'inPocket',
        desc: ['An old rubber duck.', 'Ein altes Qietscheentchen.'],
        denyUseInv: ['* Quack, quack *', '\" Die Ente bleibt draußen! \"'],
        src: imgPath + 'rubber_duck_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    }, 
    {   // ----------- Old Battery -----------
        name: 'Battery',
        igName: ['Battery', 'Batterie'],
        site: 'inScene',
        desc: ['It\'s an old battery.', 'Eine alte Batterie.'],
        denyUse: ['I prefer rechargeables.', 'Ich bervorzuge Akkus.'],
        src: imgPath + 'battery_iS.png', 
        scene: 6,
        seq: [0],
        size: [30, 14],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Battery',
        site: 'inHand',
        src: imgPath + 'battery_iH.png', 
        scene: 6,
        seq: [0],
        size: [40, 22],
        grip: [20, 18],
        row: 0
    },
    {
        name: 'Battery',
        igName: ['Battery', 'Batterie'],
        site: 'inPocket',
        desc: ['An old battery.', 'Eine alte Batterie.'],
        denyUseInv: ['I feel like an unknown hand is leading me and seducing me into taking questionable things.', 'Fühlt sich an, als würde eine unbekannte Hand mich leiten und mich dazu verführen, fragliche Dinge einzustecken.'],
        src: imgPath + 'battery_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    }, 
    {   // ----------- Tin Can -----------
        name: 'Tin Can',
        igName: ['Tin Can', 'Blechdose'],
        site: 'inScene',
        desc: ['An empty tin can.', 'Eine leere Blechdose.'],
        denyUse: ['If I had a second one, I could make a corded phone. But what for?', 'Hätte ich ein zweite, könnte mir ein Schnurtelefon bauen. Aber wozu?'],
        src: imgPath + 'tin_can_iS.png', 
        scene: 6,
        seq: [0],
        size: [24, 44],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Tin Can',
        site: 'inHand',
        src: imgPath + 'tin_can_iH.png', 
        scene: 6,
        seq: [0],
        size: [24, 60],
        grip: [14, 54],
        row: 0
    },
    {
        name: 'Tin Can',
        igName: ['Tin Can', 'Blechdose'],
        site: 'inPocket',
        desc: ['Now I\'m officially a can collector.', 'Jetzt bin ich offiziell Dosensammler.'],
        denyUseInv: ['If I had a second one, I could make a corded phone. But what for?', 'Hätte ich ein zweite, könnte mir ein Schnurtelefon bauen. Aber wozu?'],
        src: imgPath + 'tin_can_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    }, 
    {   // ----------- Small Note T9 -----------
        name: 'Small Note T9',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteT9_iS.png', 
        scene: 6,
        seq: [0],
        size: [32, 14],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Small Note T9',
        site: 'inHand',
        src: imgPath + 'smallNoteT9_iH.png', 
        scene: 6,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note T9',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        desc: ['The letter \"T\" is written on the front and the number \"9\" on the back.', 'Da ist vorne der Buchstabe \"T\" und hinten die Zahl \"9\" drauf notiert.'],
        src: imgPath + 'smallNoteT9_iP.png', 
        scene: 6,
        seq: [0],
        size: [48, 32],
        row: 0
    }, 
    // non portables -------------------------------------------------------------------------------
    {   // ----------- Mouse -----------
        name: 'Mouse',
        igName: ['n/a', 'n/a'],
        site: 'inScene',
        desc: ['n/a', 'n/a'],
        src: imgPath + 'mouse_iS.png', 
        scene: 6,
        seq: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        size: [80, 48],
        row: 0,
        fpS: 8
    },
    {   // ----------- Camera -----------
        name: 'Camera',
        igName: ['Camera', 'Kamera'],
        site: 'inScene',
        desc: ['Hm . . . I didn\'t expect a security camera here.', 'Hm . . . eine Sicherheitskamera hätte ich hier nicht erwartet.'],
        deny: ['I can\'t reach it. Maybe I should draw attention to myself in a different way.', 'Da komme ich nicht ran. Vielleicht sollte ich mich anders bemerkbar machen.'],
        // denyUse: ['Smile, please!', 'Bitte lächeln!'],
        src: imgPath + 'camera_iS.png', 
        scene: 6,
        seq: [0, 1],
        size: [48, 30],
        row: 0,
        fpS: 16,
    },
    {   // ----------- Garbage Can -----------
        name: 'Garbage Can',
        igName: ['Garbage Can', 'Mülltonne'],
        site: 'inScene',
        desc: ['Am I wrong, or are there white mice in there.', 'Täusch ich mich, oder gibt\'s hier weiße Mäuse.'],
        deny: ['I don\'t want to dig around in it.', 'Ich will nicht darin herumwühlen.'],
        denyUse: ['I don\'t have to throw anything away right now.', 'Ich muss gerade nichts wegwerfen.'],
        src: imgPath + 'garbage_can_iS.png', 
        scene: 6,
        seq: [0],
        size: [110, 124],
        row: 0
    },     
    {   // ----------- Doggo sleeping -----------
        name: 'Sleeping Doggo',
        igName: ['Doggo', 'Doggo'],
        site: 'inScene',
        desc: ['I know Doggo, it\'s Marvin. Then his master Eliot will be very close.', 'Doggo kenne ich - das ist Marvin. Dann wird sein Herrchen Eliot ganz in der Nähe sein.'],
        deny: ['Eliot is his master.', 'Eliot ist sein Herrchen.'],
        denyUse: ['Nah, he\'s sleeping peacefully. He probably dreams of pizza with everything.', 'Nah, er schläft so friedlich und träumt wahrscheinlich von Pizza mit Allem.'],
        src: imgPath + 'doggo_sleeping_iS.png', 
        scene: 6,
        seq: [0, 1],
        size: [110, 84],
        row: 0,
        fpS: 24,
    },
    {   // ----------- Maneki-neko -----------
        name: 'Maneki-neko',
        igName: ['Maneki-neko', 'Maneki-neko'],
        site: 'inScene',
        desc: ['More Japanese graffiti art.', 'Noch mehr japanische Graffitikunst :  Winkekatze.'],
        deny: ['How\'s that supposed to work?', 'Wie soll das gehen?'],
        denyUse: ['Uhhh . . . I can wave back.', 'Hmmm . . . Ich kann ja zurückwinken.'],
        src: imgPath + 'maneki-neko_iS.png', 
        scene: 6,
        seq: [0],
        size: [114, 114],
        row: 0
    },   
    {   // ----------- Dandelion -----------
        name: 'Dandelion',
        igName: ['Dandelion', 'Löwenzahn'],
        site: 'inScene',
        desc: ['No asphalt can resist the dandelion.', 'Kein Asphalt vernmag dem Löwenzahn zu trotzen.'],
        deny: ['If I leave it there, it will be a blowball.', 'Wenn ich ihn da belasse, wird er zur Pusteblume.'],
        src: imgPath + 'dandelion_iS.png', 
        scene: 6,
        seq: [0],
        size: [36, 40],
        row: 0
    },
    {   // ----------- Tim Schafer Str -----------
        name: 'Tim Schafer Str',
        igName: ['Tim Schafer Street', 'Tim Schafer Straße'],
        site: 'inScene',
        desc: ['That\'s the second biggest street sign I\'ve ever seen.', 'Das ist das zweitgrößte Straßenschild, das ich je gesehen habe.'],
        deny: ['Nope.', 'Nö.'],
        denyUse: ['Some things you should never \'use\'!', 'Manche Dinge sollte man niemals \'benutzen\'!'],
        src: imgPath + 'streetname_tim_iS.png', 
        scene: 6,
        seq: [0],
        size: [126, 28],
        row: 0
    },
    // Scene 7 - Rooftop =====================================================================================
    {   // ----------- Old Brush -----------
        name: 'Brush',
        igName: ['Old Brush', 'Alter Pinsel'],
        site: 'inScene',
        desc: ['A dried old brush in a glass.', 'Ein eingetrockneter alter Pinsel in einem Glas.'],
        denyUse: ['It\'s all dried up. I don\'t have paint either.', 'Der ist völlig eingetrocknet. Farbe habe ich auch nicht dabei.'],
        src: imgPath + 'brush_iS.png', 
        scene: 7,
        seq: [0],
        size: [32, 48],
        // grip: [1, 0],
        row: 0
    },
    {
        name: 'Brush',
        site: 'inHand',
        src: imgPath + 'brush_iH.png', 
        scene: 7,
        seq: [0],
        size: [26, 52],
        grip: [18, 46],
        row: 0
    },
    {
        name: 'Brush',
        igName: ['Old Brush', 'Alter Pinsel'],
        site: 'inPocket',
        desc: ['A dried old brush.', 'Ein eingetrockneter alter Pinsel.'],
        denyUseInv: ['I can only throw it in the trash.', 'Den kann ich nur noch wegwerfen.'],
        src: imgPath + 'brush_iP.png', 
        scene: 7,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Champagne Bottle -----------
        name: 'Champagne Bottle',
        igName: ['Champagne Bottle', 'Champagner Flasche'],
        site: 'inScene',
        desc: ['An empty bottle of champagne. § There must have been something to celebrate.', 'Eine leere Champagner Flasche - da gab es wohl etwas zu feiern.'],
        denyUse: ['No, the party\'s over.', 'Nein, die Party ist vorbei.'],
        src: imgPath + 'champagne_bottle_iS.png', 
        scene: 7,
        seq: [0],
        size: [26, 48],
        row: 0
    },
    {
        name: 'Champagne Bottle',
        site: 'inHand',
        src: imgPath + 'champagne_bottle_iH.png', 
        scene: 7,
        seq: [0],
        size: [30, 76],
        grip: [15, 64],
        row: 0
    },
    {
        name: 'Champagne Bottle',
        igName: ['Champagne Bottle', 'Champagner Flasche'],
        site: 'inPocket',
        desc: ['An empty bottle of champagne. I can\'t pronounce the name - nobody can!', 'Eine leere Champagner Flasche. Den Namen kann ich nicht ausprechen - niemand kann das!'],
        denyUseInv: ['This is not completely white, but should be disposed of in the bottle bank for white glass.', 'Die ist zwar nicht ganz weiß, sollte aber im Altglascontainer für weißes Glas entsorgt werden.'],
        src: imgPath + 'champagne_bottle_iP.png', 
        scene: 7,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Candle -----------
        name: 'Candle',
        igName: ['Candle', 'Kerze'],
        site: 'inScene',
        desc: ['A burnt down candle : § a romantic rendezvous on the roof? Nice!', 'Eine runtergebrannte Kerze :  ein romantisches Stelldichein auf dem Dach?. Wie nett!'],
        denyUse: ['My ex always said I wasn\'t that romantic. I\'ll take her word for it.', 'Meine Ex sagte immer, ich sei nicht so der Romantiker. Will ich ihr mal glauben, oder?'],
        src: imgPath + 'candle_iS.png', 
        scene: 7,
        seq: [0],
        size: [22, 30],
        row: 0
    },
    {
        name: 'Candle',
        site: 'inHand',
        src: imgPath + 'candle_iH.png', 
        scene: 7,
        seq: [0],
        size: [30, 48],
        grip: [16, 40],
        row: 0
    },
    {
        name: 'Candle',
        igName: ['Candle End', 'Kerzestumpen'],
        site: 'inPocket',
        desc: ['A candle end.', 'Ein Kerzenstumpen.'],
        denyUseInv: ['TWell, now I\'ve got a candle end in my pocket. And how do I get rid of them?', 'Tja, jetzt hab ich eine Kerzestumpen in der Tasche. Und wie werde ich den wieder los?'],
        src: imgPath + 'candle_iP.png', 
        scene: 7,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    {   // ----------- Small Note A1 -----------
        name: 'Small Note A1',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inScene',
        desc: ['Looks like a small note.', 'Sieht aus wie ein kleiner Notizzettel.'],
        denyUse: ['I should pick this up and look into it.', 'Ich sollte das aufnehemn und näher untersuchen.'],
        src: imgPath + 'smallNoteA1_iS.png', 
        scene: 7,
        seq: [0],
        size: [12, 22],
        row: 0
    },
    {
        name: 'Small Note A1',
        site: 'inHand',
        src: imgPath + 'smallNoteA1_iH.png', 
        scene: 7,
        seq: [0],
        size: [48, 48],
        grip: [20, 36],
        row: 0
    },
    {
        name: 'Small Note A1',
        igName: ['Small Note', 'Kleine Notiz'],
        site: 'inPocket',
        src: imgPath + 'smallNoteA1_iP.png', 
        desc: ['The letter \"A\" is written on the front and the number \"1\" on the back.', 'Da ist vorne der Buchstabe \"A\" und hinten die Zahl \"1\" drauf notiert.'],
        scene: 7,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    // non portables -------------------------------------------------------------------------------
    {   // ----------- Skylight -----------
        name: 'Skylight',
        igName: ['Roof Window', 'Dachfenster'],
        site: 'inScene',
        desc: ['The roof window is closed.', 'Das Dachfenster ist geschlossen.'],
        deny: ['I can\'t.', 'Geht nicht.'],
        src: imgPath + 'skylight_iS.png', 
        scene: 7,
        seq: [0],
        size: [116, 46],
        row: 0
    },    
    {   // ----------- Crow -----------
        name: 'Crow',
        igName: ['Crow', 'Krähe'],
        site: 'inScene',
        desc: ['This little guy is almost always up here. Must be his territory.', 'Dieser kleine Kerl ist fast immer hier oben - ist wohl sein Revier.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'crow_iS.png', 
        scene: 7,
        seq: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9,10, 11, 12, 13],
        size: [66, 56],
        row: 0,
        once: false,
        fpS: 3
    },
    {   // ----------- Canabis -----------
        name: 'Canabis',
        igName: ['Canabis', 'Hanf'],
        site: 'inScene',
        desc: ['Who\'s growing weed up here? And why didn\'t I think of that?', 'Hm . . . wer baut hier oben Gras an? Und warum bin nicht ich auf die Idee gekommen?'],
        deny: ['It\'s not harvest time.', 'Noch ist keine Erntezeit.'],
        src: imgPath + 'weed_iS.png', 
        scene: 7,
        seq: [0],
        size: [98, 110],
        row: 0
    },
    {   // ----------- Satellite Dish -----------
        name: 'Satellite Dish',
        igName: ['Satellite Dish', 'Satellitenschüssel'],
        site: 'inScene',
        desc: ['With this, Mrs. Knittel receives her beloved home shopping channel.', 'Damit empfängt Frau Knittel ihren geliebten Homeshopping-Kanal.'],
        deny: ['Maybe it looks good in my pocket, but . . . no.', 'Die macht sich zwar gut in der Hosentasche, aber . . . nein.'],
        src: imgPath + 'satellite_dish_iS.png', 
        scene: 7,
        seq: [0],
        size: [60, 110],
        row: 0
    },
    {   // ----------- Cathedral -----------
        name: 'Cathedral',
        igName: ['Cathedral', 'Kathedrale'],
        site: 'inScene',
        desc: ['From here you have a good view of the big cathedral.', 'Von hier aus hat man einen guten Blick auf die große Kathedrale.'],
        deny: ['*Ugh*', '*Grmpf*'],
        src: imgPath + 'cathedral_iS.png', 
        scene: 7,
        seq: [0],
        size: [110, 104],
        row: 0
    },
    // Scene 8 - Cellar =====================================================================================
    {   // ----------- Mate -----------
        name: 'Mate',
        igName: ['Mate', 'Mate'],
        site: 'inScene',
        desc: ['Sugar and caffeine - the magic formula.', 'Zucker und Koffein - die magische Formel.'],
        // deny: ['No.', 'Nein.'],
        denyUse: ['Still not thirsty. But maybe I should take one for later.', 'Immer noch kein Durst. Aber vielleicht sollte ich eine für später mitnehmen.'],
        src: imgPath + 'mate_iS.png', 
        scene: 8,
        seq: [0],
        size: [58, 48],
        row: 0,
    },
        {
        name: 'Mate',
        site: 'inHand',
        src: imgPath + 'mate_iH.png', 
        scene: 8,
        seq: [0],
        size: [24, 92],
        grip: [12, 70],
        row: 0
    },
    {
        name: 'Mate',
        igName: ['Mate', 'Mate'],
        site: 'inPocket',
        desc: ['Sugar and caffeine - the magic formula.', 'Zucker und Koffein - die magische Formel.'],
        denyUseInv: ['Still not thirsty.', 'Immer noch keinen Durst.'],
        src: imgPath + 'mate_iP.png', 
        scene: 8,
        seq: [0],
        size: [48, 32],
        row: 0
    },    
    // non portables -------------------------------------------------------------------------------
    {   // ----------- Fire Extinguisher s08 -----------
        name: 'Fire Extinguisher s08',
        igName: ['Fire Extinguisher', 'Feuerlöscher'],
        site: 'inScene',
        desc: ['I didn\'t expect so much safety first here.', 'Soviel \'Safety First\' hätte ich hier gar nicht erwartet.'],
        deny: ['I leave it there, I know where it is.','Ich lass ihn da, da weiß ich wo er ist.'],
        denyUse: ['There\'s no fire at all.', 'Es brennt doch gar nicht.'],
        src: imgPath + 'fireExtinguisher_s08_iS.png', 
        scene: 8,
        seq: [0],
        size: [22, 62],
        row: 0
    },
    {   // ----------- Mate Crates -----------
        name: 'Mate crates',
        igName: ['Mate Crates', 'Mate Kisten'],
        site: 'inScene',
        desc: ['There\'s a lot of drinking this stuff', 'Davon wird hier eine Menge getrunken.'],
        deny: ['An empty Mate bottle is no good to me.','Eine leere Mate-Flasche nutzt mir gar nichts.'],
        denyUse: ['They\'re all empty.', 'Die sind alle leer.'],
        src: imgPath + 'mate_crates_iS.png', 
        scene: 8,
        seq: [0],
        size: [54, 188],
        row: 0
    },
    {   // ----------- Server -----------
        name: 'Server',
        igName: ['Server', 'Server'],
        site: 'inScene',
        desc: ['Standard 19\" server racks with many little lights.', 'Standard 19 Zoll Server Schränke mit vielen kleinen blinkenden Lichtern.'],
        deny: ['Oh, I\'d rather not.', 'Oh, das lass ich lieber.'],
        denyUse: ['I prefer not to. I\'m afraid of breaking the Internet.', 'Lieber nicht. Ich hab Angst das Internet kaputt zu machen.'],
        src: imgPath + 'server_iS.png', 
        scene: 8,
        seq: [0, 1, 2],
        size: [266, 182],
        row: 0,
        fpS: 8
    },
    {   // ----------- Router Pro -----------
        name: 'Router Pro',
        igName: ['Router', 'Router'],
        site: 'inScene',
        desc: ['Professional router equipment with gigabit internet connection.', 'Ein professioneller Router mit Gigabit Internet Anbindung.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'router_pro_iS.png', 
        scene: 8,
        seq: [0, 1, 2, 3, 4, 5],
        size: [38, 28],
        row: 0,
        fpS: 12
    },
    {   // ----------- Visions of the Future: Titan -----------
        name: 'VotF_titan',
        igName: ['Titan', 'Titan'],
        site: 'inScene',
        desc: ['Visions of the Future:      Titan - largest moon of Saturn.', 'Visions of the Future:      Titan - größter Mond des Saturn.'],
        deny: ['jpl.nasa.gov/visions-of-the-future', 'jpl.nasa.gov/visions-of-the-future'],
        denyUse: ['It just seems decorative, I can\'t use that.','Das scheint nur Deko, das kann ich nicht benutzen.'],
        src: imgPath + 'VotF_empty_iS.png', 
        scene: 8,
        seq: [0],
        size: [92, 136],
        row: 0
    },
    {   // ----------- Visions of the Future: Ceres -----------
        name: 'VotF_ceres',
        igName: ['Ceres', 'Ceres'],
        site: 'inScene',
        desc: ['Visions of the Future:      Ceres - dwarf planet in the asteroid belt.', 'Visions of the Future:      Ceres - Zwergplanet im Asteroidengürtel.'],
        deny: ['jpl.nasa.gov/visions-of-the-future', 'jpl.nasa.gov/visions-of-the-future'],
        denyUse: ['It just seems decorative, I can\'t use that.','Das scheint nur Deko, das kann ich nicht benutzen.'],
        src: imgPath + 'VotF_empty_short_iS.png', 
        scene: 8,
        seq: [0],
        size: [92, 106],
        row: 0
    },
    {   // ----------- Visions of the Future: earth -----------
        name: 'VotF_earth',
        igName: ['Earth', 'Die Erde'],
        site: 'inScene',
        desc: ['Visions of the Future:      Earth - third planet in the solar system.', 'Visions of the Future:        Die Erde - dritter Planet im Sonnensystem.'],
        deny: ['jpl.nasa.gov/visions-of-the-future', 'jpl.nasa.gov/visions-of-the-future'],
        denyUse: ['It just seems decorative, I can\'t use that.','Das scheint nur Deko, das kann ich nicht benutzen.'],
        src: imgPath + 'VotF_empty_short_iS.png', 
        scene: 8,
        seq: [0],
        size: [92, 106],
        row: 0
    },
    {   // ----------- Laptop Pro -----------
        name: 'Laptop Pro',
        igName: ['Laptop', 'Laptop'],
        site: 'inScene',
        desc: ['The shell waits for the password to be entered.', 'Die Shell wartet auf die Passworteingabe.'],
        deny: ['That\'s not mine.', 'Das gehört mir nicht.'],
        denyUse: ['I don\'t know the password.', 'Ich weiß das Passwort nicht . . . und überhaupt?!'],
        src: imgPath + 'laptop_pro_iS.png', 
        scene: 8,
        seq: [0, 1, 2],
        size: [46, 40],
        row: 0,
        fpS: 8
    },
    {   // ----------- Client PC -----------
        name: 'Client PC',
        igName: ['Client PC', 'Client PC'],
        site: 'inScene',
        desc: ['Client PC for Input & Output.', 'Client PC für Input & Output.'],
        deny: ['Why would I do that?', 'Warum denn?'],
        denyUse: ['I\'d have to know what to do first.', 'Dazu müsste ich zuerst wissen, was ich tun soll.'],
        src: imgPath + 'clientPC_iS.png', 
        scene: 8,
        seq: [0],
        size: [12, 34],
        row: 0,
    },    
    {   // ----------- Display Pro 1 -----------
        name: 'Display Pro 1',
        igName: ['Display', 'Display'],
        site: 'inScene',
        desc: ['This little guy is almost always up here. Must be his territory.', 'Dieser kleine Kerl ist fast immer hier oben - ist wohl sein Revier.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'display_pro1_iS.png', 
        scene: 8,
        seq: [0, 1, 2, 3, 4, 5],
        size: [80, 48],
        row: 0,
        fpS: 8
    },
    {   // ----------- Hacker Drinks -----------
        name: 'Hacker Drinks',
        igName: ['Drinks', 'Getränke'],
        site: 'inScene',
        desc: ['Mate and water - what else.', 'Mate und Wasser - was sonst.'],
        deny: ['I\'m not taking this without asking.', 'Ich nehme das nicht ohne zu fragen.'],
        denyUse: ['I don\'t want to.', 'Will ich nicht.'],
        src: imgPath + 'hacker_drinks_iS.png', 
        scene: 8,
        seq: [0],
        size: [26, 42],
        row: 0
    },
    {   // ----------- Display Pro 2 -----------
        name: 'Display Pro 2',
        igName: ['Display', 'Display'],
        site: 'inScene',
        desc: ['This little guy is almost always up here. Must be his territory.', 'Dieser kleine Kerl ist fast immer hier oben - ist wohl sein Revier.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'display_pro2_iS.png', 
        scene: 8,
        seq: [0],
        size: [96, 64],
        row: 0,
    },
    {   // ----------- Display Pro 3 -----------
        name: 'Display Pro 3',
        igName: ['Display', 'Display'],
        site: 'inScene',
        desc: ['This little guy is almost always up here. Must be his territory.', 'Dieser kleine Kerl ist fast immer hier oben - ist wohl sein Revier.'],
        deny: ['No chance.', 'Keine Chance.'],
        src: imgPath + 'display_pro3_iS.png', 
        scene: 8,
        seq: [0, 1, 2, 3],
        size: [80, 52],
        row: 0,
        fpS: 8
    },
    {   // ----------- Pizza Box sc08 -----------
        name: 'Pizza Box sc08',
        igName: ['Pizza Box', 'Pizza Karton'],
        site: 'inScene',
        desc: ['Luca\'s good pizza is appreciated here also.', 'Auch hier weiß man die gute Pizza von Luca zu schätzen.'],
        deny: ['Already eaten, nope.', 'Schon leer gegessen, also nein.'],
        denyUse: ['Empty', 'Leer.'],
        src: imgPath + 'pizzabox_sc08_iS.png', 
        scene: 8,
        seq: [0],
        size: [52, 18],
        row: 0,
    },
    {   // ----------- Arcade -----------
        name: 'Arcade',
        igName: ['Arcade Machine', 'Arcade-Automat'],
        site: 'inScene',
        desc: ['\'Kosmos Intruders\', the classical.', '\'Kosmos Intruders\', ein Klassiker der Arcade.'],
        deny: ['I can\'t do that.', 'Das kann ich nicht tun.'],
        denyUse: ['I would like to do that, but . . .', 'Das würde ich gerne tun, aber . . .'],
        src: imgPath + 'arcade_iS.png', 
        scene: 8,
        seq: [0, 1, 2, 3, 4, 5, 6, 7],
        size: [100, 198],
        row: 0,
        fpS: 20
    },
    {   // ----------- Shelf -----------
        name: 'Shelf',
        igName: ['Shelf', 'Regal'],
        site: 'inScene',
        desc: ['Computer parts, cables and stuff on a shelf.', 'Regal mit Computerteilen, Kabel und Zeug.'],
        deny: ['Not interested in the stuff.', 'Kein Interesse an dem Kram.'],
        denyUse: ['I should clean up at home first.', 'Aufräumen sollte ich zuerst zu Hause.'],
        src: imgPath + 'shelf_sc08_iS.png', 
        scene: 8,
        seq: [0],
        size: [92, 248],
        row: 0
    },
    // Scene 9 - Main Menu =====================================================================================
    {   // ----------- Red Herring -----------
        name: 'Red Herring',
        igName: ['Red Herring', 'Roter Hering'],
        site: 'inScene',
        desc: ['It looks important, but . . .', 'Der sieht wichtig aus . . .'],
        denyUse: ['Hmmm . . .', 'Hmmm . . .'],
        src: imgPath + 'red_herring_iS.png', 
        scene: 9,
        seq: [0],
        size: [30, 18],
        row: 0
    },
    {
        name: 'Red Herring',
        igName: ['Red Herring', 'Roter Hering'],
        site: 'inHand',
        src: imgPath + 'red_herring_iH.png', 
        scene: 9,
        seq: [0],
        size: [60, 36],
        grip: [30, 30],
        row: 0
    },
    { 
        name: 'Red Herring',
        igName: ['Red Herring', 'Roter Hering'],
        site: 'inPocket',
        desc: ['Apparently it\'s no use, but it looks really important.', 'Der ist scheinbar zu nichts nütze, sieht aber unheimlich wichtig aus.'],
        denyUseInv: ['Totally useless.', 'Völlig unnütz.'],
        src: imgPath + 'red_herring_iP.png', 
        scene: 9,
        seq: [0],
        size: [48, 32],
        row: 0
    },
    // non portables -------------------------------------------------------------------------------  
    {   // ----------- Resume Sign -----------
        name: 'Resume', // have to be the third last item in the array
        igName: ['Plate', 'Schild'],
        site: 'inScene',
        desc: ['Through the mouse hole back to the last scene. Awsome!  I wonder if this has something to do with dimensional travel.', 'Durch\'s Mauseloch zurück zur letzten Szene. § Verrückt!  Ob das was mit Dimensionsreisen zu tun hat?'],
        deny: ['This should stay here for usability reasons.', 'Das sollte aus Freundlichkeit dem Benutzer gegenüber hängen bleiben.'],
        denyUse: ['Nope.', 'Nö.'],
        src: imgPath + 'resume_sign_eng_iS.png', 
        scene: 9,
        seq: [0],
        size: [70, 22],
        row: 0
    }, 
    {   // ----------- Main Menu Sign -----------
        name: 'Main Menu', // have to be the second last item in the array
        igName: ['Sign', 'Tafel'],
        site: 'inScene',
        desc: ['Uh-huh, I\'m at the Main Menu.', 'Aha, ich bin im Hauptmenü.'],
        deny: ['This should stay here for usability reasons.', 'Das sollte aus Freundlichkeit dem Benutzer gegenüber hängen bleiben.'],
        denyUse: ['Press the Esc key to return to the main menu.', 'Um hierher ins Hauptmenü zurückzugelangen, drücke die Esc-Taste.'],
        src: imgPath + 'menu_sign_eng_iS.png', 
        scene: 9,
        seq: [0],
        size: [180, 68],
        row: 0
    },
    {   // ----------- Wildecard -----------
        name: 'Wildcard',
        site: 'other',
        desc: ['placeholder', 'nur ein Platzhalter'],
        src: imgPath + 'placeholder.jpg', 
        scene: 0,
        seq: [0],
        size: [50, 50],
        row: 0,
        fpS: 2
    }
];

var txtSrc = [
    // Reactions
    {   react: [
                    ['I can\'t reach it. Maybe I should get closer.', 'Das ist zu weit weg. Vielleicht sollte ich näher dran sein.'],
                    ['Done.', 'Erledigt.'],
                    ['I always done that.', 'Das habe ich schon gemacht.'],
                    ['I don\'t want to do that.', 'Das will ich nicht tun.'],
                    ['This pocket is empty.', 'Die Tasche ist leer.'],
                    ['It\'s nothin\' in there.', 'Da ist  gar nichts drin.'],
                    ['It is *var*, I think.', 'Das ist *var*.'],
                    ['I don\'t wanna carry *var* around with me.', '*var* will ich nicht mit mir herumtragen.'],
                    ['That I\'ll keep to myself.', 'Das will ich behalten.'],
                    ['I can\'t go yet. § I should take some important things and put my jacket on.', 'Ich kann noch nicht gehen. § Ich muss ein paar wichtige Dinge einstecken und die Jacke überziehen.'],
                    ['How\'s that supposed to work?', 'Wie soll das gehen?'], // 10
                    ['There it goes further.', 'Da geht\'s weiter.'], // 11
                    ['I only talk to myself when nobody is looking.', 'Selbstgespräche führe ich nur, wenn gerade keiner guckt.'],
                    ['Something\'s in the way.', 'Da ist etwas im Weg.'],
                    ['Did you say something?', 'Wer spricht da?'], // NPC reaction
                    ['My phone! § I should check.', 'Mein Telefon! § Ich sollte nachschauen.'],
                    ['It\'s vibrating, I have a message.', 'Es vibriert, ich habe eine Nachricht.'],
                    ['I don\'t have a new messages at the moment.', 'Ich habe im Moment keine neuen Nachrichten.'],
                    ['I can\'t get it like this! If Knittel on the peephole sees me going for her slippers, I\'m screwed.', 'So komme ich da nicht ran! Wenn die Knittel hinterm Türspion zusieht, wie ich an ihre Puschen gehe, dann bin ich geliefert.'],
                    ['Quite dark.', 'Ziemlich dunkel.'],
                    ['Not a chance, Mrs. Knittel is in the hallway.', 'Keine Chance, die Knittel steht im Flur.'], // 20
                    ['I should talk to *var*.', 'Ich sollte mit *var* sprechen.'],
                    ['I can\'t pick up *var*.', '*var* kann ich nicht nehmen.'],
                    ['Locked.', 'Verschlossen.'],
                    ['Waving into the camera is no longer necessary. I can go inside.', 'In die Kamera winken ist nicht mehr nötig, ich kann rein.'], // 24
                    ['There is no option in this adventure game :  " Drop " § I have to get rid of this another way.', 'Es gibt in diesem Adventure leider keine Option : § " Lass\' fallen ". § Ich muss das anderweitig entsorgen.'], //'Ich werde das nicht einfach in der Gegend abladen. Das sollte ordentlich entsorgen werden.'],
                    ['Have to be digits!', 'Es müssen Ziffern sein!'],
                    ['Unfortunately wrong. § I can\'t let you in.', 'Leider falsch. § So kann ich dich nicht reinlassen.'], // Zoë reaction on wrong access key
                    ['I think that was right. The door seems to be open now.', 'Ich glaube das war richtig. Die Tür scheint jetzt offen.'],
                    ['I can\'t carry around any more. § I should get some things out of my pockets.', 'Ich kann nicht mehr tragen. § Ich sollte einige Ding aus meinen Taschen los werden.'], // 29
                    ['First I should finish the work of the last coding night. § Tomorrow I\'ll forget everything again.', 'Zuerst sollte ich die Arbeit der letzten Programmier–Nacht beenden. Morgen hab ich wieder alles vergessen.'],
                    ['I already got the note from Luca.', 'Die Notiz hab ich bereits von Luca erhalten.'], // 31
                    ['Unfortunately, my pockets are full. I have to throw something away first and then talk to Luca again.', 'Leider sind meine Taschen voll. Ich muss zuerst etwas loswerden und dann nochmals mit Luca reden.'],
                    ['I should speak to Zoë again. Maybe she\'ll come out with a few clues - you never know.', 'Ich sollte nochmals mit Zoë zu sprechen. Vielleicht rückt sie ja mit ein paar Tipps raus - man weiß ja nie.'],
                    ['A locked door with a security camera above. Hmm . . . very mysterious.', 'Eine verschlossene Tür mit Überwachungskamera darüber. Hmm . . . sehr mysteriös.'],
                    ['Oops, when I touch the dandelion, I get the weird feeling again.', 'Huch, wenn ich den Löwenzahn berühre, hab ich wieder dieses ganz komische Gefühl.'],
                    ['It\'s no good. § But someone should notice me when I wave into the camera.', 'Bringt nichts. § Aber irgendjemand sollte mich bemerken, wenn ich in die Kamera winke.'],
                    ['Oh, Doggo\'s gone. Well, I guess he finally got his pizza.', 'Oh, Doggo ist weg. Dann wird er wohl endlich seine Pizza bekommen haben.'],
                    ['Oh, who have we here?!', 'Oh, wen haben wir denn da?!'], // 38
                    ['Past Doggo veeeeery carefully.', 'Gaaaaanz vorsichtig an Doggo vorbei.'],
                    ['Whoa, another weird feeling I\'ve been having lately!', 'Woah, wieder so ein komisches Gefühl, das ich in letzter Zeit öfters habe!'],
                    ['I could go home and write a little script to solve the anagram.', 'Ich könnte nach Hause gehen und ein kleines Skript schreiben, um das Anagramm zu lösen.'],
                    ['What\'s going on here . . ? § Awesome!', 'Was ist denn hier . . . ? § Wahnsinn!'],
                    ['There\'s no way I\'m just gonna dump this in the neighborhood!', 'Ich werde das auf keinen Fall einfach in der Gegend abladen!'],
                    ['Chat transcript on! § All comments and dialogs displayed on the right side of the page.', 'Gesprächs-Transkript an! § Alle Kommentare und alle Dialoge am rechten Seitenrand zum nachlesen.'],
                    ['Maybe I can do something with that? § ', 'Vielleicht kann ich damit etwas anfangen? § '], // 45
                    ['Oh, dear, now the door\'s glitchy too.', 'Oje, jetzt glitcht auch die Tür.'],
                    ['Something urges me to point out the hint button. I don\'t know what that means.', 'Irgendetwas drängt mich dazu, auf den Hinweis-Knopf hinzuweisen. Keine Ahnung, was das nun wieder bedeutet.']
               ],
        carlReact: [
                        // successfull dispose of
                        ['Good job.', 'Gut gemacht.'],
                        // residual waste
                        ['Watch out!! § *var* belongs in the container for residual waste.  It\'s the black one.', 'Obacht! § *var* gehört in die schwarze Tonne für den Restmüll.'],
                        // recyclable waste
                        ['Careful! § *var* belongs in container for recyclable waste. It\'s the yellow one.', 'Vorsicht! § *var* gehört in die gelbe Tonne für wiederverwerbare Verpackungen.'],
                        // organic waste
                        ['Pay attention! § *var* belongs in the organic waste.', 'Aufgepasst! § *var* gehört in die Biomüll.'],
                        // green glass
                        ['Watch out! § *var* belongs in the container for green glass.', 'Achtung! § *var* gehört in den Container für grünes Glas.'],
                        // brown glass
                        ['Watch out! § *var* belongs in the container for brown glass.', 'Pass auf! § *var* gehört in den Container für braunes Glas.'],
                        // white glass
                        ['Watch out! § *var* belongs in the container for white glass.', 'Gib acht! § *var* gehört in den Container für weißes Glas.'],
                        // change
                        ['You really don\'t wanna throw that away.', 'Das willst du doch nicht wirklich wegschmeißen.'],
                        // Steven reacts
                        ['Oh, please don\'t load your stuff on me!', 'Och, bitte lade dein Zeugs nicht bei mir ab!'],
                        // Steven reacts
                        ['Sincerest thanks!', 'Musikant dankt!'],
                        // hazardous waste
                        ['Attention! § *var* is hazardous waste. I\'m afraid you can\'t dispose of that here.', 'Vorsicht! § *var* ist Sondermüll. Das kannst du hier leider nicht entsorgen.'] //10
                   ]
    },
    // interface
    {   actionBtn: [
                        ['Look at', 'Betrachte'],
                        ['Pick up', 'Nimm auf'],
                        ['Use', 'Benutze'],
                        ['Talk to', 'Sprich mit']
                   ],
        hintBtn: [
                    ['   Hint', 'Hinweis']
                 ],

        mobileTxt: [
                        ['From: ', 'Von: '],
                        ['Dismiss', 'Fertig']
                   ],
        codingNightTxt: [
                            ['Lines Of Code :  ', 'Code-Zeilen :  '],
                            ['Click anywhere to stop', 'zum Beenden klicken'],
                            ['Go go!', 'Los!'],
                            ['Not yet.', 'Jetzt nicht.'],
                            ['Start a coding session?', 'Programmier-Session beginnen?']
                        ],
        completedTxt: [
                        ['Quest completed !', 'Aufgabe erfüllt !'],
                        ['Click on \'Hint\' for new quest !', 'Klicke auf \'Hinweis\' für neue Aufgaben !'],
                        ['(saved)', '(gespeichert)'],

                      ],
        menuTxt: [
                    ['Repeatedly writes hints to the log .', 'Für Hinweise zur aktuellen Aufgabe .'],
                    ['Log and hints', 'Log & Hinweise'],
                    ['Select an action .', 'Aktion auswählen .'],
                    ['Inventory :  Objects can be stored here .', 'Inventar :  Objekte können hier ablegt werden .'],
                    ['Maniac Mentions', 'Behämmerte Bemerkungen'],
                    ['The little adventure of a guileless programmer.', 'Das kleine Abenteuer eines arglosen Programmierers.'],
                    ['Reachability', 'Erreichbarkeit'],
                    ['Resets the game!', 'Setzt das Spiel zurück!'],
                    ['Reset', 'Reset'],
                    ['english', 'englisch'],
                    ['german', 'deutsch'],
                    ['Help', 'Hilfe'],
                    ['Coding & Graphics', 'Programmierung & Gestaltung'], // 12
                    ['Philipp Bartsch', 'Philipp Bartsch'],
                    ['Interaction at distance.', 'Interaktion auf Distanz.'],
                    ['Transcript', 'Transkript'],
                    ['Acoustic Guitar', 'Akustische Gitarre'],
                    ['Jason Shaw', 'Jasom Shaw'],
                    ['Sound off', 'Ton aus'],
                    ['Conversation transcript on the right.', 'Gesprächs-Transkript am rechten Seitenrand.'],
                    ['Fast Mode', 'Schneller Modus'], //20
                    ['Caution,<p> unfortunately when using the <strong>Microsoft Edge Browser</strong> with this application a serious error <u>can</u> occur.<br>(Disappearance of mouse pointer)<br> Consequently it is recommended to use an alternative modern browser, e.g. <strong>Google Chrome</strong>.<p>Sorry, the developer',
                     'Achtung,<p>leider <u>kann</u> es bei der Verwendung des <strong>Microsoft Edge Browsers</strong> mit dieser Applikation zu einem schwerwiegenden Fehler kommen.<br>(unsichtbarer Mauszeiger)<br>  Folglich wird empfohlen einen alternativen modernen Browser zu verwenden, z.B. <strong>Google Chrome</strong>.<p>Sorry, der Entwickler'],
                    ['Got it', 'Verstanden'],
                    ['<div><p class=\"grey_txt\">Introduction for Noobs</p><p><p><i>Maniac Mentions</i> is an old school <a href=\"https://en.wikipedia.org/wiki/Adventure_game#Point-and-click_adventure_games">Point-and-Click Adventure <img src=\"img/external_link_iM.png\" class=\"external_link_img\"></a>, inspired by LucasArts&trade; classics like Maniac Mansion&trade;, Monkey Island&trade; and similar games.</p><p>To control the character a mouse is recommended.</p><p>Discover all objects of the game environment by simply moving the mouse pointer over them. Put the character into the correct mode to interact with items by clicking on the appropriate button ("Look at", "Pick up", "Use" or "Talk to") and then clicking on the item or character. Not all items are interactive.</p><p><p>Have fun!</p><p><p>Click "Ok" to enter the main menu. This is your first encounter with <i>Bennet</i>, your character. Walking through the green door starts the game.</p><p><p><button type="button" id="noop_okay_button" onclick="dissmissNoopExpl()" class="noop_expl_btn">Ok</button></p></div>',
                     '<div><p class=\"grey_txt\">Einführung für Noobs</p><p><i>Behämmerte Bemerkungen</i> ist ein <a href=\"https://de.wikipedia.org/wiki/Point-and-Click\">Point-and-Click Adventure <img src=\"img/external_link_iM.png\" class=\"external_link_img\"></a> alter Schule, inspiriert durch LucasArts&trade;-Klassiker wie Maniac Mansion&trade;, Monkey Island&trade; und andere.</p><p>Zum Steuern der Spielfigur sollte eine Maus benutzt werden.</p><p>Entdecke alle Gegenstände der Spielwelt durch simples Darüberfahren mit dem Mauszeiger. Interagiere mit Gegenständen, indem du die Spielfigur in den richtigen Modus durch Klicken auf die entsprechende Schaltfläche ("Betrachte", "Nimm auf", "Benutze" oder "Sprich mit") versetzt und anschließend den Gegestand anklickst. Nicht alle Gegenstände sind interagierbar.</p><p>Viel Spaß!</p><p>Durch Klicken auf "Ok" gelangst du ins Hauptmenü. Hier triffst du das erste Mal auf <i>Bennet</i>, deine Spielfigur. Durch die grüne Tür hindurch geht\'s los.</p><p><button type="button" id="noop_okay_button" onclick="dissmissNoopExpl()" class="noop_expl_btn">Ok</button></p></div>'],
                    ['Press ESC to enter Menu', 'Drücke ESC für Menü']
                 ]
    },
    // inventory log
    {   actions: [
                    ['New coordinates: ', 'Neue Koordinaten: '], // 0
                    ['This area isn\'t accessible', 'Kann nicht betreten werden'], // 1
                    ['Out of range', 'Nicht in Reichweite'], // 2
                    ['*var* has been used', '*var* wurde benutzt'],
                    ['*var* isn\'t usable.', '*var* unbenutzbar'],
                    ['looked at *var*', '*var* betrachtet'],
                    ['Pocket *var* is empty', 'Tasche *var* ist leer'],
                    ['picked up *var*', '*var* aufgenommen'],
                    ['*var* put in pocket', '*var* abgelegt'],
                    ['found nothin\' in pocket *var*', 'Nichts gefunden in Tasche *var*'],
                    ['can\'t speak to *var*', '*var* ist zu weit weg'], // 10
                    ['Exit the scene', 'Bennet verlässt die Scene.'],
                    ['Coding session started', 'Programmier-Session begonnen'],
                    ['Coding session finished', 'Programmier-Session beendet'],
                    ['*var* lines of code committed', '*var* Zeilen Code erarbeitet']
                 ],
        gameStates: [
                        ['Scene successfully initialized', 'Szene erfolgreich erstellt'],
                        ['Quest cleared.', 'Quest erledigt.'],
                    ]
    },
    // explanations
    {
        index: 0,
        explTxt: [
                    ['These are the events of a day in the life of Bennet - guileless hobby programmer and nerd.  If Bennet can actually complete all the tasks, he might find out why his life seemed so strange to him so far.', 
                     'Dies sind die Ereignisse eines Tages im Leben von Bennet - argloser Hobby–Programmierer und Nerd.  Wenn Bennet tatsächlich alle Aufgaben absolvieren kann, findet er vielleicht heraus, warum ihm sein bisheriges Leben so merkwürdig erschien.'],
                    ['Unexpectedly, Bennet came up with the right idea:  An anagram of the letters on the collected notes would put the numbers the back in the right order.  A small script of a few lines of code would surely solve the puzzle quickly!',
                     'Unerwartet kam Bennet die richtige Idee: Ein Anagramm aus den Buchstaben der gesammelten Notizen würde die Ziffern auf der Rückseite in die richtige Reihenfolge setzen. Ein kleines Skript aus wenigen Zeilen Code würde das Rätsel sicherlich schnell lösen!'],
                    ['Later Zoë took Bennet aside and gave him the information about the host system. What he had previously regarded as a real world was in fact a computer system: § ',
                     'Zoë hatte Bennet später zur Seite genommen und ihm Informationen zum Host-System gegeben. Das was er bisher als reale Welt betrachtet hatte, war in Wirklichkeit ein Computersystem: § '],
                    ['Lorem Ipsum', 'Lorem Ipsum']
                 ]
    },
    {
        index: 0,
        bennetStoryTxt: [ // at start of the next quest
                            ['Last night I worked on the program code, but I\'m not quite finished again.', 'Gestern Nacht hab ich lange am Programm–Code getüfftelt, bin aber wieder nicht ganz fertig geworden.'],
                            ['I need to stretch my feet a little.', 'Jetzt könnte ich mir ein wenig die Füße vertreten.'],
                            ['I hope my neighbor Mrs Knittel doesn\'t notice me.', 'Hoffentlich bemerkt mich meine Nachbarin Frau Knittel nicht.'],
                            ['Hm . . . , § I have to go to Luca\'s pizzeria right now.', 'Hm . . . , § ich geh lieber gleich mal zu Luca in die Pizzeria.'],
                            ['I should talk to the people around here.', 'Ich sollte mit den Leuten in der Gegend sprechen.'],
                            ['What can I please Steven with?', 'Womit kann ich Steven zufriedenstellen?'],
                            ['I need to talk to Steven again.', 'Ich muss noch einmal mit Steven reden.'],
                            ['I have to keep looking around. Maybe Zoë\'s note is already a hint?', 'Ich muss mich weiter umsehen. Vielleicht ist der Zettel von Zoë ja bereits ein Hinweis?'],
                            ['Combine, combine . . .', 'Kombiniere, kombiniere . . . '],
                            ['Haha, now I have the required code!', 'Haha, jetzt hab ich den erforderlichen Code!'],
                            ['I need to talk to Zoe and Eliot about my strange feeling.', 'Ich muss mit Zoë und Eliot über mein seltsames Gefühl sprechen.'],
                            ['Is that possible?', 'Kann das alles sein?']
                        ] 
    }
];

var msgSrc = [
    {
        sender: 'Luca',
        index: [0],
        msg: [
                // use '§' as line wrap indicator
                ['Bennet, § there\'s a message for you here. Come over, compagno!', 'Bennet, § hier wurde eine Nachricht für dich abgegeben. Komm vorbei, compagno!'],
                ['Lorem Ipsum engl.', 'Lorem Ipsum.']
             ]
    }
];
