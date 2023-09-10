ServerEvents.highPriorityData(event => {

    event.addJson('occultism:forge/biome_modifier/add_silver_ore', {
        type: 'forge:remove_features',
        features: 'occultism:silver_ore',
        step: 'underground_ores',
        biomes: '#minecraft:is_overworld'
    })

    event.addJson('occultism:forge/biome_modifier/add_deepslate_silver_ore', {
        type: 'forge:remove_features',
        features: 'occultism:silver_ore_deepslate',
        step: 'underground_ores',
        biomes: '#minecraft:is_overworld'
    })

})