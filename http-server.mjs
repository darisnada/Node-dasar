import http from "http"

const server = http.createServer((request, response) => {
    console.info(request.method)
    // console.info(request.url)
    // console.info(request.headers)

    if(request.method == "POST"){

        request.addListener("data", (data) => {
            response.setHeader("Content-type", "application/json")
            response.write(data)
        })
    }else{

        response.write("Hello Gays Http server")
    }

    response.end()
})

server.listen(3000)