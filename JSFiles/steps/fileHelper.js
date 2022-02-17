"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelData = void 0;
let XLSX = require('xlsx');
const fs = __importStar(require("fs"));
const fileSystem = require('fs');
const path = require('path');
let downloadDirPath = "";
if ((_a = process.env.OS) === null || _a === void 0 ? void 0 : _a.startsWith("Windows")) {
    downloadDirPath = process.env.HOMEDRIVE + '' + process.env.HOMEPATH + "\\Downloads\\";
}
else {
    console.log('Not windows');
}
class ExcelData {
    constructor() {
        this.downloadDirPath = downloadDirPath;
    }
    getExcelheader(url) {
        let workbook = XLSX.readFile(url);
        let sheetsList = workbook.SheetNames;
        let sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetsList[0]], {
            header: 1,
            defval: '',
            blankrows: true
        });
        console.log(sheetData[0], "sheetData[0]sheetData[0]");
        let bulkUploadHeader = sheetData[0];
        let excelHeaders = [];
        for (let i of bulkUploadHeader) {
            excelHeaders.push((i.replace(/[^\w ]/, '').trim()));
        }
        return excelHeaders;
    }
    getCsvHeader(url) {
        let csvHeaders = [];
        csvHeaders = fs
            .readFileSync(url, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => row.split(','));
        let csvData = [];
        for (let i of csvHeaders[0]) {
            csvData.push((i.replace(/[^\w ]/, '').trim()));
        }
        // console.log(csvData, "csvData------------");
        return csvData;
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
            }
            else {
                cb('You do not have files in this directory...');
            }
        });
    }
}
exports.ExcelData = ExcelData;
//Non-used function
(function () {
    const directory = 'E:/delFile';
    fs.readdir(directory, (err, files) => {
        const EXTENSIONXLSX = '.xlsx';
        const EXTENSIONCSV = '.csv';
        const targetFiles = files.filter(file => {
            let driveFile = path.extname(file).toLowerCase();
            return (driveFile === EXTENSIONXLSX || driveFile === EXTENSIONCSV);
        });
        if (err)
            throw err;
        for (const file of targetFiles) {
            console.log(file, "file");
            // fs.unlink(path.join(directory, file), err => {
            //   if (err) throw err;
            // });
        }
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzL2ZpbGVIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsdUNBQXlCO0FBQ3pCLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksTUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsMENBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQ3ZDLGVBQWUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFBO0NBQ3hGO0tBQU07SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0NBQzdCO0FBQ0QsTUFBYSxTQUFTO0lBQXRCO1FBdURJLG9CQUFlLEdBQUcsZUFBZSxDQUFBO0lBR3JDLENBQUM7SUF6REcsY0FBYyxDQUFDLEdBQVc7UUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO1FBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckUsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztR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