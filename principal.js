const fs = require('fs');

const opciones = {
    id: {
        alias: 'i',
        demand: true,
        describe: 'Id del curso en el que se desea inscribirse'
    },
    nombre: {
        alias: 'n',
        demand: true,
        describe: 'Nombre del interesado en inscribirse'
    },
    cedula: {
        alias: 'c',
        demand: true,
        describe: 'Cedula del interesado en inscribirse'
    }
}
//id, el nombre, la duración y el valor
const cursos = [
    { id: 1, nombre: "NodeJs",duracion: "100", valor: 2000 },
    { id: 2, nombre: "ExpressJs", duracion: "30", valor: 1000 },
    { id: 3, nombre: "AngularJs",duracion: "240", valor: 3500 }
];

const argv = require('yargs')
.command('inscribir', 'Inscribirse en un Curso', opciones)
/* .command('inscribir', 'Inscribirse en un Curso',() => {}, (opciones) => {
    inscribirse();
}) */
.command('*', 'Opcion por defecto', () => {}, (argv) => {
    listarCursos();
})
.argv

function listarCursos() {
    let i = 0;
    cursos.forEach(({id,nombre,duracion,valor}) => {
        setTimeout(() =>
        console.log("El curso con ID: "+ id + 
        " se llama "+ nombre +
        " tiene una duración de " + duracion + " horas" +
        " y un valor de: "+ valor + " pesos."),2000*i)
        i++;
    });
};

let crearArchivo= (texto)=>{
fs.writeFile('interesado.txt', texto, (err) => {
    if (err) throw (err);
        console.log('se ha creado el archivo exitosamente')})
}

let inscribir = cursos.find( inscribirse =>  inscribirse.id == argv.id)


if (!inscribir){
    if(argv.id){
        console.log('No existe ningun curso con el ID: '+  argv.id +' por favor ingrese un ID valido para realizar la inscripcion')
    }
} else {
    const texto = 'El estudiante: '+ argv.nombre + ' con cedula: '+ argv.cedula+ ' se ha matriculado en el curso '+ inscribir.nombre;
    crearArchivo(texto);
}




