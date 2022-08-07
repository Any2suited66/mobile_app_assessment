import HomePage from  '../pageobjects/homepage';

describe('open the app and validate the dashboard and settins tabs load', () => {
    it('validate settings and dashboard tabs', async () => {
        await expect(HomePage.instructions).toBeExisting();
        await expect(HomePage.settingsTab).toBeExisting();
    });
});




