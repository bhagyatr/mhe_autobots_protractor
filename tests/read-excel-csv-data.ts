
import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { ExcelHeaderBulk } from "../steps/MheExcelHeader"
import { ExcelData } from '../steps/fileHelper';

import { fileExtension } from "../pages/MheBase";
import { LOADIPHLPAPI } from 'dns';

let excelHeaderBulk = new ExcelHeaderBulk();
let excelData = new ExcelData();
const EC = protractor.ExpectedConditions;

let downloadedFilePath: string;
let recentFile: string;
describe('To check Header data matches the spec', function () {
    //To Get most recent fils from the download
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        excelData.getMostRecent(excelData.downloadDirPath, function (err, recent) {
            if (err) console.error(err);
            downloadedFilePath = excelData.downloadDirPath + '' + recent;
            recentFile = recent;
            console.log("Found Recent downloaded file name",downloadedFilePath);
        });
    })
  
    

    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let excelDataValues;

        await browser.manage().timeouts().implicitlyWait(30000).then(function () {

            if (recentFile.endsWith(fileExtension.xlsx)) {
                console.log(downloadedFilePath,"downloadedFilePathdownloadedFilePath");
                
                excelDataValues = excelData.getExcelData(downloadedFilePath)
            }
        });
        console.log(excelDataValues, "excelDataValuesexcelDataValues");
    });

    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let csvDataValues;
        let csvData;
        await browser.manage().timeouts().implicitlyWait(30000).then(function () {
            if (recentFile.endsWith(".csv")) {
                csvData = excelData.getData(downloadedFilePath)
            }
        });
        if (csvData) {
            await csvData.then(function (records) {
                csvDataValues = records;
            })
        }
        console.log(csvDataValues, "csvDataValuescsvDataValues");
    });





});




