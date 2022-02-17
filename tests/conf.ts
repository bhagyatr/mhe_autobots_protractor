import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    specs: [
        './import-student-blank-template-csv-spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    //directConnect:true
}


