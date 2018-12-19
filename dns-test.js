const nslookup = require('nslookup')
const urlObject = require('./urls.json')
const dns = require('dns');
const moment = require('moment')
const fs = require('fs');

const ns = async(urlObj, callback) => {

        // array of dns servers used in connection
    const dns_servers = dns.getServers()

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
                        timeStamp : moment().format(),
                        ipAddresses: addresses
                    }

                    callback(resultObj)
                })  // end nslookup    
            })  // end dns_server.forEach
        })  // end url.forEach
    })  // end Object...forEach    
}

ns(urlObject, (result) => {
    fs.stat('./data.json', (err, stats) => {
        if (stats) {
            // get info from file
            const arrayOfResults = require('./data.json')
            // add new result
            arrayOfResults.push(result)
            // write all intel 
            fs.writeFileSync('./data.json', JSON.stringify(arrayOfResults), 'utf-8')
        } else {
            const arrayOneResult = [result]
            fs.writeFileSync('./data.json', JSON.stringify(arrayOneResult), 'utf-8')
        }
    })
})
