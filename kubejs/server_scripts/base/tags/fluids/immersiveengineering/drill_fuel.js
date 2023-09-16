ServerEvents.tags('fluid', (event) => {
    event
        .get('immersiveengineering:drill_fuel')
        .add([
            '#forge:biodiesel',
            '#forge:biofuel',
            '#forge:bioethanol',
            '#forge:diesel',
            '#forge:gasoline',
            '#forge:kerosene'
        ]);
});
