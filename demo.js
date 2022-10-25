
const yargs = require('yargs')
    .option('Num1', {alias: 'A',type: 'number'})
    .option('Num2', {alias: 'B', type: 'number'})
    
      let suma = yargs.argv.A+ yargs.argv.B;  
      let resta = argv.A - argv.B;  

      console.log(suma)
      console.log(resta)