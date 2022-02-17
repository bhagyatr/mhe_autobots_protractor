import { browser, by, element } from 'protractor';

export class PageLocator {

    browserURL = 'https://my-qastg.mheducation.com/secure/';
    LoginUsernameInput = element(by.id('username'));
    LoginPasswordInput = element(by.id('password'));
    LoginSubmitBtn = element(by.xpath(" //*[@query-id='login.submit']"));


}