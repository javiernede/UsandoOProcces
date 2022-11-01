import yargs from "yargs"
import util from "util"

console.table(process.argv.slice(2));

console.table(yargs(process.argv.slice(2)).argv);