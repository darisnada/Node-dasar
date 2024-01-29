// import { IncomingMessage } from "http"
import https from "https"

const url = "https://eow3h7vsyke0w7w.m.pipedream.net"

const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info("receive data "+ data.toString())
    })
})

const body = JSON.stringify({
    fistName: "ekoooo",
})
request.write(body)
request.end()