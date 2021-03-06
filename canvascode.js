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

var minimized = false;
var sizing = [0, 0, ''];

function toggleWindow() {
    //window.alert('unimplemented');
    let img = document.getElementById('image');
    let elem = document.getElementById('draw-screen');
    minimized = !minimized;
    if (minimized) {
        sizing[0] = elem.style.width;
        sizing[1] = elem.style.height;
        sizing[2] = game.history;
        img.style.display = 'none';
        elem.style.left = 0;
        elem.style.bottom = 0;
    } else {
        img.style.display = 'block';
        elem.style.top = 0;
        elem.style.left = 0;
        if (game.history == sizing[2]) {
            console.log('resizing');
            elem.style.width = sizing[0];
            elem.style.height = sizing[1];
        }
    }
}

function loadImage(image) {
    let elem = document.getElementById('image');
    elem.src = image;
}

var canvas_codes = {};

canvas_codes.c = function() {
    // start
    loadImage('static/1.jpg'); // dungeon
}; {
    // picking race
    canvas_codes.c1 = function() {
        // changing image to race option on hover
        document.getElementById('choice1').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/human.jpg'); }, false);
        document.getElementById('choice2').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/elf.jpg'); }, false);
        document.getElementById('choice3').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/orc.jpg'); }, false);
        document.getElementById('choice4').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/tiefling.jpg'); }, false);
        document.getElementById('choice5').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/halfling.jpg'); }, false);
        document.getElementById('choice6').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/dwarf.jpg'); }, false);
        document.getElementById('choice7').addEventListener('mouseover', function() { if (game.history.length == 1) loadImage('static/races/gnoll.jpg'); }, false);
    }; {
        let clear_races = function() {
            /*
            document.getElementById('choice1').removeEventListener('mouseover', function() { loadImage('static/races/human.jpg'); });
            document.getElementById('choice2').removeEventListener('mouseover', function() { loadImage('static/races/elf.jpg'); });
            document.getElementById('choice3').removeEventListener('mouseover', function() { loadImage('static/races/orc.jpg'); });
            document.getElementById('choice4').removeEventListener('mouseover', function() { loadImage('static/races/tiefling.jpg'); });
            document.getElementById('choice5').removeEventListener('mouseover', function() { loadImage('static/races/halfling.jpg'); });
            document.getElementById('choice6').removeEventListener('mouseover', function() { loadImage('static/races/dwarf.jpg'); });
            document.getElementById('choice7').removeEventListener('mouseover', function() { loadImage('static/races/gnoll.jpg'); });
            */

            document.getElementById('choice1').addEventListener('mouseover', function() { if (game.history.length == 2) loadImage('static/classes/paladin.jpg'); }, false);
            document.getElementById('choice2').addEventListener('mouseover', function() { if (game.history.length == 2) loadImage('static/classes/warlock.jpg'); }, false);
            document.getElementById('choice3').addEventListener('mouseover', function() { if (game.history.length == 2) loadImage('static/classes/bard.jpg'); }, false);
            document.getElementById('choice4').addEventListener('mouseover', function() { if (game.history.length == 2) loadImage('static/classes/assassin.jpg'); }, false);
        };
        canvas_codes.c11 = function() {
            clear_races();
            game.player.race = 'human';
        };

        canvas_codes.c12 = function() {
            clear_races();
            game.player.race = 'elf';
        };

        canvas_codes.c13 = function() {
            clear_races();
            game.player.race = 'orc';
        };

        canvas_codes.c14 = function() {
            clear_races();
            game.player.race = 'tiefling';
        };

        canvas_codes.c15 = function() {
            clear_races();
            game.player.race = 'halfling';
        };

        canvas_codes.c16 = function() {
            clear_races();
            game.player.race = 'dwarf';
        };

        canvas_codes.c17 = function() {
            clear_races();
            game.player.race = 'gnoll';
        };

        {
            let clear_classes = function() {
                /*
                document.getElementById('choice1').removeEventListener('mouseover', function() { loadImage('static/classes/paladin.jpg'); });
                document.getElementById('choice2').removeEventListener('mouseover', function() { loadImage('static/classes/warlock.jpg'); });
                document.getElementById('choice3').removeEventListener('mouseover', function() { loadImage('static/classes/bard.jpg'); });
                document.getElementById('choice4').removeEventListener('mouseover', function() { loadImage('static/classes/assassin.jpg'); });
                */
                loadImage('static/1xx.jpg');
            };

            canvas_codes.c1x1 = function() {
                // paladin
                clear_classes();
                game.player.class = 'paladin';
                game.player.inventory = [items.prayer_amulet, items.broadsword];
            };

            canvas_codes.c1x2 = function() {
                // warlock
                clear_classes();
                game.player.class = 'warlock';
                game.player.inventory = [items.magic_amulet, items.magic_wand];
            };

            canvas_codes.c1x3 = function() {
                // bard
                clear_classes();
                game.player.class = 'bard';
                game.player.inventory = [items.shortsword, items.enchanted_lyre];
            };

            canvas_codes.c1x4 = function() {
                // assassin
                clear_classes();
                game.player.class = 'assassin';
                game.player.inventory = [items.dagger, items.buckler];
            };

            {
                canvas_codes.c1xx1 = function() {
                    // east
                    loadImage('static/c1xx1.jpg');
                }; {
                    canvas_codes.c1xx11 = function() {
                        // dead - opened sarcophagus
                        loadImage('static/c1xx11.jpg');
                        setTimeout(canvas_codes.dead, 1000);
                    };
                    canvas_codes.c1xx12 = function() {
                        // diverging
                        loadImage('static/c1xx12.jpg');
                    }; {
                        canvas_codes.c1xx121 = function() {
                            // inn
                            loadImage('static/c1xx121.jpg');
                        }; {
                            canvas_codes.c1xx1211 = function() {
                                // investigate
                                loadImage('static/c1xx1211.jpg');
                            }; {
                                canvas_codes.c1xx12111 = function() {
                                    // running from haltija
                                    loadImage('static/c1xx1211.jpg');
                                }; {
                                    canvas_codes.c1xx121111 = function() {
                                        // tavern
                                        loadImage('static/c1xx121111.jpg');
                                    }; {
                                        canvas_codes.c1xx1211112 = function() {
                                            // Stay
                                            loadImage('static/c1xx1211112.jpg');
                                        }; {
                                            canvas_codes.c1xx12111121 = function() {
                                                // Reason
                                                game.player.inventory.push(items.lucky_coin);
                                            };
                                        }
                                    }
                                    canvas_codes.c1xx121112 = function() {
                                        // another building
                                        loadImage('static/c1xx121112.jpg');
                                    }
                                }
                            }
                        }
                        canvas_codes.c1xx122 = function() {

                        };
                    }
                }

                canvas_codes.c1xx2 = function() {
                    // north

                }
            }
        }
    }
};

canvas_codes.rebel = function() {

};

canvas_codes.dead = function() {
    // dead
    loadImage('static/dead.jpg');
};