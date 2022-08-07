import Page from './page';

class HomePage extends Page {
    
    get instructions() { 
        const androidSelector = '//*[@text="Instructions"]'
        const iosSelector = '~Instructions tab'    
        return this.platformLocator(androidSelector, iosSelector)
    }

    get dashboardTab() { 
        const androidSelector = '//*[@text="Dashboard"]'
        const iosSelector = '~Dashboard tab'
        return this.platformLocator(androidSelector, iosSelector)
    }

    get settingsTab() { 
        const androidSelector = '//*[@text="Settings"]'
        const iosSelector = '~Settings tab'    
        return this.platformLocator(androidSelector, iosSelector)
    }

    get nativeAlert() { 
        const androidSelector = '//*[@resource-id="android:id/alertTitle"]'
        const iosSelector = '~OK'
        return this.platformLocator(androidSelector, iosSelector)
    }


    get sideMenuButton() {
        const androidSelector = '//*[@resource-id="sidemenuButton"]'
        const iosSelector = '~sidemenuButton'
        return this.platformLocator(androidSelector, iosSelector)
    }

    static async waitForInstructionsTab ():Promise<boolean|void> {
        const androidSelector = '//*[@text="Instructions"]'
        const iosSelector = '~Instructions tab'    
        return $(androidSelector, iosSelector).waitForDisplayed({
            timeout: 2000,
        })
    }


   
    async open():Promise<string> {
        return super.open('homePage');
    }
}

export default new HomePage();