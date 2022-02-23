export interface Environment{
    mheServerUrl:string;
}

export enum fileExtension{
    xlsx=".xlsx",
    csv=".csv"
}

export enum exlHeader {
    userGuid = 'user-guid',
    userId = 'user-id',
    role = 'role',
    firstName = 'first-name',
    middleName = 'middle-name',
    lastName = 'last-name',
    gradeLevel = 'grade-level',
    email = 'email',
    username = 'username',
    password = 'password',
    classGUID = 'class-guid',
    classID = 'class-id',
    className = 'class-name',
    classGradeLevel = 'class-grade-level',
    classStartDate = 'class-start-date',
    classEndDate = 'class-end-date',
    masterCode = 'master-code',
    studentGuid ='student-guid',
    studentId = 'student-id',
    emailAddress = 'email-address',
    guid = 'guid'
}

export const excelHeadersEnum = {
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
    guid:exlHeader.guid
}
