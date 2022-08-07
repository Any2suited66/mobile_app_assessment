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

    platformLocator(androidSelector: string, iosSelector: string) { 
        const selector = driver.isAndroid ? androidSelector : iosSelector;
        return $(`${selector}`)
        }
    
    
    get dashboard_ios () { return $('~Dashboard tab'); }
    get dashboard_android () { return $('//*[@text="Dashboard"]')}
    get settings_ios () { return $('~Settings tab'); }
    get settings_android () { return $('//*[@text="Settings"]')}
    
    async open():Promise<string> {
        return super.open('homePage');
    }
}

export default new HomePage();