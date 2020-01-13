const mysql= require("mysql");
const config=require("../bdConfig")//importar la configuracion

const conexion = mysql.createConnection({
    host: config.HOST,
    user:config.USER,
    password:config.PASSWORD,
    database:config.biblioteca
});
conexion.connect(error=>{
    if(error) throw error;
    console.log("Conexion exitosa");
})
module.export =conexion;
    
    
    




