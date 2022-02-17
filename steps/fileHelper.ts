let XLSX = require('xlsx');
import * as fs from "fs";
const fileSystem = require('fs');
const path = require('path');

let downloadDirPath = "";
if (process.env.OS?.startsWith("Windows")) {
    downloadDirPath = process.env.HOMEDRIVE + '' + process.env.HOMEPATH + "\\Downloads\\"
} else {
    console.log('Not windows')
}
export class ExcelData {
    getExcelheader(url: string) {
        let workbook = XLSX.readFile(url)
        let sheetsList = workbook.SheetNames
        let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
            header: 1,
            defval: '',
            blankrows: true
        });
        console.log(sheetData[0], "sheetData[0]sheetData[0]");

        let bulkUploadHeader = sheetData[0];

        let excelHeaders: any[] = [];
        for (let i of bulkUploadHeader) {
            excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
        }
        return excelHeaders
    }
    getCsvHeader(url: string) {
        let csvHeaders: any[][] = [];
        csvHeaders = fs
            .readFileSync(url, {
                encoding: 'utf-8'
            })
            .split('\n')
            .map((row: string): string[] => row.split(','));

        let csvData: any[] = [];
        for (let i of csvHeaders[0]) {
            csvData.push((i.replace(/[^\w ]/, '').trim()));
        }
        // console.log(csvData, "csvData------------");
        return csvData
    }
    getMostRecent(dir, cb) {
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

    downloadDirPath = downloadDirPath


}
//Non-used function
(function () {
    const directory = 'E:/delFile';
    fs.readdir(directory, (err, files) => {
        const EXTENSIONXLSX = '.xlsx';
        const EXTENSIONCSV = '.csv';
        const targetFiles = files.filter(file => {
            let driveFile = path.extname(file).toLowerCase()
            return (driveFile === EXTENSIONXLSX || driveFile === EXTENSIONCSV);
        });
        if (err) throw err;

        for (const file of targetFiles) {
            console.log(file, "file");
            // fs.unlink(path.join(directory, file), err => {
            //   if (err) throw err;
            // });
        }
    });
})();