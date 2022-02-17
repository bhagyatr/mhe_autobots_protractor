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
        locator.LoginUsernameInput.sendKeys("autobotsqastg");
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
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        var _a;
        let fileName = "";
        if ((_a = process.env.OS) === null || _a === void 0 ? void 0 : _a.startsWith("Windows")) {
            fileName = process.env.HOMEDRIVE + '' + process.env.HOMEPATH + "\\Downloads\\";
        }
        else {
            console.log('Not windows');
        }
        var getMostRecent = function (dir, cb) {
            var dir = path.resolve(dir);
            var files = fs.readdir(dir, function (err, files) {
                var sorted = files.map(function (v) {
                    var filepath = path.resolve(dir, v);
                    return {
                        name: v,
                        time: fs.statSync(filepath).mtime.getTime()
                    };
                })
                    .sort(function (a, b) { return b.time - a.time; })
                    .map(function (v) { return v.name; });
                if (sorted.length > 0) {
                    cb(null, sorted[0]);
                }
                else {
                    cb('You do not have files in this directory...');
                }
            });
        };
        getMostRecent(fileName, function (err, recent) {
            if (err)
                console.error(err);
            downloadedFilePath = fileName + '' + recent;
        });
    });
    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let exportStudentCsvData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            exportStudentCsvData = excelData.getCsvHeader(downloadedFilePath);
        });
        await console.log(exportStudentCsvData, "csv data------1111");
        console.log(excelHeaderBulk.exportStudentHeadersIds, "111111");
        await expect(exportStudentCsvData).toEqual(excelHeaderBulk.exportStudentHeadersIds);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZWxSZWFkeGxzeC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvZXhjZWxSZWFkeGxzeC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQWlGO0FBQ2pGLDREQUF5RDtBQUN6RCxvREFBZ0Q7QUFDaEQsZ0RBQStDO0FBQy9DLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFHN0IsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxzQkFBVyxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6QyxJQUFJLGtCQUEwQixDQUFDO0FBQy9CLFFBQVEsQ0FBQyx1Q0FBdUMsRUFBRTtJQUM5QyxFQUFFLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbEQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0Isb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFB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