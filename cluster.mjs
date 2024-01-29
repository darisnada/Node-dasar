import cluster from "cluster"
import os from "os"
import http from "http"
import process from "process"

if(cluster.isPrimary){
    console.info(`primary `+ process.pid)
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork()
        
    }
    cluster.addListener("exit", (worker) => {
        console.info("worker exit "+worker.id)
        cluster.fork()
    })
}

if(cluster.isWorker){
    console.info('worker '+ process.pid)

    const server = http.createServer((request, response) => {
        response.write("response from proses "+ process.pid)
        response.end()
        process.exit()
    })

    server.listen(3000)
}
