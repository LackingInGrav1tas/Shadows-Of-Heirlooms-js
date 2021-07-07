class Player {
    constructor() {
        this.inventory = [];
        this.equipped = [];
    }
}

class StoryFork {
    constructor(choice_desc, description, canvas_fun, options) {
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
        let REBEL = new StoryFork('Stay Away', 'REBEL PART', canvas_codes.rebel, [

        ]);
        let NORTH = new StoryFork('North', '', canvas_codes.c1xx2, [

        ]);
        let EAST = new StoryFork('East', 'You walk through the east hallway, and you enter a room. This room is a tomb. There is a doorway across from you. Stone sarcophagi stand in five rows of three, each carved with the visage of a warrior lying in state. In their center, one sarcophagus stands taller than the rest. It\'s death mask depicts a minotaur; it\'s face holds an intense look.', canvas_codes.c1xx1, [
            new StoryFork('Open the Sarcophagus', 'You manage to pry open the sarcophagus. You peer into it, and see the massive figure of the minotaur depicted in the death mask. You see it\'s eyes slowly open, and it is the last sight you see. The minotaur grabs you by your neck, and you struggle to breathe. He lifts you up, with his hand still around your neck, and he swiftly impales you with his horn.', canvas_codes.c1xx11, []),
            new StoryFork('Go through the doorway', 'As you leave the tomb, to hear a creaking sound. You turn, hair standing on end. You see the large sarcophagus laying on the ground, with its lid removed, and a large minotaur with glowing red eyes staring at you. You barely have time to dodge when it charges. You make a dash for the entrance that you came in through. You are in the first room that you came into. Which door do you enter?', canvas_codes.c, [
                NORTH,
                new StoryFork('First Door', 'This hallway leads to the outside. You come across a dirt highway, with two diverging paths. You can see a village towards the south and a swamp towards the west. Where do you go?', canvas_codes.c1xx12, [
                    new StoryFork('South (Village)', 'You make you way to the village, and you begin to feel hungry. When you finally reach your destination, your hunger has grown from a mild discomfort to the top of your priorities. Luckily, you find an inn and tavern named the Brown Bard Inn. There you order food and a drink. You notice a suspicious looking haltija, standing near a cloaked human.', canvas_codes.c1xx121, [
                        new StoryFork('Investigate', 'You nonchalantly stand near the human and the haltija. Strange, you think. Haltija usually guard someone or something. As you think this, the human silently leaves the tavern. The haltija follows. You follow. The human appears oblivious to both you and the haltija. The human stalks towards a house that is around 100 meters from the pub. It is almost impossible to make out details of the house, as it is twilight. Even with this, the haltija does not slow, it seems familiar with this area. The human reaches the house, and a small blue flame appears in their hand. The haltija quickens its pace. The human had begun to set fire to the house when the haltija had come upon them. The haltija pulled out a dagger from a hidden scabber. It wraps its arms around the humans neck and slits its throat. The haltija turns around and it sees you.', canvas_codes.c1xx1211, [
                            new StoryFork('Run', 'You turn and run. The haltija follows after you. Its long limbs are more than enough to catch up to you. You take off your cloak and throw it at the haltija. It slows for a moment, but its pace continues. You hear an unnatural growl come from its mouth, and it throws the knife that it used to kill the human at you. It grazes your neck, and blood seeps out. You manage to make it to the bar.', canvas_codes.c1xx12111, [
                                new StoryFork('Enter the tavern', 'You rush into the tavern, and take cover behind the counter. Moments later, the haltija enters. He makes a move towards you, but before he can get to you, a rough man grabs him. His companion grabs you. The man inquires \'What is going on here! I don\' want no\'un fightin\' in my bar!\' They did it! you yell. I saw him kill someone! \'Is this true?\' the gruff man asks. The haltija denies this profusely. \'This is going nowhere\' the man says. \'Go git the gaurds\'.', canvas_codes.c1xx121111, [
                                    new StoryFork('Attempt to Escape', 'You kick at the man holding your knees, and he drops you. You make a mad dash for the door, just as the door opens and the sheriff opens the door. He opens fire on you, killing you instantly.', canvas_codes.dead, []),
                                    new StoryFork('Stay', "You watch as the sheriff enters the tavern. He asks what is going on here. The gruff man explains. 'Alright', the sheriff says to you. 'Prove you're not guilty.'", canvas_codes.c1xx1211112, [
                                        new StoryFork('Argue your case', "'He killed someone', you say. Once they saw me, they threw their knife at me. Look, he is holding it in it's hand, he must have picked it up. The sheriff does so, and sees the bloodied knife. The sheriff does not need to hear the haltija's argument. He arrests them. You quickly get medical help from a wandering cleric in the tavern. The sheriff gives you his lucky coin as a present.", canvas_codes.c1xx12111121, [
                                            // inventory later
                                            new StoryFork('Continue', REBEL.description, REBEL.canvas_fun, REBEL.options)
                                        ]),
                                        new StoryFork('Bring the Sheriff to the body', "You lead the sheriff outside, and to the body. As you are explaining to the sheriff what happened the haltija shouts, 'They have a gun!' The sheriff turns towards you, and shoots twice without hesitation. You die a swift death.", canvas_codes.dead, [])
                                    ])
                                ]),
                                new StoryFork('Enter a different building', '', canvas_codes.c1xx121112, [])
                            ]),
                            new StoryFork('Confront it', 'You stand your ground, but faster than you can react it leaps on top of you. A few quick slashes with it\'s knife kills you.', canvas_codes.dead, [])
                        ]),
                        REBEL
                    ]),
                    new StoryFork('West (Swamp)', '', canvas_codes.c1xx122, [
                        
                    ])
                ])
            ]),
        ]);

        // the game + setup
        this.current = new StoryFork('not needed b/c first', 'As you walk down the dark, musty hallway, a room intrigues you. You enter it.\nThick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel. One corner of the ceiling has a particularly large clot of webbing within which a goblin\'s bones are tangled.', canvas_codes.c, [
            new StoryFork('Continue', 'There is a large mirror. In it you see:', canvas_codes.c1, [
                new StoryFork('A Human', 'A human who is:', canvas_codes.c11, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('An Elf', 'An elf who is:', canvas_codes.c12, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('An Orc', 'An orc who is:', canvas_codes.c13, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A Tiefling', 'A tiefling who is:', canvas_codes.c14, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A Halfling', 'A halfling who is:', canvas_codes.c15, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A Dwarf', 'A dwarf who is:', canvas_codes.c16, [ // choosing classes
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
                        EAST,
                        NORTH
                    ])
                ]),
                new StoryFork('A Gnoll', 'A gnoll who is:', canvas_codes.c17, [
                    new StoryFork('A Paladin', beginning_message, canvas_codes.c1x1, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Warlock', beginning_message, canvas_codes.c1x2, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('A Bard', beginning_message, canvas_codes.c1x3, [
                        EAST,
                        NORTH
                    ]),
                    new StoryFork('An Assassin', beginning_message, canvas_codes.c1x4, [
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