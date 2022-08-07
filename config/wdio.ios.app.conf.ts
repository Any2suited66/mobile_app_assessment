import { join } from "path";
import config from "./wdio.shared.local.appium.conf";


config.specs = ["./tests/specs/app*.spec.ts"];

config.capabilities = [
    {
        platformName: "iOS",
        maxInstances: 1,
        "appium:deviceName": "iPhone 13",
        "appium:platformVersion": "15.5",
        "appium:orientation": "PORTRAIT",
        "appium:automationName": "XCUITest",
        "appium:platformName": "iOS",
        "appium:app": join(
            process.cwd(),
            "./apps/AwesomeApp.app"
        ),
        "appium:newCommandTimeout": 240,
    },
];

exports.config = config;