## DNS lookup tester

No copyright! This code is full copywrong :P

December, 20, 2018

### Objective

This script generates a json file with all IP addresses of a given one or more URLs, 
this file is named 'data.json' and it is placed in 'jsonFiles' folder. You can see a example
in 'jsonFiles/data_example.json'.

```
[
    {
        "urlTested":"xpto.inc",
        "timeStamp":"2018-12-19T18:11:45-02:00",
        "ipAddresses":["9.8.7.6","1.2.3.4","5.6.7.8"],
        "dnsServerUsed":"8.8.8.8"
    },
    {
        "urlTested":"xpto.inc",
        "timeStamp":"2018-12-19T18:11:50-02:00",
        "ipAddresses":["5.6.7.8","9.8.7.6","1.2.3.4"],
        "dnsServerUsed":"8.8.8.8"},
    {
        "urlTested":"xpto.inc",
        "timeStamp":"2018-12-19T18:11:55-02:00",
        "ipAddresses":["5.6.7.8","1.2.3.4","9.8.7.6"],
        "dnsServerUsed":"8.8.8.8"},
    {
        "urlTested":"xpto.inc",
        "timeStamp":"2018-12-19T18:12:00-02:00",
        "ipAddresses":["9.8.7.6","1.2.3.4","5.6.7.8"],"dnsServerUsed":"8.8.8.8"}
]
```


### How to install

* Install in your computer NodeJS https://nodejs.org/en/
* Clone this repository using git hub or downloading it into your system
    *git clone https://github.com/rodrigoms2004/dnsLookupTester.git*
* Enter the folder and execute 'npm install'
* create a file *jsonFiles/data.json* with an empty array []
* Run it using 'node app.js'

### How to use

Inside 'config' folder create a file named 'urls.json', use 'urls_example.json' as a model.
Add all URLs you wanna to test, keep the JSON format to avoid failures.

``` 
{
    "urls" :
        [
            {"url" : "www.google.com"},
            {"url" : "www.yahoo.com"}
        ]
}
```

Inside file 'config/dnsServers' you can define if you want to use your local DNS or specific DNS
servers, for instance, if you want to test URLs listed above using Google DNS Servers 
8.8.8.8 and 8.8.4.4, put these IPs as below and mark "useLocal" as false:

```
{
    "dns" :
        [
            {"server" : "8.8.8.8"},
            {"server" : "8.8.4.4"}
        ],
    "useLocal" : false
}
```

If "useLocal" is true (default) the DNS servers listed will be ignored and the script will use the
local machine DNS servers. 

### Results

In the file *data.json* :

```
[
  {
    "urlTested": "www.yahoo.com.",
    "timeStamp": "2019-10-01T09:44:55-03:00",
    "ipAddresses": [
      null,
      "98.138.219.232",
      "72.30.35.9",
      "72.30.35.10",
      "98.138.219.231"
    ],
    "dnsServerUsed": "8.8.4.4"
  },
  {
    "urlTested": "www.yahoo.com.",
    "timeStamp": "2019-10-01T09:44:55-03:00",
    "ipAddresses": [
      null,
      "72.30.35.9",
      "72.30.35.10"
    ],
    "dnsServerUsed": "8.8.8.8"
  },
  {
    "urlTested": "www.google.com",
    "timeStamp": "2019-10-01T09:44:55-03:00",
    "ipAddresses": [
      "172.217.172.196"
    ],
    "dnsServerUsed": "8.8.4.4"
  },
  {
    "urlTested": "www.google.com",
    "timeStamp": "2019-10-01T09:44:55-03:00",
    "ipAddresses": [
      "172.217.172.196"
    ],
    "dnsServerUsed": "8.8.8.8"
  },
  {
    "urlTested": "www.google.com",
    "timeStamp": "2019-10-01T09:45:00-03:00",
    "ipAddresses": [
      "172.217.172.196"
    ],
    "dnsServerUsed": "8.8.8.8"
  },
  {
    "urlTested": "www.yahoo.com.",
    "timeStamp": "2019-10-01T09:45:00-03:00",
    "ipAddresses": [
      null,
      "98.138.219.232",
      "72.30.35.10",
      "98.138.219.231",
      "72.30.35.9"
    ],
    "dnsServerUsed": "8.8.4.4"
  },
  {
    "urlTested": "www.yahoo.com.",
    "timeStamp": "2019-10-01T09:45:00-03:00",
    "ipAddresses": [
      null,
      "98.138.219.232",
      "72.30.35.10",
      "98.138.219.231",
      "72.30.35.9"
    ],
    "dnsServerUsed": "8.8.8.8"
  },
  {
    "urlTested": "www.google.com",
    "timeStamp": "2019-10-01T09:45:00-03:00",
    "ipAddresses": [
      "172.217.172.196"
    ],
    "dnsServerUsed": "8.8.4.4"
  }

]
```


Any doubt, issue or comment please let me know!