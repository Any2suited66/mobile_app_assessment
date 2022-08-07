
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'tylerhackett_a7GXm6',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'EBpqyXcaHWhmHopJMD6e',
  
    updateJob: false,
    specs: [
        './tests/specs/**/app*.spec.ts',
    ],
    exclude: [],
  
    capabilities: [{
      project: "First Webdriverio Android Project",
      build: 'Webdriverio Android',
      name: 'first_test',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://837239c1be35342da032472845ef267eb56ba783',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };