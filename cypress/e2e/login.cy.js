import { Login } from '../pages/Login';
import { HomePage } from '../pages/HomePage';


const loginPage = new Login();
const homePage = new HomePage();

describe("Page object pattern - login and logout page", () =>
{

    beforeEach(() => {
        loginPage.visit();
    });

    it ("Type e-mail and password for user888", () =>{
        loginPage.login("user888@gmail.com", "1234567890");

    });

     it ("Type e-mail and password for testowyqa", () =>{
        loginPage.login("testowyqa@qa.team", "QA!automation-1");
        
     });

     afterEach(() => {
        homePage.logout();
    });

});