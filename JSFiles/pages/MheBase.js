"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excelHeadersEnum = exports.exlHeader = exports.fileExtension = void 0;
var fileExtension;
(function (fileExtension) {
    fileExtension["xlsx"] = ".xlsx";
    fileExtension["csv"] = ".csv";
})(fileExtension = exports.fileExtension || (exports.fileExtension = {}));
var exlHeader;
(function (exlHeader) {
    exlHeader["userGuid"] = "user-guid";
    exlHeader["userId"] = "user-id";
    exlHeader["role"] = "role";
    exlHeader["firstName"] = "first-name";
    exlHeader["middleName"] = "middle-name";
    exlHeader["lastName"] = "last-name";
    exlHeader["gradeLevel"] = "grade-level";
    exlHeader["email"] = "email";
    exlHeader["username"] = "username";
    exlHeader["password"] = "password";
    exlHeader["classGUID"] = "class-guid";
    exlHeader["classID"] = "class-id";
    exlHeader["className"] = "class-name";
    exlHeader["classGradeLevel"] = "class-grade-level";
    exlHeader["classStartDate"] = "class-start-date";
    exlHeader["classEndDate"] = "class-end-date";
    exlHeader["masterCode"] = "master-code";
    exlHeader["studentGuid"] = "student-guid";
    exlHeader["studentId"] = "student-id";
    exlHeader["emailAddress"] = "email-address";
    exlHeader["guid"] = "guid";
})(exlHeader = exports.exlHeader || (exports.exlHeader = {}));
exports.excelHeadersEnum = {
    userGuid: exlHeader.userGuid,
    userId: exlHeader.userId,
    role: exlHeader.role,
    firstName: exlHeader.firstName,
    middleName: exlHeader.middleName,
    lastName: exlHeader.lastName,
    gradeLevel: exlHeader.gradeLevel,
    email: exlHeader.email,
    username: exlHeader.username,
    password: exlHeader.password,
    classGUID: exlHeader.classGUID,
    classID: exlHeader.classID,
    className: exlHeader.className,
    classGradeLevel: exlHeader.classGradeLevel,
    classStartDate: exlHeader.classStartDate,
    classEndDate: exlHeader.classEndDate,
    masterCode: exlHeader.masterCode,
    studentGuid: exlHeader.studentGuid,
    studentId: exlHeader.studentId,
    emailAddress: exlHeader.emailAddress,
    guid: exlHeader.guid
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWhlQmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL01oZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3JCLCtCQUFZLENBQUE7SUFDWiw2QkFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxTQXNCWDtBQXRCRCxXQUFZLFNBQVM7SUFDakIsbUNBQXNCLENBQUE7SUFDdEIsK0JBQWtCLENBQUE7SUFDbEIsMEJBQWEsQ0FBQTtJQUNiLHFDQUF3QixDQUFBO0lBQ3hCLHVDQUEwQixDQUFBO0lBQzFCLG1DQUFzQixDQUFBO0lBQ3RCLHVDQUEwQixDQUFBO0lBQzFCLDRCQUFlLENBQUE7SUFDZixrQ0FBcUIsQ0FBQTtJQUNyQixrQ0FBcUIsQ0FBQTtJQUNyQixxQ0FBd0IsQ0FBQTtJQUN4QixpQ0FBb0IsQ0FBQTtJQUNwQixxQ0FBd0IsQ0FBQTtJQUN4QixrREFBcUMsQ0FBQTtJQUNyQyxnREFBbUMsQ0FBQTtJQUNuQyw0Q0FBK0IsQ0FBQTtJQUMvQix1Q0FBMEIsQ0FBQTtJQUMxQix5Q0FBMkIsQ0FBQTtJQUMzQixxQ0FBd0IsQ0FBQTtJQUN4QiwyQ0FBOEIsQ0FBQTtJQUM5QiwwQkFBYSxDQUFBO0FBQ2pCLENBQUMsRUF0QlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFzQnBCO0FBRVksUUFBQSxnQkFBZ0IsR0FBRztJQUM1QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7SUFDNUIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO0lBQ3hCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtJQUNwQixTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7SUFDOUIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO0lBQ2hDLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtJQUM1QixVQUFVLEVBQUUsU0FBUyxDQUFDLFVBQVU7SUFDaEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLO0lBQ3RCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtJQUM1QixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7SUFDNUIsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTO0lBQzlCLE9BQU8sRUFBRSxTQUFTLENBQUMsT0FBTztJQUMxQixTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7SUFDOUIsZUFBZSxFQUFFLFNBQVMsQ0FBQyxlQUFlO0lBQzFDLGNBQWMsRUFBRSxTQUFTLENBQUMsY0FBYztJQUN4QyxZQUFZLEVBQUUsU0FBUyxDQUFDLFlBQVk7SUFDcEMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO0lBQ2hDLFdBQVcsRUFBRSxTQUFTLENBQUMsV0FBVztJQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7SUFDOUIsWUFBWSxFQUFFLFNBQVMsQ0FBQyxZQUFZO0lBQ3BDLElBQUksRUFBQyxTQUFTLENBQUMsSUFBSTtDQUN0QixDQUFBIn0=