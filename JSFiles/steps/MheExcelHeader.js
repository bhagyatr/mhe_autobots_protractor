"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelHeaderBulk = exports.allExcelHeader = void 0;
const MheBase_1 = require("../pages/MheBase");
exports.allExcelHeader = {
    [MheBase_1.excelHeadersEnum.userGuid]: {
        rowHeaderText: 'User GUID',
        adminHeader: true,
        adminSeq: 1,
    },
    [MheBase_1.excelHeadersEnum.userId]: {
        rowHeaderText: 'User ID',
        adminSeq: 2,
        adminHeader: true,
        exportStudentHeader: true,
        exportStudentSeq: 1
    },
    [MheBase_1.excelHeadersEnum.role]: {
        rowHeaderText: 'Role',
        adminHeader: true,
        adminSeq: 3,
        exportStudentHeader: true,
        exportStudentSeq: 2,
    },
    [MheBase_1.excelHeadersEnum.firstName]: {
        rowHeaderText: 'First Name',
        adminHeader: true,
        adminSeq: 4,
        studentHeader: true,
        studentSeq: 3,
        exportStudentHeader: true,
        exportStudentSeq: 3,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 3
    },
    [MheBase_1.excelHeadersEnum.middleName]: {
        rowHeaderText: 'Middle Name',
        adminHeader: false,
        adminSeq: 4,
        studentHeader: false,
        studentSeq: 3,
        exportStudentHeader: true,
        exportStudentSeq: 4
    },
    [MheBase_1.excelHeadersEnum.lastName]: {
        rowHeaderText: 'Last Name',
        adminHeader: true,
        adminSeq: 5,
        studentHeader: true,
        studentSeq: 4,
        exportStudentHeader: true,
        exportStudentSeq: 5,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 4
    },
    [MheBase_1.excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        adminHeader: true,
        adminSeq: 6,
        studentHeader: true,
        studentSeq: 5,
        exportStudentHeader: true,
        exportStudentSeq: 6,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 5
    },
    [MheBase_1.excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        adminHeader: true,
        adminSeq: 7,
        studentHeader: true,
        studentSeq: 6,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 6
    },
    [MheBase_1.excelHeadersEnum.username]: {
        rowHeaderText: 'User Name',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7,
        exportStudentHeader: true,
        exportStudentSeq: 8,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 7
    },
    [MheBase_1.excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 8
    },
    [MheBase_1.excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        adminHeader: true,
        adminSeq: 10,
        studentHeader: true,
        studentSeq: 9,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 9
    },
    [MheBase_1.excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        adminHeader: true,
        adminSeq: 11,
        studentHeader: true,
        studentSeq: 10,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 10
    },
    [MheBase_1.excelHeadersEnum.className]: {
        rowHeaderText: 'Class Name',
        adminHeader: true,
        adminSeq: 12,
        studentHeader: true,
        studentSeq: 11,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 11
    },
    [MheBase_1.excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: 'Class Grade Level',
        adminHeader: true,
        adminSeq: 13,
        studentHeader: true,
        studentSeq: 12,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 12
    },
    [MheBase_1.excelHeadersEnum.classStartDate]: {
        rowHeaderText: 'Class Start Date',
        adminHeader: true,
        adminSeq: 14,
        studentHeader: true,
        studentSeq: 13,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 13
    },
    [MheBase_1.excelHeadersEnum.classEndDate]: {
        rowHeaderText: 'Class End Date',
        adminHeader: true,
        adminSeq: 15,
        studentHeader: true,
        studentSeq: 14,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 14
    },
    [MheBase_1.excelHeadersEnum.masterCode]: {
        rowHeaderText: 'Master Code',
        adminHeader: true,
        adminSeq: 16,
        studentHeader: true,
        studentSeq: 15,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 15
    },
    [MheBase_1.excelHeadersEnum.studentGuid]: {
        rowHeaderText: 'Student GUID',
        studentHeader: true,
        studentSeq: 1,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 1
    },
    [MheBase_1.excelHeadersEnum.studentId]: {
        rowHeaderText: 'Student ID',
        studentHeader: true,
        studentSeq: 2,
        importStudentBlankTemp: true,
        importStudentBlankTempSeq: 2
    },
    [MheBase_1.excelHeadersEnum.emailAddress]: {
        rowHeaderText: 'Email Address',
        exportStudentHeader: true,
        exportStudentSeq: 7
    },
    [MheBase_1.excelHeadersEnum.guid]: {
        rowHeaderText: 'GUID',
        exportStudentHeader: true,
        exportStudentSeq: 9
    },
};
let errorTeacher = [
    'Student GUID', 'Student ID',
    'First Name', 'Last Name',
    'Grade Level', 'Email',
    'User Name', 'Password',
    'Class GUID', 'Class ID',
    'Class Name', 'Class Grade Level',
    'Class Start Date', 'Class End Date',
    'Master Code', 'Errors'
];
let csvBlankTemp = [
    'Student GUID', 'StudentID',
    'First Name', 'Last Name',
    'Grade Level', 'Email',
    'Username', 'Password',
    'Class GUID', 'Class ID',
    'Class Name', 'Class Grade Level',
    'Class Start Date', 'Class End Date',
    'Master Code'
];
const keysOfExel = Object.keys(exports.allExcelHeader);
//For Admin to to get Header data according to excel sequence
const adminHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].adminHeader === true) {
        adminHeaders.push(exports.allExcelHeader[tp]);
        adminHeaders.sort((a, b) => (a.adminSeq > b.adminSeq) ? 1 : ((b.adminSeq > a.adminSeq) ? -1 : 0));
    }
}
var adminHeadersIds = adminHeaders.map((val) => {
    return val.rowHeaderText;
});
//For Studnet to to get Header data according to excel sequence
const studentHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].studentHeader === true) {
        studentHeaders.push(exports.allExcelHeader[tp]);
        studentHeaders.sort((a, b) => (a.studentSeq > b.studentSeq) ? 1 : ((b.studentSeq > a.studentSeq) ? -1 : 0));
    }
}
var studentHeadersIds = studentHeaders.map((val) => {
    return val.rowHeaderText;
});
//Export Student from admin login
const exportStudentHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].exportStudentHeader === true) {
        exportStudentHeaders.push(exports.allExcelHeader[tp]);
        exportStudentHeaders.sort((a, b) => (a.exportStudentSeq > b.exportStudentSeq) ? 1 : ((b.exportStudentSeq > a.exportStudentSeq) ? -1 : 0));
    }
}
let exportStudentHeadersIds = exportStudentHeaders.map((val) => {
    return val.rowHeaderText;
});
//Import student filter for blank template
const importStdBlankTempHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].importStudentBlankTemp === true) {
        importStdBlankTempHeaders.push(exports.allExcelHeader[tp]);
        importStdBlankTempHeaders.sort((a, b) => (a.importStudentBlankTempSeq > b.importStudentBlankTempSeq) ? 1 : ((b.importStudentBlankTempSeq > a.importStudentBlankTempSeq) ? -1 : 0));
    }
}
var importStdBlankTempHeadersIds = importStdBlankTempHeaders.map((val) => {
    return val.rowHeaderText;
});
class ExcelHeaderBulk {
    constructor() {
        this.adminHeadersIds = adminHeadersIds;
        this.studentHeadersIds = studentHeadersIds;
        this.exportStudentHeadersIds = exportStudentHeadersIds;
        this.importStdBlankTempHeadersIds = importStdBlankTempHeadersIds;
        this.errorTeacher = errorTeacher;
        this.csvBlankTemp = csvBlankTemp;
    }
}
exports.ExcelHeaderBulk = ExcelHeaderBulk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWhlRXhjZWxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9NaGVFeGNlbEhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBb0Q7QUFFdkMsUUFBQSxjQUFjLEdBQUc7SUFDMUIsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixhQUFhLEVBQUUsV0FBVztRQUMxQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN2QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsQ0FBQztRQUNYLFdBQVcsRUFBRSxJQUFJO1FBRWpCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0QjtJQUNELENBQUMsMEJBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsYUFBYSxFQUFFLE1BQU07UUFDckIsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLENBQUM7UUFFWCxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGdCQUFnQixFQUFFLENBQUM7S0FFdEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFCLGFBQWEsRUFBRSxZQUFZO1FBQzNCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFFBQVEsRUFBRSxDQUFDO1FBRVgsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLENBQUM7UUFFYixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGdCQUFnQixFQUFFLENBQUM7UUFFbkIsc0JBQXNCLEVBQUUsSUFBSTtRQUM1Qix5QkFBeUIsRUFBRSxDQUFDO0tBQy9CO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUMzQixhQUFhLEVBQUUsYUFBYTtRQUM1QixXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUUs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