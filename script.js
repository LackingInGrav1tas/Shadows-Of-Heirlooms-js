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
        // the entire game
        this.current = new StoryFork('START', 'not needed b/c first', function(){}, [
            new StoryFork('1', '1111111111111111', function(){}, [
                new StoryFork('11', '1111111111111111', function(){}, [
        
                ]),
                new StoryFork('12', '2222222222222222', function(){}, [
                    
                ]),
            ]),
            new StoryFork('2', '2222222222222222', function(){}, [
                new StoryFork('21', '1111111111111111', function(){}, [
        
                ]),
                new StoryFork('22', '2222222222222222', function(){}, [
                    
                ]),
            ]),
        ]);

        // stores user history (string form)
        this.history = [];
    }

    selectPath(index) {
        // selects option
        this.current = this.current.options[index-1];
        this.current.render();
    }

    goto(from) {
        // sets current value from string form ('13221' = 1st option, 3rd option, etc.)
        for (var i = 0; i < from.length; i++) {
            this.current = this.current.options[ Number(from[i]) - 1 ];
        }
    }

    initialize() {
        this.goto('12');
        this.current.render();
    }
}

var game = new Game();

// changes font color of element
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}