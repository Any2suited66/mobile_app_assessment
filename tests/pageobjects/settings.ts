import Page from './page';

class SettingsPage extends Page {

    get settingsTitle() {return $('~settings-title')}

    get onlyShowBTC() { 
        const androidSelector = '//*[@resource-id="checkBTC"]'
        const iosSelector = '~checkBTC'
        return this.platformLocator(androidSelector, iosSelector)
    }

    get onlyShowWinners() { 
        const androidSelector = '//*[@resource-id="checkWinners"]'
        const iosSelector = '~checkWinners'
        return this.platformLocator(androidSelector, iosSelector)
    }

    get onlyShowLosers() { 
        const androidSelector = '//*[@resource-id="checkLosers"]'
        const iosSelector = '~checkLosers'
        return this.platformLocator(androidSelector, iosSelector)
    }

    async open():Promise<string> {
        return super.open('settingsPage');
    }
}

export default new SettingsPage();