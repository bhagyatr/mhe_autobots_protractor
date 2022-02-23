"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const MheBase_1 = require("../pages/MheBase");
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
let downloadedFilePath;
let recentFile;
describe('To check Header data matches the spec', function () {
    //To Get most recent fils from the download
    it('Delete all previously downloaded XLSX files from Download folder', async () => {
        excelData.getMostRecent(excelData.downloadDirPath, function (err, recent) {
            if (err)
                console.error(err);
            downloadedFilePath = excelData.downloadDirPath + '' + recent;
            recentFile = recent;
            console.log("Found Recent downloaded file name", downloadedFilePath);
        });
    });
    //This checks with export-student csv file header with given header name
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let excelDataValues;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            if (recentFile.endsWith(MheBase_1.fileExtension.xlsx)) {
                console.log(downloadedFilePath, "downloadedFilePathdownloadedFilePath");
                excelDataValues = excelData.getExcelData(downloadedFilePath);
            }
        });
        console.log(excelDataValues, "excelDataValuesexcelDataValues");
    });
    it('To check excel headers matches or not for "BulkUploadForAdmin"', async () => {
        let csvDataValues;
        let csvData;
        await protractor_1.browser.manage().timeouts().implicitlyWait(30000).then(function () {
            if (recentFile.endsWith(".csv")) {
                csvData = excelData.getData(downloadedFilePath);
            }
        });
        if (csvData) {
            await csvData.then(function (records) {
                csvDataValues = records;
            });
        }
        console.log(csvDataValues, "csvDataValuescsvDataValues");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1leGNlbC1jc3YtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3RzL3JlYWQtZXhjZWwtY3N2LWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUVoRCw4Q0FBaUQ7QUFHakQsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV6QyxJQUFJLGtCQUEwQixDQUFDO0FBQy9CLElBQUksVUFBa0IsQ0FBQztBQUN2QixRQUFRLENBQUMsdUNBQXVDLEVBQUU7SUFDOUMsMkNBQTJDO0lBQzNDLEVBQUUsQ0FBQyxrRUFBa0UsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM5RSxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsVUFBVSxHQUFHLEVBQUUsTUFBTTtZQUNwRSxJQUFJLEdBQUc7Z0JBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QixrQkFBa0IsR0FBRyxTQUFTLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDN0QsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQTtJQUlGLHdFQUF3RTtJQUN4RSxFQUFFLENBQUMsZ0VBQWdFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDNUUsSUFBSSxlQUFlLENBQUM7UUFFcEIsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFekQsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLHVCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFFdkUsZUFBZSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQTthQUMvRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRSxLQUFLLElBQUksRUFBRTtRQUM1RSxJQUFJLGFBQWEsQ0FBQztRQUNsQixJQUFJLE9BQU8sQ0FBQztRQUNaLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTthQUNsRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxPQUFPLEVBQUU7WUFDVCxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxPQUFPO2dCQUNoQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0FBTVAsQ0FBQyxDQUFDLENBQUMifQ==