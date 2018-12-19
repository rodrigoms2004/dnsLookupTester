const nslookup = require('nslookup')
const dns = require('dns');
const moment = require('moment')
const dnsServers = require('../config/dnsServers')

const ns = async(urlObj, callback) => {

    let dns_servers = []
    // array of dns servers used in connection
    if (dnsServers.useLocal) {
        dns_servers = dns.getServers()
    } else {
        const arraryIPs = []
        dnsServers.dns.forEach( ip => arraryIPs.push(ip.server) )
        dns_servers = arraryIPs
    }

    console.log(dns_servers)
    

    // timeout in milliseconds 
    const timeout = 10

    // iterate object urlObj to perform nslookup in all urls
    Object.keys(urlObj).forEach((key)=> {
        const urls = urlObj[key]   // array of urls
        // iterate array of urls
        urls.forEach(url => {
            dns_servers.forEach(dns => {
                nslookup(url.url).server(dns).timeout(timeout * 1000).end((err, addresses) => {

                    const resultObj = {
                        urlTested: url.url,
                        timeStamp : moment().format(),
                        ipAddresses: addresses,
                        dnsServerUsed : dns
                    }

                    callback(resultObj)
                })  // end nslookup    
            })  // end dns_server.forEach
        })  // end url.forEach
    })  // end Object...forEach    
}

module.exports = {
    ns
}