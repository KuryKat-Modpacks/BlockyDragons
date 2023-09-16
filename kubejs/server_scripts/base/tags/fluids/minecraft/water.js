ServerEvents.tags('fluid', (event) => {
    event.get('minecraft:water').remove([/bioethanol/, /blood/, /tallow/, /seed_oil/, /chocolate/, /caramel/, /sauce/, /fertilizer/, /sugar/]);
});
