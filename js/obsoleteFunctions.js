
function getDirection() {
	if ((route[wayPointCount][0] == route[wayPointCount + 1][0]) && (route[wayPointCount][1] > route[wayPointCount + 1][1])) {
		Eugen.setRow(0);
	}
	else if ((route[wayPointCount][0] < route[wayPointCount + 1][0]) && (route[wayPointCount][1] > route[wayPointCount + 1][1])) {
		var ratio = (Math.abs(route[wayPointCount + 1][0] - route[wayPointCount][0])) / (Math.abs(route[wayPointCount + 1][1] - route[wayPointCount][1]))
		if (ratio > 4)
			Eugen.setRow(2);
		else if (ratio < 0.5)
			Eugen.setRow(0);
		else
			Eugen.setRow(1);
	}
	else if ((route[wayPointCount][0] < route[wayPointCount + 1][0]) && (route[wayPointCount][1] == route[wayPointCount + 1][1])) {
		Eugen.setRow(2);
	}
	else if ((route[wayPointCount][0] < route[wayPointCount + 1][0]) && (route[wayPointCount][1] < route[wayPointCount + 1][1])) {
		var ratio = (Math.abs(route[wayPointCount + 1][0] - route[wayPointCount][0])) / (Math.abs(route[wayPointCount + 1][1] - route[wayPointCount][1]))
		if (ratio > 4)
			Eugen.setRow(2);
		else if (ratio < 0.5)
			Eugen.setRow(4);
		else
			Eugen.setRow(3);
	}
	else if ((route[wayPointCount][0] == route[wayPointCount + 1][0]) && (route[wayPointCount][1] < route[wayPointCount + 1][1])) {
		Eugen.setRow(4);
	}
	else if ((route[wayPointCount][0] > route[wayPointCount + 1][0]) && (route[wayPointCount][1] < route[wayPointCount + 1][1])) {
		var ratio = (Math.abs(route[wayPointCount + 1][0] - route[wayPointCount][0])) / (Math.abs(route[wayPointCount + 1][1] - route[wayPointCount][1]))
		if (ratio > 4)
			Eugen.setRow(6);
		else if (ratio < 0.5)
			Eugen.setRow(4);
		else
			Eugen.setRow(5);
	}
	else if ((route[wayPointCount][0] > route[wayPointCount + 1][0]) && (route[wayPointCount][1] == route[wayPointCount + 1][1])) {
		Eugen.setRow(6);
	}
	else if ((route[wayPointCount][0] > route[wayPointCount + 1][0]) && (route[wayPointCount][1] > route[wayPointCount + 1][1])) {
		var ratio = (Math.abs(route[wayPointCount + 1][0] - route[wayPointCount][0])) / (Math.abs(route[wayPointCount + 1][1] - route[wayPointCount][1]))
		if (ratio > 4)
			Eugen.setRow(6);
		else if (ratio < 0.5)
			Eugen.setRow(0);
		else
			Eugen.setRow(7);
	}
	else {
		Eugen.setRow(4);
		console.log('Error: "else" in getDirection()');
	};
};


// old 'getMotionCoordinates()' 2018-02-01
function getMotionCoordinates(wayPoints) {

    var motionCoo = [];

    var dx = wayPoints[wayPointCount + 1][0] - wayPoints[wayPointCount][0];
    var dy = wayPoints[wayPointCount + 1][1] - wayPoints[wayPointCount][1];

    // horSpeedAdj = 0.2 / (Math.abs(dy) / Math.abs(dx));

    transfer = Math.floor((transfer + (walkingSpeed / (Math.abs(dx) + Math.abs(dy)))) * 1000) / 1000;
    // var speedPerDistance = 400/(Math.abs(dx) + Math.abs(dy));
 
 // ==================================================================================== 
    document.getElementById('control6').innerHTML = track[0][0] + ' - ' + track[0][1] + ' | ' + track[1][0] + ' - ' + track[1][1];
    document.getElementById('control8').innerHTML = routeCoo[0] + ' - ' + routeCoo[1];

    motionCoo[0] = wayPoints[wayPointCount][0] + dx * transfer;
    motionCoo[1] = wayPoints[wayPointCount][1] + dy * transfer;
    
    // nextCoo = [wayPoints[wayPointCount][0] + dx * transfer, wayPoints[wayPointCount][1] + dy * transfer];

    getDirection(route);


   	if (motionCoo[0] > track[2][0] && motionCoo[1] > track[2][1]) {

        if ((motionCoo[0] > (wayPoints[wayPointCount + 1][0])) && (motionCoo[0] > routeCoo[0]) && (motionCoo[1] > routeCoo[1])) {
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('→ ↓ |    x: ' + routeCoo[0] + ' > ' + track[2][0] + ' && y: ' + routeCoo[1] + ' > ' + track[2][1]);
            // alert(track + ' | ' + routeCoo[0] + ' - ' + routeCoo[1]);
            motionCoo = routeCoo;
            // getDirection(route);
        }
    }

    if (motionCoo[0] > track[2][0] && motionCoo[1] == track[2][1]) {

        if ((motionCoo[0] > (wayPoints[wayPointCount + 1][0])) && (motionCoo[0] > routeCoo[0]) && (motionCoo[1] == routeCoo[1])){
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('→ |    x: ' + routeCoo[0] + ' > ' + track[2][0] + ' && y: ' + routeCoo[1] + ' = ' + track[2][1]);
            // alert(track);
            motionCoo = routeCoo;
        }
    }

    if (motionCoo[0] > track[2][0] && motionCoo[1] < track[2][1]) {

        if ((motionCoo[0] > (wayPoints[wayPointCount + 1][0])) && (motionCoo[0] > routeCoo[0]) && (motionCoo[1] < routeCoo[1])) {
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('→ ↑ |    x: ' + routeCoo[0] + ' > ' + track[2][0] + ' && y: ' + routeCoo[1] + ' < ' + track[2][1]);
            // alert(track);
            motionCoo = routeCoo;
        }
    }

    if (motionCoo[0] == track[2][0] && motionCoo[1] < track[2][1]) {

        // nextCooX = wayPoints[wayPointCount][0] + dx * transfer;
        if ((motionCoo[0] < (wayPoints[wayPointCount + 1][1])) && (motionCoo[0] == routeCoo[0]) && (motionCoo[1] < routeCoo[1])) {
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('↑ |    x: ' + routeCoo[0] + ' = ' + track[2][0] + ' && y: ' + routeCoo[1] + ' < ' + track[2][1]);
            // alert(track);
            motionCoo = routeCoo;
        }
    }

    if (motionCoo[0] < track[2][0] && motionCoo[1] < track[2][1]) {
        
        if ((motionCoo[0] < (wayPoints[wayPointCount + 1][0])) && (motionCoo[0] < routeCoo[0]) && (motionCoo[1] < routeCoo[1])) {
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('← ↑ |    x: ' + routeCoo[0] + ' < ' + track[2][0] + ' && y: ' + routeCoo[1] + ' < ' + track[2][1]);
            // alert(track);
            motionCoo = routeCoo;
        }
    }

    if (motionCoo[0] < track[2][0] && motionCoo[1] == track[2][1]) {
        
        if ((motionCoo[0] < (wayPoints[wayPointCount + 1][0])) && (motionCoo[0] < routeCoo[0]) && (motionCoo[1] == routeCoo[1])) {
            // alert(track);
            wayPointCount++;
            transfer = 0;
            track.push(wayPoints[wayPointCount + 1]);
            // alert('← |    x: ' + routeCoo[0] + ' < ' + track[2][0] + ' && y: ' + routeCoo[1] + ' < ' + track[2][1]);
            // alert(track);
            motionCoo = routeCoo;
        }
    }

    // track.push(motionCoo);
    
    if (track.length > 3)
            track.shift();

    // alert(dx);
    document.getElementById('control1').innerHTML = transfer;
    return motionCoo;
};



function chatBox(char, ctx, txt, maxWidth, lineHeight) {

    ctx.font = '12px minecraftia';
    
    if (canvas1.width - char.x < maxWidth + 40 + char.allSprites[0].size[0])
        char.xChatbox = char.x - maxWidth;
    else
        char.xChatbox = char.x + char.allSprites[0].size[0];


    var words = txt.split(' ');
    var line = '';

        for(var n = 0; n < words.length; n++) {
            
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;

            // alert(testWidth);
            
            if (testWidth > maxWidth && n > 0) {

                ctx.fillStyle = '#ccc';
                ctx.fillRect(char.xChatbox - lineHeight / 3 - 0.5, char.yChatbox - lineHeight - 3, maxWidth, lineHeight); 
 
                ctx.fillStyle =  '#222';
                ctx.fillText(line, char.xChatbox, char.yChatbox);
                line = words[n] + ' ';
                char.yChatbox += lineHeight;
            } else {
                line = testLine;
            }
        }

        ctx.fillStyle =  '#ccc';
        ctx.fillRect(char.xChatbox - lineHeight / 3 - 0.5, char.yChatbox - lineHeight - 3, maxWidth, lineHeight); 
        
        ctx.fillStyle =  '#222';
        ctx.fillText(line, char.xChatbox, char.yChatbox);

        char.yChatbox = char.y;
}



function Sprite(src, seq, size, row, dir, once, hold) {
    this.src = src;
    this.seq = seq;
    this.size = size;
    this.dir = dir || 'horizontal';
    this.row = row;
    this.index = 0;
    this.once = once || false;
    this.hold = hold || false;

    // image object
    this.spriteObj = new Image();
    this.spriteObj.src = src;
};




// function getSpriteParam(name, state) {
    
//     var spriteParam;
//     for (var i = 0; i < spriteSrc.length; i++) {
//         if ( (spriteSrc[i].name == name) && (spriteSrc[i].state == state)) {
//             spriteParam = spriteSrc[i];
//         }
//     }
//     return spriteParam;
// };


/**
* setRoute()
* sets the path for walking char by calling the pathfinding lib
* is called in doSomethingOnClick()
*
* @param {array} oldGridCoo: starting point
* @param {array} newGridCoo: ending point
*/


// document.getElementById('control1').innerHTML = Math.floor(walkingSpeed * 0.8) + ' - ' + (Math.abs(this.route[this.route.length - 1][0] - this.coo[0]));
// document.getElementById('control6').innerHTML = (Math.abs(this.route[this.route.length - 1][0] - this.coo[0])) + ' - ' + this.route.length + ' - ' + wayPointCount + ' - ' + transfer;
// document.getElementById('control7').innerHTML = (Math.abs(this.route[this.route.length - 1][1] - this.coo[1])) + ' - ' + this.route.length + ' - ' + wayPointCount + ' - ' + transfer;


    if ((itemOnCursor !== null && this.currentSprite.once == true) &&
        (itemOnCursor.name == this.currentSprite.name)) {
        
        if (this.currentSprite.index >= this.currentSprite.seq.length - 1)
                this.currentSprite.index = this.currentSprite.seq[this.currentSprite.seq.length - 1];
    } else {
        if (this.currentSprite.index >= this.currentSprite.seq.length)
            this.currentSprite.index = 0;
        // var onceTrigger = false;
    }

// function getTxtInsert(txt) {
//   txt.replace('*var*', );
// }

// not implemented yet
// function getTxt(charName, lang) {

//     switch (charName) {
//         case 'Bennet':
//             var charIndex = 0;
//             break;
//         default:
//             var charIndex = 0;
//     }
    
//     let txt = txtSrc[charIndex].
// }