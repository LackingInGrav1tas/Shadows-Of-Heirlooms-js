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

        // the entire game
        this.current = new StoryFork('As you walk down the dark, musty hallway, a room intrigues you. You enter it.\nThick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel. One corner of the ceiling has a particularly large clot of webbing within which a goblin\'s bones are tangled.', 'not needed b/c first', canvas_codes.c, [
            new StoryFork('There is a large mirror. In it you see:', 'Continue', canvas_codes.c1, [
                new StoryFork('1', 'A Human', canvas_codes.c11, [
                    
                ]),
                new StoryFork('2', 'An Elf', canvas_codes.c12, [
                    
                ]),
                new StoryFork('3', 'An Orc', canvas_codes.c13, [
                    
                ]),
                new StoryFork('4', 'A Tiefling', canvas_codes.c14, [
                    
                ]),
                new StoryFork('5', 'A Halfling', canvas_codes.c15, [
                    
                ]),
                new StoryFork('6', 'A Dwarf', canvas_codes.c16, [
                    
                ]),
                new StoryFork('7', 'A Gnoll', canvas_codes.c17, [
                    
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