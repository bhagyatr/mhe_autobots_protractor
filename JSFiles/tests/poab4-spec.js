"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const MheBase_1 = require("../pages/MheBase");
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
let downloadedFilePath;
describe('POAB-04', function () {
    // Login MHE
    it('POAB-04:Teacher - Blank Template CSV and XLSX should have correct header', async () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('https://my-qastg.mheducation.com/secure/').then(function () {
            console.log('URL launched');
            //browser.sleep(15000)
        });
        protractor_1.browser.ignoreSynchronization = true;
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.id("username"))), 15000);
        var username = (0, protractor_1.element)(protractor_1.by.id('username'));
        protractor_1.browser.wait(EC.visibilityOf(username), 15000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("teacherqafixturepoab3");
        protractor_1.browser.driver.findElement(protractor_1.by.id('password')).sendKeys("Testing123!");
        (0, protractor_1.element)(protractor_1.by.xpath(" //*[@query-id='login.submit']")).click();
        //Clicks on Import student
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"))), 15000);
        let import_Student = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click();
        });
        let templateValue;
        let blankTemp = (0, protractor_1.element)(protractor_1.by.xpath("//b[contains(text(),'Blank Template')]"));
        await protractor_1.browser.wait(EC.presenceOf(blankTemp), 30000).then(function (text) {
            blankTemp.getText().then(function (txt) {
                templateValue = txt;
            });
        });
        if (templateValue != "Blank Template") {
            console.log("Not a Blank Template");
        }
        let blank_CSV = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'CSV')]"));
        await protractor_1.browser.wait(EC.presenceOf(blank_CSV), 15000);
        await protractor_1.browser.wait(EC.visibilityOf(blank_CSV), 10000).then(function () {
            console.log('Clicked Blank CSV');
            blank_CSV.click();
            protractor_1.browser.sleep(5000);
        });
        let recentFileOfBlankCsv;
        let recentFileOfBlankCsvData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileOfBlankCsvData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath);
        });
        await recentFileOfBlankCsvData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfBlankCsv = fileName;
        });
        let teacherCsvBlankTemp;
        if (recentFileOfBlankCsv.endsWith(MheBase_1.fileExtension.csv)) {
            teacherCsvBlankTemp = excelData.getCsvHeader(downloadedFilePath);
        }
        if (JSON.stringify(teacherCsvBlankTemp) == JSON.stringify(excelHeaderBulk.csvBlankTemp)) {
            expect(teacherCsvBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp);
            console.log("Blank Template CSV, Results are matching");
        }
        else {
            expect(teacherCsvBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp);
            console.log("Blank Template CSV, Results not are matching");
        }
        //Blank Excel file
        let blank_XLSX = (0, protractor_1.element)(protractor_1.by.xpath("//a[contains(text(),'xlsx')]"));
        await protractor_1.browser.wait(EC.presenceOf(blank_XLSX), 15000);
        await protractor_1.browser.wait(EC.visibilityOf(blank_XLSX), 10000).then(function () {
            console.log('Clicked Blank XLSX');
            blank_XLSX.click();
            protractor_1.browser.sleep(5000);
        });
        let recentFileOfBlankXlsx;
        let recentFileOfBlankXlsxData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileOfBlankXlsxData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath);
        });
        await recentFileOfBlankXlsxData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfBlankXlsx = fileName;
        });
        let teacherXlsxBlankTemp;
        if (recentFileOfBlankXlsx.endsWith(MheBase_1.fileExtension.xlsx)) {
            teacherXlsxBlankTemp = excelData.getExcelheader(downloadedFilePath);
        }
        if (JSON.stringify(teacherXlsxBlankTemp) == JSON.stringify(excelHeaderBulk.csvBlankTemp)) {
            expect(teacherXlsxBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp);
            console.log("Blank Template Xlsx, Results are matching");
        }
        else {
            expect(teacherXlsxBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp);
            console.log("Blank Template Xlsx, Results not are matching");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9hYjQtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3BvYWI0LXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUNoRCw4Q0FBaUQ7QUFHakQsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6QyxPQUFPLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0FBQzFDLElBQUksa0JBQTBCLENBQUM7QUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNoQixZQUFZO0lBQ1osRUFBRSxDQUFDLDBFQUEwRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RGLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixzQkFBc0I7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLElBQUksUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDNUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLG9CQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMzRCwwQkFBMEI7UUFDMUIsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZHLElBQUksY0FBYyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNsRixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEUsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxhQUFhLENBQUM7UUFDbEIsSUFBSSxTQUFTLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBRTVFLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1lBQ25FLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO2dCQUNsQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLGFBQWEsSUFBSSxnQkFBZ0IsRUFBRTtZQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3BELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1lBQ2hDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNqQixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksb0JBQW9CLENBQUM7UUFDekIsSUFBSSx3QkFBd0IsQ0FBQztRQUM3QixNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCx3QkFBd0IsR0FBRyxTQUFTLENBQUMsMkJBQTJCLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQy9GLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxRQUFRO1lBQ2xELGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLFFBQVEsQ0FBQztZQUMvRCxvQkFBb0IsR0FBRyxRQUFRLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLG1CQUFtQixDQUFDO1FBQ3hCLElBQUksb0JBQW9CLENBQUMsUUFBUSxDQUFDLHVCQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1NBQ25FO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDckYsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNILE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsa0JBQWtCO1FBRWxCLElBQUksVUFBVSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQTtRQUNsRSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFDakMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO1lBQ2xCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxxQkFBcUIsQ0FBQztRQUMxQixJQUFJLHlCQUF5QixDQUFDO1FBQzlCLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pELHlCQUF5QixHQUFHLFNBQVMsQ0FBQywyQkFBMkIsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDaEcsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLHlCQUF5QixDQUFDLElBQUksQ0FBQyxVQUFVLFFBQVE7WUFDbkQsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGVBQWUsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDO1lBQy9ELHFCQUFxQixHQUFHLFFBQVEsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksb0JBQW9CLENBQUM7UUFDekIsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsdUJBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxvQkFBb0IsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDdEU7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN0RixNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7U0FDaEU7SUFFTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=