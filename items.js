class Item {
    constructor(title, modifiers, image, info) {
        this.title = title;
        this.modifiers = modifiers;
        this.image = image;
        this.info = info;
        this.proficiency = 0.01;
    }

    load(slot) {
        let elem = document.getElementById('slot' + slot);
        elem.src = this.image;
        elem.width = 64;
        elem.height = 64;
    }
}

var items = {
    slots: 14,

    blank: new Item('Item Slot', {}, 'static/items/blank.jpg', 'Nothing to see here'),
    broadsword: new Item('Broadsword', {}, 'static/items/broadsword.jpg', 'Big sword'),
    buckler: new Item('Buckler Shield', {}, 'static/items/buckler.jpg', 'Circular shield providing light armor'),
    dagger: new Item('Dagger', {}, 'static/items/dagger.jpg', 'Small murder implement'),
    medium_shield: new Item('Shield', {}, 'static/items/medium_shield.jpg', 'Medium-sized shield'),
    shortsword: new Item('Shortsword', {}, 'static/items/shortsword.jpg', 'Sword on the smaller side'),
    square_shield: new Item('Square Sheild', {}, 'static/items/square_shield.jpg', 'Large, heavy shield providing lots of protection'),
    lucky_coin: new Item('Lucky Coin', {}, 'static/items/lucky_coin.jpg', 'A coin which is supposed to be lucky.'),
    magic_amulet: new Item('Magic Amulet', {}, 'static/items/magic_amulet.jpg', 'This amulet infuses you with magical power'),
    prayer_amulet: new Item('Prayer Amulet', {}, 'static/items/prayer_amulet.jpg', 'This amulet makes you feel closer to the gods'),
    vigorous_amulet: new Item('Amulet of Vigor', {}, 'static/items/vigorous_amulet.jpg', 'This amulet makes you feel stronger'),
    enchanted_lyre: new Item('Enchanted Lyre', {}, 'static/items/enchanted_lyre.jpg', 'This would sound enchantingly good'), 
    // maybe add a divergence where you either turn it in to the king and be welcomed or steal it and hide
    lichs_head: new Item('Lich\s Head', {}, 'static/items/lichs_head.jpg', 'It\s presence makes you both uneasy and very, very strong.'),
};