const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción'
  }

const completed = {
    demand: true,
    alias: 'c',
    desc: 'completado'
  }

const number= {
    default: 5,
    alias: 'n',
    desc: 'cantidad'
  }

const argv = require('yargs')
    .command('crear','Crea una tarea',{descripcion})
    .command('listar','Lista todas las tareas por hacer',{number})
    .command('update','Recibe una tarea ya existente y luego si su nuevo estado',{descripcion,completed})
    .command('borrar','Recibe una tarea ya existente y la elimina',{descripcion})
    .help()
    .argv;

module.exports = {
  argv
}
