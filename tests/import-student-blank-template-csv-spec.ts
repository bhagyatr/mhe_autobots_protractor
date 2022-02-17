
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';
import { environment } from "../pages/environment"

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
const EC = protractor.ExpectedConditions;

let downloadedFilePath: string;
describe('To check Header data matches the spec', function () {
    // Login MHE
    it('Should be able to log in as an admin', async () => {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://my-qalv.mheducation.com/').then(function () {
            console.log('URL launched')
            //browser.sleep(15000)
        });
        browser.ignoreSynchronization = true;
        await browser.wait(EC.presenceOf(element(by.id("username"))), 15000);
        var username = element(by.id('username'));
        browser.wait(EC.visibilityOf(username), 15000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("admin@autobotsqalv.org");
        browser.driver.findElement(by.id('password')).sendKeys("Testing123!");
        element(by.xpath(" //*[@query-id='login.submit']")).click()
    });

    //Clicks on Import student
    it('Click on Import students', async () => {
        await browser.wait(EC.presenceOf(element(by.xpath("//*[contains(text(),'Import Students')]"))), 10000);
        let import_Student = element(by.xpath("//*[contains(text(),'Import Students')]"));
        await browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click()
            console.log('Clicked Import student')
        });
    });

    //Download the blank template of CSV
    it('Download blank template', async () => {
        await browser.wait(EC.presenceOf(element(by.xpath("//*[contains(text(),'CSV')]"))), 15000);
        var blank_CSV = element(by.xpath("//*[contains(text(),'CSV')]"));
        await browser.wait(EC.visibilityOf(blank_CSV), 15000).then(function () {
            console.log('Clicked Blank CSV')
            blank_CSV.click()
            browser.sleep(5000)
        });
    });

    //To Get most recent fils from the download
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        excelData.getMostRecent(excelData.downloadDirPath, function (err, recent) {
            if (err) console.error(err);
            downloadedFilePath = excelData.downloadDirPath + '' + recent;
            console.log("Found Recent downloaded file name");
        });
    })

    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let exportStudentCsvData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            console.log("To check wheather header matches or not:");
            exportStudentCsvData = excelData.getCsvHeader(downloadedFilePath)
        });

        if (JSON.stringify(exportStudentCsvData) == JSON.stringify(excelHeaderBulk.importStdBlankTempHeadersIds)) {
            await expect(exportStudentCsvData).toEqual(excelHeaderBulk.importStdBlankTempHeadersIds)
            console.log("Results are matching");
        } else {
            await expect(exportStudentCsvData).toEqual(excelHeaderBulk.importStdBlankTempHeadersIds)
            console.log("Results not are matching");
        }
    });

});




