import util from "util"
const name = "ooo"
console.info(`Hello ${name}`)

console.info(util.format("hello %s", name))

const json = {
    name: "onda",
    lastname: "ondu",
}

console.info(`Person : ${JSON.stringify(json)}`)
console.info(util.format("Person : %j", json))