import os from "os";

console.info(os.platform());
console.table(os.cpus());

//jika menggunakan import akan error
//error karena ext js bukan module
//jadi harus ext mjs