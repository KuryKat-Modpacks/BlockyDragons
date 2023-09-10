ServerEvents.highPriorityData((event) => {
    
    // Disable Occultism Ores
    
    event.addJson('occultism:forge/biome_modifier/add_silver_ore', {
        type: 'forge:remove_features',
        features: 'occultism:silver_ore',
        step: 'underground_ores',
        biomes: '#minecraft:is_overworld'
    });

    event.addJson('occultism:forge/biome_modifier/add_deepslate_silver_ore', {
        type: 'forge:remove_features',
        features: 'occultism:silver_ore_deepslate',
        step: 'underground_ores',
        biomes: '#minecraft:is_overworld'
    });

    
    // Disable Silent Gems Ores
    
    event.addJson('silentgems:forge/biome_modifier/overworld_ores', {
        type: 'forge:remove_features',
        features: [
            'silentgems:silver_ore',
        ],
        step: 'underground_ores',
        biomes: '#minecraft:is_overworld'
    });
});
