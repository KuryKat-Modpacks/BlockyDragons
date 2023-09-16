ServerEvents.tags('block', (event) => {
    event.add('create:passive_boiler_heaters', [/powah:.*_crystal_block/, /magma/, /campfire/]);
});
