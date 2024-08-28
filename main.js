// Array de pizzas 
const pizzas = [
    {id: 1, nombre: " Napolitana", ingredientes: ['Tomate', 'Mozzarella', 'Oregano'], precio: 500},
    {id: 2, nombre: " Cuatro Quesos", ingredientes: ['Parmesano', 'Mozzarella', 'Roquefort', 'Gorgonzola'], precio: 700},
    {id: 3, nombre: " Calabresse", ingredientes: ['Tomate', 'Mozzarella', 'Salame' ,], precio: 600},
    {id: 4, nombre: " Cebollada", ingredientes: ['Tomate', 'cebolla', 'Oregano',], precio: 650},
    {id: 5, nombre: " Especial", ingredientes: ['Tomate', 'Mozzarella', 'Pimiento', 'Jamon', 'Aceituna'], precio: 900}
]

// a) Las pizzas que tengan un id impar

console.log ('Pizzas con ID impar:');
pizzas.forEach(pizza => {
    if (pizza.id % 2 !== 0) {
        console.log (`La pizza ${pizza.nombre} tiene un ID impar de ${pizza.id}.`);
    }
}); 



// b) hay alguna pizza que valga menos de 600

const PizzaMenos600 = pizzas.some (pizza => pizza.precio < 600);
if (PizzaMenos600) {
    console.log ('Si, hay al menos una pizza que cuesta menos de $600')
} else {
    console.log ('No, no hay ninguna pizza que cueste menos de $600')
}




// c) EL nombre de cada pizza con su respectivo precio

console.log ('Nombre y Precio de cada pizza');
pizzas.forEach(pizza => {
    console.log(`La pizza ${pizza.nombre} tiene un precio de ${pizza.precio}`);
});




// d) Todos los ingredientes de cada pizza

console.log('Ingredientes de cada pizza');
pizzas.forEach(pizza => {
    console.log(`La pizza ${pizza.nombre} tiene los siguientes ingredientes:`);
    pizza.ingredientes.forEach(ingredientes =>{
        console.log(`- ${ingredientes}`);
    });
    console.log("");
});