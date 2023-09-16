ServerEvents.tags('item', event => {
    event.removeAll('perpetual_durability:perpetual')
    event.add('perpetual_durability:perpetual', ['minecraft:nether_star'])
  })