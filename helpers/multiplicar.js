import { writeFileSync } from 'fs';
import colors from 'colors';

export const multiplicar = async (base,listar,hasta) =>{
    
    try{
        let salida = '';
        let consola = '';

        for (let index = 1; index <= hasta; index++) {
            consola += `${colors.green(base)} ${colors.yellow('X')}  ${colors.green(index)} ${colors.red('=')} ${base * index}\n`;
            salida += `${base} X  ${index} = ${base * index}\n`;    
            
        }
        if (listar) {
            console.log('============================'.green);
            console.log(`----- Tabla del ${base} -----`);
            console.log('============================'.green);
            console.log(consola);   
        }
    
        writeFileSync('./salidas/message.txt', salida);

        return 'message.tx';
    }catch(err){
        throw err;
    }

   
}
