"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const fs = require('fs');
const path = require('path');
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
let downloadedFilePath;
describe('To check Header data matches the spec', function () {
    it('Should be able to log in as an admin', async () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('https://my-qastg.mheducation.com/secure/').then(function () {
            console.log('URL launched');
            protractor_1.browser.sleep(15000);
        });
        protractor_1.browser.ignoreSynchronization = true;
        var username = (0, protractor_1.element)(protractor_1.by.id('username'));
        protractor_1.browser.wait(EC.visibilityOf(username), 25000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("autobotsqastg");
        protractor_1.browser.driver.findElement(protractor_1.by.id('password')).sendKeys("Temp1234");
        (0, protractor_1.element)(protractor_1.by.xpath(" //*[@query-id='login.submit']")).click();
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
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        excelData.getMostRecent(excelData.downloadDirPath, function (err, recent) {
            if (err)
                console.error(err);
            console.log(excelData.downloadDirPath + '' + recent, "excelData.downloadDirPath + '' + recent");
            downloadedFilePath = excelData.downloadDirPath + '' + recent;
        });
    });
    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let exportStudentCsvData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            console.log(downloadedFilePath, "downloadedFilePathdownload--------------");
            exportStudentCsvData = excelData.getCsvHeader(downloadedFilePath);
        });
        //await console.log(exportStudentCsvData,"csv data------1111");
        await expect(exportStudentCsvData).toEqual(excelHeaderBulk.exportStudentHeadersIds);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxSZWFkeGxzeC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvZXhjZWxSZWFkeGxzeC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQWlGO0FBQ2pGLDREQUF5RDtBQUN6RCxvREFBZ0Q7QUFDaEQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUc3QixJQUFJLGVBQWUsR0FBRyxJQUFJLGdDQUFlLEVBQUUsQ0FBQztBQUM1QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHNCQUFTLEVBQUUsQ0FBQztBQUNoQyxNQUFNLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXpDLElBQUksa0JBQTBCLENBQUM7QUFDL0IsUUFBUSxDQUFDLHVDQUF1QyxFQUFFO0lBQzlDLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFDLG9CQUFPLENBQUMsSUFBSSxDQUFD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