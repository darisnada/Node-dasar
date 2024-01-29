import fs from "fs"

//Tertulis
const writer = fs.createWriteStream("target.log")

writer.write("ekon\n")
writer.write("amaha")
writer.end()

// Dibaca
const read = fs.createReadStream("target.log")
read.addListener("data", (data) => {
    console.info(data.toString())
})