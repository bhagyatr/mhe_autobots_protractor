import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';
import { environment } from "../pages/environment"
import { fileExtension } from "../pages/MheBase";
import * as path from "path"
let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
const EC = protractor.ExpectedConditions;
const os = require('os');
//let appRoot = require('app-root-path');
let file_POAB09: string = "poab-9.csv"

jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
let downloadedFilePath: string;
describe('POAB-03', function () {
    // Login MHE
    it('POAB-03:Teacher -  Validate header of Completed File, Uploaded File, and Error', async () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://my-qastg.mheducation.com/secure/').then(function () {
            console.log('URL launched')
            //browser.sleep(15000)
        });
        browser.ignoreSynchronization = true;
        await browser.wait(EC.presenceOf(element(by.id("username"))), 15000);
        var username = element(by.id('username'));
        browser.wait(EC.visibilityOf(username), 15000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("teacherqafixturepoab3");
        browser.driver.findElement(by.id('password')).sendKeys("Testing123!");
        element(by.xpath(" //*[@query-id='login.submit']")).click()
        //Clicks on Import student
        await browser.wait(EC.presenceOf(element(by.xpath("//*[contains(text(),'Import Students')]"))), 15000);
        let import_Student = element(by.xpath("//*[contains(text(),'Import Students')]"));
        await browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click()
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


        let uploadHistoryTab = element(by.xpath('//span[contains(text(),"Upload History")]/..'));
        await browser.wait(EC.presenceOf(uploadHistoryTab), 10000).then(function () {
            uploadHistoryTab.click()
            browser.sleep(2000)
        })

        //--------------------------------------------------------------------------------
        //Click on Kebab menu
        await browser.wait(EC.presenceOf(element(by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);
        let kebabMenu_Button = element(by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"));
        await browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click()
            browser.sleep(2000)
        });
        //Validate that the options for Uploaded File and Error File are available
        let uploadFile = element(by.xpath("//span[contains(text(),'Uploaded File')]"));
        await browser.wait(EC.visibilityOf(uploadFile), 20000).then(function () {
            uploadFile.click()
            browser.sleep(5000)
        });

        let recentFile;
        let recentFileNameData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath)
        });

        await recentFileNameData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFile = fileName;
        })

        let teacherCsvHeader;
        if (recentFile.endsWith(fileExtension.csv)) {
            teacherCsvHeader = excelData.getCsvHeader(downloadedFilePath)
        }

        let csvData: any[] = [];
        for (let i of teacherCsvHeader) {
            csvData.push((i.replace(/[^\w ]/, '').trim()));
        }

        if (JSON.stringify(csvData) == JSON.stringify(excelHeaderBulk.studentHeadersIds)) {
            expect(csvData).toEqual(excelHeaderBulk.studentHeadersIds)
            console.log("Uploaded File, Results are matching");
        } else {
            expect(csvData).toEqual(excelHeaderBulk.studentHeadersIds)
            console.log("Uploaded File, Results not are matching");
        }
        //========================================
        await browser.wait(EC.presenceOf(element(by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);

        await browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click()
            browser.sleep(2000)
        });
        //Validate that the options for Uploaded File and Error File are available
        let errorFile = element(by.xpath("//span[contains(text(),'Error File')]"));
        await browser.wait(EC.visibilityOf(errorFile), 20000).then(function () {
            errorFile.click()
            browser.sleep(5000)
        });

        let recentFileOfError;
        let recentFileNameDataError;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameDataError = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath)
        });

        await recentFileNameDataError.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfError = fileName;
        })

        let teacherCsvHeaderError;
        if (recentFileOfError.endsWith(fileExtension.csv)) {
            teacherCsvHeaderError = excelData.getCsvHeader(downloadedFilePath)
        }

        let csvDataError: any[] = [];
        for (let i of teacherCsvHeaderError) {
            csvDataError.push((i.replace(/[^\w ]/, '').trim()));
        }

        if (JSON.stringify(csvDataError) == JSON.stringify(excelHeaderBulk.errorTeacher)) {
            expect(csvDataError).toEqual(excelHeaderBulk.errorTeacher)
            console.log("Errors, Results are matching");
        } else {
            expect(csvDataError).toEqual(excelHeaderBulk.errorTeacher)
            console.log("Errors, Results not are matching");
        }

        //======================================
        await browser.wait(EC.presenceOf(element(by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);

        await browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            kebabMenu_Button.click()
            browser.sleep(2000)
        });
        //Validate that the options for Uploaded File and Error File are available
        let completedFile = element(by.xpath("//span[contains(text(),'Completed File')]"));
        await browser.wait(EC.visibilityOf(errorFile), 20000).then(function () {
            completedFile.click()
            browser.sleep(5000)
        });

        let recentFileOfComplete;
        let recentFileNameDataComplete;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileNameDataComplete = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath)
        });

        await recentFileNameDataComplete.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfComplete = fileName;
        })

        let teacherCsvHeaderComplete;
        if (recentFileOfComplete.endsWith(fileExtension.csv)) {
            teacherCsvHeaderComplete = excelData.getCsvHeader(downloadedFilePath)
        }

        let csvDataComplete: any[] = [];
        for (let i of teacherCsvHeaderComplete) {
            csvDataComplete.push((i.replace(/[^\w ]/, '').trim()));
        }

        if (JSON.stringify(csvDataComplete) == JSON.stringify(excelHeaderBulk.studentHeadersIds)) {
            expect(csvDataComplete).toEqual(excelHeaderBulk.studentHeadersIds)
            console.log("Completed File, Results are matching");
        } else {
            expect(csvDataComplete).toEqual(excelHeaderBulk.studentHeadersIds)
            console.log("Completed File, Results not are matching");
        }
    });
}); 