let XLSX = require('xlsx');
import * as fs from "fs";
const fileSystem = require('fs');
const path = require('path');
const csv = require('csv-parser')


let downloadDirPath = "";
if (process.env.OS?.startsWith("Windows")) {
    downloadDirPath = process.env.HOMEDRIVE + '' + process.env.HOMEPATH + "\\Downloads\\"
} else {
    console.log('Not windows')
}

const getSortedDateWise = async (dir) => {
    const files = await fileSystem.promises.readdir(dir);
    let result = files
        .map(fileName => ({
            name: fileName,
            time: fs.statSync(`${dir}/${fileName}`).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)
        .map(file => file.name);
    return result[0];
};
export class ExcelData {
    getExcelheader(url: string) {
        let workbook = XLSX.readFile(url)
        let sheetsList = workbook.SheetNames
        let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
            header: 1,
            defval: '',
            blankrows: true
        });
       
        let bulkUploadHeader = sheetData[0];

        let excelHeaders: any[] = [];
        for (let i of bulkUploadHeader) {
            excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
        }
        return excelHeaders
    }

    getExcelData(url: string) {
        let workbook = XLSX.readFile(url)
        let sheetsList = workbook.SheetNames
        let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
            defval: '',
            blankrows: true
        });
        return sheetData;
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
        return csvData
    }
    getData(url: string) {
        let result: any[] = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(url)
                .on('error', error => {
                    reject(error);
                })
                .pipe(csv({}))
                .on('data', (row) => {
                    result.push(row);
                })
                .on('end', () => {
                    resolve(result);
                });
        });
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

    getRecentFilesFromDownloads(downloadDirPath) {
        let result = getSortedDateWise(downloadDirPath)
        return result;
    }
    downloadDirPath = downloadDirPath
}

