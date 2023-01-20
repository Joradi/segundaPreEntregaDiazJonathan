const cartaCafe = [
    {nombre: "Vainilla", precio: 3000, cantidad: 0},
    {nombre: "Expresso", precio: 2500, cantidad: 0},
    {nombre: "Mocha", precio: 4500, cantidad: 0}
];

function incrementarCantidad(nombre, cantidad) {
    const index = cartaCafe.findIndex((cafe) => cafe.nombre === nombre);
    if (index === -1) {
        return;
    }

    cartaCafe[index].cantidad += cantidad;
}

function decrementarCantidad(nombre, cantidad) {
    const index = cartaCafe.findIndex((cafe) => cafe.nombre === nombre);
    if (index === -1) {
        return;
    }

    cartaCafe[index].cantidad -= cantidad;
    if (cartaCafe[index].cantidad < 0) {
        cartaCafe[index].cantidad = 0;
    }
}

function calcularTotal() {
    return cartaCafe.reduce((total, cafe) => total + cafe.precio * cafe.cantidad, 0);
}

function imprimirCarta() {
    console.log("CARTA DE CAFÉ");
    console.table(cartaCafe);
    console.log("----------------");
    console.log("TOTAL: " + calcularTotal());
}
 //Menu
 let menu,
 menu2,
 total = 0,
 cafe = 0,
 expreso = 0,
 mokka = 0,
 vainilla = 0;
     
do {
    menu = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1) Agregar producto. \n \
            2) Eliminar producto. \n \
            3) Ver carrito. \n \
            0) Comprar"
        ));
    
    switch (menu) {
        case 1:
        do {
            menu2 = Number(
            prompt(
                "- Qué café desea:\n\n\
                    1) Vainilla ($3.000) \n \
                    2) Expresso ($2.500) \n \
                    3) Mocha ($4.500) \n \
                    0) Nada mas por ahora"
            )
            );
            switch (menu2) {
            case 1:
                incrementarCantidad("Vainilla", 1);
                console.log("\n Añadiste un café de Vainilla al carrito :) \n");
                break;
            case 2:
                incrementarCantidad("Expresso", 1);
                console.log("\n Añadiste un café de expreso al carrito :) \n");
                break;
            case 3:
                incrementarCantidad("Mocha", 1);
                console.log("\n Añadiste un café Mokka al carrito :) \n");
                break;
            case 0:
                break;
            default:
                console.log("\n Por favor, ingresá un numero válido \n");
                break;
            }
        } while (menu2 != 0);
        break;
    
        case 2:
            do {
                menu2 = Number(
                prompt(
                    "- Qué café desea:\n\n\
                        1) Vainilla ($3.000) \n \
                        2) Expresso ($2.500) \n \
                        3) Mocha ($4.500) \n \
                        0) Nada mas por ahora"
                )
                );
            switch (menu2) {
                case 1:
                    decrementarCantidad("Vainilla", 1);
                    console.log("\n Eliminaste un café de Vainilla al carrito :) \n");
                    break;
                case 2:
                    decrementarCantidad("Expresso", 1);
                    console.log("\n Eliminaste un café de expreso al carrito :) \n");
                    break;
                case 3:
                    decrementarCantidad("Mocha", 1);
                    console.log("\n Eliminaste un café Mokka al carrito :) \n");
                    break;
                case 0:
                    break;
                default:
                    console.log("\n Por favor, ingresá un numero válido \n");
                    break;
                }
            } while (menu2 != 0);
            break;        
        case 3:
            imprimirCarta();
        break;
        case 0:
        break;
        default:
            console.log("\n Por favor, ingresá un numero válido \n");
        break;
      }
    }
     while (menu != 0);