ServerEvents.recipes((event) => {
    const id_prefix = 'blocky_dragons:base/create/crushing/';

    let recipes = [
        {
            outputs: [
                { item: 'occultism:crushed_end_stone', count: 2 },
                { item: 'occultism:crushed_end_stone', count: 1, chance: 0.25 },
                { item: 'minecraft:end_stone', count: 1, chance: 0.05 }
            ],
            inputs: ['#forge:end_stones'],
            processingTime: 120,
            id: `${id_prefix}crushed_end_stone`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:crushing';

        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
