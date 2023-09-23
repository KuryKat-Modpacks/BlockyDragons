ServerEvents.tags('fluid', (event) => {
    event.get('create:bottomless/allow').add([/cream/, /milk/, /chocolate/, /sugar/, /honey/, /caramel/]);
});
