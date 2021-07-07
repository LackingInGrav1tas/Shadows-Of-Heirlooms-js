class Player {
    constructor() {

    }

    user_customization_thing() {
        // when you look into the mirror in the beginning

    }

    encounter(enemies) {
        // user fights enemies
        
    }
}

class StoryFork {
    constructor(description, choice_desc, canvas_fun, options) {
        // str, str, function, [str, ...]
        this.description = description;
        this.choice_desc = choice_desc;
        this.canvas_fun = canvas_fun;
        this.options = options;
    }
    render() {
        // setting description
        document.getElementById('description').textContent = this.description;

        for (var i = 1; i < this.options.length + 1; i++) {
            // showing the options
            let elem = document.getElementById('choice' + i);
            elem.style.display = 'block';
            elem.textContent = this.options[i-1].choice_desc;
        }
        for (; i < 8; i++) {
            // hiding the rest
            document.getElementById('choice' + i).style.display = 'none';
        }
        this.canvas_fun();
    }
}

class Game {
    constructor() {
        // player info
        this.player = new Player();

        let beginning_message = 'Besides the one you have just entered through, there are two doorways; one to the east, and one to the north. Which door do you enter?';
        let NORTH = new StoryFork('', 'North', canvas_codes.c1xx2, [

        ]);
        let EAST = new StoryFork('You walk through the east hallway, and you enter a room. This room is a tomb. There is a doorway across from you. Stone sarcophagi stand in five rows of three, each carved with the visage of a warrior lying in state. In their center, one sarcophagus stands taller than the rest. It\'s death mask depicts a minotaur; it\'s face holds an intense look.', 'East', canvas_codes.c1xx1, [
            new StoryFork('You manage to pry open the sarcophagus. You peer into it, and see the massive figure of the minotaur depicted in the death mask. You see it\'s eyes slowly open, and it is the last sight you see. The minotaur grabs you by your neck, and you struggle to breathe. He lifts you up, with his hand still around your neck, and he swiftly impales you with his horn.', 'Open the Sarcophagus', function(){}, [

            ]),
            new StoryFork('As you leave the tomb, to hear a creaking sound. You turn, hair standing on end. You see the large sarcophagus laying on the ground, with its lid removed, and a large minotaur with glowing red eyes staring at you. You barely have time to dodge when it charges. You make a dash for the entrance that you came in through. You are in the first room that you came into. Which door do you enter?', 'Go through the doorway', function(){}, [
                NORTH,
                new StoryFork('This hallway leads to the outside. You come across a dirt highway, with two diverging paths. You can see a village towards the south and a swamp towards the west. Where do you go?', 'First Door', canvas_codes.c1xx12, [
                    new StoryFork('', 'South (Village)', canvas_codes.c1xx121, [

                    ]),
                    new StoryFork('', 'West (Swamp)', canvas_codes.c1xx122, [
                        
                    ])
                ])
            ]),
        ]);

        // the game + setup
        this.current = new StoryFork('As you walk down the dark, musty hallway, a room intrigues you. You enter it.\nThick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel. One corner of the ceiling has a particularly large clot of webbing within which a goblin\'s bones are tangled.', 'not needed b/c first', canvas_codes.c, [
            new StoryFork('There is a large mirror. In it you see:', 'Continue', canvas_codes.c1, [
                new StoryFork('A human who is:', 'A Human', canvas_codes.c11, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('An elf who is:', 'An Elf', canvas_codes.c12, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('An orc who is:', 'An Orc', canvas_codes.c13, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A tiefling who is:', 'A Tiefling', canvas_codes.c14, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A halfling who is:', 'A Halfling', canvas_codes.c15, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A dwarf who is:', 'A Dwarf', canvas_codes.c16, [ // choosing classes
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A gnoll who is:', 'A Gnoll', canvas_codes.c17, [
                    new StoryFork(beginning_message, 'A Paladin', canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Warlock', canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'A Bard', canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork(beginning_message, 'An Assassin', canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
            ])
        ]);

        // stores user history (string form)
        this.history = [];
    }

    selectPath(index) {
        // selects option
        this.current = this.current.options[index-1];
        game.history += index;
        console.log(game.history);
        this.current.render();
    }

    goto(from) {
        // sets current value from string form ('13221' = 1st option, 3rd option, etc.)
        for (var i = 0; i < from.length; i++) {
            this.current = this.current.options[ Number(from[i]) - 1 ];
        }
    }

    initialize() {
        this.current.render();
    }
}

var game = new Game();

// changes font color of element
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}