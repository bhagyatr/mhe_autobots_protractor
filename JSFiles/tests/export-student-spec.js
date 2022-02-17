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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3J0LXN0dWRlbnQtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL2V4cG9ydC1zdHVkZW50LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUNoRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzdCLElBQUksZUFBZSxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsSUFBSSxrQkFBMEIsQ0FBQztBQUMvQixRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxJQUFJLENB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