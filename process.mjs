import process from "process"

process.addListener("exit", (exitCode) => {
    console.info("Code mandekmu su "+exitCode)
})

console.table(process.argv)
console.table(process.report)
console.table(process.env)

process.exit(1)

console.info("iuytu")