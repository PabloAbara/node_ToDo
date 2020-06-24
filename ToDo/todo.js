

const fs = require('fs');


let listadoTodo = [];


const crear = (description) => {
  // crear un todo
  let toDo = {
    id: 0,
    description,
    completed: false
  };

  cargarDB();
  toDo.id = listadoTodo.length+1;
  listadoTodo.push(toDo);
  guardarDB();

  return toDo;
}

const getListado = () => {
  cargarDB();
  return listadoTodo;
}

const update = (description,status)=> {
  cargarDB();
  let index = listadoTodo.findIndex(tarea => tarea.description === description)
  if(index>=0){
    listadoTodo[index].completed = status;
    guardarDB();
  } else {
    crear(description);
  }
}

const borrar = (description) => {
  cargarDB();
  let index = listadoTodo.findIndex(tarea => tarea.description === description)
  if(index>=0){
    listadoTodo.splice(index, 1);
    guardarDB();
  } else {
    console.log("No existe dicho elemento perreto");
    return false;
  }
  return true;
}

const guardarDB = () => {
  let data = JSON.stringify(listadoTodo);
  fs.writeFile(`db/data.json`, data, (err) => {
    if (err) throw new Error("No se pudo grabar",err);
    else{
      return console.log("Data SAVED");
    }
  });
}

const cargarDB = () => {

  try {
    listadoTodo = require('../db/data.json');
  } catch (e) {
    listadoTodo = [];
  }
}

module.exports = {
  crear,
  getListado,
  update,
  borrar
}
