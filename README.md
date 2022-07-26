# Announcements Microservice Client SDK for Node.js

This is a Node.js client SDK for [service-announcements](https://github.com/pip-services-support2/service-announcements-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* AWS Lambda client
* Direct client

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-announcements-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
let sdk = new require('client-announcements-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
let config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
let client = sdk.AnnouncementsHttpClientV1(config);

// Connect to the microservice
await client.open(null);

// Work with the microservice
...
```

Now the client is ready to perform operations
```javascript
// Create a new announcement
let announcement = await client.createAnnouncement(
    null,
    { 
        category: 'maintenance',
        title: { en: 'Maintenance on Jan 01' },
        content: { en: 'Our servers will be shutdown for maintenance on Jan 01' }
    }
);
```

```javascript
// Get a random announcement
announcement = await client.getRandomAnnouncement(
    null,
    {}
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

