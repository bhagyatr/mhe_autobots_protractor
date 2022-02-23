"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const MheBase_1 = require("../pages/MheBase");
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
const os = require('os');
//let appRoot = require('app-root-path');
let file_POAB09 = "poab-9.csv";
jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
let downloadedFilePath;
describe('POAB-03', function () {
    // Login MHE
    it('POAB-03:Teacher -  Validate header of Completed File, Uploaded File, and Error', async () => {
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
            //var myModule = require(appRoot + '/POAB_Data/poab-9.csv');
            // console.log(appRoot,'Clicked Import student', excelData.downloadDirPath)
        });
        // //Upload file
        // await browser.wait(EC.presenceOf(element(by.xpath("//*[contains(text(),'Choose File')]"))), 15000);
        // console.log(__dirname, "----------__dirname")
        // var filePath = path.resolve(__dirname, file_POAB09)
        // await browser.wait(EC.presenceOf(element(by.xpath("//*[contains(text(),'Choose File')]"))), 15000);
        // let choose_File = element(by.xpath("//*[contains(text(),'Choose File')]"));
        // await browser.wait(EC.visibilityOf(choose_File), 15000).then(function () {
        //     console.log('Choose file clicked', filePath)
        //     choose_File.click().then(function () {
        //         console.log('Choose file clicked----', filePath)
        //         browser.findElement(by.css('input#file-upload')).sendKeys(filePath);
        //     });
        // });
        // //Click on Upload button
        // await browser.wait(EC.presenceOf(element(by.css("button[type='submit']"))), 15000);
        // //let upload_Button = element(by.css("button[type='submit']"));
        // await browser.wait(EC.elementToBeClickable(element(by.css("button[type='submit']"))), 15000).then(function () {
        //     console.log('Upload button is enabled')
        //     element(by.css("button[type='submit']")).click()
        // });
        // //Wait untill status changes to "Completed with Error"
        // await browser.wait(EC.presenceOf(element(by.xpath("//tbody/tr[1]/td[5]/div/span/span"))), 25000);
        // let upload_Status = element(by.xpath("//tbody/tr[1]/td[5]/div/span/span"));
        // await browser.wait(EC.elementToBeClickable(element(by.xpath("//tbody/tr[1]/td[5]/div/span/span"))), 25000).then(function () {
        //     console.log('Kebab menu is available')
        //     browser.sleep(5000)
        // })
        // //Varify status
        // let flag;
        // for (let i = 0; i < 50; i++) {
        //     upload_Status.getText().then(function (text) {
        //         if (text == "In Progress" || text == "IN_PROGRESS") {
        //             element(by.css("button[title='filter']")).click().then(function () {
        //                 console.log(i, '----In Progress');
        //                 browser.sleep(15000)
        //             })
        //             flag = false
        //         }
        //         else {
        //             console.log(i, '----Completed with Errors');
        //             flag = true//This will be executed
        //         }
        //     });
        //     if (flag == true) { break; }
        // }
        let uploadHistoryTab = (0, protractor_1.element)(protractor_1.by.xpath('//span[contains(text(),"Upload History")]/..'));
        await protractor_1.browser.wait(EC.presenceOf(uploadHistoryTab), 10000).then(function () {
            uploadHistoryTab.click();
            protractor_1.browser.sleep(2000);
        });
        //--------------------------------------------------------------------------------
        //Click on Kebab menu
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);
        let kebabMenu_Button = (0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"));
        await protractor_1.browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click();
            protractor_1.browser.sleep(2000);
        });
        //Validate that the options for Uploaded File and Error File are available
        let uploadFile = (0, protractor_1.element)(protractor_1.by.xpath("//span[contains(text(),'Uploaded File')]"));
        await protractor_1.browser.wait(EC.visibilityOf(uploadFile), 20000).then(function () {
            uploadFile.click();
            protractor_1.browser.sleep(5000);
        });
        let recentFile;
        let recentFileNameData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath);
        });
        await recentFileNameData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFile = fileName;
        });
        let teacherCsvHeader;
        if (recentFile.endsWith(MheBase_1.fileExtension.csv)) {
            teacherCsvHeader = excelData.getCsvHeader(downloadedFilePath);
        }
        let csvData = [];
        for (let i of teacherCsvHeader) {
            csvData.push((i.replace(/[^\w ]/, '').trim()));
        }
        if (JSON.stringify(csvData) == JSON.stringify(excelHeaderBulk.studentHeadersIds)) {
            expect(csvData).toEqual(excelHeaderBulk.studentHeadersIds);
            console.log("Uploaded File, Results are matching");
        }
        else {
            expect(csvData).toEqual(excelHeaderBulk.studentHeadersIds);
            console.log("Uploaded File, Results not are matching");
        }
        //========================================
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);
        await protractor_1.browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click();
            protractor_1.browser.sleep(2000);
        });
        //Validate that the options for Uploaded File and Error File are available
        let errorFile = (0, protractor_1.element)(protractor_1.by.xpath("//span[contains(text(),'Error File')]"));
        await protractor_1.browser.wait(EC.visibilityOf(errorFile), 20000).then(function () {
            errorFile.click();
            protractor_1.browser.sleep(5000);
        });
        let recentFileOfError;
        let recentFileNameDataError;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameDataError = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath);
        });
        await recentFileNameDataError.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfError = fileName;
        });
        let teacherCsvHeaderError;
        if (recentFileOfError.endsWith(MheBase_1.fileExtension.csv)) {
            teacherCsvHeaderError = excelData.getCsvHeader(downloadedFilePath);
        }
        let csvDataError = [];
        for (let i of teacherCsvHeaderError) {
            csvDataError.push((i.replace(/[^\w ]/, '').trim()));
        }
        if (JSON.stringify(csvDataError) == JSON.stringify(excelHeaderBulk.errorTeacher)) {
            expect(csvDataError).toEqual(excelHeaderBulk.errorTeacher);
            console.log("Errors, Results are matching");
        }
        else {
            expect(csvDataError).toEqual(excelHeaderBulk.errorTeacher);
            console.log("Errors, Results not are matching");
        }
        //======================================
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);
        await protractor_1.browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click();
            protractor_1.browser.sleep(2000);
        });
        //Validate that the options for Uploaded File and Error File are available
        let completedFile = (0, protractor_1.element)(protractor_1.by.xpath("//span[contains(text(),'Completed File')]"));
        await protractor_1.browser.wait(EC.visibilityOf(errorFile), 20000).then(function () {
            completedFile.click();
            protractor_1.browser.sleep(5000);
        });
        let recentFileOfComplete;
        let recentFileNameDataComplete;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameDataComplete = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath);
        });
        await recentFileNameDataComplete.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfComplete = fileName;
        });
        let teacherCsvHeaderComplete;
        if (recentFileOfComplete.endsWith(MheBase_1.fileExtension.csv)) {
            teacherCsvHeaderComplete = excelData.getCsvHeader(downloadedFilePath);
        }
        let csvDataComplete = [];
        for (let i of teacherCsvHeaderComplete) {
            csvDataComplete.push((i.replace(/[^\w ]/, '').trim()));
        }
        if (JSON.stringify(csvDataComplete) == JSON.stringify(excelHeaderBulk.studentHeadersIds)) {
            expect(csvDataComplete).toEqual(excelHeaderBulk.studentHeadersIds);
            console.log("Completed File, Results are matching");
        }
        else {
            expect(csvDataComplete).toEqual(excelHeaderBulk.studentHeadersIds);
            console.log("Completed File, Results not are matching");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9hYjMtc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3BvYWIzLXNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUVoRCw4Q0FBaUQ7QUFFakQsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6QyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIseUNBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFXLFlBQVksQ0FBQTtBQUV0QyxPQUFPLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0FBQzFDLElBQUksa0JBQTBCLENBQUM7QUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNoQixZQUFZO0lBQ1osRUFBRSxDQUFDLGdGQUFnRixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVGLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixzQkFBc0I7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFB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