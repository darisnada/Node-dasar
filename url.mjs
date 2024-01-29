import {URL} from 'url'

const link = new URL("https://www.youtube.com/watch?v=b39Xqf5iyjo&t=10028s")

link.host = "www.dadaa.com"
link.searchParams.append("status", "premium")

console.info(link.toString())
console.info(link.href)
console.info(link.protocol)
console.info(link.host)
console.info(link.pathname)
console.info(link.searchParams)