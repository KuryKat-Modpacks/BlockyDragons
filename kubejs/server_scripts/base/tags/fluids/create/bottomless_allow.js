ServerEvents.tags('fluid', event => {
    event.get('create:bottomless/allow').add([
        /chocolate/,
        /sugar/,
        /honey/,
        /caramel/
    ])
})