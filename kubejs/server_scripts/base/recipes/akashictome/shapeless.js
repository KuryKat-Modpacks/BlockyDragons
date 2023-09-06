ServerEvents.recipes((event) => {
    const id_prefix = 'blockydragons:base/akashictome/shapeless/'

    const recipes = [
        {
            output: Item.of(fullAkashicTome),
            inputs: ['minecraft:book', '#forge:bookshelves'],
            id: 'akashictome:tome'
        }
    ]

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
    })
})