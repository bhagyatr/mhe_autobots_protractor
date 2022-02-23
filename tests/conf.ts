import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    specs: [
        './poab3-spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    //directConnect:true
}


