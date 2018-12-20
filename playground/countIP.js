const ipObj = require('../jsonFiles/data.json')

const ip_array = []
ipObj.forEach(e => {
    e.ipAddresses.forEach(ip => {
        ip_array.push(ip)
    })
})

// console.log(ip_array.length)

noDuplicateIPs = ip_array.filter((elem, pos) => {
    return ip_array.indexOf(elem) == pos
})

console.log("Number of IPs: ", noDuplicateIPs.length)
console.log(noDuplicateIPs)
