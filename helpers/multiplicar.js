const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 8, listar = false, hasta = 10 ) => {   // base = 5 significa base el numero que le enviamos y si no hay un numero por defecto seria 5 

    try {
        
        let salida = '';
        let consola = '';

        for (let i=1; i<=hasta; i++ ) {

            salida += `${base} X ${i} = ${base * i}\n`
            consola += `${base} ${'X'.red} ${i} ${'='.blue} ${base * i}\n`

        }

        if ( listar ) {
            console.log('======================'.green);
            console.log('      TABLA DEL '.green, colors.blue(base)     );
            console.log('======================'.green);
            
            console.log(consola);
        
        }

        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return(`tabla-${base}.txt`);
    
        
    } catch (err) {
        throw err;
    }
    


    

}

module.exports = {
    crearArchivo
}