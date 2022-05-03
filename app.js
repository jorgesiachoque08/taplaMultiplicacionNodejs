import { multiplicar } from './helpers/multiplicar.js';
import {argv} from './yargs/yargs.js';

console.clear();
multiplicar(argv.b,argv.l,argv.h)
.then((nombreArchivo) => console.log(nombreArchivo,'creado'))
.catch((err) => console.log(err));
