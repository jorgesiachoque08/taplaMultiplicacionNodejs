import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
export const argv = yargs(hideBin(process.argv))
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true,
            })
            .option('l',{
                alias:'listar',
                type:'boolean',
                default:false,
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                default:10,
            })
            .check((argv,options) => {
                if (isNaN(argv.b)) {
                    throw 'la base tiene que ser un numero'
                }
                if (isNaN(argv.h)) {
                    throw 'el valor hasta tiene que ser un numero'
                }
                return true;
            })
            .argv;