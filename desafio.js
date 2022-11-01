import minimist from "minimist"

/*
1 - mode desafio.js 123 -m dev -p 8080 -d
{ modo: 'dev', puerto: 8080, debug:true, otros: [1,2,3] }
*/

let option = { alias: { modo: 'm', p: 'puerto', d: 'debug' } };
let args = minimist(process.argv.slice(2), option);
console.log(args);

/*
2 - mode desafio.js 123 -m dev -p 8080 -d
{ modo: 'prod', puerto: 0, debug:false, otros: [1,2,3] }
*/

let options2 = { alias: { modo: '', p: 'puerto', d: 'debug' }, default: { p: 0, m: 'prod', debug: false } };
console.log(minimist(process.argv.slice(2), options2));