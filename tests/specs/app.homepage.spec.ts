import HomePage from  '../pageobjects/homepage';
import Gestures from  '../Gestures'

describe('open the app and validate the dashboard and settings tabs load', () => {
    beforeEach(async() => {
            await HomePage.instructions.isDisplayed
    })
    
    it('validate settings and dashboard tabs', async () => {
        await expect(HomePage.dashboardTab).toBeExisting();
        await expect(HomePage.settingsTab).toBeExisting();
    });

    it('validate user menu slides out', async () => {
        console.log('waiting for loading')
        await HomePage.waitForInstructionsTab
        await Gestures.swipeOnPercentage({x:5, y:50}, {x:95, y:50});
        await HomePage.sideMenuButton.click()
        await expect(HomePage.nativeAlert).toBeExisting();
    })
})




