// Cuestionario que pide al usuario que ingrese el producto que esta buscando
// mediante el uso de iteraciones

let salir = 0;
let atras = 0;
let atras2 = 0;

// La unica manera de salir del loop es escribiendo Salir en el caso correspondiente
while(salir == 0){      
    let vehiculo = prompt(`Elija tipo de vehiculo:
                            Auto
                            Moto
                            Salir`);
    console.log(vehiculo);
    switch(vehiculo){
        case 'Auto':
            atras = 0;
            while(atras == 0 && salir == 0){
                let modelo = prompt(`Elija la marca de moto
                                BMW
                                Mercedes Benz
                                Atras`);
                
                switch(modelo){
                    case 'BMW':
                    case 'Mercedes Benz':
                        atras2 = 0;
                        while(atras2 == 0 && salir == 0){
                            let producto = prompt(`Seleccione el item
                                                    Asiento de valvula
                                                    Guia de Valvula
                                                    Valvula
                                                    Atras`);
                            
                            switch(producto){
                                case 'Asiento de valvula':
                                case 'Guia de Valvula':
                                case 'Valvula':
                                    console.log(`Usted esta buscando un/a ${producto} para un/a ${vehiculo} de marca ${modelo}`);    
                                salir = 1;
                                break;
                                
                                case 'Atras':
                                    atras2 = 1;
                                    break;

                                default:
                                    //salir = 1;
                                    break;
                            }
                        }
                    break;
                    
                    case 'Atras':
                        atras = 1;
                        break;

                    default:
                       //salir = 1;
                        break;
                }
            }
            break;
        
        case 'Moto':
            atras = 0;
            while(atras == 0 && salir == 0){
                let modelo = prompt(`Elija la marca de moto
                                Honda
                                Kawasaki
                                Atras`);
                
                switch(modelo){
                    case 'Honda':
                    case 'Kawasaki':
                        atras2 = 0;
                        while(atras2 == 0 && salir == 0){
                            let producto = prompt(`Seleccione el item
                                                    Asiento de valvula
                                                    Guia de Valvula
                                                    Valvula
                                                    Atras`);
                            
                            switch(producto){
                                case 'Asiento de valvula':
                                case 'Guia de Valvula':
                                case 'Valvula':
                                    console.log(`Usted esta buscando un/a ${producto} para un/a ${vehiculo} de marca ${modelo}`);    
                                salir = 1;
                                break;
                                
                                case 'Atras':
                                    atras2 = 1;
                                    break;

                                default:
                                    //salir = 1;
                                    break;
                            }
                        }
                    break;
                    
                    case 'Atras':
                        atras = 1;
                        break;

                    default:
                        //salir = 1;
                        break;
                }
            }
            break;
        
        case 'Salir':
            salir = 1;
            break;

        default:
            //salir = 1;
            break;
    }
}


