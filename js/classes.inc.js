/** ----------------------------------------------------------------------------------------------------
* [class] GameMenu
* the game menu
* 
* @param {boolean} active
*/
function GameMenu(active) {
    this.active = active || false;

    if (this.active == false) {
        canvas2.style.display = 'none';
    }

    this.eLink = new Image();
    this.eLink.src = imgPath + 'external_link_iM.png';

    this.soundOffImg = new Image();
    this.soundOffImg.src = imgPath + 'sound_off_iM.png';
}

GameMenu.prototype.render = function(ctx) {

    // title
    ctx.font = '18pt minecraftia'
    ctx.fillStyle = '#eee'; //'#e2c56e';
    ctx.fillText(txtSrc[1].menuTxt[4][lang], 20, 60);
    ctx.font = gameFont;
    ctx.fillText(txtSrc[1].menuTxt[5][lang], 20, 80);
    
    // credentials
    ctx.fillStyle = '#5a5a5a';
    ctx.fillText(txtSrc[1].menuTxt[12][lang], 20, 120); // design & coding
    ctx.fillText(txtSrc[1].menuTxt[16][lang], 20, 165); // accoustic guitar
    ctx.fillStyle = '#aaa';
    ctx.fillText(txtSrc[1].menuTxt[13][lang], 20, 140);
    ctx.fillText(txtSrc[1].menuTxt[17][lang], 20, 185);

    if (soundOn == false)
        ctx.drawImage(this.soundOffImg, 265, 370, 20, 16)

    // btn background (highlighted on hover) --- start ------------------
    ctx.fillStyle = (highlightedEngBtn == true) ? '#333' : '#222';
    ctx.fillRect(20, 330, 80, 24);
    ctx.fillStyle = (highlightedGerBtn == true) ? '#333' : '#222';
    ctx.fillRect(110, 330, 80, 24);
    ctx.fillStyle = (highlightedFastModeBtn == true) ? '#373d37' : '#232d23';
    ctx.fillRect(20, 365, 137, 24);
    ctx.fillStyle = (highlightedSoundOffBtn == true) ? '#333' : '#222';
    ctx.fillRect(167, 365, 91, 24);
    ctx.fillStyle = (highlightedHelpBtn == true) ? '#333' : '#222';
    ctx.fillRect(20, 400, 52, 24);
    
    // reach btn
    if (highlightedReachBtn == true) {
        ctx.fillStyle = '#888';
            ctx.fillText(txtSrc[1].menuTxt[14][lang], 221, 425);
        ctx.fillStyle = '#333';
    }
    else
        ctx.fillStyle = '#222';
    ctx.fillRect(82, 400, 128, 24);
    
    // transcript button
    if (highlightedTransBtn == true) {
        ctx.fillStyle = '#888';
            ctx.fillText(txtSrc[1].menuTxt[19][lang], 206, 461);
        ctx.fillStyle = '#333';
    }
    else
        ctx.fillStyle = '#222';
    ctx.fillRect(20, 435, 99, 24);
    
    // reset button
    if (highlightedResetBtn == true) {
        ctx.fillStyle = '#ff7777';
        ctx.fillText(txtSrc[1].menuTxt[7][lang], 206, 461);
        ctx.fillStyle = '#714444';
    }
    else
        ctx.fillStyle = '#462c2c'; 
    ctx.fillRect(130, 435, 65, 24);
    // btn background (highlighted on hover) --- end ------------------
    
    // btn outlines and btn effects (highlighted when turned on) --- start ------------------
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.strokeStyle = '#d86464';
    ctx.rect(130, 435, 65, 24);
    ctx.stroke();
    ctx.closePath();
    
    
    ctx.strokeStyle = '#444';
    ctx.rect(130, 100, 120, 40);
    
    // language buttons
    if (lang == 0) {
        ctx.beginPath();
        ctx.strokeStyle = '#888';
        ctx.rect(20, 330, 80, 24);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.strokeStyle = '#444';
        ctx.rect(110, 330, 80, 24);
        ctx.stroke();
        ctx.closePath();
    } else {
        ctx.beginPath();
        ctx.strokeStyle = '#444';
        ctx.rect(20, 330, 80, 24);
        ctx.stroke();
        ctx.closePath();
        
        ctx.beginPath();
        ctx.strokeStyle = '#888';
        ctx.rect(110, 330, 80, 24);
        ctx.stroke();
        ctx.closePath();
    }
    
    // fast mode btn
    ctx.beginPath();
    if (fastModeOn == true) {
        ctx.strokeStyle = '#91de93';
        ctx.rect(20, 365, 137, 24);
        ctx.stroke();
    } else {
        ctx.strokeStyle = '#49764b';
        ctx.rect(20, 365, 137, 24);
        ctx.stroke();
    }
    ctx.closePath();

    // sound off button
    ctx.beginPath();
    if (soundOn == false) {

        ctx.strokeStyle = '#888';
        ctx.rect(167, 365, 91, 24);
        ctx.stroke();
    } else {
        ctx.strokeStyle = '#444';
        ctx.rect(167, 365, 91, 24);
        ctx.stroke();
    }
    ctx.closePath();

    // helping overlay
    if (helpingOverlayOn == true) {
        // helping overlay btn
        ctx.beginPath();
        ctx.strokeStyle = '#A7923E'; //'#9a8a49';
        ctx.rect(20, 400, 52, 24);
        ctx.stroke();
        ctx.closePath();

        // draw the pointer -------------------------------------
        ctx.beginPath();
        ctx.strokeStyle = '#f3d973';

        // pointer at hint btn
        ctx.moveTo(64.5, 467.5);
        ctx.lineTo(64.5, 487.5);
        ctx.lineTo(61.5, 487.5);
        ctx.lineTo(67.5, 494.5);
        ctx.lineTo(73.5, 487.5);
        ctx.lineTo(70.5, 487.5);
        ctx.lineTo(70.5, 475.5);
        ctx.lineTo(88.5, 475.5);
        ctx.lineTo(88.5, 467.5);

        // pointer at log section    
        ctx.moveTo(90.5, 495.5);
        ctx.lineTo(90.5, 515.5);
        ctx.lineTo(87.5, 515.5);
        ctx.lineTo(93.5, 521.5);
        ctx.lineTo(99.5, 515.5);
        ctx.lineTo(96.5, 515.5);
        ctx.lineTo(96.5, 495.5);
        
        // pointer at action btns
        ctx.moveTo(300.5, 495.5);
        ctx.lineTo(300.5, 515.5);
        ctx.lineTo(297.5, 515.5);
        ctx.lineTo(303.5, 521.5);
        ctx.lineTo(309.5, 515.5);
        ctx.lineTo(306.5, 515.5);
        ctx.lineTo(306.5, 495.5);

        // pointer at action pockets
        ctx.moveTo(570.5, 495.5);
        ctx.lineTo(570.5, 515.5);
        ctx.lineTo(567.5, 515.5);
        ctx.lineTo(573.5, 521.5);
        ctx.lineTo(579.5, 515.5);
        ctx.lineTo(576.5, 515.5);
        ctx.lineTo(576.5, 495.5);
        
        ctx.closePath();

        ctx.fillStyle = '#f3d973';
        ctx.fill();
        ctx.stroke();
        // -------------------------------------------------------

        // annotation hint btn
        ctx.fillText(txtSrc[1].menuTxt[0][lang], 96, 485);
        // annotation log section
        ctx.fillText(txtSrc[1].menuTxt[1][lang], 102, 514);
        // annotation action btns
        ctx.fillText(txtSrc[1].menuTxt[2][lang], 312, 514);
        // annotation action pockets
        ctx.fillText(txtSrc[1].menuTxt[3][lang], 582, 514);
    } else {
        // helping overlay btn
        ctx.beginPath();
        ctx.strokeStyle = '#444';
        ctx.rect(20, 400, 52, 24);
        ctx.stroke();
        ctx.closePath();
    }

    // reachability btn
    ctx.beginPath();
    if (reachabilityOn == false) {
        ctx.strokeStyle = '#888';
        ctx.rect(82, 400, 128, 24);
        ctx.stroke();
    } else {
        ctx.strokeStyle = '#444';
        ctx.rect(82, 400, 128, 24);
        ctx.stroke();
    }
    ctx.closePath();

    // transcript btn
    ctx.beginPath();
    if (transcriptOn == true) {
        ctx.strokeStyle = '#888';
        ctx.rect(20, 435, 99, 24);
        ctx.stroke();
    } else {
        ctx.strokeStyle = '#444';
        ctx.rect(20, 435, 99, 24);
        ctx.stroke();
    }
    ctx.closePath();
    // btn outlines and btn effects (highlighted when turned on) --- end ------------------

    // btn labels
    ctx.fillStyle = '#aaa'; //'#ffde7b';
    ctx.fillText(txtSrc[1].menuTxt[9][lang], 30, 355);
    ctx.fillText(txtSrc[1].menuTxt[10][lang], 120, 355);
    ctx.fillText(txtSrc[1].menuTxt[18][lang], 177, 390);
    ctx.fillText(txtSrc[1].menuTxt[11][lang], 30, 425);
    ctx.fillText(txtSrc[1].menuTxt[6][lang], 92, 425);
    ctx.fillText(txtSrc[1].menuTxt[15][lang], 29, 461);
    ctx.fillStyle = '#6eaa6f';
    ctx.fillText(txtSrc[1].menuTxt[20][lang], 30, 390);
    ctx.fillStyle = '#ff7777';
    ctx.fillText(txtSrc[1].menuTxt[8][lang], 140, 461);
}

/** ----------------------------------------------------------------------------------------------------
* [class] Explanation
* for story telling
* 
* @param {boolean} active
*/
function Explanation(active) {
    this.active = active || false;

    if (this.active == false) {
        canvas2.style.display = 'none';
    }

    this.txt = 'Lorem Ipsum';
    this.txtIndex = 0;
    this.txtFont = '12pt minecraftia';
    this.txtLineHeight = 28;
}

Explanation.prototype.render = function(ctx) {
    ctx.drawImage(canvas2Background, 0, 0);
    
    ctx.font = this.txtFont;
    ctx.fillStyle = '#333'; //'#e2c56e';

    var words = txtSrc[3].explTxt[this.txtIndex][lang].split(' ');
    var line = '';
    var yCoo = 456;
        
    for(var n = 0; n < words.length; n++) {

        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;

        if ((testWidth > 744 && n > 0) || (words[n] == '§' && n > 0)) {
                
            if (words[n] == '§')                
                words.splice(n, 1);
            
            ctx.fillText(line, 76, yCoo);
            line = words[n] + ' ';
            yCoo += this.txtLineHeight;
        } else
            line = testLine;
    }
    ctx.fillText(line, 72, yCoo);
    ctx.fillStyle = (highlightedExplBtn == true) ? '#c9c8bE' : '#aeada4'; // #d1d0c6
    ctx.fillRect(742, 512, 68, 24);

    ctx.beginPath();
    ctx.strokeStyle = '#797978';
    ctx.lineWidth = 2;
    ctx.rect(742, 512, 68, 24);
    ctx.stroke();
    ctx.closePath();
    
    ctx.fillStyle = '#444';
    ctx.font = gameFont;
    if (lang == 0)    
        ctx.fillText('Dismiss', 751, 537);
    else
        ctx.fillText('Fertig', 751, 537);
}

/** ----------------------------------------------------------------------------------------------------
* [class] CurrentScene
* creates the current scene object on start or switch between scenes
* 
* @param {int} index: index (ID) of scene – parameter in sceneSrc
*/
function CurrentScene(index) {

    frameCounter = 0;

    this.index = index;
    this.state = 'active';
    this.transition = []; // [old exitZone, new zoneIndex]
    this.walkingTrigger = false;
    this.getSceneParam(index);

    this.Grid = new MotionGrid(this.sceneParam.gridParam[0], 
                               this.sceneParam.gridParam[1], 
                               this.sceneParam.gridParam[2], 
                               this.sceneParam.gridParam[3], 
                               this.sceneParam.gridParam[4]);
    
    this.meshwork = this.Grid.getMeshwork();
    
    // -0.5 for a small issue by clicking on the edge of grid
    this.walkable = [[this.Grid.pos[0], this.Grid.pos[1]],
                     [this.Grid.pos[0] + this.Grid.size[0], this.Grid.pos[1] + this.Grid.size[1] - 0.5]];

    this.PFmap = this.sceneParam.PFmap;

    this.exitZones = this.sceneParam.exitZones;
    this.entryRoutes = this.sceneParam.entryRoutes;

    var canvasBackground = new Image();
    canvasBackground.src = this.sceneParam.bgImgSrc;
    canvasBackground.addEventListener("load", loadBgImage, false);

    function loadBgImage() {
        ctx0.drawImage(canvasBackground, 0, 0, 1024, 512);
    }

    // foreground when foreground scource defined
    if (this.sceneParam.fgImgSrc) {
        this.foreground = new Image;
        this.foreground.src = this.sceneParam.fgImgSrc;
    }

    this.itemsInScene = [];
    // put items in scene
    if (this.sceneParam.itemsInScene) {
        var equals = false;
        for (var i = 0; i < this.sceneParam.itemsInScene.length; i++) { 
            
            var item = new Item(this.sceneParam.itemsInScene[i][0],     // name
                                this.sceneParam.itemsInScene[i][1],     // state (reg or used)
                                this.sceneParam.itemsInScene[i][2],     // coo
                                this.sceneParam.itemsInScene[i][3],     // inPlay (false for just the animiation)
                                this.sceneParam.itemsInScene[i][4],     // usability
                                this.sceneParam.itemsInScene[i][5],     // portability
                                this.sceneParam.itemsInScene[i][6],     // disposable
                                this.sceneParam.itemsInScene[i][7]);    // special

            // get the actual state
            item.state = this.getStateOfItem(item);

            // push the Item in [global] allItemsInPlay[]
            this.pushInAllItemsInPlay(item);

            // dont push it in itemsInScene if items are already in inventory
            if (Inv.itemsInInv.length > 0) {
                for (var j = 0; j < Inv.itemsInInv.length; j++) { 

                    if (item.name == Inv.itemsInInv[j].name)
                        equals = true;
                }

                // dont push it in itemsInScene if items already dropped
                if (allDroppedItems.length > 0) {
                    for (var k = 0; k < allDroppedItems.length; k++) { 

                        if (item.name == allDroppedItems[k].name)
                            equals = true;
                    }
                }

                if (equals == false) {
                    this.itemsInScene.push(item);
                }

            } else {
                this.itemsInScene.push(item);
            }
            equals = false;
        }
        item = null;
    }
    
    // positioning of this block between itemInScene and npcInScene is important
    this.special = this.sceneParam.special || false;
    if (this.special == true)
        this.customizeSpecial(this.index);

    this.npcInScene = [];
    // put npc's in scene
    if (this.sceneParam.npcInScene) {
   
        for (var j = 0; j < this.sceneParam.npcInScene.length; j++) {
            
            var char = new Char (this.sceneParam.npcInScene[j][0], // name
                                 this.sceneParam.npcInScene[j][1], // state
                                 this.sceneParam.npcInScene[j][2], // coo
                                 true,                             // npc
                                 this.sceneParam.npcInScene[j][3], // talked
                                 this.sceneParam.npcInScene[j][4]  // active
                                 );

            if (char.active == true)
                this.npcInScene.push(char);
        }
    }

    this.dropZones = this.sceneParam.dropZones;

    delete this.sceneParam;
    Inv.writeLog(txtSrc[2].gameStates[0][lang]);
}

CurrentScene.prototype.getSceneParam = function(index) {

    for (var i = 0; i < sceneSrc.length; i++) {
        if (sceneSrc[i].index == index) {
            this.sceneParam = sceneSrc[i];
            break;
        } else {
            this.sceneParam = sceneSrc[sceneSrc.length - 1];
        }
    }
}

CurrentScene.prototype.pushInAllItemsInPlay = function(item) {
    var indicator = false;
    
    for (var i = 0; i < allItemsInPlay.length; i++) { 
        if(item.name == allItemsInPlay[i].name || item.inPlay == false) {
            indicator = true; // is already in or not
        }
    }

    if (indicator == false) {
        allItemsInPlay.push(item);
    }
}

CurrentScene.prototype.getStateOfItem = function(item) {

    for (var i = 0; i < allItemsInPlay.length; i++) { 
        
        if(item.name == allItemsInPlay[i].name) {
            return allItemsInPlay[i].state;
        }
    }
    return 'reg';
}

CurrentScene.prototype.customizeSpecial = function(index) {

    if (Bennet) {

        switch (index) {
            case 0: // Apartment -----------------------------------------------------------
                
                // Bennet wears no parka in apartment (scene 1)
                Bennet.walkingSprite.spriteObj.src = imgPath + 'bennet_walking_all.png';
                Bennet.idlingSprite.spriteObj.src = imgPath + 'bennet_idling_front.png';

                // puts back the the glass of change
                var noChange = false;
                for (var i = 0; i < Inv.itemsInInv.length; i++) {
                    if (Inv.itemsInInv[i].name == 'Change')
                        noChange = true;
                }
                if (noChange == false) {
                    for (var j = 0; j < this.itemsInScene.length; j++) {
                        if (this.itemsInScene[j].name == 'Change')
                            noChange = true;
                    }
                    // may be obsolete, but for safety
                    if (noChange == false) {
                        var item = new Item('Change', 'reg', [183, 340], true, false, true, 7);
                        this.itemsInScene.push(item); alert('3');
                    }
                }
                break;
            case 1: // Hallway ------------------------------------------------------------------
                
                // Bennet wears always the parka when leaving apartment (entering scene 2)
                Bennet.walkingSprite.spriteObj.src = imgPath + 'bennet_walking_all_parka.png';
                Bennet.idlingSprite.spriteObj.src = imgPath + 'bennet_idling_front_parka.png';

                this.walkingTrigger = true;

                // puts loose wire in place if fuse box is open and wire is not in pocket
                var looseWireinInv = false;
                for (var i = 0; i < allItemsInPlay.length; i++) { 
                    if(allItemsInPlay[i].name == 'Fuse Box' && allItemsInPlay[i].state == 'used') {
                        
                        for (var j = 0; j < allItemsInPlay.length; j++) {
                            if (allItemsInPlay[j].name == 'Loose Wire') {
                                
                                for (var k = 0; k < Inv.itemsInInv.length; k++) {
                                    if (Inv.itemsInInv[k].name == 'Loose Wire')
                                        looseWireinInv = true;
                                }
                                
                                if (looseWireinInv == false)
                                    this.itemsInScene.push(allItemsInPlay[j]);
                            }
                        }
                    }
                }
                
                // sets Zoë's convo in quest 7 when Bennet is to screens away from back alley
                if (questIndex == 7 && npcChatSrc[4].index[0] < 1) {
                    npcChatSrc[4].index = [1, 0];
                    sceneSrc[6].npcInScene[0][3] = false;
                    Bennet.setSpeech(txtSrc[0].react[33][lang]);
                    lilStoryHelper3 = true;
                }
                break;
            case 2: // Street: No. 42 ---------------------------------------------------------
                
                if (questIndex == 2)
                    lilStoryHelper4 = true;

                // turns of guitar play when leaving pizzeria street scene
                guitarSndFade = 'fadeOut'; 
                
                // set the right comment for the trash cans when always used
                for (var i = 0; i < allItemsInPlay.length; i++) {
                    if (allItemsInPlay[i].name == 'Trash Can Down' && allItemsInPlay[i].state == 'used') {
                        for (var j = 0; j < this.itemsInScene.length ; j++) {
                            if (this.itemsInScene[j].name == 'Trash Can Down') {
                                this.itemsInScene[j].desc = (lang == 0) ? 'The garbage is where it belongs. For the time being.' : 'Der Abfall ist da wo er hin gehört. Vorerst.';
                                this.itemsInScene[j].deny = (lang == 0) ? 'I really don\'t want to take that with me.' : 'Das will ich wirklich nicht mitnehmen.';
                            }
                        }
                    }
                }
                
                // turns of input panel if open when leaving back alley
                document.getElementById('input_panel').style.display = 'none';
                
                // triggers glitch on questIndex 7
                if (lilStoryHelper3 == true && questIndex < 9){
                    glitchTrigger(30, 0);
                    Bennet.setSpeech(txtSrc[0].react[40][lang]);
                    lilStoryHelper3 = false;
                }
                
                // triggers questIndex 9
                if (npcChatSrc[4].index[1] == 3 && questIndex == 8 && Expl.txtIndex == 0) {
                    Expl.txtIndex = 1;
                    canvas2.style.display = 'block';
                    Expl.active = true;
                    canvas2Background.src = imgPath + 'explanation_overlay.png';
                    Menu.active = false;
                }
                
                // triggers explanatione msg on questIndex 11
                if (Expl.txtIndex == 2 && questIndex == 11) {
                    canvas2.style.display = 'block';
                    txtSrc[3].explTxt[Expl.txtIndex][0] = txtSrc[3].explTxt[Expl.txtIndex][0] + getSystemInfoString();
                    txtSrc[3].explTxt[Expl.txtIndex][1] = txtSrc[3].explTxt[Expl.txtIndex][1] + getSystemInfoString();
                    Expl.active = true;
                    canvas2Background.src = imgPath + 'explanation_overlay.png';
                    Menu.active = false;
                }
                break;
            case 3: // Street: Pizzeria ---------------------------------------------------------
                
                // turns on guitar play when entering pizzeria street scene
                guitarSndFade = 'fadeIn';
                
                // sets Zoë's convo in quest 7 when Bennet is to screens away from back alley
                if (questIndex == 7 && npcChatSrc[4].index[0] < 1) {
                    npcChatSrc[4].index = [1, 0];
                    sceneSrc[6].npcInScene[0][3] = false;
                    Bennet.setSpeech(txtSrc[0].react[33][lang]);
                    lilStoryHelper3 = true;
                }
                
                // put doggo in place on scene 6 (back alley) & corrects the path to door
                if (questIndex > 7 && sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] > 300) {
                    
                    sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] = 245;
                    var interim = sceneSrc[6].PFmap;
                    sceneSrc[6].PFmap = sceneSrc[6].PFmapAlt;
                    sceneSrc[6].PFmapAlt = interim;
                }
                
                // Bennet comments the absence of eliot
                if (lilStoryHelper1 == true) {
                    lilStoryHelper1 = false;
                    lilStoryHelper2 = true;
                    Bennet.setSpeech(txtSrc[0].react[37][lang]);
                }
                break;
            case 4: // Luca Pizzeria ---------------------------------------------------------
                
                // turns down guitar play when entering luca's pizzeria (Steven plays outside)
                guitarSnd.volume = .05;
                break;
            case 5: // Dumping Place ---------------------------------------------------------
                
                // turns of guitar play when leaving pizzeria street scene
                guitarSndFade = 'fadeOut';
                break;
            case 6: // Back Alley ---------------------------------------------------------
                
                // Eliot – set the original sprite image when leaving cellar 
                charSrc[7].src = imgPath + 'mrRobot_idling.png';
                charSrc[8].src = imgPath + 'mrRobot_talking.png';
                
                // Zoë - replace the sprite image (Zoë on the hatch)
                charSrc[11].src = imgPath + 'zoe_idling_hatch.png';
                charSrc[11].seq = [0];
                charSrc[11].size = [46, 30];
                charSrc[12].src =  imgPath + 'zoe_talking_hatch.png';
                charSrc[12].size = [46, 30];

                // Bennet comments sleepin' Doggo
                if (lilStoryHelper2 == true) {
                    lilStoryHelper2 = false;
                    Bennet.setSpeech(txtSrc[0].react[38][lang]);
                }
                this.walkingTrigger = true;

                // set exit route to cellar door cause of doggo
                if (questIndex > 7 && sceneSrc[6].itemsInScene[sceneSrc[6].itemsInScene.length - 1][2][0] < 300)
                    sceneSrc[6].exitZones[2][2][0] = 170;
                break;
            case 7: // Roof Top ---------------------------------------------------------
                
                // turns of input panel if open when leaving back alley
                document.getElementById('input_panel').style.display = 'none';
                break; 
            case 8: // Cellar ---------------------------------------------------------
                
                // Eliot – replaces the sprite image (inverted, so that Eliot looks to other side)
                charSrc[7].src = imgPath + 'mrRobot_idling_inverted.png';
                charSrc[8].src = imgPath + 'mrRobot_talking_inverted.png';
                
                // Zoë – set the original sprite image when entering cellar 
                charSrc[11].src = imgPath + 'zoe_idling.png';
                charSrc[11].seq = [0, 0, 0, 0, 0, 1, 0, 2, 0, 2];
                charSrc[11].size = [42, 194];
                charSrc[12].src =  imgPath + 'zoe_talking.png';
                charSrc[12].size = [60, 194];
                
                // turns of input panel if open when leaving back alley
                document.getElementById('input_panel').style.display = 'none';
                
                // Bennet comments the first visit on basement
                if (questIndex == 9 && lilStoryHelper3 == true) {
                    Bennet.setSpeech(txtSrc[0].react[42][lang]);
                    lilStoryHelper3 = false;
                }
                break;
            case 9: // Menu ---------------------------------------------------------
                
                // turns of input panel if open when leaving back alley
                document.getElementById('input_panel').style.display = 'none';
                break;
            default:
                console.log('default in customizeSpecial() switch')
        }
    }
}

/** ----------------------------------------------------------------------------------------------------
* [class] Char
* creates a character object
* 
* @param {string} name: name of the character
* @param {string} state: state of the character – for different sprite graphics
* @param {array} coo: coordinates on canvas
*/
function Char(name, state, coo, npc, talked, active) {
    this.name = name;
    this.state = state || 'idling';
    this.allSprites = [];

    this.idlingSprite = new Sprite(this.name, 'idling');
    this.allSprites.push(this.idlingSprite);

    if (this.name == 'Bennet') {
        this.walkingSprite = new Sprite(this.name, 'walking');
        this.allSprites.push(this.walkingSprite);
    }

    this.talkingSprite = new Sprite(this.name, 'talking');
    this.allSprites.push(this.talkingSprite);

    this.npc = npc || false;    // is set in scene class, not in sceneSrc
    this.active = active || false;

    if (this.npc == false) {
        this.route = [Scene.entryRoutes[3][0], Scene.entryRoutes[3][1]];
    } else if (this.active == true) {
        this.setNpcChat(this.name);
        this.talked = talked || false;
    }
    
    if (coo)
        this.coo = [coo[0] - this.allSprites[0].size[0] / 2, coo[1]];
    else
        this.coo = [canvas1.width - this.allSprites[0].size[0], canvas1.height];

    this.igName = this.idlingSprite.igName || name;

    // chat
    this.chatOn = false;
    this.chatboxCoo = [];
    this.frameCounterChat = 0;
    this.chatAlpha = 1;
    this.chatFadeout = 4; // sec
    this.speech = 'zweiunvierzig';

    this.frameCounter = 0;
    this.animationOn = true;
    this.animationHoldCounter = 0;
}

Char.prototype.setRoute = function(oldGridCoo, newGridCoo) {
    
    var PFgrid = new PF.Grid(Scene.PFmap);

    var PFfinder = new PF.AStarFinder ({
        allowDiagonal: true, 
        dontCrossCorners: false,
        // heuristic: PF.Heuristic.chebyshev,
        heuristic: PF.Heuristic.manhattan
        // heuristic: PF.Heuristic.euclidean,
        // heuristic: PF.Heuristic.octile
    });

    PFpath = PFfinder.findPath(oldGridCoo[0], oldGridCoo[1], newGridCoo[0], newGridCoo[1], PFgrid);

    if (PFpath.length > 0) {
        PFpath = PF.Util.smoothenPath(PFgrid, PFpath);

        this.route.length = 0;
        wayPointCount = 0;

        for (var i = 0; i < PFpath.length; i++) {
            this.route[i] = Scene.meshwork[PFpath[i][1]][PFpath[i][0]]; 
        }
    }
}

Char.prototype.render = function(ctx) {

    switch (this.state) {
        case 'idling' :
            this.currentSprite = this.idlingSprite;
            break;
        case 'walking' :
            this.currentSprite = this.walkingSprite;
            this.animationOn = true;

            var motionCoo = [];

            var dx = this.route[wayPointCount + 1][0] - this.route[wayPointCount][0];
            var dy = this.route[wayPointCount + 1][1] - this.route[wayPointCount][1];

            transfer = Math.floor((transfer + (walkingSpeed / (Math.abs(dx) + Math.abs(dy)))) * 1000) / 1000;

            motionCoo[0] = this.route[wayPointCount][0] + dx * transfer;
            motionCoo[1] = this.route[wayPointCount][1] + dy * transfer;
            
            if (wayPointCount < this.route.length - 2) { 
                
                for (var i = 0; i <= Math.floor(walkingSpeed * 0.7); i++) {
                    
                    if (this.coo[0] == (this.route[wayPointCount + 1][0] - i) || this.coo[0] == (this.route[wayPointCount + 1][0] + i)) {
                        
                        for (var j = 0; j <= Math.floor(walkingSpeed * 0.7); j++) {
                            
                            if (this.coo[1] == (this.route[wayPointCount + 1][1] - j) || this.coo[1] == (this.route[wayPointCount + 1][1] + j)) {
                                // ???
                                wayPointCount++;
                                transfer = 0;
                                motionCoo = this.coo;
                            }
                        }
                    }   
                }
            // Bennet stops 
            } else if ((Math.abs(this.route[this.route.length - 1][0] - this.coo[0])) < Math.floor(walkingSpeed * 0.8) && 
                      ((Math.abs(this.route[this.route.length - 1][1] - this.coo[1])) < Math.floor(walkingSpeed * 0.8))) {
                
                this.state = 'idling';
                delayByFrame = 0;

                // special case locked door to cellar
                if (Scene.index == 6 && sceneSrc[6].exitZones[2][5] == false &&
                    this.coo[0] < 230 && this.coo[1] < 410) {
                    Bennet.setSpeech(txtSrc[0].react[23][lang]); // "locked"
                    Scene.state = 'active';
                }
                
                if (Scene.state !== 'active') {
                    switchScene(Scene.index);
                }
            }

            this.coo[0] =  Math.floor(motionCoo[0]);
            this.coo[1] =  Math.floor(motionCoo[1]);

            // reacts on position of Bennet when walkingTrigger is active [Scene.customizeSpecial()]
            if (Scene.walkingTrigger == true)
                specialWalkingInterrupt(Scene.index);

            // set the sprite considering the direction
            this.setDirection();
            
            break;
        case 'talking' :
            this.currentSprite  = this.talkingSprite;
            break;
        default:
            this.currentSprite = this.idlingSprite;
    }


    // timed animation based on value in {hold} in seconds --- start ------------------------------------------------------
    // {boolean} animationOn = true when animation should run
    if (this.currentSprite.hold) {

        this.animationHoldCounter++;

        if (this.animationHoldCounter < this.currentSprite.hold * framesPerSecond) 
            this.animationOn = false;
        else {
            this.animationOn = true;
            // alert('true');
            if (this.animationHoldCounter > (this.currentSprite.hold * framesPerSecond) + (this.currentSprite.seq.length - 1) * this.currentSprite.fpS){
                this.animationHoldCounter = 0; 
                this.currentSprite.index = 0;
            }
        }
    } 
    // set animation back to 0 by changing sprite/movement ('walking')
    // (only when when a hold is active && the current sprit as no hold && not on every frame at walking)
    if (this.animationHoldCounter != 0 && !this.currentSprite.hold && this.currentSprite.state == 'idling') {
        for (var i = 0; i < this.allSprites.length - 1; i++) {
            if (this.allSprites[i].hold)
               this.allSprites[i].index = 0;
        }
        this.animationHoldCounter = 0;
        this.frameCounter = 0;
    }
    // timed animation based on value in {hold} in seconds --- end ------------------------------------------------------ 

    var currentCharFrame;

    if (this.animationOn == true) {

        currentCharFrame = this.currentSprite.seq[this.currentSprite.index]; 

        ctx.drawImage(  this.currentSprite.spriteObj,                                 // image object
                        currentCharFrame * this.currentSprite.size[0],                // snippet x coordinate
                        this.currentSprite.row * this.currentSprite.size[1],          // snippet y coordinate
                        this.currentSprite.size[0],                                   // snippet width
                        this.currentSprite.size[1],                                   // snippet height
                        this.coo[0] - this.allSprites[0].size[0] / 2,                 // position x coordinate
                        this.coo[1] - this.allSprites[0].size[1],                     // position y coordinate
                        this.currentSprite.size[0],                                   // width
                        this.currentSprite.size[1]                                    // height
        );
        
        if (this.frameCounter == this.currentSprite.fpS - 1) {
            this.currentSprite.index++;
            this.frameCounter = 0;
        } else {
            this.frameCounter++;
        }

    } else {
        currentCharFrame = this.currentSprite.seq[0];
        
        ctx.drawImage(  this.currentSprite.spriteObj,                    
                        currentCharFrame * this.currentSprite.size[0],
                        this.currentSprite.row * this.currentSprite.size[1],
                        this.currentSprite.size[0],
                        this.currentSprite.size[1],
                        this.coo[0] - this.allSprites[0].size[0] / 2,
                        this.coo[1] - this.allSprites[0].size[1],
                        this.currentSprite.size[0],
                        this.currentSprite.size[1]
        );
    }

    if (this.currentSprite.index >= this.currentSprite.seq.length)
        this.currentSprite.index = 0;
};

Char.prototype.setDirection = function() {

    if ((this.route[wayPointCount][0] == this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] > this.route[wayPointCount + 1][1])) {
        this.currentSprite.row = 0;
    }
    else if ((this.route[wayPointCount][0] < this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] > this.route[wayPointCount + 1][1])) {
        var ratio = (Math.abs(this.route[wayPointCount + 1][0] - this.route[wayPointCount][0])) / (Math.abs(this.route[wayPointCount + 1][1] - this.route[wayPointCount][1]))
        if (ratio > 4)
            this.currentSprite.row = 2;
        else if (ratio < 0.5)
            this.currentSprite.row = 0;
        else
            this.currentSprite.row = 1;
    }
    else if ((this.route[wayPointCount][0] < this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] == this.route[wayPointCount + 1][1])) {
        this.currentSprite.row = 2;
    }
    else if ((this.route[wayPointCount][0] < this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] < this.route[wayPointCount + 1][1])) {
        var ratio = (Math.abs(this.route[wayPointCount + 1][0] - this.route[wayPointCount][0])) / (Math.abs(this.route[wayPointCount + 1][1] - this.route[wayPointCount][1]))
        if (ratio > 4)
            this.currentSprite.row = 2;
        else if (ratio < 0.5)
            this.currentSprite.row = 4;
        else
            this.currentSprite.row = 3;
    }
    else if ((this.route[wayPointCount][0] == this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] < this.route[wayPointCount + 1][1])) {
        this.currentSprite.row = 4;
    }
    else if ((this.route[wayPointCount][0] > this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] < this.route[wayPointCount + 1][1])) {
        var ratio = (Math.abs(this.route[wayPointCount + 1][0] - this.route[wayPointCount][0])) / (Math.abs(this.route[wayPointCount + 1][1] - this.route[wayPointCount][1]))
        if (ratio > 4)
            this.currentSprite.row = 6;
        else if (ratio < 0.5)
            this.currentSprite.row = 4;
        else
            this.currentSprite.row = 5;
    }
    else if ((this.route[wayPointCount][0] > this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] == this.route[wayPointCount + 1][1])) {
        this.currentSprite.row = 6;
    }
    else if ((this.route[wayPointCount][0] > this.route[wayPointCount + 1][0]) && (this.route[wayPointCount][1] > this.route[wayPointCount + 1][1])) {
        var ratio = (Math.abs(this.route[wayPointCount + 1][0] - this.route[wayPointCount][0])) / (Math.abs(this.route[wayPointCount + 1][1] - this.route[wayPointCount][1]))
        if (ratio > 4)
            this.currentSprite.row = 6;
        else if (ratio < 0.5)
            this.currentSprite.row = 0;
        else
            this.currentSprite.row = 7;
    }
    else {
        this.row = 4;
        console.log('Error: "else" in setDirection()');
    }
}

Char.prototype.renderChat = function(ctx) {

    // fadeout the chatBox (not during conversation)
    if (action != 'inConvo') {
        this.frameCounterChat++;

        if (this.chatAlpha <= 0.1) {            
            this.chatAlpha = 0;
            this.frameCounterChat = 0;

            if (this.name != 'Bennet') {
                this.chatOn = false;
                this.state = 'idling';
            }

            if (this.name == 'Guitar Guy')
                guitarSndFade = 'fadeIn';
            
        } else if (this.frameCounterChat >= this.chatFadeout * framesPerSecond) { // && questMsgOn == false
            // fadeout speed
            this.chatAlpha -= 0.1;
        }

        ctx.globalAlpha = this.chatAlpha;
    }

    var chatBoxMaxWidth = 200,
        chatBoxLineHeight = 20, 
        chatBoxFontColor = '#222',
        chatBoxBgColor = '#ccc';
    
    if (!this.npcChat) {
        chatBoxBgColor = '#ccc';
        this.chatboxCoo[0] -= this.allSprites[0].size[0] * 0.5;
        this.chatboxCoo[1] -= this.allSprites[0].size[1];   
    } else {
        chatBoxBgColor = this.npcChat.chatBoxBgColor;
        
        if (this.name == 'Zoë' && Scene.index == 8) // nitpick fix of Zoë's chatbox position
            this.chatboxCoo[0] += this.talkingSprite.size[0] * .1;
        else if (this.name == 'Zoë' && Scene.index == 6) {
            this.chatboxCoo[0] -= 100;
            this.chatboxCoo[1] -= 60;
        }
        else if (this.name == 'Guitar Guy') // nitpick fix of Steven's chatbox position
            this.chatboxCoo[0] -= this.talkingSprite.size[0] * .8;
        else
            this.chatboxCoo[0] -= this.talkingSprite.size[0] * .2;
            
        this.chatboxCoo[1] -= this.allSprites[0].size[1];

    }

    // text wrap according to chatBoxMaxWidth
    var words = this.speech.split(' ');
    var line = '';
    var oneLiner = true;

        for(var n = 0; n < words.length; n++) {

            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;

            if ((testWidth > chatBoxMaxWidth && n > 0) || (words[n] == '§' && n > 0)) {
                    
                    if (words[n] == '§')                
                        words.splice(n, 1);
                    
                    oneLiner = false;

                    ctx.fillStyle = chatBoxBgColor;
                    ctx.fillRect(this.chatboxCoo[0] - chatBoxLineHeight / 3 - 0.5, this.chatboxCoo[1] - chatBoxLineHeight - 3, chatBoxMaxWidth + 3, chatBoxLineHeight); 
     
                    ctx.fillStyle =  chatBoxFontColor;
                    ctx.fillText(line, this.chatboxCoo[0] - 1, this.chatboxCoo[1]);
                    
                    line = words[n] + ' ';
                    
                    this.chatboxCoo[1] += chatBoxLineHeight;
            } else {
                line = testLine;
            }
        }

        // shorten the chatBoxMaxWidth when a single short line
        if (oneLiner == true)
            chatBoxMaxWidth = testWidth + 6;
        else
            chatBoxMaxWidth = 200;

        ctx.fillStyle =  chatBoxBgColor;
        ctx.fillRect(this.chatboxCoo[0] - chatBoxLineHeight / 3 - 0.5, 
                     this.chatboxCoo[1] - chatBoxLineHeight - 3,
                     chatBoxMaxWidth + 3,
                     chatBoxLineHeight); 
        
        ctx.fillStyle =  chatBoxFontColor;
        ctx.fillText(line, this.chatboxCoo[0] - 1, this.chatboxCoo[1]);

        // set chatBox x-coordinate to left or right of char
        // according to position of char (keeps chatBox within canvas)  
        if (canvas1.width - this.coo[0] < chatBoxMaxWidth + 50 + this.allSprites[0].size[0]) {
            if (!this.npcChat)
                this.chatboxCoo[0] = this.coo[0] - chatBoxMaxWidth + 10;
            else
                this.chatboxCoo[0] = this.coo[0] - chatBoxMaxWidth - 20;
        }
        else {
            this.chatboxCoo[0] = this.coo[0] + this.allSprites[0].size[0];
        }

        this.chatboxCoo[1] = this.coo[1];
    
    // set the global opacity back to 1 (for rendering the other stuff)
    ctx.globalAlpha = 1;
}

Char.prototype.setSpeech = function(txt) {
    this.speech = txt;
    this.chatOn = true;
    this.frameCounterChat = 0;
    this.chatAlpha = 1;

    var hisCon = document.getElementById('transcript');
    var hisEl = document.createElement('p');
    hisEl.innerHTML = this.speech.replace(/§ /g, '');
    
    if (hisCon.childElementCount < 30)
        hisCon.appendChild(hisEl);
    else {
        hisCon.removeChild(hisCon.childNodes[0]);
        hisCon.appendChild(hisEl);
    }
}

Char.prototype.setNpcChat = function(name) {

    for (var i = 0; i < npcChatSrc.length; i++) {
        if (npcChatSrc[i].name == name) {
            this.npcChat = npcChatSrc[i];
        }

    }
}

/** ----------------------------------------------------------------------------------------------------
* [class] Item
* creates a item object
* 
* @param {string} name: name of the item
* @param {string} state: state of the item – for different sprite graphics
* @param {array} coo: coordinates on canvas
* @param {boolean} inPlay: false for non interoperable items (for animation purposes)
* @param {boolean} usable
* @param {boolean} portable
* @param {boolean} disposable
* @param {boolean} special: triggers specialCasePickUp() & specialCaseUse()
*/
function Item(name, state, coo, inPlay, usable, portable, disposable, special) {
    this.name = name;
    this.state = state;
    this.inPlay = inPlay || false;
    this.usable = usable || false;
    this.portable = portable || false;
    this.disposable = disposable || false;
    this.special = special || false;
    this.allSprites = [];
    
    this.sceneSprite = new Sprite(this.name, 'inScene');
    this.allSprites.push(this.sceneSprite);

    this.cursorSprite = new Sprite(this.name, 'inHand');
    if (this.cursorSprite.name !== this.sceneSprite.name) // cursorSprite = sceneSprite when no cursorSprite is definied in itemSrc
        this.cursorSprite = this.sceneSprite;
    this.allSprites.push(this.cursorSprite);

    this.invSprite = new Sprite(this.name, 'inPocket');
    this.allSprites.push(this.invSprite);

    this.igName = this.sceneSprite.igName;
    this.desc = this.sceneSprite.desc || this.cursorSprite.desc;
    this.deny = this.sceneSprite.deny;
    this.denyUse = this.sceneSprite.denyUse;
    this.denyUseInv = this.invSprite.denyUseInv;
    this.size = this.allSprites[0].size;
    this.grip = this.cursorSprite.grip;
    
    this.coo = [coo[0] - this.allSprites[0].size[0] / 2,
                coo[1] - this.allSprites[0].size[1]];

    this.once = this.sceneSprite.once || this.cursorSprite.once || null;
    this.frameCounter = 0;
}

Item.prototype.render = function(ctx) {

    // select the sprite
    this.currentSprite = (itemOnCursor !== null && itemOnCursor.name == this.name) ? this.cursorSprite : this.sceneSprite;

    // switch to another row when state is changed (i.e. 'used')
    switch (this.state) {
        case 'reg':
            this.currentSprite.row = 0;
            break;
        case 'used':
            this.currentSprite.row = 1;
            break;
        default:
            this.currentSprite.row = 0;
    }

    // select the current frame from the framesequence by the index
    var currentItemFrame = this.currentSprite.seq[this.currentSprite.index];

    // draw  image on canvas
    ctx.drawImage(  this.currentSprite.spriteObj,
                    currentItemFrame * this.currentSprite.size[0],
                    this.currentSprite.row * this.currentSprite.size[1],
                    this.currentSprite.size[0],
                    this.currentSprite.size[1],
                    this.coo[0],
                    this.coo[1],
                    this.currentSprite.size[0],
                    this.currentSprite.size[1]
    );
    
    // regulate the animation speed by fpS (see: var itemSrc)
    // fpS == frames per sprite (!!!), 
    // it means the count of game-frames that goes by for one sprite-frame
    if (this.frameCounter == this.currentSprite.fpS - 1) {
        this.currentSprite.index++;
        this.frameCounter = 0;
    } else {
        this.frameCounter++;
    }

    // if currentSprite.once is true animation stops at last frame of sequence
    // index = 0 when item gets in pocket (see: managInv())
    if ((this.currentSprite.once == true)) {
        
        if (this.currentSprite.index >= this.currentSprite.seq.length - 1) {
            this.currentSprite.index = this.currentSprite.seq.length - 1;
            this.frameCounter = this.currentSprite.fpS; // stops the animation by setting it high enough
        }
    } else {
        if (this.currentSprite.index >= this.currentSprite.seq.length)
            this.currentSprite.index = 0;
    }
}

/** ----------------------------------------------------------------------------------------------------
* [class] Inventory
* creates the inventory object
*
*/
function Inventory() {

    this.pocketsCoo = [562 ,519];
    this.pockets = [];
    this.itemsInInv = [];
    
    // sixteen pockets
    for (var i = 0; i < 16; i++) {
        if (i < 8) {
            this.pockets[i] = {
                coo: [this.pocketsCoo[0] + i * 58, this.pocketsCoo[1]],
                content: 'empty'
            }
        } else {
            this.pockets[i] = {
                coo: [this.pocketsCoo[0] + (i - 8) * 58, this.pocketsCoo[1] + 40],
                content: 'empty'
            }
        }
    }

    this.actionButtonsCoo = [288, 526];
    this.actionButtons = [];
    
    // four action buttons
    for (var i = 0; i < 4; i++) {
        if (i < 2) {
            this.actionButtons[i] = {
                coo: [this.actionButtonsCoo[0] + i * 133, this.actionButtonsCoo[1]],
                state: 'off'
            }
        } else {
            this.actionButtons[i] = {
                coo: [this.actionButtonsCoo[0] + (i - 2) * 133, this.actionButtonsCoo[1] + 35],
                state: 'off'
            }
        }
    }

    this.log = [];
    this.highlightHintBtnIndex = 0;
}

Inventory.prototype.render = function(ctx) {

    ctx.beginPath();
    
    // render log
    ctx.fillStyle = '#111b11';
    ctx.fillRect(0, 512, 274, 598);
    
    if (invCursorBlinkCounter % (framesPerSecond) == 0)
        invCursorBlinkCounter = 0;

    if (this.log[0]) {

        ctx.fillStyle = '#339933';

        for (var i = 0; i < this.log.length; i++) {
            ctx.fillText('>  ' + this.log[i], 10, 594 - i * 17);
        }   
        
        // blinky cursor on log
        if (invCursorBlinkCounter < (framesPerSecond / 2))
            ctx.fillText('_', ctx.measureText(this.log[0]).width + 27, 595);
    } 
    else {

        ctx.fillStyle = '#339933';

        ctx.fillText('>', 10, 594);

        if (invCursorBlinkCounter < (framesPerSecond / 2))
            ctx.fillText('_', 20, 594);
    }
    
    invCursorBlinkCounter++;

    // quest log btn background
    ctx.fillStyle = '#1f1f1f'
    if (highlightedQlBtn == true) {
        ctx.fillStyle = '#333';
    } else {
        ctx.fillStyle = '#1f1f1f';
    }
    ctx.fillRect(5.5, 486.5, 65, 19);
    ctx.fillStyle = '#1f1f1f';
    
    // draw rectangles as action zone
    for (var i = 0; i < this.actionButtons.length; i++) {
        ctx.rect(this.actionButtons[i].coo[0], this.actionButtons[i].coo[1], 120, 24);
        ctx.fillRect(this.actionButtons[i].coo[0], this.actionButtons[i].coo[1], 120, 24);
        
        // highlights the hovered button
        if (highlightedBtn == i) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.05;
            ctx.fillRect(this.actionButtons[i].coo[0] + 0.5, this.actionButtons[i].coo[1] + 0.5, 120, 24);
            ctx.globalAlpha = 1.0;
            ctx.fillStyle = '#1f1f1f';
        }
    }

    ctx.fillStyle = '#999';

    ctx.fillText(txtSrc[1].actionBtn[0][lang], this.actionButtons[0].coo[0] + 12, this.actionButtons[0].coo[1] + 25);
    ctx.fillText(txtSrc[1].actionBtn[1][lang], this.actionButtons[1].coo[0] + 12, this.actionButtons[1].coo[1] + 25);
    ctx.fillText(txtSrc[1].actionBtn[2][lang], this.actionButtons[2].coo[0] + 12, this.actionButtons[2].coo[1] + 25);
    ctx.fillText(txtSrc[1].actionBtn[3][lang], this.actionButtons[3].coo[0] + 12, this.actionButtons[3].coo[1] + 25);
    
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.lineWidth = 1;

    // quest log btn rectangle and label
    ctx.rect(5.5, 486.5, 65, 19);
    ctx.fillText(txtSrc[1].hintBtn[0][lang], 12, 509);

    // draw rectangles as pockets for item deposition
    for (var i = 0; i < this.pockets.length; i++) {

        ctx.rect(this.pockets[i].coo[0] + 0.5, this.pockets[i].coo[1] + 0.5, 48, 32);
        
        // draw the pocket content
        if (this.pockets[i].content !== 'empty') { // ???
        
            if (this.pockets[i].content.state == 'used')
                this.pockets[i].content.invSprite.row = 1;
            else
                this.pockets[i].content.invSprite.row = 0;

            var currentItemInPocketFrame = this.pockets[i].content.invSprite.seq[this.pockets[i].content.invSprite.index];

            ctx.drawImage(this.pockets[i].content.invSprite.spriteObj,
                            currentItemInPocketFrame * this.pockets[i].content.invSprite.size[0],
                            this.pockets[i].content.invSprite.row * this.pockets[i].content.invSprite.size[1],
                            this.pockets[i].content.invSprite.size[0],
                            this.pockets[i].content.invSprite.size[1],
                            this.pockets[i].coo[0],
                            this.pockets[i].coo[1],
                            48,
                            32
            );

            if (this.pockets[i].content.frameCounter == this.pockets[i].content.invSprite.fpS - 1) {
                this.pockets[i].content.invSprite.index++;
                this.pockets[i].content.frameCounter = 0;
            } else {
                this.pockets[i].content.frameCounter++;
            }

            if (this.pockets[i].content.invSprite.index >= this.pockets[i].content.invSprite.seq.length)
                    this.pockets[i].content.invSprite.index = 0;
        }

        // highlights the hovered pocket
        if (highlighted == i) {
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 0.05;
            ctx.fillRect(this.pockets[i].coo[0] + 0.5, this.pockets[i].coo[1] + 0.5, 48, 32);
            ctx.globalAlpha = 1.0;
        }
    }
    
    // line on top
    ctx.moveTo(0, 512 + 0.5);
    ctx.lineTo(1024, 512 + 0.5);
    // middle line
    ctx.moveTo(554 + 0.5, 512);
    ctx.lineTo(554 + 0.5, 598);
    // left line
    ctx.moveTo(274 + 0.5, 512);
    ctx.lineTo(274 + 0.5, 598);

    ctx.strokeStyle = '#333';
    ctx.stroke();

    ctx.closePath();
}

Inventory.prototype.writeLog = function(prompt) {
    this.log.unshift(prompt);

    if (this.log.length > 4)
        this.log.pop();
}

/** ----------------------------------------------------------------------------------------------------
* [class] Mobile
* creates the mobile object for an overlay on canvas 2
*
* @param {boolean} active
* @param {boolean} msg: the mobile display shows a message
*/
function MobilePhone(active, msg) {
    this.active = active || false;
    
    this.msg = msg || false;
    this.msgHeader = 'God';
    this.msgTxt = 'Lorem Ipsum';
}

MobilePhone.prototype.render = function(ctx) {

    ctx.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx.drawImage(canvas2Background, 0, 0);

    if (this.msg == true) {

        // draws the message bubble        
        ctx.beginPath();
        ctx.moveTo(426, 130);
        ctx.lineTo(600, 130);
        ctx.lineTo(600, 186 + bubbleLength);
        ctx.lineTo(440, 186 + bubbleLength);
        ctx.lineTo(440, 146);
        ctx.closePath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#f3f3f3';
        ctx.stroke();
        ctx.fillStyle = '#f3f3f3'; //'#aec0ce';
        ctx.fill();
        ctx.fillStyle = '#aec0ce';
        ctx.fillRect(448, 136, 144, 40);
        ctx.fillRect(531, 152 + bubbleLength, 64, 28);

        // writes the message
        ctx.fillStyle = '#333';
        ctx.font = gameFont;

        var words = this.msgTxt.split(' ');
        var line = '';
        var msgBoxLineHeight = 20;
        var msgAnker = 184;

        ctx.fillText(txtSrc[1].mobileTxt[0][lang], 452, 160);
        ctx.fillText(this.msgHeader, 452, 178);
            
        for(var n = 0; n < words.length; n++) {

            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;

            if ((testWidth > 150 && n > 0) || (words[n] == '§' && n > 0)) {
                    
                    if (words[n] == '§')                
                        words.splice(n, 1);

                    ctx.fillText(line, 446, msgAnker + 20);
                    
                    line = words[n] + ' ';
                    
                    msgAnker += msgBoxLineHeight;

            } else {
                line = testLine;
            }
            bubbleLength = msgAnker - 130;
        }
        ctx.fillText(line, 446, msgAnker + 20);
        ctx.fillText(txtSrc[1].mobileTxt[1][lang], 538, 180 + bubbleLength);
    }
}

MobilePhone.prototype.setMsg = function(sender, index) {

    for (var i = 0; i < msgSrc.length; i++) {
        
        if (msgSrc[i].sender == sender) {
            this.msgHeader = '@' + msgSrc[i].sender;
            this.msgTxt = msgSrc[i].msg[index][lang];
        }
    }
}

/** ----------------------------------------------------------------------------------------------------
* [class] Sprite
* creates a sprite object for the animation loop
* 
* @param {string} name: name of the related entity
* @param {string} site: site of the related entity – selects the sprite graphic
*/
function Sprite(name, site) {

    this.getSpriteParam(name, site);

    this.name = this.spriteParam.name;
    this.igName = (this.spriteParam.igName) ? this.igName = this.spriteParam.igName[lang] : this.igName = this.spriteParam.name;

    this.src = this.spriteParam.src;
    this.desc = (this.spriteParam.desc) ? this.spriteParam.desc[lang] : 'n/a';
    this.deny = (this.spriteParam.deny) ? this.spriteParam.deny[lang] : 'n/a';
    this.denyUse = (this.spriteParam.denyUse) ? this.spriteParam.denyUse[lang] : 'n/a';
    this.denyUseInv = (this.spriteParam.denyUseInv) ? this.spriteParam.denyUseInv[lang] : 'n/a';
    this.seq = this.spriteParam.seq;
    this.size = this.spriteParam.size;
    this.grip = this.spriteParam.grip || [0, 0];
    this.row = this.spriteParam.row;
    this.fpS = this.spriteParam.fpS || 1;   // frames per sprite
    this.index = 0;
    this.once = this.spriteParam.once || null;
    this.hold = this.spriteParam.hold || null;

    // image object
    this.spriteObj = new Image();
    this.spriteObj.src = this.spriteParam.src;
    
    delete this.spriteParam;
}

Sprite.prototype.getSpriteParam = function(name, site) {

    if (site == 'idling' || site == 'walking' || site == 'talking')
        var scource = charSrc;
    else if (site == 'inPocket' || site == 'inScene' || site == 'inHand')
        var scource = itemSrc;
    else
        console.log('no scource for the sprite is selected in Sprite.getSpriteParam');

    for (var i = 0; i < scource.length; i++) {
        if ((scource[i].name == name) && ((scource[i].site == site) || (scource[i].state == site))) {
            this.spriteParam = scource[i];
            break;
        } else if (i == scource.length - 1)
            this.spriteParam = scource[scource.length - 1];
    }
}

/** ----------------------------------------------------------------------------------------------------
* [class] MotionGrid
* creates a grid of coordinates that has to be mapped on the grid of pathfinding.js
* 
* @param {array} pos: grid position, coordinate [0, 0] on canvas
* @param {array} size: size, coordinate down-right
* @param {int} meshSize: square extension of the mesh size
* @param {boolean} show [opt]
* @param {string} color [opt]
*/
function MotionGrid(pos, size, meshSize, show, color) {

    this.pos = pos;
    this.size = size;

    this.size[0] -= size[0] % meshSize; // reduce to full mesh size if necessary
    this.size[1] -= size[1] % meshSize;

	if (typeof show === 'undefined')
		show = false;

	if (typeof color === 'undefined')
		color = "grey";

	var rowLength = this.size[0] / meshSize; // length of row
	var colLength = this.size[1] / meshSize; // length of column

	var grid = new Array(colLength);
    
    for (var i = 0; i < colLength; i++) { // 2nd and 3rd dimension of {Array} grid is initiated
        grid [i] = new Array(rowLength);
        for (var j = 0; j < rowLength; j++) {
            grid [i][j] = new Array(2);
        }
    }
    	
	var arrindex = 0;

    ctx1.beginPath();

	// vertical lines -----------------------------------------
    for (var x = pos[0]; x < pos[0] + size[0]; x += meshSize) {
        if (show == true) {
        	ctx1.moveTo(0.5 + x, pos[1]);
        	ctx1.lineTo(0.5 + x, pos[1] + size[1]);
        }

        for (var i = 0; i < colLength; i++) {// 3d coordinate array (x)
            grid[i][arrindex][0] = x + meshSize/2;
        }
    	
    	arrindex++;
    }

	if (show == true) {
    	ctx1.moveTo(0.5 + x, pos[1]); // end line vertical
		ctx1.lineTo(0.5 + x, pos[1] + size[1]);
	}
	// --------------------------------------------------------

    arrindex = 0;

	// horizontal lines ---------------------------------------
	for (var y = pos[1]; y < pos[1] + size[1]; y += meshSize) {
		if (show == true) {
	        ctx1.moveTo(pos[0], 0.5 + y);
	        ctx1.lineTo(pos[0] + size[0], 0.5 + y);
	    }

        for (var i = 0; i < rowLength; i++) { // 3d coordinate array (y)
            grid[arrindex][i][1] = y + meshSize/2;
        }

    	arrindex++;
    }
   	
   	if (show == true) {
   		ctx1.moveTo(pos[0], 0.5 + y); // end line horizontal
    	ctx1.lineTo(pos[0] + size[0], 0.5 + y);
    }
	// --------------------------------------------------------

    ctx1.strokeStyle = color;
    ctx1.stroke();
    ctx1.closePath()
    
    this.meshwork = grid;
    this.meshSize = meshSize;
}

MotionGrid.prototype.getMeshwork = function() {
	return this.meshwork;
}