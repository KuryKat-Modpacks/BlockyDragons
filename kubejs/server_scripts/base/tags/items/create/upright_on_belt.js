ServerEvents.tags('item', (event) => {
    event.get('create:upright_on_belt').add([/bottle/, /bucket/]);
});
