import HomePage from  '../pageobjects/homepage';
import DashboardPage from '../pageobjects/dashboard'
import Gestures from  '../Gestures'
import Settings from '../pageobjects/settings'

describe('open the app and validate the interactions ', () => {
   
    // taps on the dashboard tab and verifies the title is displayed
    it('validate dashboard screen loads', async () => {
        await HomePage.dashboardTab.click()
        await expect(DashboardPage.dashboardTitle).toBeExisting();
    })

    // taps on the Settings tab and verifies the elements on the screen
    it('validate settings screen loads', async () => {
        await HomePage.settingsTab.click()
        await expect(Settings.settingsTitle).toBeExisting();
        await expect(Settings.onlyShowBTC).toBeExisting();
        await expect(Settings.onlyShowWinners).toBeExisting();
        await expect(Settings.onlyShowLosers).toBeExisting()
    })

    // swipes right on screen, taps the button, verifies alert is displayed
    it('validate user menu slides out', async () => {
        await Gestures.swipeOnPercentage({x:5, y:50}, {x:95, y:50});
        await HomePage.sideMenuButton.click()
        await expect(HomePage.nativeAlert).toBeExisting();
    })

    // failed test to show screenshot is taken on failed test
    it('validate screenshot on failure', async () => {
        await HomePage.dashboardTab.click();
        await expect(Settings.onlyShowBTC).toBeExisting();
    })

    
})




