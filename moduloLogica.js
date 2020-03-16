const fs = require("fs");

let listadoPorHacer = [];

let crear = ( descripcion  ) => {
    let tarea = {
        descripcion : descripcion,
        completado : false
    }

    cargar();

    listadoPorHacer.push(tarea);

    guardar();
}

let guardar = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("./tareas/tareas-por-hacer.json", data, ( err ) => {
        if( err )
            console.log("No se ha podido guardar", err)


        console.log("Se ha guardado con exito");
    })
}

let cargar = () => {
        try {
            listadoPorHacer = require("./tareas/tareas-por-hacer");
        }
        catch{
            listadoPorHacer = [];
        }
}

let getListado = () => {
    cargar();
    return listadoPorHacer;
}

let actualizar = ( descripcion ) => {

    cargar();

    //Devuelve -1 si no encuentra la condicion
    let index = listadoPorHacer.findIndex( ( tarea ) => {
        return tarea.descripcion === descripcion;
    })

    if( index >= 0 ) {
        listadoPorHacer[index].completado = true;

        guardar();
        console.log("Se actualizo correctamente");
    }else{
        console.log("No se encontro la tarea!");
    }

}

let borrar = ( descripcion ) =>{
    cargar();

    //Devuelve -1 si no encuentra la condicion
    let index = listadoPorHacer.findIndex( ( tarea ) => {
        return tarea.descripcion === descripcion;
    })   

    if( index >= 0 ){
        listadoPorHacer.splice( index, 1 );
        console.log("Se ha borrado con exito");
    }else{
        console.log("No se encontro la tarea")
    }

    guardar();
}

module.exports = {
    crear,
    guardar,
    getListado,
    actualizar,
    borrar
}