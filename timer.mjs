// Biasa
// setInterval(() => {
//     console.info("yyuiiuiuihuhu" + new Date())
// }, 1000)

// Promises
import timers from "timers/promises"

// const name = await timers.setTimeout(5000, "eko")
// console.info("ekoooooooo")
// console.info(name)

//for await
for await (const startTime of timers.setInterval(1000, "yoooo")){
    console.info("aoidsj ajdoi "+startTime)
}