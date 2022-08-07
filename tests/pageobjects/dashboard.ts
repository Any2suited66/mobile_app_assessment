import Page from './page';

class DashboardPage extends Page {

    get dashboardTitle() {return $('~dashboard-title')}

    async open():Promise<string> {
        return super.open('dashboardPage');
    }

}

export default new DashboardPage();