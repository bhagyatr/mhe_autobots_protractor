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
        exportStudentSeq: 2
    },
    [MheBase_1.excelHeadersEnum.firstName]: {
        rowHeaderText: 'First Name',
        adminHeader: true,
        adminSeq: 4,
        studentHeader: true,
        studentSeq: 3,
        exportStudentHeader: true,
        exportStudentSeq: 3
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
        exportStudentSeq: 5
    },
    [MheBase_1.excelHeadersEnum.gradeLevel]: {
        rowHeaderText: 'Grade Level',
        adminHeader: true,
        adminSeq: 6,
        studentHeader: true,
        studentSeq: 5,
        exportStudentHeader: true,
        exportStudentSeq: 6
    },
    [MheBase_1.excelHeadersEnum.email]: {
        rowHeaderText: 'Email',
        adminHeader: true,
        adminSeq: 7,
        studentHeader: true,
        studentSeq: 6
    },
    [MheBase_1.excelHeadersEnum.username]: {
        rowHeaderText: 'Username',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7,
        exportStudentHeader: true,
        exportStudentSeq: 8
    },
    [MheBase_1.excelHeadersEnum.password]: {
        rowHeaderText: 'Password',
        adminHeader: true,
        adminSeq: 8,
        studentHeader: true,
        studentSeq: 7
    },
    [MheBase_1.excelHeadersEnum.classGUID]: {
        rowHeaderText: 'Class GUID',
        adminHeader: true,
        adminSeq: 10,
        studentHeader: true,
        studentSeq: 9
    },
    [MheBase_1.excelHeadersEnum.classID]: {
        rowHeaderText: 'Class ID',
        adminHeader: true,
        adminSeq: 11,
        studentHeader: true,
        studentSeq: 10
    },
    [MheBase_1.excelHeadersEnum.className]: {
        rowHeaderText: 'Class Name',
        adminHeader: true,
        adminSeq: 12,
        studentHeader: true,
        studentSeq: 11
    },
    [MheBase_1.excelHeadersEnum.classGradeLevel]: {
        rowHeaderText: 'Class Grade Level',
        adminHeader: true,
        adminSeq: 13,
        studentHeader: true,
        studentSeq: 12
    },
    [MheBase_1.excelHeadersEnum.classStartDate]: {
        rowHeaderText: 'Class Start Date',
        adminHeader: true,
        adminSeq: 14,
        studentHeader: true,
        studentSeq: 13
    },
    [MheBase_1.excelHeadersEnum.classEndDate]: {
        rowHeaderText: 'Class End Date',
        adminHeader: true,
        adminSeq: 15,
        studentHeader: true,
        studentSeq: 14
    },
    [MheBase_1.excelHeadersEnum.masterCode]: {
        rowHeaderText: 'Master Code',
        adminHeader: true,
        adminSeq: 16,
        studentHeader: true,
        studentSeq: 15
    },
    [MheBase_1.excelHeadersEnum.studentGuid]: {
        rowHeaderText: 'Student GUID',
        studentHeader: true,
        studentSeq: 1
    },
    [MheBase_1.excelHeadersEnum.studentId]: {
        rowHeaderText: 'StudentID',
        studentHeader: true,
        studentSeq: 2
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
const exportStudentHeaders = [];
for (let tp of keysOfExel) {
    if (exports.allExcelHeader[tp].exportStudentHeader === true) {
        exportStudentHeaders.push(exports.allExcelHeader[tp]);
        exportStudentHeaders.sort((a, b) => (a.exportStudentSeq > b.exportStudentSeq) ? 1 : ((b.exportStudentSeq > a.exportStudentSeq) ? -1 : 0));
    }
}
var exportStudentHeadersIds = exportStudentHeaders.map((val) => {
    return val.rowHeaderText;
});
class ExcelHeaderBulk {
    constructor() {
        this.adminHeadersIds = adminHeadersIds;
        this.studentHeadersIds = studentHeadersIds;
        this.exportStudentHeadersIds = exportStudentHeadersIds;
    }
}
exports.ExcelHeaderBulk = ExcelHeaderBulk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWhlRXhjZWxIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9NaGVFeGNlbEhlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4Q0FBb0Q7QUFFdkMsUUFBQSxjQUFjLEdBQUc7SUFDMUIsQ0FBQywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixhQUFhLEVBQUUsV0FBVztRQUMxQixXQUFXLEVBQUUsSUFBSTtRQUNqQixRQUFRLEVBQUUsQ0FBQztLQUNkO0lBQ0QsQ0FBQywwQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUN2QixhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUUsQ0FBQztRQUNYLFdBQVcsRUFBRSxJQUFJO1FBRWpCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsZ0JBQWdCLEVBQUUsQ0FBQztLQUN0QjtJQUNELENBQUMsMEJBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDckIsYUFBYSxFQUFFLE1BQU07UUFDckIsV0FBVyxFQUFFLElBQUk7UUFDakIsUUFBUSxFQUFFLENBQUM7UUFFWCxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGdCQUFnQixFQUFFLENBQUM7S0FDdEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzFCLGFBQWEsRUFBRSxZQUFZO1FBQzNCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFFBQVEsRUFBRSxDQUFDO1FBRVgsYUFBYSxFQUFFLElBQUk7UUFDbkIsVUFBVSxFQUFFLENBQUM7UUFFYixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGdCQUFnQixFQUFFLENBQUM7S0FDdEI7SUFDRCxDQUFDLDBCQUFnQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQzNCLGFBQWEsRUFBRSxhQUFhO1FBQzVCLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLFFBQVEsRUFBRSxDQUFDO1FBRVgsYUFBYSxFQUFFLEtBQUs7UUFDcEIsVUFBVSxFQUFFLENBQUM7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