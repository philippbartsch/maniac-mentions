/**
* detectMobileDevice()
*   checks if mobile device
*
* @return {boolean}
*/
function detectMobileDevice() {
    if ((typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1))
        return true;
    else
        return false;
};

/**
* detectIE()
*   returns version of IE or false, if browser is not Internet Explorer
*
* @return {string or boolean}
*/
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

/**
* cookiesEnabled()
*   checks if cookie available
*
* @return {boolean}
*/
function cookiesEnabled() {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) { 
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }
    return (cookieEnabled);
}

/**
* initGame()
*   inits the game with all necessary parameters 
*   considering savegame (cookie) and language settings of browser
*
*/
function initGame() {
    // lang = 1;

    Inv = new Inventory();
    Mobile = new MobilePhone(false, false);

    if (lang == 1){ // fixing items in menu for german language
        itemSrc[itemSrc.length - 2].src = imgPath + 'menu_sign_ger_iS.png';
        itemSrc[itemSrc.length - 3].src = imgPath + 'resume_sign_ger_iS.png';
    }

    // get savegame from cookies
    var state = getCookie('quest');
    var invString = getCookie('inventory');
    if (invString == null) 
        invString = '';

    if (state != null) {
        questIndex = parseInt(state);
        
        // fill the pockets with the collected items --- start --------------------------------------
        var invArray = (invString != '') ? invString.split('|') : null;

        if (invArray != null) {
            
            for (var i = 0; i < invArray.length; i++) {
                for (var j = 0; j < sceneSrc.length; j++) { 
                    for (var k = 0; k < sceneSrc[j].itemsInScene.length; k++) {
                        
                        if (sceneSrc[j].itemsInScene[k][0] == invArray[i]) {
                            var item = new Item(sceneSrc[j].itemsInScene[k][0],     // name
                                                sceneSrc[j].itemsInScene[k][1],     // state (reg or used)
                                                sceneSrc[j].itemsInScene[k][2],     // coo
                                                sceneSrc[j].itemsInScene[k][3],     // inPlay (false for just the anmiation)
                                                sceneSrc[j].itemsInScene[k][4],     // usability
                                                sceneSrc[j].itemsInScene[k][5],     // portability
                                                sceneSrc[j].itemsInScene[k][6],     // disposable
                                                sceneSrc[j].itemsInScene[k][7]);    // special

                            Inv.itemsInInv.push(item);                            
                        }
                    }
                }
            }
        }
        
        for (var i = 0; i < Inv.itemsInInv.length; i++) {
            Inv.pockets[i].content = Inv.itemsInInv[i];
        }
        // fill the pockets with the collected items --- end --------------------------------------
        
        // apartment door open after fullfill the 2nd quest
        if (questIndex > 1)
            sceneSrc[0].exitZones[1][5] = true;

        // setting the starting scene (and some other stuff) depending on game progression
        switch (questIndex) {
            case 0:
                Scene = new CurrentScene(0);
                break;
            case 1:
                Scene = new CurrentScene(0);
                break;
            case 2:
                Scene = new CurrentScene(0);
                Bennet = new Char('Bennet', 'idling', [820, 430]);
                Mobile.setMsg('Luca', 0);
                Mobile.msg = true;
                break;
            case 3:
                Scene = new CurrentScene(2);
                Bennet = new Char('Bennet', 'idling', [480, 410]);
                strAmbSnd.play();
                break;
            case 4:
                Scene = new CurrentScene(4);
                Bennet = new Char('Bennet', 'idling', [760, 440]);
                Scene.npcInScene[0].talked = true;
                break;
            case 5:
                Scene = new CurrentScene(3);
                Bennet = new Char('Bennet', 'idling', [480, 440]);
                Scene.npcInScene[0].talked = true;
                guitarSndFade = 'fadeIn';
                strAmbSnd.play();
                break;
            case 6:
                Scene = new CurrentScene(3);
                Bennet = new Char('Bennet', 'idling', [480, 440]);
                guitarSndFade = 'fadeIn';
                strAmbSnd.play();
                break;
            case 7:
                Scene = new CurrentScene(2);
                Bennet = new Char('Bennet', 'idling', [480, 410]);
                strAmbSnd.play();
                npcChatSrc[4].index = [0, 5];
                sceneSrc[6].npcInScene[0][3] = true;
                break;
            case 8:
                Scene = new CurrentScene(2);
                strAmbSnd.play();
                lilStoryHelper1 = true;
                break;
            case 9:
                Scene = new CurrentScene(0);
                strAmbSnd.play();
                break;
            case 10:
                charSrc[7].src =  imgPath + 'mrRobot_idling_inverted.png';
                charSrc[8].src =  imgPath + 'mrRobot_talking_inverted.png';
                Scene = new CurrentScene(8);
                baseAmbSnd.play();
                break;
            case 11:
                charSrc[7].src =  imgPath + 'mrRobot_idling_inverted.png';
                charSrc[8].src =  imgPath + 'mrRobot_talking_inverted.png';
                Scene = new CurrentScene(8);
                baseAmbSnd.play();
                break;
            default:
                Scene = new CurrentScene(0);
        }
        
        // the count of clicks to make the hint btn non blinky
        Inv.highlightHintBtnIndex = questSrc[questIndex].log.length;
    }
    else {
        // setting up the menu-scene if no valid cookie
        questIndex = 0;
        Scene = new CurrentScene(9);
        Bennet = new Char('Bennet', 'idling', [720, 360]);
        document.getElementById('noop_expl').style.display = 'block';
        document.getElementById('menu_reference').style.display = 'none';
    }
    
    // initiate the main char if not otherwise already done
    if (typeof Bennet == 'undefined')
        Bennet = new Char('Bennet', 'idling', [530, 430]);

    // initiate menu and explanation
    Menu = new GameMenu(false);
    Expl = new Explanation(false);

    // hand out parka to main char if he is not in apartment or menu
    if (Scene.index > 1 && Scene.index != 9) {
        Bennet.walkingSprite.spriteObj.src = imgPath + 'bennet_walking_all_parka.png';
        Bennet.idlingSprite.spriteObj.src = imgPath + 'bennet_idling_front_parka.png';
    }

    // showing up the menu at the menu-scene
    if (Scene.index == 9) {
        canvas2.style.display = 'block';
        Menu.active = true;
        remOldSceneIndex = 0;
    }

    // set up dialogs and some other stuff depending on game progression --- start -----------
    if (questIndex > 3) {
        // set Steven to next convo
        npcChatSrc[5].index = [1, 0];
        sceneSrc[3].npcInScene[0][3] = false;
        // set Eliot to next convo
        npcChatSrc[2].index = [1, 0];
        sceneSrc[4].npcInScene[1][3] = false;
        // set Luca to right convo index
        sceneSrc[4].npcInScene[0][3] = true;
        npcChatSrc[1].index = [0, 5];
    }
    if (questIndex > 4) {
        // set Steven to right convo index
        npcChatSrc[5].index = [1, 3];
        // set Eliot to next convo
        npcChatSrc[2].index = [2, 0];
        sceneSrc[4].npcInScene[1][3] = false;
        // sceneSrc[4].npcInScene[0][3] = true;
        // sceneSrc[4].npcInScene[1][3] = true;
    }
    if (questIndex > 5) {
        // set Steven to right convo index
        npcChatSrc[5].index = [2, 0];
        // set Luca to right convo index
        npcChatSrc[1].index = [1, 0];

        sceneSrc[4].npcInScene[0][3] = false;
        // sceneSrc[4].npcInScene[1][3] = true;
    }
    if (questIndex > 6) {
        npcChatSrc[5].index = [3, 0];
        sceneSrc[6].npcInScene[0][3] = true;
        // sceneSrc[3].npcInScene[0][3] = true;
    }
    if (questIndex > 7) {
        // set Steven on 'glitch-wow'
        npcChatSrc[5].index = [3, 4];
        sceneSrc[3].npcInScene[0][3] = true;

        // set Zoë to next convo
        npcChatSrc[4].index = [2, 0];
        sceneSrc[6].npcInScene[0][3] = false;

        // remove eliot & doggo from pizzeria
        sceneSrc[4].npcInScene[1][2][1] = 1200;
        sceneSrc[3].itemsInScene[sceneSrc[3].itemsInScene.length - 1][2][0] = 1200;
    }

    if (questIndex > 8) {
        // set Zoë to next convo
        npcChatSrc[4].index = [3, 0];
        sceneSrc[6].npcInScene[0][3] = false;

        // take eliot & doggo out of pizza scenes
        sceneSrc[4].npcInScene[1][2][1] = 1200;
        sceneSrc[3].itemsInScene[sceneSrc[3].itemsInScene.length - 1][2][0] = 1200;

        // put doggo in place on scene 6 (back alley) & correct the path to door
        if (questIndex > 8 && sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] > 300) {
            sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] = 245;
            var interim = sceneSrc[6].PFmap;
            sceneSrc[6].PFmap = sceneSrc[6].PFmapAlt;
            sceneSrc[6].PFmapAlt = interim;
        }
    }

    if (questIndex > 9) {
        // set Zoë to next convo
        npcChatSrc[4].index = [5, 0];
        sceneSrc[6].npcInScene[0][3] = false;
        // set Eliot to next convo
        npcChatSrc[2].index = [4, 0];
        sceneSrc[4].npcInScene[1][3] = false;

        sceneSrc[6].exitZones[2][5] = true;
    }
    
    if (questIndex > 10) {
        // set Zoë to next convo
        npcChatSrc[4].index = [6, 0];
        sceneSrc[6].npcInScene[0][3] = false;
        // set Eliot to next convo
        npcChatSrc[2].index = [5, 0];
        sceneSrc[4].npcInScene[1][3] = false;

        sceneSrc[6].exitZones[2][5] = true;

        Expl.txtIndex = 2;
    }
    // set up dialogs and some other stuff depending on game progression --- end -----------
    
    // console logs of the game state for development --------------------------------------
    // console.log('Gamestate (Cookie): ' + state);
    // console.log('Inventory (Cookie): ' + invArray);
    // console.log('questIndex: ' + questIndex); 
    // console.log('SceneIndex: ' + Scene.index);
    // console.log('Lines of code: ' + linesOfCode);
}

/**
* setCookie()
*   sets the cookies for saving the game state
*
* @param {string} identifier
* @param {string} inv: inventory string
* @param {int} exTime: expiry time in milliseconds
*/
function setCookie(qi, inv, exTime) {
  
  var now = new Date();
  var exDate = new Date(now.getTime() + exTime);
  // quest state
  document.cookie = "quest=" + qi + "; expires=" + exDate.toGMTString() + "; path=/";
  // lines of code count
  document.cookie = "linesOfCode=" + linesOfCode + "; expires=" + exDate.toGMTString() + "; path=/";
  // all inventory items
  document.cookie = "inventory=" + inv + "; expires=" + exDate.toGMTString() + "; path=/";
}

/**
* getCookie()
*   get the info to init the game
*
* @param {string} identifier
* @return {string or NULL} cookie value
*/
function getCookie(identifier) {
    
    var identifierEQ = identifier + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(identifierEQ) === 0) {
            return c.substring(identifierEQ.length,c.length);
        }
    }
    return null;
}

/**
* resetGame()
*   resets the game and delete cookie
*
*/
function resetGame() {

    setCookie(0, '', -1);
    remOldSceneIndex = 0;
    questIndex = 0;
    linesOfCode = 0;
    allItemsInPlay = [];
    Inv.itemsInInv.length = 0;
    Inv = new Inventory();
    Expl.txtIndex = 0;
    
    sceneSrc[4].npcInScene[1][2][1] = 410;
    sceneSrc[3].itemsInScene[sceneSrc[3].itemsInScene.length - 1][2][0] = 176;

    sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] = 1200;
    var interim = sceneSrc[6].PFmap;
    sceneSrc[6].PFmap = sceneSrc[6].PFmapAlt;
    sceneSrc[6].PFmapAlt = interim;

    // reset the chat indizes
    for (var i = 0; i < npcChatSrc.length; i++)
        npcChatSrc[i].index = [0, 0];
}

/**
* initCanvas()
*   initiate the canvas' and appends it to the DOM
*   three canvas' for background, game action and overlays
*
*/
function initCanvas() {
    // background scene
	canvas0 = document.createElement('canvas');
	canvas0.className += 'canvas0';
	ctx0 = canvas0.getContext('2d');
	canvas0.width = 1024;
	canvas0.height = 512;
	document.getElementById('container').appendChild(canvas0);

    // game and inventory, all animations
	canvas1 = document.createElement('canvas');
	canvas1.className += 'canvas1';
	ctx1 = canvas1.getContext('2d');
	canvas1.width = 1024;
	canvas1.height = 598;
    document.getElementById('container').appendChild(canvas1);
    ctx1.font = gameFont;

    // game overlays (game menu, mobile, coding night)
    canvas2 = document.createElement('canvas');
    canvas2.className += 'canvas2';
    ctx2 = canvas2.getContext('2d');
    canvas2.width = 1024;
    canvas2.height = 598;
    document.getElementById('container').appendChild(canvas2);
    ctx2.font = gameFont;
}

/**
* doSomethingOnHover()
*   is called by hovering on the canvas
*   reacts on {array} hoverPos and [global] {string} action
*
* @param {array} hoverPos: x-y-coordinates
*/
function doSomethingOnHover(hoverPos) {
    
    if (action == 'noAction') {

        document.getElementById('mouseFollow').style.top = (hoverPos[1] + 4) + 'px';
        document.getElementById('mouseFollow').style.left = (hoverPos[0] + 12) + 'px';
        document.getElementById('mouseFollow').style.display = 'none';

        // cursor style 'crosshair' in walking area (disabled)
        if (hoverPos[0] > Scene.walkable[0][0] && 
            hoverPos[0] < Scene.walkable[1][0] && 
            hoverPos[1] > Scene.walkable[0][1] && 
            hoverPos[1] < Scene.walkable[1][1]) {
            
            if (hoverTriggerWalkingZone == false && hoverTriggerExitZone == -1) {
                hoverTriggerWalkingZone = true;
                document.body.style.cursor = 'url(' + imgPath + 'walking.cur), crosshair';
            }
        } else {

            if (hoverTriggerWalkingZone == true && hoverTriggerExitZone == -1) {
                hoverTriggerWalkingZone = false;
                document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
            }
        }

        // hint btn highlighting and cursor style
        if ((hoverPos[0] > 5 && hoverPos[0] < 71) &&
            (hoverPos[1] > 485 && hoverPos[1] < 510) &&
            action != 'inConvo') {
            document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
            highlightedQlBtn = true;
        } else {
            highlightedQlBtn = false;
        } 
    } else {
        document.getElementById('mouseFollow').style.top = (hoverPos[1] + 4) + 'px';
        document.getElementById('mouseFollow').style.left = (hoverPos[0] + 16) + 'px';
        document.getElementById('mouseFollow').style.display = 'none'; 
    }

    // attach item to cursor
    if (itemOnCursor !== null) {

        itemOnCursor.coo[0] = hoverPos[0] - itemOnCursor.grip[0];
        itemOnCursor.coo[1] = hoverPos[1] - itemOnCursor.grip[1];

        // higlighting the right item dropzone
        if (itemOnCursor.disposable != false && typeof Scene.dropZones != 'undefined') {

            for (var i = 0; i < Scene.dropZones.length; i++) {

                if ((hoverPos[0] > Scene.dropZones[i][0][0] && hoverPos[0] < Scene.dropZones[i][0][0] + Scene.dropZones[i][1][0]) &&
                    (hoverPos[1] > Scene.dropZones[i][0][1] && hoverPos[1] < Scene.dropZones[i][0][1] + Scene.dropZones[i][1][1]) &&
                    Scene.dropZones[i][3] == true) { 

                    highlightedDropzone = i;
                    break;
                } 
                else
                    highlightedDropzone = null;
            }
        } 
    }

    // pocket highlighting (and other stuff, which needs a loop)
    for (var i = 0; i < sceneSrc[0].itemsInScene.length; i++) {
    
        if (i < Inv.pockets.length) {
            if ((hoverPos[0] > Inv.pockets[i].coo[0] && hoverPos[0] < Inv.pockets[i].coo[0] + 48) &&
                (hoverPos[1] > Inv.pockets[i].coo[1] && hoverPos[1] < Inv.pockets[i].coo[1] + 32) &&
                 action != 'inConvo') {

                highlighted = i;

                if (Inv.pockets[i].content != 'empty') {
                    document.getElementById('mouseFollow').innerHTML = Inv.pockets[i].content.invSprite.igName;
                    document.getElementById('mouseFollow').style.display = 'block';
                }
            } else if (hoverPos[0] < Inv.pockets[0].coo[0] || hoverPos[1] < Inv.pockets[0].coo[1] ||
                       hoverPos[0] > Inv.pockets[Inv.pockets.length - 1].coo[0] + 48 || hoverPos[1] > Inv.pockets[Inv.pockets.length - 1].coo[1] + 32) {
                highlighted = -1;
            }
        }
        
        // Inv.actionButtons.length == Scene.exitZones.length
        if (i < Scene.exitZones.length) {
            // cursor style in exit zone
            if (hoverPos[0] > Scene.exitZones[i][0][0] && 
                hoverPos[1] > Scene.exitZones[i][0][1] && 
                hoverPos[0] < Scene.exitZones[i][0][0] + Scene.exitZones[i][1][0] &&
                hoverPos[1] < Scene.exitZones[i][0][1] + Scene.exitZones[i][1][1] &&
                action == 'noAction') {
                
                if (hoverTriggerExitZone == -1) {
                    switch (Scene.exitZones[i][4]) {
                        case 'up':
                            document.body.style.cursor = 'url(' + imgPath + 'exit_up.cur), pointer';
                            break;
                        case 'right':
                            document.body.style.cursor = 'url(' + imgPath + 'exit_right.cur), pointer';
                            break;
                        case 'down':
                            document.body.style.cursor = 'url(' + imgPath + 'exit_down.cur), pointer';
                            break;
                        case 'left':
                            document.body.style.cursor = 'url(' + imgPath + 'exit_left.cur), pointer';
                        break;
                        default:
                            document.body.style.cursor = 'pointer';
                    }
                    hoverTriggerExitZone = i;
                }

                document.getElementById('mouseFollow').innerHTML = sceneSrc[Scene.exitZones[i][3]].name[lang];
                document.getElementById('mouseFollow').style.display = 'block';

                document.getElementById('mouseFollow').style.top = (hoverPos[1] + 8) + 'px';
                if (Scene.exitZones[i][4] == 'right')
                    document.getElementById('mouseFollow').style.left = (hoverPos[0] - (mouseFollow.clientWidth + 10)) + 'px';

                // mouse follow for resume (mouse hole) in menu 
                if (Scene.index == 9 && i == 1)
                    document.getElementById('mouseFollow').innerHTML = sceneSrc[remOldSceneIndex].name[lang];
            } else {
                if (hoverTriggerExitZone == i) {
                    hoverTriggerExitZone = -1; 

                    if (hoverTriggerWalkingZone == true)
                        document.body.style.cursor = 'url(' + imgPath + 'walking.cur), crosshair';
                    else
                        document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
                }
            }

            // action button highlighting
            if ((hoverPos[0] > Inv.actionButtons[i].coo[0] && hoverPos[0] < Inv.actionButtons[i].coo[0] + 120) &&
                (hoverPos[1] > Inv.actionButtons[i].coo[1] && hoverPos[1] < Inv.actionButtons[i].coo[1] + 24) &&
                 action != 'inConvo') {
                highlightedBtn = i;
            } 
            else if ((hoverPos[0] < Inv.actionButtons[0].coo[0] || hoverPos[1] < Inv.actionButtons[0].coo[1]) ||
                     (hoverPos[0] > Inv.actionButtons[Inv.actionButtons.length - 1].coo[0] + 120 || hoverPos[1] > Inv.actionButtons[Inv.actionButtons.length - 1].coo[1] + 24)) {
                highlightedBtn = -1;
            }
        }
        // cursor on item hover
        if (typeof Scene.itemsInScene !== 'undefined' && i < Scene.itemsInScene.length) {

            if ((hoverPos[0] > Scene.itemsInScene[i].coo[0] && hoverPos[0] < Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0]) && 
                (hoverPos[1] > Scene.itemsInScene[i].coo[1] && hoverPos[1] < Scene.itemsInScene[i].coo[1] + Scene.itemsInScene[i].size[1]) &&
                 action != 'inConvo' && Scene.itemsInScene[i].inPlay == true) {

                document.getElementById('mouseFollow').innerHTML = Scene.itemsInScene[i].igName;
                document.getElementById('mouseFollow').style.display = 'block'
            } 
        }
        // cursor on char hover
        if (typeof Scene.npcInScene !== 'undefined' && i < Scene.npcInScene.length) {
            if ((hoverPos[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 && hoverPos[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2) && 
                (hoverPos[1] > Scene.npcInScene[i].coo[1] - Scene.npcInScene[i].currentSprite.size[1] && hoverPos[1] < Scene.npcInScene[i].coo[1])) {

                document.getElementById('mouseFollow').innerHTML = Scene.npcInScene[i].igName;
                document.getElementById('mouseFollow').style.display = 'block';
            }
        }
    }
}

/**
* doSomethingOnClick()
*   is called on a click event on the canvas
*   reacts on {array} clickPos and [global] {string} action
*
* @param {array} clickPos: x-y-coordinates
*/
function doSomethingOnClick(clickPos) {
    
    if (action != 'inConvo') {

        if (action == 'noAction') {

            // set scene back to 'active' when interupting leaving the scene
            if (clickPos[0] > Scene.walkable[0][0] && 
                clickPos[0] < Scene.walkable[1][0] && 
                clickPos[1] > Scene.walkable[0][1] && 
                clickPos[1] < Scene.walkable[1][1] &&
                Scene.state !== 'active') {    
                    Scene.state = 'active';
            }

            var clickSndHelper = false; // for the small issue of click on exit zone scene 0
            
            // write quest in inventory log
            if ((clickPos[0] > 5 && clickPos[0] < 71) &&
                (clickPos[1] > 485 && clickPos[1] < 510)) {
                
                Inv.highlightHintBtnIndex--;
                // small fix: dont highlight hint btn after 100 clicks when clicking hint btn befor
                if (Inv.highlightHintBtnIndex == 0)
                    Inv.highlightHintBtnIndex--;
                
                Inv.writeLog(questSrc[questIndex].log[HintFetchCounter][lang]);

                if (HintFetchCounter < questSrc[questIndex].log.length - 1) 
                    HintFetchCounter++;
                else
                    HintFetchCounter = 0;

            } else if (questIndex == 2 && lilStoryHelper4 == true) { // special case ringin' phone
                Bennet.setSpeech(txtSrc[0].react[15][lang]);
            
            } else {

                for (var i = 0; i < Scene.exitZones.length; i++) {
                // exit zones
                    if (clickPos[0] > Scene.exitZones[i][0][0] && 
                        clickPos[1] > Scene.exitZones[i][0][1] && 
                        clickPos[0] < Scene.exitZones[i][0][0] + Scene.exitZones[i][1][0] &&
                        clickPos[1] < Scene.exitZones[i][0][1] + Scene.exitZones[i][1][1]) {
                        
                        if (Scene.exitZones[i][5] == true) {
                        
                            setExitPath(i);
                    
                            Scene.transition = [i, Scene.exitZones[i][3]]; // [old exit Zone, new scene index]

                            // exitZone / new sceneIndex adjusment if come back from menu
                            if (Scene.index == 9 && i == 1)
                                Scene.transition = [setWayBackFromMenu(remOldSceneIndex), remOldSceneIndex];

                            Scene.state = 'inactive';
                            Inv.writeLog(txtSrc[2].actions[11][lang]);
                            
                        } else {
                            if (Scene.index == 0) {
                                
                                if (questIndex == 0)
                                    Bennet.setSpeech(txtSrc[0].react[30][lang]);
                                else if (questIndex == 1)
                                    Bennet.setSpeech(txtSrc[0].react[9][lang]); // I can't go yet
                                
                                clickSndHelper = true;
                            } else if (Scene.index == 6) {
                                setExitPath(i);
                                clickSndHelper = true;
                            }
                        }
                    }
                } 

                if (Scene.state == 'active') {
                    // char walking 
                    var oldGridCoo = getGridPos(Bennet.coo, 'matrix');
                    var newGridCoo = getGridPos(clickPos, 'matrix');

                    if (newGridCoo !== false && (oldGridCoo[0] !== newGridCoo[0] || oldGridCoo[1] !== newGridCoo[1])) {
                        Bennet.setRoute(oldGridCoo, newGridCoo);

                        if (PFpath.length > 0) {

                            transfer = 0;
                            Bennet.state = 'walking';
                            Inv.writeLog(txtSrc[2].actions[0][lang] + clickPos[0] + '-' + clickPos[1]);
                        } else {
                            Inv.writeLog(txtSrc[2].actions[1][lang]);
                            Bennet.setSpeech(txtSrc[0].react[13][lang]);
                        }
                    } else {
                        if (clickSndHelper == false)
                            clickSndOn = false;
                    }
                }
            }
        }
        
        if (action == 'use') {

            for (var i = 0; i < sceneSrc[0].itemsInScene.length; i++) {

                if (i < Scene.itemsInScene.length) { // restrict to count of items in scene
                    // use in scene
                    if ((clickPos[0] > Scene.itemsInScene[i].coo[0] && clickPos[0] < Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0]) && 
                        (clickPos[1] > Scene.itemsInScene[i].coo[1] && clickPos[1] < Scene.itemsInScene[i].coo[1] + Scene.itemsInScene[i].size[1]) &&
                         Scene.itemsInScene[i].inPlay == true) {
                        
                        if (Scene.itemsInScene[i].usable == true) {
                        
                            if ((Bennet.coo[0] < Scene.itemsInScene[i].coo[0] - 150 ||
                                 Bennet.coo[0] > Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0] + 250)
                                 && reachabilityOn == true) {

                                Bennet.setSpeech(txtSrc[0].react[0][lang]);
                                Inv.writeLog(txtSrc[2].actions[2][lang]);

                            } else if ((Bennet.coo[0] < Scene.itemsInScene[i].coo[0] - 150 ||
                                        Bennet.coo[0] > Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0] + 150 && 
                                        Scene.itemsInScene[i].name != 'Camera')
                                        && reachabilityOn == true) {

                                Bennet.setSpeech(txtSrc[0].react[0][lang]);
                                Inv.writeLog(txtSrc[2].actions[2][lang]);

                            } else {

                                // special cases
                                if (Scene.itemsInScene[i].special == true) {
                                    specialCaseUse(i, clickPos); // alert('foo');
                                // reg cases
                                } else {  
                                    setItemStateUsed(i);                               
                                }
                            }
                        } else {
                            Inv.writeLog(txtSrc[2].actions[4][lang].replace('*var*', Scene.itemsInScene[i].igName));
                            (Scene.itemsInScene[i].denyUse !== 'n/a') ? Bennet.setSpeech(Scene.itemsInScene[i].denyUse) : Bennet.setSpeech(txtSrc[0].react[3][lang]);
                        }
                    }
                }
                // use in pocket
                if (i < Inv.pockets.length) { // restrict to pocckets count
                    
                    if ((clickPos[0] > Inv.pockets[i].coo[0] && clickPos[0] < Inv.pockets[i].coo[0] + 48) &&
                        (clickPos[1] > Inv.pockets[i].coo[1] && clickPos[1] < Inv.pockets[i].coo[1] + 32)) {
                    
                        if (Inv.pockets[i].content !== 'empty') {

                            // special Mobile in pocket case
                            if (Inv.pockets[i].content.name == 'Mobile') {
                                mobileUse(Inv.pockets[i].content);
                            } else {

                                if (Inv.pockets[i].content.usable == true) {

                                    if (Inv.pockets[i].content.state != 'used' ) {
                                        Inv.pockets[i].content.state = 'used';
                                        Bennet.setSpeech(txtSrc[0].react[1][lang]);
                                        Inv.writeLog(txtSrc[2].actions[3][lang].replace('*var*', Inv.pockets[i].content.igName));
                                    } else {
                                        Bennet.setSpeech(txtSrc[0].react[2][lang]);
                                    }

                                } else {
                                    Inv.writeLog(txtSrc[2].actions[4][lang].replace('*var*', Inv.pockets[i].content.igName));
                                    (Inv.pockets[i].content.denyUseInv !== 'n/a') ? Bennet.setSpeech(Inv.pockets[i].content.denyUseInv) : Bennet.setSpeech(txtSrc[0].react[3][lang]);
                                }
                            }

                        } else {
                            Bennet.setSpeech(txtSrc[0].react[10][lang]); 
                        }

                    }
                }
                // use char (using the Inv.pockets.length loop with max 16)
                if (typeof Scene.npcInScene !== 'undefined' && i < Scene.npcInScene.length) {
                    if ((clickPos[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 && clickPos[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2) && 
                        (clickPos[1] > Scene.npcInScene[i].coo[1] - Scene.npcInScene[i].currentSprite.size[1] && clickPos[1] < Scene.npcInScene[i].coo[1])) {
                        // var cursorStyle = 'pointer';
                        // document.body.style.cursor = cursorStyle;
                        Bennet.setSpeech(txtSrc[0].react[21][lang].replace('*var*', Scene.npcInScene[i].igName));
                    }
                }
            }
            if (action != 'inConvo') // spaciaL use case in scene 6
                action = 'noAction';
        }
        
        if (action == 'lookAt') {

            var lookedItem = null;

            for (var i = 0; i < Scene.itemsInScene.length; i++) {
                if ((clickPos[0] > Scene.itemsInScene[i].coo[0] && clickPos[0] < Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0]) && 
                    (clickPos[1] > Scene.itemsInScene[i].coo[1] && clickPos[1] < Scene.itemsInScene[i].coo[1] + Scene.itemsInScene[i].size[1]) &&
                     Scene.itemsInScene[i].inPlay == true) {
                    lookedItem = Scene.itemsInScene[i];
                } 
            }

            if (lookedItem != null) {  
                Bennet.setSpeech(lookedItem.desc);
                Inv.writeLog(txtSrc[2].actions[5][lang].replace('*var*', lookedItem.igName));
            }
            
            for (var i = 0; i < Inv.pockets.length; i++) {
            
                if ((clickPos[0] > Inv.pockets[i].coo[0] && clickPos[0] < Inv.pockets[i].coo[0] + 48) &&
                    (clickPos[1] > Inv.pockets[i].coo[1] && clickPos[1] < Inv.pockets[i].coo[1] + 32)) { 
                    
                    if (Inv.pockets[i].content.name) {

                        // special case of ringing phone
                        if (Inv.pockets[i].content.name == 'Mobile' && Inv.pockets[i].content.invSprite.seq.length > 2) {
                            Bennet.setSpeech(txtSrc[0].react[16][lang]);
                        } else {
                            (Inv.pockets[i].content.invSprite.desc !== 'n/a') ? Bennet.setSpeech(Inv.pockets[i].content.invSprite.desc) : Bennet.setSpeech(Inv.pockets[i].content.desc);
                            Inv.writeLog(txtSrc[2].actions[5][lang].replace('*var*', Inv.pockets[i].content.igName));
                        }
                    } else {
                        Bennet.setSpeech(txtSrc[0].react[4][lang]);
                        Inv.writeLog(txtSrc[2].actions[6][lang].replace('*var*', i + 1));
                    }
                }
                // look at char (using the Inv.pockets.length loop with max 16)
                if (typeof Scene.npcInScene !== 'undefined' && i < Scene.npcInScene.length) {
                    if ((clickPos[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 && clickPos[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2) && 
                        (clickPos[1] > Scene.npcInScene[i].coo[1] - Scene.npcInScene[i].currentSprite.size[1] && clickPos[1] < Scene.npcInScene[i].coo[1])) {
                        // var cursorStyle = 'pointer';
                        // document.body.style.cursor = cursorStyle;
                        Bennet.setSpeech(txtSrc[0].react[6][lang].replace('*var*', Scene.npcInScene[i].igName));
                        Inv.writeLog(txtSrc[2].actions[5][lang].replace('*var*', Scene.npcInScene[i].igName));
                    }
                }
                // look at exit Zone
                if (i < Scene.exitZones.length) {
                    // cursor style 'move' in exit zone
                    if (clickPos[0] > Scene.exitZones[i][0][0] && 
                        clickPos[1] > Scene.exitZones[i][0][1] && 
                        clickPos[0] < Scene.exitZones[i][0][0] + Scene.exitZones[i][1][0] &&
                        clickPos[1] < Scene.exitZones[i][0][1] + Scene.exitZones[i][1][1]) {
                        
                        if (Scene.index == 6 && i == 2 && sceneSrc[6].exitZones[2][5] == false) {
                            Bennet.setSpeech(txtSrc[0].react[34][lang]);
                        } else
                            Bennet.setSpeech(txtSrc[0].react[11][lang]);
                    }
                }                  
            }
            action = 'noAction';
        }

        // do something in inventory
        if (action == 'hold' || action == 'pickUp') {
            if (disposeItem(clickPos) ==  false)
                manageInv(clickPos);
        }

        // pick up something in scene
        if (action == 'pickUp') {

            for (var i = 0; i < Scene.itemsInScene.length; i++) {

                if ((clickPos[0] > Scene.itemsInScene[i].coo[0] && clickPos[0] < Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0]) &&
                    (clickPos[1] > Scene.itemsInScene[i].coo[1] && clickPos[1] < Scene.itemsInScene[i].coo[1] + Scene.itemsInScene[i].size[1]) &&
                     Scene.itemsInScene[i].inPlay == true) {

                    if (Scene.itemsInScene[i].portable == true) {

                        // check if all pockets filled
                        var filledPocketCount = 0;
                        for (var j = 0; j < Inv.pockets.length; j++) {
                            if (Inv.pockets[j].content != 'empty')
                                filledPocketCount++
                        }
                        
                        if (filledPocketCount >= 16) {
                            Bennet.setSpeech(txtSrc[0].react[29][lang]);
                        } // if not all pockets filled
                        else {
                            // out of range item measurement only for x coordinates seems enough !!! 
                            if ((Bennet.coo[0] < Scene.itemsInScene[i].coo[0] - 150 ||
                                Bennet.coo[0] > Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0] + 150)
                                && reachabilityOn == true) {

                                // edge case in scene 1 - can't get the note wenn light is up 'cause of Knittel
                                if (Scene.itemsInScene[i].name == 'Small Note R6' && Scene.foreground.src.indexOf('dummyPixel') >= 0) 
                                    specialCasePickUp(i);
                                else if (Scene.itemsInScene[i].name == 'Small Note R6' && Scene.npcInScene.length > 0)
                                    Bennet.setSpeech(txtSrc[0].react[20][lang]);
                                else {
                                    Bennet.setSpeech(txtSrc[0].react[0][lang]);
                                    Inv.writeLog(txtSrc[2].actions[2][lang]);
                                }
                            } else {

                                // special cases
                                if (Scene.itemsInScene[i].special == true && Scene.itemsInScene[i].name !== 'Mobile') {
                                    specialCasePickUp(i);
                                // reg cases
                                } else { 

                                    itemOnCursor = Scene.itemsInScene.slice(i)[0];
                                    Scene.itemsInScene.splice(i, 1);
                                    itemOnCursor.coo[0] = clickPos[0] - itemOnCursor.grip[0];
                                    itemOnCursor.coo[1] = clickPos[1] - itemOnCursor.grip[1];
                                    // Inv.pockets[i].content.sceneSprite.index = 0;
                                    // alert(itemOnCursor.cursorSprite.index);
                                    // itemOnCursor.cursorSprite.index = 0;

                                    Inv.writeLog(txtSrc[2].actions[7][lang].replace('*var*', itemOnCursor.igName));
                                    action = 'hold';
                                }
                            }
                        }
                    } else {
                        // if condition for item overlap in scene (render) situations – nitpick
                        if (document.getElementById('mouseFollow').innerHTML == Scene.itemsInScene[i].sceneSprite.igName) {
                            (Scene.itemsInScene[i].deny !== 'n/a') ? Bennet.setSpeech(Scene.itemsInScene[i].deny) : Bennet.setSpeech(txtSrc[0].react[7][lang].replace('*var*', Scene.itemsInScene[i].igName));
                        }
                    }
                    
                }
                // pickup char (using the Inv.pockets.length loop with max 16)
                if (typeof Scene.npcInScene !== 'undefined' && i < Scene.npcInScene.length) {
                    if ((clickPos[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 && clickPos[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2) && 
                        (clickPos[1] > Scene.npcInScene[i].coo[1] - Scene.npcInScene[i].currentSprite.size[1] && clickPos[1] < Scene.npcInScene[i].coo[1])) {
                        Bennet.setSpeech(txtSrc[0].react[22][lang].replace('*var*', Scene.npcInScene[i].igName));
                    }
                }
            }

            if (action == 'pickUp') {
                action = 'noAction';
            }
        }
    }

    // talk to someone
    if (action == 'talkTo' || action == 'inConvo') {
        var talkedToNPC = false; // little fix of wrong reacting of npc
        // reaction on talking to a thing
        if (Scene.npcInScene.length == 0) {
            action = 'noAction'; 

            for (var i = 0; i < Scene.itemsInScene.length; i++) {
                if ((clickPos[0] > Scene.itemsInScene[i].coo[0] && clickPos[0] < Scene.itemsInScene[i].coo[0] + Scene.itemsInScene[i].size[0]) && 
                    (clickPos[1] > Scene.itemsInScene[i].coo[1] && clickPos[1] < Scene.itemsInScene[i].coo[1] + Scene.itemsInScene[i].size[1])) {
                    Bennet.setSpeech(txtSrc[0].react[12][lang]);
                }
            }
        } else {
            if (action == 'talkTo') {
                for (var i = 0; i < Scene.npcInScene.length; i++) {
                    
                    if ((clickPos[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 && clickPos[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2) && 
                        (clickPos[1] > Scene.npcInScene[i].coo[1] - Scene.npcInScene[i].currentSprite.size[1] && clickPos[1] < Scene.npcInScene[i].coo[1])) {
                    
                        if ((Bennet.coo[0] < Scene.npcInScene[i].coo[0] + Scene.npcInScene[i].currentSprite.size[0] / 2 - 270 ||
                            Bennet.coo[0] > Scene.npcInScene[i].coo[0] - Scene.npcInScene[i].currentSprite.size[0] / 2 + 270)
                            && reachabilityOn == true) {

                            Bennet.setSpeech(txtSrc[0].react[0][lang]);
                            Inv.writeLog(txtSrc[2].actions[10][lang].replace('*var*', Scene.npcInScene[i].name));
                            action = 'noAction';
                            talkedToNPC = true;
                        } else {
                            action = 'inConvo';
                            lastAddressedNpc = Scene.npcInScene[i];
                            manageConvo(lastAddressedNpc);
                            talkedToNPC = true;
                            
                            // triggers glitch in later talks to steven
                            if (questIndex > 6 && Scene.npcInScene[i].name == 'Guitar Guy')
                                glitchTrigger(30, 0);

                            break; // !! multiple NPC
                        }
                    } else {
                        action = 'noAction';
                    }
                }

                // npc reacts on talking to item 
                for (var j = 0; j< Scene.itemsInScene.length; j++) { 
                    if ((clickPos[0] > Scene.itemsInScene[j].coo[0] && clickPos[0] < Scene.itemsInScene[j].coo[0] + Scene.itemsInScene[j].size[0]) && 
                        (clickPos[1] > Scene.itemsInScene[j].coo[1] && clickPos[1] < Scene.itemsInScene[j].coo[1] + Scene.itemsInScene[j].size[1]) &&
                        action != 'inConvo' && talkedToNPC == false) {

                        if (Scene.index != 6) { // not by Zoe in back alley
                            Scene.npcInScene[0].state = 'talking';
                            Scene.npcInScene[0].seq = [0, 1];
                            Scene.npcInScene[0].frameCounter = 0;
                            Scene.npcInScene[0].setSpeech(txtSrc[0].react[14][lang]);

                            if (Scene.npcInScene[0].name == 'Guitar Guy' && guitarSnd.volume > guitarSndVol - .01)
                                    guitarSndFade = 'fadeOut';
                        } else
                            Bennet.setSpeech(txtSrc[0].react[12][lang]);


                        action = 'noAction';
                    }
                }
            } else {
                if (Scene.npcInScene.length !== 0) {
                    manageConvo(lastAddressedNpc);
                }
            }
        }
    }
    // check the quest conditions on every click
    setQuest(questIndex);
    uniTrigger = false; // reset lil story helper for universal use 
    
    // manage the behavior of hint btn
    clicksPerQuest++;
    if (clicksPerQuest > 5 && Inv.highlightHintBtnIndex > -1) // deactivate highlighting the hint btn after 5 clicks
        Inv.highlightHintBtnIndex = 0;

    if (clicksPerQuest > 100 && Inv.highlightHintBtnIndex > -1)  { // reactivates the highlighting after 100 clicks in one quest
        Inv.highlightHintBtnIndex = questSrc[questIndex].log.length;
        if (action = 'noAction')
            Bennet.setSpeech(txtSrc[0].react[47][lang]);
        clicksPerQuest = 0;
    }
}

/**
* setAction()
*   defines the type of action (action btns) in [global] {string} action
*
* @param {array} clickPos: x-y-coordinates
*/
function setActionOnClick(clickPos) {
    if (action != 'hold' && action != 'inConvo') {

        for (var i = 0; i < Inv.actionButtons.length; i++) {

            if ((clickPos[0] > Inv.actionButtons[i].coo[0] && clickPos[0] < Inv.actionButtons[i].coo[0] + 120) &&
                (clickPos[1] > Inv.actionButtons[i].coo[1] && clickPos[1] < Inv.actionButtons[i].coo[1] + 24)) {

                switch (i) {
                    case 0:
                        action = 'lookAt';
                        break;
                    case 1:
                        action = 'pickUp';
                        break;
                    case 2:
                        action = 'use';
                        break;
                     case 3:
                        action = 'talkTo';
                        break;
                     case 4:
                        action = 'inConvo';
                        break;
                    default:
                        action = 'noAction';
                }
                clickSndOn = true;
            }
        }
    }
}

/**
* setCursor()
*   sets the style of cursor depending on [global] {string} action
*
*/
function setCursorOnClick() {

        switch (action) {
            case 'lookAt':
                var cursorStyle = 'url(' + imgPath + 'look.cur), pointer';          
                break;
            case 'pickUp':
                var cursorStyle = 'url(' + imgPath + 'grab.cur), pointer';
                break;
            case 'use':
                var cursorStyle = 'url(' + imgPath + 'wrench.cur), pointer';
                break;
            case 'hold':
                var cursorStyle = 'url(' + imgPath + 'grabbing.cur), pointer';
                break;
            case 'talkTo':
                var cursorStyle = 'url(' + imgPath + 'talk.cur), pointer';
                break;
            case 'inConvo':
                var cursorStyle = 'url(' + imgPath + 'talking.cur), progress';
                break;
            default:
                var cursorStyle = 'url(' + imgPath + 'crosshair.cur), crosshair';
        }
    
    if (hoverTriggerWalkingZone == false)
        document.body.style.cursor = cursorStyle;
}

/**
* setItemStateUsed()
*   set item as used
* 
* @param: {int} itemIndex
*/
function setItemStateUsed(itemIndex) {
    
    if (Scene.itemsInScene[itemIndex].state != 'used') {
        Scene.itemsInScene[itemIndex].state = 'used';

        // set state in allItemsInPlay for persistence 
        for (var j = 0; j < allItemsInPlay.length; j++) {
            if (allItemsInPlay[j].name == Scene.itemsInScene[itemIndex].name)
                allItemsInPlay[j].state = 'used';
        }

        Bennet.setSpeech(txtSrc[0].react[1][lang]);
        Inv.writeLog(txtSrc[2].actions[3][lang].replace('*var*', Scene.itemsInScene[itemIndex].igName));
    } else {
        Bennet.setSpeech(txtSrc[0].react[2][lang]);
    }
}

/**
* manageInv()
*   to manage the inventory
* 
* @param: {array} clickPos: x-y-coordinates
*/
function manageInv(clickPos) {
    // iterates over all pockets
    for (var i = 0; i < Inv.pockets.length; i++) {
        //  identify the pocket by [global] highlighted (index of pocket set in doSomethingOnHover())
        if (highlighted == i) {
            // put the item on cursor in empty pocket 
            if (itemOnCursor !== null && Inv.pockets[i].content == 'empty') {
                
                Inv.writeLog(txtSrc[2].actions[8][lang].replace('*var*', itemOnCursor.igName));
                Inv.pockets[i].content = itemOnCursor;
                Inv.pockets[i].content.sceneSprite.index = 0;
                Inv.pockets[i].content.cursorSprite.index = 0;
                Inv.pockets[i].content.frameCounter = 0;
                
                var alreadyIn = false;
                for (var j = 0; j < Inv.itemsInInv.length; j++){
                    if (itemOnCursor.name == Inv.itemsInInv[j].name)
                        alreadyIn = true;
                }
                if (alreadyIn == false)
                    Inv.itemsInInv.push(itemOnCursor);

                itemOnCursor = null;
                action = 'noAction';
                highlightedDropzone = null;
                
            // exchange item on cursor with item in pocket when item on cursor and pocket not empty 
            } else if (itemOnCursor !== null && typeof Inv.pockets[i].content === 'object') {
                
                var interim = itemOnCursor;
                Inv.writeLog(txtSrc[2].actions[8][lang].replace('*var*', itemOnCursor.igName));
                itemOnCursor = Inv.pockets[i].content;

                Inv.pockets[i].content = interim;
                Inv.pockets[i].content.sceneSprite.index = 0;
                Inv.pockets[i].content.cursorSprite.index = 0;
                Inv.pockets[i].content.frameCounter = 0;

                Inv.writeLog(txtSrc[2].actions[7][lang].replace('*var*', itemOnCursor.igName));
                i = Inv.pockets.length + 1; // set i to 17 as an condition for next if (see: below)
                highlightedDropzone = null;
            
            // take item out of pocket when no item on cursor 
            } else {
                
                if (Inv.pockets[i].content == 'empty') {
                   Inv.writeLog(txtSrc[2].actions[9][lang].replace('*var*', (i + 1)));
                   Bennet.setSpeech(txtSrc[0].react[5][lang]); 
                   action = 'noAction';
                } else {
                    // special case of ringing phone
                    if (Inv.pockets[i].content.name == 'Mobile' && Inv.pockets[i].content.invSprite.seq.length > 2) {
                        mobileUse(Inv.pockets[i].content);
                    } else {
                        Inv.pockets[i].content.frameCounter = 0;
                        itemOnCursor = Inv.pockets[i].content;
                        // position correct
                        itemOnCursor.coo = [clickPos[0] - (itemOnCursor.allSprites[1].size[0] / 2), clickPos[1] - (itemOnCursor.allSprites[1].size[1])];
                        // itemOnCursor.state = 'reg';
                        Inv.writeLog(txtSrc[2].actions[7][lang].replace('*var*', itemOnCursor.igName));
                        Inv.pockets[i].content = 'empty';
                        action = 'hold';
                        i = Inv.pockets.length + 1; // set i to 17 as an condition for next if (see: below)
                    }
                }
            }
        }
    }
    if (action == 'hold' && i < Inv.pockets.length + 1) {

        if (itemOnCursor.disposable != false && itemOnCursor.name != 'Change') {
            if (questIndex > 9)
                Bennet.setSpeech(txtSrc[0].react[25][lang]);
            else // for no 4th wall breaking commentary on throwings things away
                Bennet.setSpeech(txtSrc[0].react[43][lang]);
        }
        else
            Bennet.setSpeech(txtSrc[0].react[8][lang]);
        
        clickSndOn = false;
    }
}

/**
* disposeItem()
*   to dispose item when item on cursor
* 
* @param: {array} clickPos: x-y-coordinates
* @return {boolean}
*/
function disposeItem(clickPos) {

    var ret = false;
    // scene needs dropZones
    if (typeof Scene.dropZones != 'undefined' && itemOnCursor != null) {
        // access all dropzone
        for (var i = 0; i < Scene.dropZones.length; i++) {
            if ((clickPos[0] > Scene.dropZones[i][0][0] && clickPos[0] < Scene.dropZones[i][0][0] + Scene.dropZones[i][1][0]) &&
                (clickPos[1] > Scene.dropZones[i][0][1] && clickPos[1] < Scene.dropZones[i][0][1] + Scene.dropZones[i][1][1]) &&
                Scene.dropZones[i][3] == true) {
                
                // is picked item disposable?
                if (itemOnCursor.disposable != false) {
                    // returns an item drop or try of an item drop
                    ret = true;

                    if (Scene.dropZones[i][2] == itemOnCursor.disposable) {
                                                    
                        if ((Bennet.coo[0] < Scene.dropZones[i][0][0] - 130 ||
                            Bennet.coo[0] > Scene.dropZones[i][0][0] + Scene.dropZones[i][1][0] + 130)
                            && reachabilityOn == true) {

                            Bennet.setSpeech(txtSrc[0].react[0][lang]);
                            Inv.writeLog(txtSrc[2].actions[2][lang]);

                        } else {
                            // deletes the droped item from item catalogue {array} allItemsInPlay
                            for (var j = 0; j < allItemsInPlay.length; j++) {
                                if (allItemsInPlay[j].name == itemOnCursor.name)
                                    allItemsInPlay.splice(j, 1);
                            }

                            for (var l = 0; l < Inv.itemsInInv.length; l++) {
                                if (Inv.itemsInInv[l].name == itemOnCursor.name)
                                   Inv.itemsInInv.splice(l, 1);
                            }
                            
                            // push dropped item in {array} allDroppedItems if not already in there
                            var equals = false;
                            for (var k = 0; k < allDroppedItems.length; k++) {
                                
                                if (itemOnCursor.name == allDroppedItems[k].name)
                                   var equals = true; 
                            }
                            if (equals == false && itemOnCursor.name != 'Change')
                                allDroppedItems.push(itemOnCursor);
                            equals = false;

                            if (soundOn == true) {
                                if (itemOnCursor.disposable >= 7) 
                                    coinSnd.play();
                                else if (itemOnCursor.disposable >= 4)
                                    glassSnd.play();
                                else
                                    lidSnd.play();
                            }

                            itemOnCursor = null;
                            action = 'noAction';
                            
                            // Carl or Steven responding
                            if (Scene.npcInScene.length > 0) {
                                if (Scene.index == 5) {
                                    Scene.npcInScene[0].state = 'talking';
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[0][lang]);
                                } else if (Scene.index == 3) {
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[9][lang]);
                                    uniTrigger = true;
                                }
                            }

                            highlightedDropzone = null;
                        }
                    } else if (Scene.npcInScene[0].name == 'Carl') {

                        Scene.npcInScene[0].state = 'talking';
                        
                        if (Scene.npcInScene.length > 0) {
                            switch (itemOnCursor.disposable) {
                                case 1:
                                    // item have to dispose of as residual waste
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[1][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 2:
                                    // item have to dispose of as recyclable waste
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[2][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 3:
                                    // item have to dispose of as organic waste
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[3][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 4:
                                    // item have to dispose of as green glass
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[4][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 5:
                                    // item have to dispose of as brown glass
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[5][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 6:
                                    // item have to dispose of as white glass
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[6][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                case 7:
                                    // try to dispose change
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[7][lang]);
                                    break;
                                case 8:
                                    // try to dispose hazardous waste (battery)
                                    Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[10][lang].replace('*var*', itemOnCursor.igName));
                                    break;
                                default:
                                    console.log('no reaction by Carl possible in disposeItem()');
                            }
                        }
                    } else if (Scene.npcInScene[0].name == 'Guitar Guy') {
                        Scene.npcInScene[0].setSpeech(txtSrc[0].carlReact[8][lang]);
                    }
                }
            }
        }
    }
    // return true if successfull item drop or try of drop -> false leads to manageInv()
    return ret;
}

/**
* dropZoneRenderHighlight()
*   renders dropzone marker on hover
* 
* @param: {obj} ctx
*/
function dropZoneRenderHighlight(ctx) {

    ctx.beginPath();

    ctx.lineWidth = 2;
    if  (Scene.dropZones[highlightedDropzone][2] == itemOnCursor.disposable)
        ctx.strokeStyle = '#1bda32';
    else
        ctx.strokeStyle = '#ff657e';

    ctx.rect(Scene.dropZones[highlightedDropzone][0][0], 
             Scene.dropZones[highlightedDropzone][0][1],
             Scene.dropZones[highlightedDropzone][1][0], 
             Scene.dropZones[highlightedDropzone][1][1]);
    
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = '#333';
}

/**
* manageConvo()
*   organizes conversations to npc's
* 
* @param: {obj} npc
*/
function manageConvo(npc) {

    // sets convo at the end – npc repeats last sentence
    if (npc.talked == true) { 
        convoIndex = npc.npcChat.index[1];
        if (npc.name == 'Zoë' && Scene.index == 6) // activates the input panel
            document.getElementById('input_panel').style.display = 'block';
    }

    // for organizing the switch of speeches in conversation
    if (convoIndex == npc.npcChat.index[1]) {
        Bennet.chatOn = false;
        npc.chatOn = true;

        if (npc.name == 'Guitar Guy' && guitarSnd.volume > guitarSndVol - .01)
            guitarSndFade = 'fadeOut';
        
        Bennet.state = 'idling';
        Bennet.frameCounter = 0;

        npc.state = 'talking';
        npc.talkingSprite.seq = [0, 1];
        npc.frameCounter = 0;
    } else {
        npc.chatOn = false; 

        Bennet.state = 'talking';
        Bennet.animationOn = true;
        Bennet.chatOn = true;

        npc.talkingSprite.seq = [0, 0];
    }
    
    // switch the speeches
    if (Bennet.chatOn == false) {
        npc.setSpeech(npc.npcChat.speech[npc.npcChat.index[0]]
                                        [npc.npcChat.index[1]]
                                        [lang]);

        if (convoIndex == npc.npcChat.index[1]) {
            
            if (npc.npcChat.index[1] < npc.npcChat.speech[npc.npcChat.index[0]].length - 1) {
                npc.npcChat.index[1]++;
            }
            else {
                npc.npcChat.index[1] = npc.npcChat.speech[npc.npcChat.index[0]].length - 1;
                npc.talked = true;
                
                // set previously spoken (talked) as true in sceneSrc
                for (var i = 0; i < sceneSrc[Scene.index].npcInScene.length; i++) {
                    if (npc.name == sceneSrc[Scene.index].npcInScene[i][0]) {
                        sceneSrc[Scene.index].npcInScene[i][3] = true;
                    }
                }
                
                // special case: activates the input panel in scene 6
                if (npc.name == 'Zoë' && Scene.index == 6) {
                    document.getElementById('input_panel').style.display = 'block';
                    document.getElementById('d1').focus();
                }

                action = 'noAction';

                // special case: Luca hands over the small note 2 at questIndex 3
                if (npc.name == 'Luca' && questIndex == 3) {
                    var filledPocketCount = 0;
                    for (var j = 0; j < Inv.pockets.length; j++) {
                        if (Inv.pockets[j].content != 'empty')
                            filledPocketCount++

                        if (Inv.pockets[j].content.name == 'Small Note M2')
                            filledPocketCount = 'in stock';
                    }
                    
                    if (filledPocketCount >= 16) {
                        Bennet.setSpeech(txtSrc[0].react[32][lang]);
                    } else if (filledPocketCount == 'in stock') {
                        Bennet.setSpeech(txtSrc[0].react[31][lang]);
                    } else {
                        itemOnCursor = Scene.itemsInScene.pop();
                        action = 'hold';
                    }
                }
            }
        }
    } else { 
        Bennet.setSpeech(npc.npcChat.response[npc.npcChat.index[0]]
                                             [npc.npcChat.index[1]]
                                             [lang]);
        convoIndex = npc.npcChat.index[1];
        
        Bennet.chatOn = true;
        npc.chatOn = false;
    }
}

/**
* setExitPath()
*   set the path for main char when exit zone is clicked
* 
* @param: {int} zoneIndex
*/
function setExitPath(zoneIndex) {
    
    var oldGridCoo = getGridPos(Bennet.coo, 'matrix');
    var newGridCoo = getGridPos([Scene.exitZones[zoneIndex][2][0], Scene.exitZones[zoneIndex][2][1]], 'matrix');                

    if (newGridCoo !== false) {
        // exit correction when char near exit zone
        // avoids a bug in Char.render (state: walking) when PFpath has the same coordinates for start & end
        if ((oldGridCoo[0] == newGridCoo[0] || oldGridCoo[1] == newGridCoo[1])) {
            switch (zoneIndex) {
                case 0:
                    oldGridCoo[1]++;
                    break;
                case 1:
                    oldGridCoo[0]--;
                    break;
                case 2:
                    if (Scene.index == 6)
                        oldGridCoo[1]++;
                    else
                        oldGridCoo[1]--;
                    break;
                case 3:
                    oldGridCoo[0]++;
                break;
                default:
                    console.log('something in doSomethingOnClick, exit correction');
            }
        }

        Bennet.setRoute(oldGridCoo, newGridCoo); 

        if (PFpath.length > 0) {
            transfer = 0;
            Bennet.state = 'walking';
        }
    } else {
        console.log('no PFpath');
    }
}

/**
* switchScene()
*   switches the scene
*   manage the door sounds
* 
* @param: {int} oldSceneIndex
*/
function switchScene(oldSzeneIndex) {
    remOldSceneIndex = oldSzeneIndex;

    var oldExitZoneIndex = Scene.transition[0];

    switch (oldExitZoneIndex) {
        case 0:
            oldExitZoneIndex = 2;
            break;
        case 1:
            oldExitZoneIndex = 3;
            break;
        case 2:
            oldExitZoneIndex = 0;
            break;
        case 3:
            oldExitZoneIndex = 1;
            break;
        default:
            oldExitZoneIndex = 3;
    }

    if (Scene.transition[1] == 2 || 
        Scene.transition[1] == 3 ||
        Scene.transition[1] == 5 ||
        Scene.transition[1] == 6 ||
        Scene.transition[1] == 7) {
        
        if (soundOn == true)
            strAmbSnd.play();

        baseAmbSnd.pause();
    } else if (Scene.transition[1] == 8) {
        strAmbSnd.pause();
        if (soundOn == true)
            baseAmbSnd.play();
    }
    else {
        strAmbSnd.pause();
        baseAmbSnd.pause();
    }

    if (soundOn == true) {
        // apartment door out
        if (oldSzeneIndex == 0)
            doorSnd.play();
        // menu out / for menu in look at document.onkeydown event
        else if (oldSzeneIndex == 9) {
            if (Scene.transition[1] == 0) 
                doorSnd.play();
            else if (Scene.transition[1] == 1 || Scene.transition[1] == 2)
                frontDoorSnd.play();
            else if (Scene.transition[1] == 8) {
                metalDoorSnd.play();
            }
        }
        // apartment door in or loft scene (easter egg) in
        else if ((oldSzeneIndex == 1 && Scene.transition[1] == 0) || (oldSzeneIndex == 7 && Scene.transition[1] == 10))
            doorSnd.play();
        // front door (house number 42)
        else if ((oldSzeneIndex == 1 && Scene.transition[1] == 2) || (oldSzeneIndex == 2 && Scene.transition[1] == 1))
            frontDoorSnd.play();
        // cellar door
        else if ((oldSzeneIndex == 6 && Scene.transition[1] == 8) || (oldSzeneIndex == 8 && Scene.transition[1] == 6))
            metalDoorSnd.play();
    }
   
    Scene = new CurrentScene(Scene.transition[1]);

    Bennet.route = [Scene.entryRoutes[oldExitZoneIndex][0], Scene.entryRoutes[oldExitZoneIndex][1]];

    var oldGridCoo = getGridPos(Scene.entryRoutes[oldExitZoneIndex][0], 'matrix');
    var newGridCoo = getGridPos(Scene.entryRoutes[oldExitZoneIndex][1], 'matrix');
    
    if (newGridCoo !== false) {
        
        Bennet.setRoute(oldGridCoo, newGridCoo);
        
        if (PFpath.length > 0) {
            transfer = 0;
            Bennet.state = 'walking';
        }
    }
    Scene.state = 'active';

    // turn off the menu if in doubt
    if (Menu.active == true && questIndex != 0) {
        canvas2.style.display = 'none';
        Menu.active = false;
    } else if (Menu.active == true && Scene.index == 0) { // activate explanation screen at game start
        canvas2.style.display = 'block';
        Expl.active = true;
        canvas2Background.src = imgPath + 'explanation_overlay.png';
        Menu.active = false;
        Inv.highlightHintBtnIndex = questSrc[questIndex].log.length;
    }

    // glitch trigger in last quest on apartment door
    if (questIndex == 11 && (oldSzeneIndex == 0 || oldSzeneIndex == 1) && Scene.index < 2) {
        glitchTrigger(20, 0);
        Bennet.setSpeech(txtSrc[0].react[46][lang]);
    }

    if (oldSzeneIndex == 9) {
        clicksPerQuest = 0;
        document.getElementById('menu_reference').style.display = 'block';
    }
}

/**
* setWayBackFromMenu()
*   manipulate the oldSzeneIndex for correct game resume on moushole action
* 
* @param: {int} oldSceneIndex
*/
function setWayBackFromMenu(oldSzeneIndex) {

    switch (oldSzeneIndex) {
        case 0:
            oldExitZoneIndex = 0;
            break;  
        case 1:
            oldExitZoneIndex = 0;
            break;
        case 2:
            oldExitZoneIndex = 0;
            break;
        case 3:
            oldExitZoneIndex = 2;
            break;
        case 4:
            oldExitZoneIndex = 0;
            break;  
        case 5:
            oldExitZoneIndex = 1;
            break;
        case 6:
            oldExitZoneIndex = 3;
            break;
        case 7:
            oldExitZoneIndex = 0;
            break;
        case 8:
            oldExitZoneIndex = 2;
            break;  
        case 9:
            oldExitZoneIndex = 2;
            break;
        case 10:
            oldExitZoneIndex = 0;
            break;
        default:
            console.log('default switch option in setWayBackFromMenu()');
    }
    // alert(oldSzeneIndex);
    return oldExitZoneIndex;
}

/**
* fadeSnd()
*   sound fading in & out
* 
* @param: {obj} sound
* @param: {int} maxVol
*/
function fadeSnd(sound, maxVol) {
        
    if (guitarSndFade == 'fadeOut' && sound.volume > 0) {
        sound.volume -= .005;

        if (sound.volume < .01) {
            sound.volume = .01;
            sound.pause();
            guitarSndFade = 'none';
        }
    }
    
    if (guitarSndFade == 'fadeIn') {
        sound.play();
        sound.volume += .01;

        if (sound.volume > maxVol) {
            guitarSndFade = 'none';
        }
    }
}

// --- quest detection --------------------------------------------------------------------------------
/**
* setQuest()
*   crucial function vor game progression questwise called on every click
*   performes the hole check, if quest conditions are met (if all helper function return true)
*   triggers the quest message
* 
* @param: {int} index: questIndex
*/
function setQuest(index) {

    if (questStop == false) { // stop for Testing

        // condition: all needed items in pocket
        var pocketCon = testItemsInPockets(questSrc[index].inPockets);
        // condition: all dialogs are completetd
        var dialogCon = testDialogIsDone(questSrc[index].dialog)
        // condition: all items are used
        var usedCon = testItemsAreUsed(questSrc[index].used);
        // condition: special cases
        var specialCon = testSpecialCases(Scene.index);

        // all conditions fulfilled ?
        if (dialogCon == true && pocketCon == true && usedCon == true && specialCon == true) {
            
            if (index != 9) // lil customization
                Bennet.setSpeech(questSrc[index].speech[lang]);
            Inv.writeLog(txtSrc[2].gameStates[1][lang]);
            questIndex++;
            
            // get the inventory as itemString to save on cookie
            var itemString = '';
            for (var i = 0; i <  Inv.itemsInInv.length; i++){
                if (Inv.itemsInInv[i] != null)
                    itemString += Inv.itemsInInv[i].name + '|' ;
            }
            if (itemString != '')
                itemString = itemString.slice(0, -1);
            
            // set cookie
            setCookie(questIndex, itemString, exTime);

            HintFetchCounter = 0;
            clicksPerQuest = 0;
            Inv.highlightHintBtnIndex = 0;    

            // setting the requirements for next quest depending on questIndex
            switch (questIndex) {
                case 0:
                    break;
                case 1:
                    triggerQuestMsg();
                    break;
                case 2:
                    sceneSrc[0].exitZones[1][5] = true;
                    Mobile.setMsg('Luca', 0);
                    triggerQuestMsg();
                    break;
                case 3:
                    triggerQuestMsg();  
                    break;
                case 4:
                    triggerQuestMsg();
                    // set Steven to next convo
                    npcChatSrc[5].index = [1, 0];
                    sceneSrc[3].npcInScene[0][3] = false;
                    // set Eliot to next convo
                    npcChatSrc[2].index = [1, 0];
                    sceneSrc[4].npcInScene[1][3] = false;
                    if (Scene.index == 4)
                        Scene.npcInScene[1].talked = false;
                    break;
                case 5:
                    // set Eliot to next convo
                    triggerQuestMsg();
                    break;
                case 6:
                    // set Eliot to right convo index
                    npcChatSrc[2].index = [2, 0];
                    sceneSrc[4].npcInScene[1][3] = false;
                    
                    // set Luca to right convo index
                    npcChatSrc[1].index = [1, 0];
                    // set Steven to next convo
                    npcChatSrc[5].index = [2, 0];
                    sceneSrc[3].npcInScene[0][3] = false;
                    if (Scene.index == 3)
                        Scene.npcInScene[0].talked = false;
                
                    sceneSrc[4].npcInScene[0][3] = false;
                    triggerQuestMsg();
                    break;
                case 7:
                    // set Steven to glitchy convo
                    npcChatSrc[5].index = [3, 0];
                    sceneSrc[3].npcInScene[0][3] = false;                
                    triggerQuestMsg(); 
                break;
                case 8:

                    lilStoryHelper1 = true;

                    // set Steven on 'glitch-wow'
                    npcChatSrc[5].index = [3, 4];
                    sceneSrc[3].npcInScene[0][3] = true;

                    // set Zoë to next convo
                    npcChatSrc[4].index = [2, 0];
                    sceneSrc[6].npcInScene[0][3] = false;

                    // take eliot & doggo out of pizza scenes
                    sceneSrc[4].npcInScene[1][2][1] = 1200;
                    sceneSrc[3].itemsInScene[sceneSrc[3].itemsInScene.length - 1][2][0] = 1200;
                    triggerQuestMsg();
                break;
                case 9:
                    // set Zoë to next convo
                    npcChatSrc[4].index = [3, 0];
                    sceneSrc[6].npcInScene[0][3] = false;

                    // take eliot & doggo out of pizza scenes
                    sceneSrc[4].npcInScene[1][2][1] = 1200;
                    sceneSrc[3].itemsInScene[sceneSrc[3].itemsInScene.length - 1][2][0] = 1200;

                    // put doggo in place on scene 6 (back alley) & correct the path to door
                    if (questIndex > 8 && sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] > 300) {
                        sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] = 245;
                        var interim = sceneSrc[6].PFmap;
                        sceneSrc[6].PFmap = sceneSrc[6].PFmapAlt;
                        sceneSrc[6].PFmapAlt = interim;
                    }
                    triggerQuestMsg(); 
                break;
                case 10:
                    // set Zoë to next convo
                    npcChatSrc[4].index = [5, 0];
                    sceneSrc[8].npcInScene[0][3] = false;
                    // set Eliot to next convo
                    npcChatSrc[2].index = [4, 0];
                    sceneSrc[8].npcInScene[1][3] = false;
                    if (Scene.index == 8){
                        Scene.npcInScene[0].talked = false;
                        Scene.npcInScene[1].talked = false;
                    }
                    triggerQuestMsg(); 
                break;
                case 11:
                    // set Zoë to next convo
                    npcChatSrc[4].index = [6, 0];
                    sceneSrc[8].npcInScene[0][3] = false;
                    // set Eliot to next convo
                    npcChatSrc[2].index = [5, 0];
                    sceneSrc[8].npcInScene[1][3] = false;
                    if (Scene.index == 8){
                        Scene.npcInScene[0].talked = false;
                        Scene.npcInScene[1].talked = false;
                    }
                    Expl.txtIndex = 2;
                    triggerQuestMsg(); 
                break;
                default:
                    console.log('no questIndex in setQuest()'); 
            }
        }
    }
}

/**
* testItemsInPockets()
*   helper function for quest detection
*   "all necessary items in pockets?"
* 
* @param: {array} itemNames: from {array} questSrc
* @return {boolean}
*/
function testItemsInPockets(itemNames) {
    var indicator = 0;

    for (var i = 0; i < Inv.pockets.length; i++) {
        if (Inv.pockets[i].content != 'empty') {
            for (var j = 0; j < itemNames.length; j++) {
                if (itemNames[j] == Inv.pockets[i].content.name) {
                    indicator++;
                }
            }
        }
    }
    if (itemNames.length == indicator) 
        return true;
    else
        return false;
}

/**
* testDialogIsDone()
*   helper function for quest detection
*   "all necessary dialogs are done?"
* 
* @param: {array} npcsToDialog: from {array} questSrc
* @return {boolean}
*/
function testDialogIsDone(npcsToDialog) {
    var indicator = 0;

    for (var i = 0; i < npcChatSrc.length; i++) {
        
        for (var j = 0; j < npcsToDialog.length; j++) {
            
            if (npcChatSrc[i].name == npcsToDialog[j][0] && // the right npc
                npcChatSrc[i].index[0] == npcsToDialog[j][1] && // the right convo
                npcChatSrc[i].index[1] == npcChatSrc[i].speech[npcChatSrc[i].index[0]].length - 1 && // last sentence of the convo
                action == 'noAction') {

                indicator++;
            }
        }
    }

    if (npcsToDialog.length == indicator)
        return true;
    else
        return false;
}

/**
* testItemsAreUsed()
*   helper function for quest detection
*   "all necessary items are used?"
* 
* @param: {array} itemNames: from {array} questSrc
* @return {boolean}
*/
function testItemsAreUsed(itemNames) {
    var indicator = 0;

    for (var i = 0; i < allItemsInPlay.length; i++) {
        
        for (var j = 0; j < itemNames.length; j++) {
            if (itemNames[j] == allItemsInPlay[i].name && allItemsInPlay[i].state == 'used') {
                indicator++;
            }
        }
    }
    if (itemNames.length == indicator) 
        return true;
    else
        return false;
}

/**
* testSpecialCases()
*   helper function for quest detection
*   "some special conditions are fulfilled?"
*   using as trigger of events by first click in a scene !!
* 
* @param: {int} sceneIndex
* @return {boolean}
*/
function testSpecialCases(sceneIndex) {

    switch (sceneIndex) {
        case 0:
            if (questIndex == 0) { 
                if (linesOfCode >= 30) {
                    return true; 
                }
            } else if (questIndex == 1) {
                if (Bennet.idlingSprite.spriteObj.src.indexOf('parka') > 0) {
                    Mobile.msg = true;
                    return true;
                }
            } else if (questIndex == 8) {
                var interim = parseInt(getCookie('linesOfCode')); 
          
                if (linesOfCode >= interim + 40) {
                    return true;
                }
            }
            break;
        case 1:
            break;
        case 2:
            // trigger for mobile ring by first click in the scene
            for (var i = 0; i < Inv.pockets.length; i++) {
                if (Inv.pockets[i].content.name == 'Mobile' && Inv.pockets[i].content.invSprite.seq.length < 2 && Mobile.msg == true) {
                    Inv.pockets[i].content.invSprite.seq = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];

                    Bennet.setSpeech(txtSrc[0].react[15][lang]);
                    if (soundOn == true)
                        vibratingSnd.play();
                }
            }

            if (msgSrc[0].index == 1 && questIndex == 2)
                return true;
            break;
        case 3:
            if ((msgSrc[0].index == 1 && questIndex == 2) || questIndex == 4)
                return true;
            else if (questIndex == 5 && uniTrigger == true)
                return true;
            break;
        case 4:
            if (questIndex == 3 || questIndex == 4)
                return true;
            break;
        case 5:
            if (msgSrc[0].index == 1 && questIndex == 2)
                return true;
            break;
        case 6:
            if (msgSrc[0].index == 1 && questIndex == 2)
                return true;
            else if (questIndex == 6)
                return true;
            break;
        case 7:
            if (msgSrc[0].index == 1 && questIndex == 2)
                return true;
            break;
        case 8:
            if (questIndex == 9)
                return true;
            break;
        case 9:
            break;
        case 10:
            if (msgSrc[0].index == 1 && questIndex == 2)
                return true; 
            break;
        default:
            return false;
    }

    if (questIndex == 7)
        return true;

    if (questIndex == 10 && lilStoryHelper4 == true)
        return true;

    return false;
}

/**
* validateInputPanel()
*   validates access-code on user input
* 
* @param: {obj} inputFields (DOM-object)
*/
function validateInputPanel(inputFields) {

    var digitsCount = 0;
    var okCount = 0;

    for (i = 0; i < inputFields.length; i++) {
        
        var value = parseInt(inputFields[i].value); // parse to Int

        if (value <= 9 && value >= 0)
            digitsCount++

        if (inputFields[i].value == accessKey[i])
            okCount++;
    }

    if (digitsCount == 8) { // all inputfields are numbers
        if (okCount == 8) { // all numbers are right

            document.getElementById('input_panel').style.display = 'none';
            Scene.npcInScene.splice(0, 1);
            Scene.exitZones[2][5] = true;
            sceneSrc[6].exitZones[2][5] = true;
            Bennet.setSpeech(txtSrc[0].react[28][lang]);
            if (soundOn == true)
                unlockSnd.play();
            
            // set Zoe to next convo
            npcChatSrc[4].index = [4, 0];
            sceneSrc[8].npcInScene[0][3] = false;
            // set Eliot to next convo
            npcChatSrc[2].index = [3, 0];
            sceneSrc[8].npcInScene[1][3] = false;

            convoIndex = -1;
            
            // for bennets comment by visiting first the cellar
            lilStoryHelper3 = true;
            
            if (questIndex < 9) {
                questIndex = 9;
            }
        }
        else {
          Scene.npcInScene[0].setSpeech(txtSrc[0].react[27][lang]);
          Scene.npcInScene[0].state = 'talking';
        }
    }
}

// --- special cases ------------------------------------------------------------------------
/**
* specialCasePickUp()
*   interrupts the normal pick up routine in doSomethingOnClick() for special treatment
* 
* @param: {int} itemIndex
*/
function specialCasePickUp(itemIndex) {
    
    if (Scene.itemsInScene[itemIndex].name == 'Parka') {

        Scene.foreground.src = scenePath + 'sc00_apartment_fg_emptyWardrobe.png';
        Scene.itemsInScene.splice(itemIndex, 1);
        Bennet.walkingSprite.spriteObj.src = imgPath + 'bennet_walking_all_parka.png'
        Bennet.idlingSprite.spriteObj.src = imgPath + 'bennet_idling_front_parka.png'
    }
    
    if (Scene.index == 1) {
        if (Scene.itemsInScene[itemIndex].name == 'Small Note R6') {
            
            if (Scene.npcInScene.length < 1) {
                // light is on or not
                if (Scene.foreground.src.indexOf('dummyPixel') >= 0)
                    Bennet.setSpeech(txtSrc[0].react[18][lang]);
                else {
                    itemOnCursor = Scene.itemsInScene.slice(itemIndex)[0];
                    Scene.itemsInScene.splice(itemIndex, 1);
                    itemOnCursor.coo[0] = 920;
                    itemOnCursor.coo[1] = 380;
                    Inv.writeLog(txtSrc[2].actions[7][lang].replace('*var*', itemOnCursor.igName));
                    action = 'hold';
                }
            } else
                Bennet.setSpeech(txtSrc[0].react[20][lang]);
        }
    }

    if (Scene.index == 6) {
        if (Scene.itemsInScene[itemIndex].name == 'Dandelion') {
            glitchTrigger(30, 1);
            Bennet.setSpeech(txtSrc[0].react[35][lang]);

            if (questIndex == 10)
                lilStoryHelper4 = true;
        }
    }
}

/**
* specialCaseUse()
*   interrupts the normal use routine in doSomethingOnClick() for special treatment
* 
* @param: {int} itemIndex
* @param: {array} clickPos: x-y-coordinates
*/
function specialCaseUse(itemIndex, clickPos) {
    
    // scene00 use the desk (ignore mobile laying on desk)
    if (Scene.itemsInScene[itemIndex].name == 'Desk') {
        // special case of using the mobile on desk (if not)
        if  (!((clickPos[0] > Scene.itemsInScene[1].coo[0] && clickPos[0] < Scene.itemsInScene[1].coo[0] + Scene.itemsInScene[1].size[0]) && 
               (clickPos[1] > Scene.itemsInScene[1].coo[1] && clickPos[1] < Scene.itemsInScene[1].coo[1] + Scene.itemsInScene[1].size[1]) &&
                Scene.itemsInScene[1].inPlay == true)) {
            
            codingNightOn = true;
            canvas2Background.src = imgPath + 'scenes/codingNight/sc00_codingNight_start.png'
            canvas2.style.display = 'block';
        }
    }
    if (Scene.itemsInScene[itemIndex].name == 'Mobile') {
        codingNightOn = false;
        canvas2.style.display = 'none';
        Bennet.setSpeech(Scene.itemsInScene[itemIndex].denyUse);
    }

    // scene00 - quest 0 - take the Parka
    if (Scene.itemsInScene[itemIndex].name == 'Parka') {
        
        Scene.foreground.src = scenePath + 'sc00_apartment_fg_emptyWardrobe.png';
        Scene.itemsInScene.splice(itemIndex, 1);
        Bennet.walkingSprite.spriteObj.src = imgPath + 'bennet_walking_all_parka.png';
        Bennet.idlingSprite.spriteObj.src = imgPath + 'bennet_idling_front_parka.png';
    }

    // max itemsInScene.length
    if(itemIndex < Scene.itemsInScene.length) {
        // scene01 - switch the light
        if (Scene.itemsInScene[itemIndex].name == 'Light Switch') {
            
            if (Scene.itemsInScene[itemIndex].state == 'reg') {

                Scene.itemsInScene[itemIndex].state = 'used';
                Bennet.setSpeech(txtSrc[0].react[19][lang]);

                for (var i = 0; i < Scene.itemsInScene.length; i++) {
                    if (Scene.itemsInScene[i].name == 'Flicker Light') {
                    Scene.itemsInScene[i].sceneSprite.seq = [1];
                    }
                }

                Scene.foreground.src = scenePath + 'sc01_hallway_fg.png';
            } else {
                
                Scene.itemsInScene[itemIndex].state = 'reg';
                Scene.foreground.src = scenePath + 'dummyPixel.png';

                for (var i = 0; i < Scene.itemsInScene.length; i++) {
                    if (Scene.itemsInScene[i].name == 'Flicker Light')
                        Scene.itemsInScene[i].sceneSprite.seq = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1];
                }
            }
        }

        // scene06 - use the camera
        if (Scene.itemsInScene[itemIndex].name == 'Camera') {
            // when door is locked
            if (questIndex < 6) {
                Bennet.setSpeech(txtSrc[0].react[36][lang]);
            } else {

                if (sceneSrc[6].exitZones[2][5] == false) {
                    if (Bennet.coo[0] < 240 && Bennet.coo[1] < 410)
                        Bennet.coo = [270, 440];
                        Scene.walkingTrigger = false;

                        Scene.npcInScene[0].coo = [194, 270];
                        lastAddressedNpc = Scene.npcInScene[0];

                    action = 'inConvo';
                } else {
                    Bennet.setSpeech(txtSrc[0].react[24][lang]);
                }
            }
        }
        
        //scene02 use trash cans
        if (Scene.itemsInScene[itemIndex].name == 'Trash Can Down') {
            setItemStateUsed(itemIndex);
            Scene.itemsInScene[itemIndex].desc = (lang == 0) ? 'The garbage is where it belongs. For the time being.' : 'Der Abfall ist da wo er hin gehört. Vorerst.';
            Scene.itemsInScene[itemIndex].deny = (lang == 0) ? 'I really don\'t want to take that with me.' : 'Das will ich wirklich nicht mitnehmen.';
        }

        // use fusebox
        if (Scene.itemsInScene[itemIndex].name == 'Fuse Box') {

            if (Scene.itemsInScene[itemIndex].state != 'used') {
                if (Scene.itemsInScene[Scene.itemsInScene.length - 1].name == 'Loose Wire')
                    Scene.itemsInScene[Scene.itemsInScene.length - 1].coo = [128, 272];
            }
            setItemStateUsed(itemIndex);
        }
    }
}

/**
* specialWalkingInterrupt()
*   interrupts the normal use routine in doSomethingOnClick() for special treatment
* 
* @param: {int} sceneIndex
*/
function specialWalkingInterrupt(sceneIndex) {
    
    switch (sceneIndex) {
        // Scene 'Hallway'
        case 1:
            // Mrs. Knittel appears by walkin' too far to the right && the light is on
            if (Bennet.coo[0] > 770 && action == 'noAction' && Scene.foreground.src.indexOf('dummyPixel') >= 0) {
                // [global] delayByOneFrame to fix a bug by entering the scene from 'apartment'
                if (delayByFrame == 2) {
                    // inserts open door item
                    var item = new Item('Apartment Door Open', 'reg', [1005, 458], false, false, false);
                    Scene.itemsInScene.push(item);
                    // inserts character Knittel with extra parameter for npc (true)
                    var char = new Char('Knittel', 'idling', [1010, 448], true, false, true);
                    char.currentSprite = char.idlingSprite; // small fix for hovering at the first frame
                    Scene.npcInScene.push(char);
                    // walkingTrigger back to true by rebuilding the scene
                    Scene.walkingTrigger = false;

                    // first speak of Knittel
                    if (sceneSrc[1].npcInScene[0][3] != true) {
                        if (lang == 1) {
                            char.setSpeech('Junger Mann, hier geblieben!');
                            Bennet.chatOn = false; // fix
                        }
                        else
                            char.setSpeech('Stop, young man!');

                        lastAddressedNpc = char;
                        char.state = 'talking';
                        action = 'inConvo';
                        document.body.style.cursor = 'url(' + imgPath + 'talking.cur), pointer';
                    } else {
                        // repeating the last phrase of convo (convo index 0)
                        char.setSpeech(char.npcChat.speech[0][6][lang]);
                        // Bennet.setSpeech('Hmmmpf');
                        char.state = 'talking';
                    }
                    delayByFrame = 0;
                }

                // disables delay for fix
                if (delayByFrame < 3)
                    delayByFrame++;
            }
            break;
        case 6:
            // Bennet comments walking near to sleepin' Doggo
            if (Bennet.coo[0] < 320 && action == 'noAction' && 
                sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] < 300 &&
                Bennet.frameCounterChat == 0) {
                
                if (delayByFrame == 2) {
                    Bennet.setSpeech(txtSrc[0].react[39][lang]);
                    delayByFrame = 0;
                }

                if (delayByFrame < 3)
                    delayByFrame++;
            }
            break
        default:
            console.log('switch default in specialWalkingInterrupt() switch')
    }
}

// --- mobile use ---------------------------------------------------------------------------
/**
* mobileUse()
*   interrupts the normal use or pick up routine in doSomethingOnClick() for special mobile treatment
* 
* @param: {obj} mobile: the mobile object
*/
function mobileUse(mobile) {
    
        Mobile.active = true;
        
        if (Scene.index == 9)
            Menu.active = false;

        canvas2Background.src = imgPath + 'mobile_overlay.png';
        canvas2.style.display = 'block';
        mobile.invSprite.seq = [4, 4];

        vibratingSnd.pause();

        if (questIndex == 2)
            lilStoryHelper4 = false;
}

/**
* mobileClick()
*   reacts on click at mobile overlay (canvas2)
* 
* @param: {array} clickPos: x-y-coordinates
*/
function mobileClick(clickPos) {

    if (Mobile.msg == true) {
        // click the dismiss button
        if (clickPos[0] > 531 && 
            clickPos[1] > 152 + bubbleLength &&
            clickPos[0] < 595 &&
            clickPos[1] < 180 + bubbleLength) {

            Mobile.active = false;
            Mobile.msg = false;

            msgSrc[0].index++;

            for (var i = 0; i < Inv.pockets.length; i++) {
                if (Inv.pockets[i].content.name == 'Mobile') {
                    Inv.pockets[i].content.invSprite.seq = [0];
                }
            }

            (Scene.index == 9) ? Menu.active = true : canvas2.style.display = 'none';
        } else {
            clickSndOn = false;
        }
    } else {
        Mobile.active = false;

        for (var i = 0; i < Inv.pockets.length; i++) {
            if (Inv.pockets[i].content.name == 'Mobile') {
                Inv.pockets[i].content.invSprite.seq = [0];
            }
        }
        Bennet.setSpeech(txtSrc[0].react[17][lang]);

        // shot down menu
        (Scene.index == 9) ? Menu.active = true : canvas2.style.display = 'none';
    }
}

/**
* mobileHover()
*   hover functionality for mobile overlay
* 
* @param: {array} hoverPos: x-y-coordinates
*/
function mobileHover(hoverPos) {

    if (Mobile.msg == true) {
        if (hoverPos[0] > 531 && 
            hoverPos[1] > 152 + bubbleLength && 
            hoverPos[0] < 595 &&
            hoverPos[1] < 180 + bubbleLength) {
            document.body.style.cursor = 'url(' + imgPath + 'pointer.cur), pointer';
        } else 
            document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
    }
}

// --- coding night ------------------------------------------------------------------------------
/**
* codingNightClick()
*   reacts on click at coding night overlay (canvas2)
* 
* @param: {array} clickPos: x-y-coordinates
*/
function codingNightClick(clickPos) {
    
    if (codingNightStart == false) {

        if (clickPos[0] > 516 && 
            clickPos[1] > 266 && 
            clickPos[0] < 576 &&
            clickPos[1] < 292) {
            
            codingNightStart = true;
            canvas2Background.src = imgPath + 'scenes/codingNight/sc00_codingNight_0.png'
            Inv.writeLog(txtSrc[2].actions[12][lang]);
        
        } else if (clickPos[0] > 604 && 
                   clickPos[1] > 266 && 
                   clickPos[0] < 700 &&
                   clickPos[1] < 292) {
            
            canvas2.style.display = 'none';
            codingNightOn = false;
        
        } else {
            clickSndOn = false;
        }

    } else {
        
        canvas2.style.display = 'none';
        codingNightOn = false;
        codingNightStart = false;
        Inv.writeLog(txtSrc[2].actions[13][lang]);
        Inv.writeLog(txtSrc[2].actions[14][lang].replace('*var*', linesOfCodePerSession));

        setQuest(questIndex);
        linesOfCodePerSession = 0;
    }
}

/**
* codingNightHover()
*   hover functionality for coding night overlay
* 
* @param: {array} hoverPos: x-y-coordinates
*/
function codingNightHover(hoverPos) {
    if (codingNightStart == false) {
        if (hoverPos[0] > 516 && 
            hoverPos[1] > 266 && 
            hoverPos[0] < 576 &&
            hoverPos[1] < 292) {
            sessionStartBtnHL = true;
        } else
            sessionStartBtnHL = false;
        
        if (hoverPos[0] > 604 && 
            hoverPos[1] > 266 && 
            hoverPos[0] < 700 &&
            hoverPos[1] < 292) {
            sessionDenyBtnHL = true;
        } else
            sessionDenyBtnHL = false;
    }
    document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair'; 
};

/**
* codingNightRender()
*   renders a coding night in case of {bool} codingNightOn == true which is set in specialCaseUse()
*   is called in mainloop()
*
* @param {object} ctx: 2Dcontext of canvas2
*/
function codingNightRender(ctx) {

    ctx.font = gameFont;
    
    if (codingNightStart == true) {
        
        // draw the backround (canvas2 overlay)
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx.drawImage(canvas2Background, 0, 0);

        // one step every 10th frame
        if (frameCounter % 10 == 0) {
            
            linesOfCode++;
            linesOfCodePerSession++;
            codingNightIndex++; // to cycle through the backrounds of sc00_codingNight_xx.png
            codingNightIndex = (codingNightIndex > 17) ? 0 : codingNightIndex; // reset the cycle
            canvas2Background.src = imgPath + 'scenes/codingNight/sc00_codingNight_' + codingNightIndex + '.png'
            
            // to randomly place the lines-of-code display above the desk
            if (frameCounter % 100 == 0) {
                linesOfCodeCoo[0] = Math.round(Math.random() * 200) + 430;
                linesOfCodeCoo[1] = Math.round(Math.random() * 50) + 130;

                // generates a nice output in the Inventory Log [> . . . _]
                var dotCount = Math.round(Math.random() * 30 + 1);
                var dotString = '.';
                for (var i = 0; i <= dotCount; i++) {
                    dotString += ' .';
                }
                Inv.writeLog(dotString);
            }
        }

        // measure the lines-of-code string length for better display
        var metrics  = ctx2.measureText(linesOfCode)
        var codeWidth = metrics.width;

        // draw the lines of code display
        ctx.fillStyle = '#222';
        ctx.fillRect(linesOfCodeCoo[0] + .5, linesOfCodeCoo[1] + .5, 124 + codeWidth, 24);

        ctx.lineWidth = 1;
        ctx.strokeStyle = '#555';
        ctx.beginPath();
        ctx.moveTo(linesOfCodeCoo[0] + .5, linesOfCodeCoo[1] + .5);
        ctx.lineTo(linesOfCodeCoo[0] + 122.5 + codeWidth, linesOfCodeCoo[1] + .5);
        ctx.lineTo(linesOfCodeCoo[0] + 122.5 + codeWidth, linesOfCodeCoo[1] + 24.5);
        ctx.lineTo(linesOfCodeCoo[0] + .5, linesOfCodeCoo[1] + 24.5);
        ctx.closePath();
        ctx.stroke();
        
        ctx.fillStyle = '#65b34d';
        ctx.fillText(txtSrc[1].codingNightTxt[0][lang] + linesOfCode, linesOfCodeCoo[0] + 8, linesOfCodeCoo[1] + 26);
    } else {
        
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx.drawImage(canvas2Background, 0, 0);

        // draw the select-buttons
        (sessionStartBtnHL == true) ? ctx.fillStyle = '#333' : ctx.fillStyle = '#222';

        ctx.fillRect(516, 266, 60, 26);
       
        (sessionDenyBtnHL == true) ? ctx.fillStyle = '#333' : ctx.fillStyle = '#222';
        
        ctx.fillRect(604, 266, 96, 26);
        
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#444';
        
        ctx.beginPath();
        ctx.moveTo(516, 266);
        ctx.lineTo(576, 266);
        ctx.lineTo(576, 290);
        ctx.lineTo(516, 290);
        ctx.closePath();

        ctx.moveTo(604, 266);
        ctx.lineTo(698, 266);
        ctx.lineTo(698, 290);
        ctx.lineTo(604, 290);
        ctx.closePath();
        
        ctx.stroke();
     
        ctx.fillStyle = '#aaa';
        
         // position nitpick depending on language
        (lang == 0) ?  ctx.fillText(txtSrc[1].codingNightTxt[4][lang], 522, 264) : ctx.fillText(txtSrc[1].codingNightTxt[4][lang], 490, 264);
        
        ctx.fillText(txtSrc[1].codingNightTxt[2][lang], 524, 291);
        ctx.fillText(txtSrc[1].codingNightTxt[3][lang], 611, 291);
    }
}

// --- Glitch -------------------------------------------------------------------------------------
/**
* glitchTrigger()
*   triggers the display-glitch (third wall break)
*
* @param {int} duration: duration by frames
* @param {int} glitchType: a variation of the glitch (default: 0)
*/
function glitchTrigger(duration, glitchType) {

    switch (glitchType) {
        case 0:
            var glitchImg = 'url(img/glitch_00.png)';
            break;
        case 1:
            var glitchImg = 'url(img/glitch_01.png)'
            break;
        case 2:
            break;
        default:
            var glitchImg = 'url(img/glitch_00.png)';
    }

    var glitchCon1 = document.getElementById('glitch');
    var glitchCon2 = document.getElementById('glitch2');
    
    if (window.getComputedStyle(glitchCon1).display == 'none') {
        frameCounterTarget = frameCounter + duration;
        glitchCon1.style.display = 'block';
        glitchCon2.style.display = 'block';
        glitchCon1.style.background = glitchImg;
        glitchCon2.style.background = glitchImg;
        if (soundOn == true)
            glitchSnd.play();
    }
    else {
        glitchCon1.style.display = 'none';
        glitchCon2.style.display = 'none';
        frameCounterTarget = -1;
    }
}

// --- quest message ------------------------------------------------------------------------------
/**
* triggerQuestMsg()
*   triggers the quest message on setQuest()
*
*/
function triggerQuestMsg() {
    questMsgOn = true;
    canvas2.style.display = 'block';
    if (soundOn == true)
        completedSnd.play();
}

/**
* questMsgClick()
*   reacts on click at quest message
*
* @param: {array} clickPos: x-y-coordinates
*/
function questMsgClick(clickPos) {
    
    if (clickPos[0] > 480 && 
        clickPos[1] > 186 && 
        clickPos[0] < 540 &&
        clickPos[1] < 210 &&
        questMsgYInt == 30) {

        questMsgOut = true;
        questMsgYInt = 0;
        okBtnHL = false;
        
        txtSrc[4].index = questIndex;
        Bennet.setSpeech(txtSrc[4].bennetStoryTxt[txtSrc[4].index][lang]);
        Inv.highlightHintBtnIndex = questSrc[questIndex].log.length;        
    } else {
        clickSndOn = false;
    }
}

/**
* questMsgHover()
*   hover functionality for quest messages
*
* @param: {array} hoverPos: x-y-coordinates
*/
function questMsgHover(hoverPos) {
    
    if (hoverPos[0] > 480 && 
        hoverPos[1] > 186 && 
        hoverPos[0] < 540 &&
        hoverPos[1] < 210) {
        
        okBtnHL = true;
    }
    else {
        okBtnHL = false;
    }
    
    document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
}

/**
* questMsgRender()
*   renders the quest message if questMsgOn == true
*
* @param {object} ctx: 2Dcontext of canvas2
*/
function questMsgRender(ctx) {
        
        if (questMsgYInt < questMsgYIntMax) {

            questMsgYInt++;

            var questMsgY = (questMsgOut == false) ? 598 / (questMsgYInt / 5 * questMsgYInt / 5) + 80 : 80 - (questMsgYInt * questMsgYInt);

            ctx.clearRect(0, 0, canvas2.width, canvas2.height);
            
            ctx.fillStyle = '#222'; //'#BFA94F';
            ctx.fillRect(344, questMsgY, 336, 81);
            
            ctx.fillStyle = (okBtnHL == true) ? '#444' : '#222';
            ctx.fillRect(480, questMsgY + 90, 60, 24);

            ctx.lineWidth = 1;
            ctx.strokeStyle = '#555';
            
            ctx.beginPath();
            ctx.moveTo(344.5, questMsgY + .5);
            ctx.lineTo(680.5, questMsgY + .5);
            ctx.lineTo(680.5, questMsgY + 81.5);
            ctx.lineTo(344.5, questMsgY + 81.5);
            ctx.closePath();

            ctx.stroke();

            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(480.5, questMsgY + 90.5);
            ctx.lineTo(540.5, questMsgY + 90.5);
            ctx.lineTo(540.5, questMsgY + 114.5);
            ctx.lineTo(480.5, questMsgY + 114.5);
            ctx.closePath();

            ctx.stroke();

            ctx.strokeStyle = '#1bda32';
            ctx.beginPath();
            ctx.moveTo(492.5, questMsgY + 15 + .5);
            ctx.lineTo(497.5, questMsgY + 15 + 5.5);
            ctx.lineTo(507.5, questMsgY + 15 - 5.5);
            ctx.lineTo(512.5, questMsgY + 15 + .5);
            ctx.lineTo(497.5, questMsgY + 15 + 15.5);
            ctx.lineTo(487.5, questMsgY + 15 + 5.5);
            ctx.closePath();

            ctx.fillStyle = '#1bda32';
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#bbb';
            ctx.fillText(txtSrc[1].completedTxt[0][lang], 358, questMsgY + 33);
            ctx.fillText(questIndex + '/' +  (questSrc.length - 1), 522, questMsgY + 33);
            ctx.fillText('"' + questSrc[questIndex - 1].igName[lang] + '"', 358, questMsgY + 55);
            ctx.fillText('Ok', 502, questMsgY + 116);
            
            ctx.fillStyle = '#339933';
            ctx.fillText(txtSrc[1].completedTxt[2][lang], 570, questMsgY + 33);
            ctx.fillStyle = '#666';
            ctx.fillText(txtSrc[1].completedTxt[1][lang], 358, questMsgY + 77);

            ctx.fillStyle = '#bbb';
        } else if (questMsgOut == true) {
            questMsgOut = false;
            questMsgOn = false;
            questMsgYInt = 0;
            canvas2.style.display = 'none';
        }

        if (okBtnHL == true) {
            ctx.clearRect(482, 188, 58, 22);
            ctx.fillStyle = '#444';
            ctx.fillRect(482, 188, 58, 22);
            ctx.fillStyle = '#bbb';
            ctx.fillText('Ok', 502, 212);
        } else if (questMsgYInt == questMsgYIntMax && questMsgOut == false) {
            ctx.clearRect(482, 188, 58, 22);
            ctx.fillStyle = '#222';
            ctx.fillRect(482, 188, 58, 22);
            ctx.fillStyle = '#bbb';
            ctx.fillText('Ok', 502, 212);
        }
}

// --- menu action ------------------------------------------------------------------------------------
/**
* menuHover()
*   hover functionality for main game menu
*
* @param: {array} hoverPos: x-y-coordinates
*/
function menuHover(hoverPos) {
    // extarnal links
    if ((hoverPos[0] > 130 && hoverPos[0] < 146) && 
        (hoverPos[1] > 190 && hoverPos[1] < 206)) {
        document.getElementById('mouseFollow').innerHTML = 'github.com';
        document.getElementById('mouseFollow').style.display = 'block';
    }
    if ((hoverPos[0] > 234 && hoverPos[0] < 250) && 
        (hoverPos[1] > 190 && hoverPos[1] < 206)) {
        document.getElementById('mouseFollow').innerHTML = 'thinkpixellab.com';
        document.getElementById('mouseFollow').style.display = 'block';
    }
    if ((hoverPos[0] > 108 && hoverPos[0] < 124) && 
        (hoverPos[1] > 163 && hoverPos[1] < 179)) {
        document.getElementById('mouseFollow').innerHTML = 'audionautix.com';
        document.getElementById('mouseFollow').style.display = 'block';
    }
    
    // language selection
    highlightedEngBtn = ((hoverPos[0] > 20 && hoverPos[0] < 110) && (hoverPos[1] > 330 && hoverPos[1] < 354)) ? true : false;
    highlightedGerBtn = ((hoverPos[0] > 120 && hoverPos[0] < 210) && (hoverPos[1] > 330 && hoverPos[1] < 354)) ? true : false;
    // fast mode btn
    highlightedFastModeBtn = ((hoverPos[0] > 20 && hoverPos[0] < 157) && (hoverPos[1] > 365 && hoverPos[1] < 389)) ? true : false;
    // sound off btn
    highlightedSoundOffBtn = ((hoverPos[0] > 167 && hoverPos[0] < 259) && (hoverPos[1] > 365 && hoverPos[1] < 389)) ? true : false;
    // helping overlay btn
    highlightedHelpBtn = ((hoverPos[0] > 20 && hoverPos[0] < 72) && (hoverPos[1] > 400 && hoverPos[1] < 424)) ? true : false;
    // reachebility btn
    highlightedReachBtn = ((hoverPos[0] > 82 && hoverPos[0] < 210) && (hoverPos[1] > 400 && hoverPos[1] < 424)) ? true : false;
    // reset btn
    highlightedResetBtn = ((hoverPos[0] > 130 && hoverPos[0] < 195) && (hoverPos[1] > 435 && hoverPos[1] < 459)) ? true : false;
    // transcript btn
    highlightedTransBtn = ((hoverPos[0] > 20 && hoverPos[0] < 119) && (hoverPos[1] > 435 && hoverPos[1] < 459)) ? true : false;
}

/**
* menuClick()
*   reacts on click at menu
*
* @param: {array} clickPos: x-y-coordinates
*/
function menuClick(clickPos) {

    // language selection
    if ((clickPos[0] > 20 && clickPos[0] < 110) && 
        (clickPos[1] > 330 && clickPos[1] < 354) && lang != 0) {
        lang = 0;
        imprintLink.innerHTML = 'Site Notice';
        document.getElementById('noop_expl').innerHTML = txtSrc[1].menuTxt[23][lang];
        document.getElementById('menu_reference').innerHTML = txtSrc[1].menuTxt[24][lang];

        itemSrc[itemSrc.length - 2].src = imgPath + 'menu_sign_eng_iS.png';
        itemSrc[itemSrc.length - 3].src = imgPath + 'resume_sign_eng_iS.png';
        Scene = new CurrentScene(9);
        refreshLangInInv();
    }
    if ((clickPos[0] > 120 && clickPos[0] < 210) && 
        (clickPos[1] > 330 && clickPos[1] < 354) && lang != 1) {
        lang = 1;
        imprintLink.innerHTML = 'Impressum';
        document.getElementById('noop_expl').innerHTML = txtSrc[1].menuTxt[23][lang];
        document.getElementById('menu_reference').innerHTML = txtSrc[1].menuTxt[24][lang];
        
        itemSrc[itemSrc.length - 2].src = imgPath + 'menu_sign_ger_iS.png';
        itemSrc[itemSrc.length - 3].src = imgPath + 'resume_sign_ger_iS.png';
        Scene = new CurrentScene(9);
        refreshLangInInv();
    }

    // fast mode button
    if ((clickPos[0] > 20 && clickPos[0] < 157) && 
        (clickPos[1] > 365 && clickPos[1] < 389)) {
        // clickSnd.play();
        fastModeOn = (fastModeOn == true) ? false : true;
        framesPerSecondBase = (fastModeOn == true) ? 200: 1000;
    }

    // sound off button
    if ((clickPos[0] > 167 && clickPos[0] < 259) && 
        (clickPos[1] > 365 && clickPos[1] < 389)) {
        // clickSnd.play();
        soundOn = (soundOn == true) ? false : true;
    }

    // helping overlay btn
    if ((clickPos[0] > 20 && clickPos[0] < 72) && 
        (clickPos[1] > 400 && clickPos[1] < 424)) {
        helpingOverlayOn = (helpingOverlayOn == true) ? false : true;
    }

    // reachability btn
    if ((clickPos[0] > 82 && clickPos[0] < 210) && 
        (clickPos[1] > 400 && clickPos[1] < 424)) {
        reachabilityOn = (reachabilityOn == true) ? false : true;
    }

    // reset btn
    if ((clickPos[0] > 130 && clickPos[0] < 195) && 
        (clickPos[1] > 435 && clickPos[1] < 459)) {
        resetGame();
    }

    // transcript btn
    if ((clickPos[0] > 20 && clickPos[0] < 119) && 
        (clickPos[1] > 435 && clickPos[1] < 459)) {
        transcriptOn = (transcriptOn == true) ? false : true;
        if (transcriptOn == true)
            Bennet.setSpeech(txtSrc[0].react[44][lang]);

        document.getElementById('transcript').style.display = (transcriptOn == true) ? 'block' : 'none';
    }

    if (soundOn == true)
        clickSnd.play();
}

/**
* refreshLangInInv()
*   refreshes some entitys by changing language
*
*/
function refreshLangInInv() { 
    // for every item in pockets
    for (var i = 0; i <  Inv.itemsInInv.length; i++) {
        //look for an item in itemSrc
        for (var j = 0; j < itemSrc.length; j++) {
            // when it has an 'inPocket'-sprite
            if ((Inv.itemsInInv[i].name == itemSrc[j].name) && (itemSrc[j].site == 'inPocket') ) {

                Inv.itemsInInv[i].invSprite.igName = itemSrc[j].igName[lang];
                Inv.itemsInInv[i].invSprite.desc = itemSrc[j].desc[lang];

                if (typeof itemSrc[j].denyUseInv != 'undefined')
                    Inv.itemsInInv[i].denyUseInv = itemSrc[j].denyUseInv[lang];
            }
        }
    }
}

// --- explanation action -------------------------------------------------------------------------------
/**
* explHover()
*   hover functionality for explanataion overlay
*
* @param: {array} hoverPos: x-y-coordinates
*/
function explHover(hoverPos) {
    
    document.body.style.cursor = ((hoverPos[0] > 60 && hoverPos[0] < 970) && (hoverPos[1] > 414 && hoverPos[1] < 556)) ? 'url(' + imgPath + 'crosshair_dark.cur), crosshair' : 'url(' + imgPath + 'crosshair.cur), crosshair';
    highlightedExplBtn = ((hoverPos[0] > 740 && hoverPos[0] < 810) && (hoverPos[1] > 510 && hoverPos[1] < 536)) ? true : false;
}

/**
* explClick()
*   reacts on click at explanation overlay
*
* @param: {array} clickPos: x-y-coordinates
*/
function explClick(clickPos) {
    
    if ((clickPos[0] > 740 && clickPos[0] < 810) && (clickPos[1] > 510 && clickPos[1] < 536)) {
        canvas2.style.display = 'none';
        Expl.active = false;
        if (questIndex == 0) {
            Bennet.setSpeech(txtSrc[4].bennetStoryTxt[txtSrc[4].index][lang]);
        } else if (questIndex == 8) {
            Bennet.setSpeech(txtSrc[0].react[41][lang]);
            Expl.txtIndex = 2;
        } else if (questIndex == 11) {  // fix in last (11th) Quest
            Expl.txtIndex = 3;
            txtSrc[0].react[45][0] = txtSrc[0].react[45][0] + getSystemInfoString();
            txtSrc[0].react[45][1] = txtSrc[0].react[45][1] + getSystemInfoString();
            Bennet.setSpeech(txtSrc[0].react[45][lang]);
        }
    } else {
        clickSndOn = false;
    }
}

// --- other ---------------------------------------------------------------------------------------------
/**
* dissmissNoopExpl()
*   dismisses the noob introduction
*
*/
function dissmissNoopExpl() {
    document.getElementById('noop_expl').style.display = 'none';
}

/**
* getSystemInfoString
*   uses the user agent parser
*
* @return {string} infoString: user agent, browser version, operating system, os version, cpu architecture, ajax response
*/
function getSystemInfoString() {
    
    var host = new UAParser();
    var hostBrowser = host.getBrowser();
    var hostOS = host.getOS();
    var hostCPU = host.getCPU();

    var infoString = hostBrowser.name + ' ' +  hostBrowser.version + ' - ' + hostOS.name + ' ' +  hostOS.version + ' - ' + hostCPU.architecture + ' - IP: ' + ajaxResponseArray[0];

    return infoString;
}

/**
* renderHintHighlighter()
*   renders a blinky hint btn if Inv.highlightHintBtnIndex > 0
*
* @param {object} ctx: 2Dcontext of canvas1
*/
function renderHintHighlighter(ctx) {
    ctx.beginPath()

    ctx.rect(5.5, 486.5, 65, 19);

    ctx.strokeStyle = 'white';
    ctx.globalAlpha = (40 - ((frameCounter % 40) + 1)) / 40;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.strokeStyle = '#333';
    ctx.globalAlpha = 1;
    ctx.closePath();
}