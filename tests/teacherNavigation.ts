import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';
import { PageLocator } from "../steps/locators"
const fs = require('fs');
const path = require('path');
import { environment } from "../pages/environment"

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
let locator = new PageLocator();
const EC = protractor.ExpectedConditions;

let downloadedFilePath: string;
describe('To check Header data matches the spec', function () {
    it('Should be able to log in as an admin', async () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get(locator.browserURL).then(function () {
            console.log('URL launched')
            browser.sleep(15000)
        });
        browser.ignoreSynchronization = true;
        browser.wait(EC.visibilityOf(locator.LoginUsernameInput), 25000);
        expect(locator.LoginUsernameInput.isDisplayed()).toBeTruthy();
        locator.LoginUsernameInput.sendKeys("abinaya-teacher@autobotsqastg.org");
        locator.LoginPasswordInput.sendKeys("Temp1234");
        locator.LoginSubmitBtn.click();
    });

    it('Click on Export student', async () => {
        await browser.wait(EC.presenceOf(element(by.css('.header-title'))), 30000);
        let elm_Student = element(by.xpath("//span[contains(text(),'student ID')]"));
        await browser.wait(EC.elementToBeClickable(elm_Student), 25000).then(function () {
            console.log('Clicked Student ID')
        });
        let export_Student = element(by.xpath("(//button[@aria-haspopup='listbox'])[2]"));
        await browser.wait(EC.elementToBeClickable(export_Student), 25000);
        await export_Student.click().then(function () {
            console.log('Clicked export_Student')
            browser.sleep(5000)
        });
        let export_st = element(by.xpath("//span[contains(text(),'Export Students')]"));
        await browser.wait(EC.elementToBeClickable(export_st), 10000);
        await export_st.click().then(function () {
            console.log('Clicked export_st')
            browser.sleep(5000)
        });
    });

});