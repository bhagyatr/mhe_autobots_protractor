"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
let downloadedFilePath;
describe('To check Header data matches the spec', function () {
    // Login MHE
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
    //Clicks on Import student
    it('Click on Import students', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"))), 10000);
        let import_Student = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click();
            console.log('Clicked Import student');
        });
    });
    //Download the blank template of CSV
    it('Download blank template', async () => {
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'CSV')]"))), 15000);
        var blank_CSV = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'CSV')]"));
        await protractor_1.browser.wait(EC.visibilityOf(blank_CSV), 15000).then(function () {
            console.log('Clicked Blank CSV');
            blank_CSV.click();
            protractor_1.browser.sleep(5000);
        });
    });
    //To Get most recent fils from the download
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        excelData.getMostRecent(excelData.downloadDirPath, function (err, recent) {
            if (err)
                console.error(err);
            downloadedFilePath = excelData.downloadDirPath + '' + recent;
            console.log("Found Recent downloaded file name");
        });
    });
    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let exportStudentCsvData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            console.log("To check wheather header matches or not:");
            exportStudentCsvData = excelData.getCsvHeader(downloadedFilePath);
        });
        if (JSON.stringify(exportStudentCsvData) == JSON.stringify(excelHeaderBulk.importStdBlankTempHeadersIds)) {
            await expect(exportStudentCsvData).toEqual(excelHeaderBulk.importStdBlankTempHeadersIds);
            console.log("Results are matching");
        }
        else {
            await expect(exportStudentCsvData).toEqual(excelHeaderBulk.importStdBlankTempHeadersIds);
            console.log("Results not are matching");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXN0dWRlbnQtYmxhbmstdGVtcGxhdGUtY3N2LXNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9pbXBvcnQtc3R1ZGVudC1ibGFuay10ZW1wbGF0ZS1jc3Ytc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJDQUFpRjtBQUNqRiw0REFBeUQ7QUFDekQsb0RBQWdEO0FBR2hELElBQUksZUFBZSxHQUFHLElBQUksZ0NBQWUsRUFBRSxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHLElBQUksc0JBQVMsRUFBRSxDQUFDO0FBQ2hDLE1BQU0sRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7QUFFekMsSUFBSSxrQkFBMEIsQ0FBQztBQUMvQixRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNsRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0Isc0JBQXNCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFD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