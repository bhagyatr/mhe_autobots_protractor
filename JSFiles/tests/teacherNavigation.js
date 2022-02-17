"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const locators_1 = require("../steps/locators");
const fs = require('fs');
const path = require('path');
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
let locator = new locators_1.PageLocator();
const EC = protractor_1.protractor.ExpectedConditions;
let downloadedFilePath;
describe('To check Header data matches the spec', function () {
    it('Should be able to log in as an admin', async () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get(locator.browserURL).then(function () {
            console.log('URL launched');
            protractor_1.browser.sleep(15000);
        });
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.wait(EC.visibilityOf(locator.LoginUsernameInput), 25000);
        expect(locator.LoginUsernameInput.isDisplayed()).toBeTruthy();
        locator.LoginUsernameInput.sendKeys("abinaya-teacher@autobotsqastg.org");
        locator.LoginPasswordInput.sendKeys("Temp1234");
        locator.LoginSubmitBtn.click();
    });
    it('Click on Export student', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.css('.header-title'))), 30000);
        let elm_Student = (0, protractor_1.element)(protractor_1.by.xpath("//span[contains(text(),'student ID')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(elm_Student), 25000).then(function () {
            console.log('Clicked Student ID');
        });
        let export_Student = (0, protractor_1.element)(protractor_1.by.xpath("(//button[@aria-haspopup='listbox'])[2]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(export_Student), 25000);
        await export_Student.click().then(function () {
            console.log('Clicked export_Student');
            protractor_1.browser.sleep(5000);
        });
        let export_st = (0, protractor_1.element)(protractor_1.by.xpath("//span[contains(text(),'Export Students')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(export_st), 10000);
        await export_st.click().then(function () {
            console.log('Clicked export_st');
            protractor_1.browser.sleep(5000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVhY2hlck5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy90ZWFjaGVyTmF2aWdhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRjtBQUNqRiw0REFBeUQ7QUFDekQsb0RBQWdEO0FBQ2hELGdEQUErQztBQUMvQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzdCLElBQUksZUFBZSxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksc0JBQVcsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsSUFBSSxrQkFBMEIsQ0FBQztBQUMvQixRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzNCLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUQsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNFLElBQUksV0FBVyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxjQUFjLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25FLE1BQU0sY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7WUFDckMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDLENBQUM7UUFDaEYsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUQsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUNoQyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMifQ==