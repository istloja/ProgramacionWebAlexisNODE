const connect = require('../base/conection');
const autor= function(Autor){
    this.id_autor = Autor.id_autor;
    this.nombreAutor = Autor.nombre_autor;
};

autor.obtenerAutor = result =>{
    connect.query('Select * from autor',(err,res)=>{
        if(err){
            console.log('Error',err);
            result(null,err);
            return;
        }
        console.log(res);
        result(null,res);
    })
}
autor.crearNuevoAutor =(nuevoAutor,result)=>{
    connect.query("INSERT INTO autor SET ?",nuevoAutor,(error,res)=>{
        if(error){
            console.log(error,"error al crear Autor");
            result(null,error)
            return;
        }else{
            result(null,res);
        }
    });
}
autor.eliminarAutor =(borrarAutor,result)=>{
    connect.query("DELETE FROM autor where ?",borrarAutor,(error,res)=>{
        if(error){
            console.log(error,"error al eliminar Autor");
            result(null,error)
            return;
        }else{
            result(null,res);
        }
    });
}

module.exports=autor;