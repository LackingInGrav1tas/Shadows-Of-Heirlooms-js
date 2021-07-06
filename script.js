class StoryFork {
    constructor(description, choice_desc, options) {
        // str, str, [str, ...]
        this.description = description;
        this.choice_desc = choice_desc;
        this.options = options;
    }
    render() {
        document.getElementById('description').textContent = this.description;
        for (var i = 1; i < this.options.length + 1; i++) {
            document.getElementById('choice' + i).textContent = this.options[i].choice_desc;
        }
    }
}

var current = new StoryFork('START', 'not needed b/c first', [
    new StoryFork('', '1', []),
    new StoryFork('', '2', []),
    new StoryFork('', '3', []),
    new StoryFork('', '4', [])
]);

function initialize() {
    current.render();
}

// hides/shows options
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
}

// changes font color of element
function changeColor(id, color) {
    document.getElementById(id).style.color = color;
}