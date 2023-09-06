PlayerEvents.loggedIn((event) => {
    const startingItemsGameStage = 'starting_items';
    const randomWaystone = () => {
        const waystones = ['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'];
        return waystones[Math.floor(Math.random() * waystones.length)];
    };
    const randomAltar = () => {
        const altars = [
            'dragonsurvival:dragon_altar_stone',
            'dragonsurvival:dragon_altar_sandstone',
            'dragonsurvival:dragon_altar_red_sandstone',
            'dragonsurvival:dragon_altar_purpur_block',
            'dragonsurvival:dragon_altar_oak_log',
            'dragonsurvival:dragon_altar_nether_bricks',
            'dragonsurvival:dragon_altar_mossy_cobblestone',
            'dragonsurvival:dragon_altar_blackstone',
            'dragonsurvival:dragon_altar_birch_log'
        ];
        return altars[Math.floor(Math.random() * altars.length)];
    };

    const { player } = event;

    if (!player.stages.has(startingItemsGameStage)) {
        player.stages.add(startingItemsGameStage);

        player.give(Item.of(fullAkashicTome));
        player.give(Item.of(randomAltar()));
        player.give(Item.of(randomWaystone()));
        player.give(Item.of('sophisticatedbackpacks:backpack'));
        player.give(Item.of('16x minecraft:torch'));
        player.give(Item.of('16x minecraft:rabbit'));
        player.give(Item.of('16x minecraft:cod'));
        player.give(Item.of('16x dragonsurvival:charged_coal'));
        player.give(Item.of('16x minecraft:bread'));
    }
});
