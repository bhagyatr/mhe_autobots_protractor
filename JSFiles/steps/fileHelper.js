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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelData = void 0;
let XLSX = require('xlsx');
const fs = __importStar(require("fs"));
const fileSystem = require('fs');
const path = require('path');
class ExcelData {
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
        console.log(csvData, "csvData------------");
        return csvData;
    }
}
exports.ExcelData = ExcelData;
(function () {
    const directory = 'E:/delFile';
    console.log("Welcome to GeeksforGeeks!");
    fs.readdir(directory, (err, files) => {
        const EXTENSIONXLSX = '.xlsx';
        const EXTENSIONCSV = '.csv';
        const targetFiles = files.filter(file => {
            let driveFile = path.extname(file).toLowerCase();
            return (driveFile === EXTENSIONXLSX || driveFile === EXTENSIONCSV);
        });
        console.log(targetFiles, "targetFilestargetFiles");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBzL2ZpbGVIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQix1Q0FBeUI7QUFFekIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3QixNQUFhLFNBQVM7SUFDbEIsY0FBYyxDQUFDLEdBQVc7UUFDdEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNqQyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFBO1FBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckUsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLDBCQUEwQixDQUFDLENBQUM7UUFFckQsSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxZQUFZLEdBQVUsRUFBRSxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCLEVBQUU7WUFDNUIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sWUFBWSxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxZQUFZLENBQUMsR0FBVztRQUNwQixJQUFJLFVBQVUsR0FBWSxFQUFFLENBQUM7UUFDN0IsVUFBVSxHQUFHLEVBQUU7YUFDVixZQUFZLENBQUMsR0FBRyxFQUFFO1lBQ2YsUUFBUSxFQUFFLE9BQU87U0FDcEIsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDWCxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVwRCxJQUFJLE9BQU8sR0FBVSxFQUFFLENBQUM7UUFDeEIsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0MsT0FBTyxPQUFPLENBQUE7SUFDbEIsQ0FBQztDQUdKO0FBckNELDhCQXFDQztBQUNELENBQUM7SUFDRyxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ2pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM5QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDNUIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLFNBQVMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1lBQzlDLE9BQU8sQ0FBRyxTQUFTLEtBQUssYUFBYSxJQUFJLFNBQVMsS0FBSyxZQUFZLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDbkQsSUFBSSxHQUFHO1lBQUUsTUFBTSxHQUFHLENBQUM7UUFFbkIsS0FBSyxNQUFNLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFMUIsaURBQWlEO1lBQ2pELHdCQUF3QjtZQUN4QixNQUFNO1NBQ1Q7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMifQ==