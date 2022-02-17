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
        protractor_1.browser.get('https://my-qalv.mheducation.com/').then(function () {
            console.log('URL launched');
            //browser.sleep(15000)
        });
        protractor_1.browser.ignoreSynchronization = true;
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.id("username"))), 15000);
        var username = (0, protractor_1.element)(protractor_1.by.id('username'));
        protractor_1.browser.wait(EC.visibilityOf(username), 15000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("admin@autobotsqalv.org");
        protractor_1.browser.driver.findElement(protractor_1.by.id('password')).sendKeys("Testing123!");
        (0, protractor_1.element)(protractor_1.by.xpath(" //*[@query-id='login.submit']")).click();
    });
    it('Click on Import students', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"))), 10000);
        let import_Student = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click();
            console.log('Clicked Import student');
        });
    });
    it('Download blank template', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'CSV')]"))), 15000);
        var blank_CSV = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'CSV')]"));
        await protractor_1.browser.wait(EC.visibilityOf(blank_CSV), 15000).then(function () {
            console.log('Clicked Blank CSV');
            blank_CSV.click();
            protractor_1.browser.sleep(5000);
        });
    });
    it('Download blank template', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'xlsx')]"))), 15000);
        var blank_CSV = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'xlsx')]"));
        await protractor_1.browser.wait(EC.visibilityOf(blank_CSV), 15000).then(function () {
            console.log('Clicked Blank CSV');
            blank_CSV.click();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXN0dWRlbnQtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL2ltcG9ydC1zdHVkZW50LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUNoRCxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzdCLElBQUksZUFBZSxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsSUFBSSxrQkFBMEIsQ0FBQztBQUMvQixRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsRUFBRSxDQUFDLHNDQUFzQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xELG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixzQkFBc0I7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FB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