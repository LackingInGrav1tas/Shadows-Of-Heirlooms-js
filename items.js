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

    blank: new Item('Item Slot', {
        attack_damage: 0,
        ability_power: 0,
        ad_crit_damage: 0,
        ad_crit_chance: 0,
        ap_crit_damage: 0,
        ap_crit_chance: 0,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 0,
        armor: 0,
    }, 'static/items/blank.jpg', 'Nothing to see here'),
    
    broadsword: new Item('Broadsword', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/broadsword.jpg', 'Big sword'),
    
    buckler: new Item('Buckler Shield', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/buckler.jpg', 'Circular shield providing light armor'),
    
    dagger: new Item('Dagger', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/dagger.jpg', 'Small murder implement'),
    
    medium_shield: new Item('Shield', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/medium_shield.jpg', 'Medium-sized shield'),
    
    shortsword: new Item('Shortsword', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/shortsword.jpg', 'Sword on the smaller side'),
    
    square_shield: new Item('Square Sheild', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/square_shield.jpg', 'Large, heavy shield providing lots of protection'),
    
    lucky_coin: new Item('Lucky Coin', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/lucky_coin.jpg', 'A coin which is supposed to be lucky.'),
    
    magic_amulet: new Item('Magic Amulet', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/magic_amulet.jpg', 'This amulet infuses you with magical power'),
    
    prayer_amulet: new Item('Prayer Amulet', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/prayer_amulet.jpg', 'This amulet makes you feel closer to the gods'),
    
    vigorous_amulet: new Item('Amulet of Vigor', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/vigorous_amulet.jpg', 'This amulet makes you feel stronger'),
    
    enchanted_lyre: new Item('Enchanted Lyre', {
        attack_damage: 1,
        ability_power: 1,
        ad_crit_damage: 1,
        ad_crit_chance: 1,
        ap_crit_damage: 1,
        ap_crit_chance: 1,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 1,
        armor: 1,
    }, 'static/items/enchanted_lyre.jpg', 'This would sound enchantingly good'), 
    
    // maybe add a divergence where you either turn it in to the king and be welcomed or steal it and hide
    lichs_head: new Item('Lich\s Head', {
        attack_damage: 10,
        ability_power: 10,
        ad_crit_damage: 20,
        ad_crit_chance: 20,
        ap_crit_damage: 20,
        ap_crit_chance: 20,
        health: 0,
        stamina: 0,
        mana: 0,
        magic_resist: 0,
        armor: 0,
    }, 'static/items/lichs_head.jpg', 'It\s presence makes you both uneasy and very, very strong.'),
};