
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';
const fs = require('fs');
const path = require('path');
import { environment } from "../pages/environment"

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
const EC = protractor.ExpectedConditions;

let downloadedFilePath: string;
describe('To check Header data matches the spec', function () {
    it('Should be able to log in as an admin', async () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://my-qastg.mheducation.com/secure/').then(function () {
            console.log('URL launched')
            browser.sleep(15000)
        });
        browser.ignoreSynchronization = true;
        var username = element(by.id('username'));
        browser.wait(EC.visibilityOf(username), 25000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("autobotsqastg");
        browser.driver.findElement(by.id('password')).sendKeys("Temp1234");
        element(by.xpath(" //*[@query-id='login.submit']")).click()
    });

    it('Click on Export student', async () => {
        await browser.wait(EC.presenceOf(element(by.css('.header-title'))), 30000);
        let elm_Student = element(by.xpath("//span[contains(text(),'student ID')]"));
        await browser.wait(EC.elementToBeClickable(elm_Student), 25000).then(function () {
            console.log('Clicked Student ID')
        });
        let export_Student = element(by.xpath("(//button[@aria-haspopup='listbox'])[2]"));
        await browser.wait(EC.elementToBeClickable(export_Student), 25000);
        await export_Student.click().then(function () {
            console.log('Clicked export_Student')
            browser.sleep(5000)
        });
        let export_st = element(by.xpath("//span[contains(text(),'Export Students')]"));
        await browser.wait(EC.elementToBeClickable(export_st), 10000);
        await export_st.click().then(function () {
            console.log('Clicked export_st')
            browser.sleep(5000)
        });
    });

    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        let fileName = "";
        if (process.env.OS?.startsWith("Windows")) {
            fileName = process.env.HOMEDRIVE + '' + process.env.HOMEPATH + "\\Downloads\\"
        } else {
            console.log('Not windows')
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
                } else {
                    cb('You do not have files in this directory...');
                }
            })
        }
        getMostRecent(fileName, function (err, recent) {
            if (err) console.error(err);
            downloadedFilePath = fileName + '' + recent;
        });
    })

    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let exportStudentCsvData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            exportStudentCsvData = excelData.getCsvHeader(downloadedFilePath)
        });
        await console.log(exportStudentCsvData,"csv data------1111");
        
        console.log(excelHeaderBulk.exportStudentHeadersIds,"111111");
        
        await expect(exportStudentCsvData).toEqual(excelHeaderBulk.exportStudentHeadersIds)
    });
    
});




