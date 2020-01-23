const autor = require('../Model/autor');

exports.obtenerAutor = (req, res) => {
    autor.obtenerAutor((err, data) => {
        console.log(req.body.codigo);
        if (err) {
            res.status(500).json({ mensaje: 'Error' });
        }
        res.send(data);
    })
}

exports.crearNuevoAutor=(req,res)=>{ // Controlador para crear nuevo autor
   
    const nuevoAutor = new autor({// creamos un objeto
        id_autor: req.body.id_autor,
        nombre_autor: req.body.nombre_autor
    });
   
    autor.crearNuevoAutor(nuevoAutor,(error,data)=>{
        if (error) {
            res.status(500).json({ mensaje: 'Ocurrio un error al crear nuevo Autor' });
    }else{
    res.send(data);
    }

});
}
exports.eliminarAutor=(req,res)=>{ // Controlador para crear nuevo autor
   
    const borrarAutor = {
        id_autor: req.body.id_autor,
    }
   
    autor.eliminarAutor(borrarAutor,(error,data)=>{
        if (error) {
            res.status(500).json({ mensaje: 'Ocurrio un error al eliminar el Autor' });
    }else{
    res.send(data);
    }

});
}
