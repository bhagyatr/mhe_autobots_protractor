import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';
import { fileExtension } from "../pages/MheBase";
import * as path from "path"

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
const EC = protractor.ExpectedConditions;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
let downloadedFilePath: string;
describe('POAB-04', function () {
    // Login MHE
    it('POAB-04:Teacher - Blank Template CSV and XLSX should have correct header', async () => {
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
        });
        let templateValue;
        let blankTemp = element(by.xpath("//b[contains(text(),'Blank Template')]"));

        await browser.wait(EC.presenceOf(blankTemp), 30000).then(function (text) {
            blankTemp.getText().then(function (txt) {
                templateValue = txt;
            })
        })

        if (templateValue != "Blank Template") {
            console.log("Not a Blank Template");
        }

        let blank_CSV = element(by.xpath("//*[contains(text(),'CSV')]"))
        await browser.wait(EC.presenceOf(blank_CSV), 15000);
        await browser.wait(EC.visibilityOf(blank_CSV), 10000).then(function () {
            console.log('Clicked Blank CSV')
            blank_CSV.click()
            browser.sleep(5000)
        });

        let recentFileOfBlankCsv;
        let recentFileOfBlankCsvData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileOfBlankCsvData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath)
        });

        await recentFileOfBlankCsvData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfBlankCsv = fileName;
        })
       
        let teacherCsvBlankTemp;
        if (recentFileOfBlankCsv.endsWith(fileExtension.csv)) {
            teacherCsvBlankTemp = excelData.getCsvHeader(downloadedFilePath)
        }
        
        if (JSON.stringify(teacherCsvBlankTemp) == JSON.stringify(excelHeaderBulk.csvBlankTemp)) {
            expect(teacherCsvBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp)
            console.log("Blank Template CSV, Results are matching");
        } else {
            expect(teacherCsvBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp)
            console.log("Blank Template CSV, Results not are matching");
        }

        //Blank Excel file
        
        let blank_XLSX = element(by.xpath("//a[contains(text(),'xlsx')]"))
        await browser.wait(EC.presenceOf(blank_XLSX), 15000);
        await browser.wait(EC.visibilityOf(blank_XLSX), 10000).then(function () {
            console.log('Clicked Blank XLSX')
            blank_XLSX.click()
            browser.sleep(5000)
        });

        let recentFileOfBlankXlsx;
        let recentFileOfBlankXlsxData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            recentFileOfBlankXlsxData = excelData.getRecentFilesFromDownloads(excelData.downloadDirPath)
        });

        await recentFileOfBlankXlsxData.then(function (fileName) {
            downloadedFilePath = excelData.downloadDirPath + '' + fileName;
            recentFileOfBlankXlsx = fileName;
        })
       
        let teacherXlsxBlankTemp;
        if (recentFileOfBlankXlsx.endsWith(fileExtension.xlsx)) {
            teacherXlsxBlankTemp = excelData.getExcelheader(downloadedFilePath)
        }
    
        if (JSON.stringify(teacherXlsxBlankTemp) == JSON.stringify(excelHeaderBulk.csvBlankTemp)) {
            expect(teacherXlsxBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp)
            console.log("Blank Template Xlsx, Results are matching");
        } else {
            expect(teacherXlsxBlankTemp).toEqual(excelHeaderBulk.csvBlankTemp)
            console.log("Blank Template Xlsx, Results not are matching");
        }

    })
}); 