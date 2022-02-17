import { Config } from 'protractor';

export let config: Config = {
    framework: 'jasmine',
    specs: ['./teacherNavigation.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
}


