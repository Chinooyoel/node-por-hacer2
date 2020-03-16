const porHacer = require("./moduloLogica");
const argv = require("./config/yargs").argv;
const colors = require("colors");

let comando = argv._[0];


switch( comando ) {
    case "crear" : {
        porHacer.crear( argv.descripcion );
        break;
    };
    case "listar" : {
        let listado = porHacer.getListado();

        for( let tarea of listado ){
            console.log("==============================".green);
            console.log(`Tarea: ${tarea.descripcion}\nEstado: ${tarea.completado}`);
            console.log("==============================".green);
        }
        
        break;
    };
    case "actualizar" : {
        porHacer.actualizar(argv.descripcion);
        break;
    };
    case "borrar" : {
        porHacer.borrar(argv.descripcion);
        break;
    }
    default: {
        console.log("Comando invalido")
    }
}