var mydragg = function(){
    return {
        move : function(divid,xpos,ypos){
            divid.style.left = xpos + 'px';
            divid.style.top = ypos + 'px';
        },
        startMoving : function(divid,container,evt){
            evt = evt || window.event;
            var posX = evt.clientX,
                posY = evt.clientY,
            divTop = divid.style.top,
            divLeft = divid.style.left,
            eWi = parseInt(divid.style.width),
            eHe = parseInt(divid.style.height),
            cWi = parseInt(document.getElementById(container).style.width),
            cHe = parseInt(document.getElementById(container).style.height);
            document.getElementById(container).style.cursor='move';
            divTop = divTop.replace('px','');
            divLeft = divLeft.replace('px','');
            var diffX = posX - divLeft,
                diffY = posY - divTop;
            document.onmousemove = function(evt){
                evt = evt || window.event;
                var posX = evt.clientX,
                    posY = evt.clientY,
                    aX = posX - diffX,
                    aY = posY - diffY;
                    if (aX < 0) aX = 0;
                    if (aY < 0) aY = 0;
                    if (aX + eWi > cWi) aX = cWi - eWi;
                    if (aY + eHe > cHe) aY = cHe -eHe;
                mydragg.move(divid,aX,aY);
            }
        },
        stopMoving : function(container){
            var a = document.createElement('script');
            document.getElementById(container).style.cursor='default';
            document.onmousemove = function(){}
        },
    }
}();

function loadImage(image) {
    let elem = document.getElementById('image');
    elem.src = image;
    elem.style.visibility = 'visible';
}

var canvas_codes = {};

canvas_codes.c = function() {
    loadImage('static/1.jpg'); // dungeon
}; {
    canvas_codes.c1 = function() {
        // changing image to race option on hover
        document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
        document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
        document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
        document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
        document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
        document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
        document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
    }; {
        canvas_codes.c11 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c12 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c13 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c14 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c15 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c16 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }

        canvas_codes.c17 = function() {
            // removing race option on hover
            document.getElementById('choice1').addEventListener('mouseover', function() { loadImage('static/races/human.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); }, false);
            document.getElementById('choice5').addEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); }, false);
            document.getElementById('choice6').addEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); }, false);
            document.getElementById('choice7').addEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); }, false);
        }
    }
};