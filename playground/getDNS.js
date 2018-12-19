const dnsServers = require('../config/dnsServers')
const dns = require('dns');

const arrayServer = []
dnsServers.dns.forEach(ip => {
    arrayServer.push(ip.server)
    console.log(ip.server)  
})

console.log(arrayServer)

console.log(dns.getServers())
console.log(dnsServers.dns['server'])
console.log(dnsServers.useLocal)
