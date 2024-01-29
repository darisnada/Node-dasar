import zlib from "zlib"
import fs from "fs"


// compress
// const source = fs.readFileSync("zlib.mjs")
// const result = zlib.gzipSync(source)

// fs.writeFileSync("zlib.mjs.txt", result)

// decompress
const source = fs.readFileSync("zlib.mjs.txt")
const result = zlib.unzipSync(source)

console.info(result.toString())

