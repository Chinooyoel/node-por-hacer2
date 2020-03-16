/**
 *  
 * */ 

const descripcion = {
    alias : "d",
    demand : true,
    desc : "Descripcion de la tarea por hacer"
}
const completado = {
    alias: "c",
    default: false,
    desc : "Marca como completado o pendiente la tarea"
}

const argv = require("yargs")
    .command( "crear", "Crea un elemento por hacer", {
        descripcion,
        completado
    })
    .command( "listar", "Lista las tareas", {

    })
    .command( "actualizar", "Actualiza el estado completado de una tarea", descripcion)
    .command( "borrar", "Borra una tarea por hacer", descripcion)
    .argv;


    module.exports = {
        argv
    }


