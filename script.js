class StoryFork {
    constructor(description, choice_desc, canvas_fun, options) {
        // str, str, [str, ...]
        this.description = description;
        this.choice_desc = choice_desc;
        this.canvas_fun = canvas_fun;
        this.options = options;
    }
    render() {
        document.getElementById('description').textContent = this.description;
        for (var i = 1; i < this.options.length + 1; i++) {
            let elem = document.getElementById('choice' + i);
            elem.style.display = 'block';
            elem.textContent = this.options[i-1].choice_desc;
        }
        for (; i < 8; i++) {
            document.getElementById('choice' + i).style.display = 'none';
        }
        this.canvas_fun();
    }
}

class Game {
    constructor() {
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
        this.history = [];
    }

    selectPath(index) {
        this.current = this.current.options[index-1];
        this.current.render();
    }

    goto(from) {
        for (var i = 0; i < from.length; i++) {
            this.current = this.current.options[ Number(from[i]) + 1 ];
        }
    }

    initialize() {
        this.goto('12');
        this.current.render();
    }
}

var game = new Game();

/*// hides/shows options
function toggleOptions() {
    let options = ['choice1', 'choice2', 'choice3', 'choice4', 'choice5', 'choice6', 'choice7'];
    for (var i = 0; i < options.length; i++) {
        let elem = document.getElementById(options[i]);
        if (elem.style.visibility == 'hidden') {
            elem.style.visibility = 'visible';
        } else {
            elem.style.visibility = 'hidden';
        }
    }
}*/

// changes font color of element
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}