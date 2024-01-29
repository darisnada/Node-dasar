const buffer = Buffer.from("abcdefg", "utf8")

console.info(buffer.toString())
console.info(buffer.toString('hex'))
console.info(buffer.toString('base64'))

const bufferBase64 = Buffer.from("YWJjZGVmZw==", "base64")
console.log(bufferBase64.toString("utf8"))