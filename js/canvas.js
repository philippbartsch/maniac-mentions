var lang = 0;

var ajax = new XMLHttpRequest();
var ajaxResponseArray = [];

try {    
    if (ajax != null) {
        ajax.overrideMimeType('text');
        ajax.open('GET', 'api/response.php', true);
        ajax.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {
                    // array of ajax request results
                    ajaxResponseArray = this.responseText.split('|');

                    document.getElementById('visitor_count').innerHTML = '&#9733; ' + ajaxResponseArray[2].toLocaleString();
                    if (ajaxResponseArray[3].indexOf('de') > -1)
                        lang = 1;
                    imprintLink.innerHTML = (lang == 0) ? 'Site Notice' : 'Impressum';
                    document.getElementById('noop_expl').innerHTML = txtSrc[1].menuTxt[23][lang];
                    document.getElementById('menu_reference').innerHTML = txtSrc[1].menuTxt[24][lang];

                    //  fixing menu scene items (german)
                    if (lang == 1 && questIndex == 0) {
                        itemSrc[itemSrc.length - 2].src = imgPath + 'menu_sign_ger_iS.png';
                        itemSrc[itemSrc.length - 3].src = imgPath + 'resume_sign_ger_iS.png';
                    }
                    
                    if (detectMobileDevice() == false) {
                        initApp();
                    } else
                        document.getElementById('mobile_screen').style.display = 'block';
                }
            }
        }
        ajax.send(null);
    }
} catch(err) {
    console.warn(err);
}

// DOM elemente
var imprintLink = document.getElementById('imprint_link');
var mouseFollow = document.getElementById('mouseFollow');
var backLink = document.getElementsByClassName('back_link');
var warningContainer = document.getElementById('warning_container');

// globals
var canvas0, ctx0, canvas1, ctx1, canvas2, ctx2, routeStr = '', PFpath;
var canvas2Background = new Image(), codingNightOn = false;
var gameFont = '9pt minecraftia', bubbleLength;
var action = 'noAction', highlighted = -1, highlightedBtn = -1, highlightedQlBtn = false;
var invCursorBlink = false, invCursorBlinkCounter = 1;
var itemOnCursor = null;
var lastAddressedNpc;
var convoIndex = -1;
var questStop = false, HintFetchCounter = 0, questMsgOn = false, questMsgYInt = 0;
var questMsgOut = false, okBtnHL = false;
var questMsgYIntMax = 30;
var allItemsInPlay = [];
var delayByFrame = 0; // for delaying a trigger by discrete frames e.g. Knittel Trigger

var codingNightIndex = 0, codingNightStart = false;
var linesOfCode = getCookie('linesOfCode') || 0, linesOfCodePerSession = 0, linesOfCodeCoo = [530, 180];
var sessionStartBtnHL = false, sessionDenyBtnHL = false;

var overlayMobile = false, overlayBlur = false;
var exTime = 1000 * 60 * 60 * 24 * 14; // cookie expiry time
var clickSnd = new Audio(sndPath + '/click.mp3'); clickSnd.volume = .5;
var completedSnd = new Audio(sndPath + '/completed.mp3'); completedSnd.volume = .5;
var vibratingSnd = new Audio(sndPath + '/mobile_vibrating.mp3'); vibratingSnd.volume = .1; vibratingSnd.loop = true;
var guitarSnd = new Audio(sndPath + '/accoustic_guitar.mp3'); guitarSnd.volume = 0; guitarSnd.loop = true; var guitarSndVol = .2;
var strAmbSnd = new Audio(sndPath + '/street_ambient.mp3'); strAmbSnd.volume = 1; strAmbSnd.loop = true;
var baseAmbSnd = new Audio(sndPath + '/basement_ambient.mp3'); baseAmbSnd.volume = 0.1; baseAmbSnd.loop = true;
var doorSnd = new Audio(sndPath + '/door.mp3'); doorSnd.volume = .7;
var frontDoorSnd = new Audio(sndPath + '/front_door.mp3'); frontDoorSnd.volume = .5;
// var serverSnd = new Audio(sndPath + '/computer_hum.mp3'); serverSnd.volume = .3; serverSnd.loop = true;
var inputSnd = new Audio(sndPath + '/input_beep.mp3'); inputSnd.volume = .7;
var unlockSnd = new Audio(sndPath + '/unlock.mp3'); unlockSnd.volume = .5;
var metalDoorSnd = new Audio(sndPath + '/metal_door.mp3'); metalDoorSnd.volume = .5;
var glassSnd = new Audio(sndPath + '/throwing_glass.mp3'); glassSnd.volume = .7;
var lidSnd = new Audio(sndPath + '/trash_bin.mp3'); lidSnd.volume = .3;
var coinSnd = new Audio(sndPath + '/coin_drop.mp3'); coinSnd.volume = 1;
var glitchSnd = new Audio(sndPath + '/glitch1.mp3'); glitchSnd.volume = 1;
var fastModeOn = false;
var soundOn = true, clickSndOn = true, guitarSndFade = 'none';

var helpingOverlayOn = false, highlightedEngBtn = false, highlightedGerBtn = false;
var highlightedFastModeBtn = false, highlightedSoundOffBtn = false, highlightedHelpBtn = false;
var highlightedReachBtn = false, highlightedTransBtn = false, highlightedResetBtn = false;

var highlightedExplBtn = false;
var highlightedDropzone = null;
var remOldSceneIndex;
var allDroppedItems = [];
var accessKey = [4, 2, 5, 3, 1, 9, 7, 6];
var uniTrigger = false;
var lilStoryHelper1 = false, lilStoryHelper2 = false, lilStoryHelper3 = false, lilStoryHelper4 = false;

// performance-helper in doSomethingOnHover()
var hoverTriggerExitZone = -1; 
var hoverTriggerWalkingZone = false;
var reachabilityOn = true, transcriptOn = true;

var version = detectIE();
var framesPerSecond = (version != false) ? 60 : 40;
var framesPerSecondBase = (version != false) ? 1000 : 1000;
var wayPointCount = 0;
var transfer = 0;
var walkingSpeed = 4;
var frameCounter = 0;
var frameCounterTarget = -1;
var clicksPerQuest = 0;

var Scene, Inv, Mobile, questIndex, Menu, Expl, Bennet;

var mobileBtn = document.getElementById('mobileBtn');
mobileBtn.addEventListener('click', function(event) {
    initApp();
});

function initApp() {
    
    if (cookiesEnabled() == false) {
        if (lang == 1)
            alert('Bitte erlauben sie Cookies! (Siehe "Impressum" für Details.)');
        else
            alert('Please enable cookies! (Seee "Site Notice" for details.)');
    }

    document.getElementById('mobile_screen').style.display = 'none';
    document.getElementById('loading_bar_container').style.display = 'block';
    document.getElementById('loading_bar_container').style.width = '980px';
    document.getElementById('loading_counter').style.display = 'block';
    document.getElementById('loading_counter').style.width = '984px';

    // preload section ---------------------------------------------------------
    try {
        var loader = new PxLoader(); 

        // preload coding night
        for(var i = 0; i < 18; i++) { 
            var pxImage = new PxLoaderImage('img/scenes/codingNight/sc00_codingNight_' + i + '.png'); 
            loader.add(pxImage); 
        }

        // preaload Items
        for(var i = 0; i < itemSrc.length; i++) { 
            var pxImage = new PxLoaderImage(itemSrc[i].src);
            loader.add(pxImage);
        }

        // preaload Chars
        for(var i = 0; i < charSrc.length; i++) { 
            var pxImage = new PxLoaderImage(charSrc[i].src);
            loader.add(pxImage);
        }

        // preload Scenes
        for(var i = 0; i < sceneSrc.length; i++) { 
            var pxImage = new PxLoaderImage(sceneSrc[i].bgImgSrc);
            loader.add(pxImage);

            if (typeof sceneSrc[i].fgImgSrc != "undefined") {
                var pxImage = new PxLoaderImage(sceneSrc[i].fgImgSrc);
                loader.add(pxImage);
            }
        }

        // preload Cursor
        loader.add(new PxLoaderImage(imgPath + 'crosshair.cur'));
        loader.add(new PxLoaderImage(imgPath + 'crosshair_dark.cur'));
        loader.add(new PxLoaderImage(imgPath + 'walking.cur'));
        loader.add(new PxLoaderImage(imgPath + 'look.cur'));
        loader.add(new PxLoaderImage(imgPath + 'grab.cur'));
        loader.add(new PxLoaderImage(imgPath + 'grabbing.cur'));
        loader.add(new PxLoaderImage(imgPath + 'wrench.cur'));
        loader.add(new PxLoaderImage(imgPath + 'pointer.cur'));
        loader.add(new PxLoaderImage(imgPath + 'talk.cur'));
        loader.add(new PxLoaderImage(imgPath + 'talking.cur'));
        loader.add(new PxLoaderImage(imgPath + 'exit_down.cur'));
        loader.add(new PxLoaderImage(imgPath + 'exit_left.cur'));
        loader.add(new PxLoaderImage(imgPath + 'exit_right.cur'));
        loader.add(new PxLoaderImage(imgPath + 'exit_up.cur'));

        // preload Stuff
        loader.add(new PxLoaderImage('img/scenes/sc01_hallway_fg.png'));
        loader.add(new PxLoaderImage('img/scenes/codingNight/sc00_codingNight_start.png'));
        loader.add(new PxLoaderImage('img/scenes/sc00_apartment_fg_emptyWardrobe.png'));
        loader.add(new PxLoaderImage(imgPath + 'glitch_00.png'));
        loader.add(new PxLoaderImage(imgPath + 'glitch_01.png'));
        loader.add(new PxLoaderImage(imgPath + 'mobile_overlay.png'));
        loader.add(new PxLoaderImage(imgPath + 'explanation_overlay.png'));
        loader.add(new PxLoaderImage(imgPath + 'bg_00.png'));
        loader.add(new PxLoaderImage(imgPath + 'bennet_walking_all_parka.png'));
        loader.add(new PxLoaderImage(imgPath + 'bennet_idling_front_parka.png'));

        loader.addProgressListener(function(e) { 
            var progress = Math.round(e.completedCount * 100 / e.totalCount);

            document.getElementById('loading_counter').innerHTML = 'Loading . . . ' + e.completedCount + ' / ' + e.totalCount;
            document.getElementById('loading_bar').style.left = progress - 100 + '%';
        });

        loader.addCompletionListener(function() { 
            // document.getElementById('loading_screen').style.display = 'none';
            document.getElementById('loading_screen').classList.add('loaded');
            document.getElementById('container').style.display = 'block';

            if (version > 15) {
                document.getElementById('warning_container').style.display = 'block';
                document.getElementById('warning').innerHTML = txtSrc[1].menuTxt[21][lang];
                document.getElementById('dismiss_warning').innerHTML = txtSrc[1].menuTxt[22][lang];
            }

            if (questIndex != 0)
                Bennet.setSpeech(txtSrc[4].bennetStoryTxt[questIndex][lang]);
        });
        loader.start(); 
    }
    catch(err) {
        console.warn(err);
        document.getElementById('loading_counter').style.color = '#FF3F3F';
        document.getElementById('loading_counter').innerHTML = 'Error while loading resources &nbsp; - &nbsp; try reload';
    } 
    // preload section end ----------------------------------------------------------------------------------- 

    initCanvas();
    initGame();

    canvas1.addEventListener('mouseup', getClickPosition, false);
    canvas2.addEventListener('mouseup', getClickPosition, false);
    canvas1.addEventListener('mousemove', getHoverPosition, false);
    canvas2.addEventListener('mousemove', getHoverPosition, false);
    canvas1.addEventListener('mouseout', leaveCanvas, false);
    canvas2.addEventListener('mouseout', leaveCanvas, false);
    canvas1.addEventListener('mouseover', enterCanvas, false);
    canvas2.addEventListener('mouseover', enterCanvas, false);
    canvas1.addEventListener('contextmenu', hideMouseFollow, false);
    
    mouseFollow.addEventListener('mouseover', hideMouseFollow, false);
    
    imprintLink.addEventListener('mouseover', imprintLinkHover, false);
    imprintLink.addEventListener('mouseout', imprintLinkMouseOut, false);
    imprintLink.addEventListener('mouseup', imprintLinkClick, false);

    backLink[0].addEventListener('mouseover', backLinkHover, false);
    backLink[0].addEventListener('mouseout', backLinkMouseOut, false);
    backLink[0].addEventListener('mouseup', backLinkClick, false);
    backLink[1].addEventListener('mouseover', backLinkHover, false);
    backLink[1].addEventListener('mouseout', backLinkMouseOut, false);
    backLink[1].addEventListener('mouseup', backLinkClick, false);

    warningContainer.addEventListener('mouseup', hideWarning, false);

    imprintLink.innerHTML = (lang == 0) ? 'Site Notice' : 'Impressum';

    // press a key
    document.onkeydown = function(event) {
        event = event || window.event;
        
        // press ESC-Key
        if (event.keyCode == 27) {
            // entering leave imprint screen
            if (document.getElementById('imprint_screen_eng').style.display == 'block' ||
                document.getElementById('imprint_screen_ger').style.display == 'block') {
                document.getElementById('imprint_screen_eng').style.display = 'none';
                document.getElementById('imprint_screen_ger').style.display = 'none';
            } // entering cancel coding session
            else if (canvas2.style.display == 'block' && codingNightOn == true) {
                canvas2.style.display = 'none';
                codingNightOn = false;
                codingNightStart = false;
                Inv.writeLog(txtSrc[2].actions[13][lang]);
                Inv.writeLog(txtSrc[2].actions[14][lang].replace('*var*', linesOfCodePerSession));
                linesOfCodePerSession = 0;
            } // entering the Main Menu in special case of first explanation txt
            else if (Scene.index == 0 && Expl.active == true) { 
                Expl.active = false;
                Scene.transition = [2, 9];
                switchScene(Scene.index);
                canvas2.style.display = 'block';
                Menu.active = true;
                if (soundOn == true)
                    doorSnd.play();
                document.getElementById('menu_reference').style.display = 'none';
            } // entering the Main Menu
            else if (Scene.index != 9 &&             // don't switch when user already in menu
                canvas2.style.display == 'none' // dont go to menu if canvas2 active for exception reasons
                && action != 'inConvo') {       // dont interrupt convo by pressing esc
                // oldSceneIndex = Scene.index;
                Scene.transition = [2, 9];
                switchScene(Scene.index);
                canvas2.style.display = 'block';
                Menu.active = true;
                guitarSndFade = 'fadeOut';
                if (soundOn == true)
                    doorSnd.play();
                document.getElementById('menu_reference').style.display = 'none';
            }
            else if (document.getElementById('warning_container').style.display == 'block') {
                document.getElementById('warning_container').style.display = 'none';
            }
        }
        // press a key on input_panel in scene06
        else if (Scene.index == 6) {
            
            var inputDigitsFields = document.getElementsByClassName('digits');

            for (i = 0; i < inputDigitsFields.length; i++) {

                inputDigitsFields[i].onkeyup = function(event) {
                    var charCode = event.keyCode;

                    if (this.value == '!' || this.value == '"' || this.value == '§'  || this.value == '$' || this.value == '%' || 
                        this.value == '&' || this.value == '/' || this.value == '(' || this.value == ')' || this.value == '=') {
                        
                        Bennet.setSpeech(txtSrc[0].react[26][lang]);
                        // console.log(charCode);
                        this.value = '';
                        this.value.trim();
                    } 
                    else if ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && // numbers and numpad
                              charCode != 8 && charCode != 9 && charCode != 46  && (charCode < 37 || charCode > 40)) { 
                              // backspace, tab, entf, cursor-keys
               
                        Bennet.setSpeech(txtSrc[0].react[26][lang]);
                        // console.log(charCode);
                        this.value = '';
                        this.value.trim();
                    } 
                    else if (charCode != 8 && charCode != 9 && charCode != 46  && (charCode < 37 || charCode > 40)
                             && this.nextElementSibling != null) {
                        if (soundOn == true)
                            inputSnd.play();
                        this.nextElementSibling.focus();
                        this.nextElementSibling.value = '';
                    }
                        
                    if (charCode == 8 && charCode != 46 && this.previousElementSibling != null)
                        this.previousElementSibling.focus();

                    if (i == 8)
                        validateInputPanel(inputDigitsFields);
                }
            }
        }
    }
    refreshLangInInv();
    mainLoop();
}

function hideWarning(event) {
    event = event || window.event;

    if (document.getElementById('warning_container').style.display == 'block')
    document.getElementById('warning_container').style.display = 'none';
}

function leaveCanvas(event) {
    highlighted = -1;
    highlightedBtn = -1;
    highlightedQlBtn = false;
    highlightedEngBtn = false;
    highlightedGerBtn = false;
    highlightedSoundOffBtn = false;
    highlightedHelpBtn = false;
    highlightedResetBtn = false;
    if (document.body.style.cursor !== 'default' && action == 'noAction' && 
        Mobile.active == false) {
        document.body.style.cursor = 'default';
        // action = 'noAction';
    }
    mouseFollow.style.display = 'none';
    hoverTriggerExitZone = -1;
    hoverTriggerWalkingZone = false;
}

function enterCanvas(event) {
    if (document.body.style.cursor == 'default' && action == 'noAction') {
        document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
        // console.log('foo');
    }
}

function hideMouseFollow(event) {
    mouseFollow.style.display = 'none';

    // if (action !=='hold')
    // document.body.style.cursor = 'crosshair';
    
    event.preventDefault();
}

function imprintLinkHover(event) {
    document.body.style.cursor = 'pointer';
    document.getElementById('imprint_link').style.color = '#aaa';
}

function imprintLinkMouseOut(event) {
    document.body.style.cursor = 'default';
    document.getElementById('imprint_link').style.color = '#555';
}

function imprintLinkClick(event) {
    document.body.style.cursor = 'default';
    document.getElementById('imprint_link').style.color = '#555';
    
    if (lang == 0)
        document.getElementById('imprint_screen_eng').style.display = 'block';   
    else
        document.getElementById('imprint_screen_ger').style.display = 'block';
}

function backLinkHover(event) {
    document.body.style.cursor = 'pointer';
    document.getElementById('back_link_ger').style.color = '#ccc';
    document.getElementById('back_link_eng').style.color = '#ccc';
}

function backLinkMouseOut(event) {
    document.body.style.cursor = 'default';
    document.getElementById('back_link_ger').style.color = '#777';
    document.getElementById('back_link_eng').style.color = '#777';
}

function backLinkClick(event) {
    document.body.style.cursor = 'default';
    document.getElementById('back_link_ger').style.color = '#777';
    document.getElementById('back_link_eng').style.color = '#777';
    
    document.getElementById('imprint_screen_ger').style.display = 'none';
    document.getElementById('imprint_screen_eng').style.display = 'none';
}

function getHoverPosition(event) {
    
    var rect = canvas1.getBoundingClientRect();
    var hoverPos = [];
    hoverPos[0] = Math.round(event.clientX - rect.left);
    hoverPos[1] = Math.round(event.clientY - rect.top);

    // document.getElementById('control2').innerHTML = hoverPos[0] + ' - ' + hoverPos[1];
    
    // disables the hover functionality for half a second (e.g. after new CurrentScene)
    if (frameCounter > framesPerSecond * 0.1) {
        
        if (codingNightOn == true)
            codingNightHover(hoverPos);
        else if (Mobile.active == true)
            mobileHover(hoverPos);
        else if (questMsgOn == true && questMsgYInt > questMsgYIntMax - 5)
            questMsgHover(hoverPos)
        else if (Expl.active == true)
            explHover(hoverPos)
        else
            doSomethingOnHover(hoverPos);
    }

    if (Menu.active == true)
        menuHover(hoverPos);

    if (document.body.style.cursor == 'default')
        document.body.style.cursor = 'url(' + imgPath + 'crosshair.cur), crosshair';
}

function getClickPosition(event) {
    event = event || window.event;

    if (event.button === 0) {

        var rect = canvas1.getBoundingClientRect();
        var clickPos = [];
        clickPos[0] = Math.round(event.clientX - rect.left),
        clickPos[1] = Math.round(event.clientY - rect.top);

        if (Menu.active == true && action == 'noAction')
            menuClick(clickPos);

        if (codingNightOn == true)
            codingNightClick(clickPos);
        else if (Mobile.active == true)
            mobileClick(clickPos);
        else if (questMsgOn == true &&  questMsgYInt > questMsgYIntMax - 5)
            questMsgClick(clickPos);
        else if (Expl.active == true)
            explClick(clickPos)
        else {
            doSomethingOnClick(clickPos);
            setActionOnClick(clickPos);
            setCursorOnClick();
        }
        // alert(action);

        if (clickSndOn == true && soundOn == true)
            clickSnd.play();

        clickSndOn = true;

                        // questMsgOn = true;
                        // canvas2.style.display = 'block';
                        // completedSnd.play();
                        // alert(window.getComputedStyle(canvas2).display);
    }
}

function getGridPos(coo, switcher) {
    
    // var meshSize = Grid.getmeshSize();

	// var walkableMin = [
	// 	grid[0][0][0] - meshSize / 2,
	// 	grid[0][0][1] - meshSize / 2
	// ];
	// var walkableMax = [
	// 	grid[0].length * meshSize,
	// 	grid.length * meshSize,
	// ];

	// ctx1.beginPath();
	// ctx1.lineWidth="1";
	// ctx1.strokeStyle="red";
	// ctx1.rect(walkableMin[0], walkableMin[1] , walkableMax[0], walkableMax[1]);
	// ctx1.stroke();

    // document.getElementById('control6').innerHTML = walkableMin[0] + ' - ' +  walkableMin[1] + ' | ' + walkableMax[0] + ' - ' + walkableMax[1];

	// if (coo[0] <= walkableMin[0] + walkableMax[0] && 
 //        coo[1] <= walkableMin[1] + walkableMax[1] &&
 //        coo[0] >= walkableMin[0] &&
 //        coo[1] >= walkableMin[1]) {

    if (coo[0] <= Scene.walkable[1][0] && 
        coo[1] <= Scene.walkable[1][1] &&
        coo[0] >= Scene.walkable[0][0] &&
        coo[1] >= Scene.walkable[0][1]) {

        var pixelCoo = [];      // position as pixel on canvas – switch: 'pixel'
        var matrixCoo = [];     // matrix coordinates for pathfinding – switch: 'matrix'

        for (var i = 0; i < Scene.meshwork[0].length; i++) {
			
			if (coo[0] <= Scene.meshwork[0][i][0] + Scene.Grid.meshSize / 2) {
				pixelCoo[0] = Scene.meshwork[0][i][0];
                matrixCoo[0] = i;
				i = Scene.meshwork[0].length;
			}
		}

		for (var j = 0; j <= Scene.meshwork.length; j++) {
			
			if (coo[1] < Scene.meshwork[j][0][1] + Scene.Grid.meshSize / 2) {
				pixelCoo[1] = Scene.meshwork[j][0][1];
                matrixCoo[1] = j;
				j = Scene.meshwork.length;
			}
		}
		// document.getElementById('control5').innerHTML = 'Destiination: ' + matrixCoo[0] + " - " + matrixCoo[1]; // 'Destiination: ' + gridPos[0] + " - " + gridPos[1];
        // document.getElementById('control6').innerHTML = "in";
	}
	else {
        var gridPos = false;
        var matrixCoo = false;
		// document.getElementById('control5').innerHTML = "out";
	}

    if (switcher == 'pixel')
        return pixelCoo;
    else if (switcher == 'matrix')
        return matrixCoo;
    else
        return false;
}

// .npcChat.speech[0][1]
// alert(Scene.npcInScene[0].npcChat.speech[Scene.npcInScene[0].npcChat.index[0]]
//                                         [Scene.npcInScene[0].npcChat.index[1]]);

function mainLoop() {
    setTimeout(function() {
        
        // if (Scene.index != 1)
            ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

        Inv.render(ctx1);
        // document.getElementById('control7').innerHTML = 'Framecounter: ' +  Inv.pockets[0].content.frameCounter;

        // document.getElementById('control4').innerHTML = wayPointCount + ' - ' +  Bennet.route.length;
        // document.getElementById('control8').innerHTML = frameCounter;

        // document.getElementById('control7').innerHTML = 'Mobile Index: ' + Scene.itemsInScene[0].cursorSprite.index;

        // if (overlayMobile == true) {
        //     if (overlayBlur == true)
        //         ctx1.filter = 'blur(5px)';
        // }

        if (highlightedDropzone != null && itemOnCursor !== null)
            dropZoneRenderHighlight(ctx1);

        if (typeof Scene.itemsInScene !== 'undefined') {
            for (var i = 0; i < Scene.itemsInScene.length; i++) {
                Scene.itemsInScene[i].render(ctx1);
            }
        }

        if (typeof Scene.npcInScene !== 'undefined') {
            for (var i = 0; i < Scene.npcInScene.length; i++) {
                Scene.npcInScene[i].render(ctx1);
            }
        }

        Bennet.render(ctx1);

        if (typeof Scene.npcInScene !== 'undefined') {
            for (var i = 0; i < Scene.npcInScene.length; i++) {
                if (Scene.npcInScene[i].chatOn == true) {
                    Scene.npcInScene[i].renderChat(ctx1);
                }
            }
        }
     
        if (Scene.foreground) {
            ctx1.drawImage(Scene.foreground, 0, 0);
        }
        
        if (Bennet.chatOn == true) {
            Bennet.renderChat(ctx1);
        }

        if (Inv.highlightHintBtnIndex > 0)
            renderHintHighlighter(ctx1);

        if (itemOnCursor !== null) {
            itemOnCursor.render(ctx1);
            // document.getElementById('control7').innerHTML = 'Framecounter: ' + itemOnCursor.frameCounter
        }
        
        // mobile overlay (canvas2)
        if (Mobile.active == true)
            Mobile.render(ctx2);
        
        // coding session (canvas2)
        if (codingNightOn == true) {
            codingNightRender(ctx2)
        }

        // quest message (canvas2)
        if (questMsgOn == true) {
            questMsgRender(ctx2)
        }
        
        // glitch duration ???
        if (frameCounterTarget == frameCounter)
            glitchTrigger();

        // guitar sound switch
        if (guitarSndFade != 'none' && soundOn == true)
            fadeSnd(guitarSnd, guitarSndVol);

        // menu overlay (canvas2)
        if (Menu.active == true) {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            Menu.render(ctx2);
        }

        // eplanation overlay (canvas2)
        if (Expl.active == true) {
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            Expl.render(ctx2);
        }

        // animation-loop
        // if (stop == false)
            requestAnimationFrame(mainLoop);
        
        frameCounter++;
    }, framesPerSecondBase / framesPerSecond);
};

// ctx0.beginPath();
// ctx0.lineWidth="2";
// ctx0.strokeStyle="red";
// ctx0.rect(700, 50 , 200, 100);
// ctx0.stroke();


// if (y > element.top && y < element.top + element.height 
//     && x > element.left && x < element.left + element.width) {
//     alert('clicked an element');
// }

// context.fillRect(element.left, element.top, element.width, element.height);

// if (detectMobileDevice() == false) {
//     initApp();
// } else
//   document.getElementById('mobile_screen').style.display = 'block';