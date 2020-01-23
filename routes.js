
module.exports=app=>{
    const autor = require('./Controller/controller_autor');
    app.post('/rutaobtenerAutor',autor.obtenerAutor);
    app.post('/rutaCrearAutor',autor.crearNuevoAutor);
    app.post('/rutaEliminarAutor',autor.eliminarAutor);

}
