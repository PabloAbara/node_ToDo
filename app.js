
const argv = require('./config/yargs.js').argv;
const toDo = require('./ToDo/todo.js');
const colors = require('colors');

let comando = argv._[0];

// console.log(comando[0]);

switch (comando){
  case 'crear':
    let aux = toDo.crear(argv.description);
    // console.log(`ENHORABUENA!! Se ha creado la tarea '${aux.description}'`);
    // console.log(aux);
  break;
  case 'listar':
    let lista = toDo.getListado();
    for(let t of lista){
      console.log("===========TO DO=============".green);
      console.log(t.id);
      console.log(t.description.red);
      console.log(`El estado de la TAREA es: ${t.completed}`.yellow);
      console.log("=============================".green);
    }
  break;
  case 'update':
    toDo.update(argv.description,argv.completed);
  break;
  case 'borrar':
    if(toDo.borrar(argv.description)){
      console.log("DELETED");
    }
  break;

  default:
    console.log(`Comando ${comando} no es reconocido`);
}
