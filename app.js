const urlObject = require('./jsonFiles/urls.json')
const fs = require('fs')
const schedule = require('node-schedule')

const {
    ns 
} = require('./dnsSolver/solver')


// execute task every 5 seconds
const task1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('NsLookup at', new Date().getSeconds())

    ns(urlObject, (result) => {
        fs.stat('./jsonFiles/data.json', (err, stats) => {
            if (stats) {
                // get info from file
                const arrayOfResults = require('./jsonFiles/data.json')
                // add new result
                arrayOfResults.push(result)
    
                console.log(arrayOfResults)
                // write all intel 
                fs.writeFileSync('./jsonFiles/data.json', JSON.stringify(arrayOfResults), 'utf-8')
            } else {
                const arrayOneResult = [result]
                fs.writeFileSync('./jsonFiles/data.json', JSON.stringify(arrayOneResult), 'utf-8')
            }
        })
    })
    
})  // end task1

// cancel task one after 20 seconds
// setTimeout(() => {
//     task1.cancel()
//     console.log('Task one cancelled')
// }, 20000) 
