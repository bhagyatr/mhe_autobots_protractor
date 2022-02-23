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
const protractor_1 = require("protractor");
const MheExcelHeader_1 = require("../steps/MheExcelHeader");
const fileHelper_1 = require("../steps/fileHelper");
const path = __importStar(require("path"));
let excelHeaderBulk = new MheExcelHeader_1.ExcelHeaderBulk();
let excelData = new fileHelper_1.ExcelData();
const EC = protractor_1.protractor.ExpectedConditions;
const os = require('os');
//let appRoot = require('app-root-path');
let file_POAB09 = "../../POAB_Data/poab-9.csv";
let uploadStatus_POAB09;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 180000;
let downloadedFilePath;
describe('POAB-09', function () {
    // Login MHE
    it('POAB-09:Teacher - Validation for upload containing only invalid records', async () => {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.driver.manage().window().maximize();
        protractor_1.browser.get('https://my-qastg.mheducation.com/secure/').then(function () {
            console.log('URL launched');
            //browser.sleep(15000)
        });
        protractor_1.browser.ignoreSynchronization = true;
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.id("username"))), 15000);
        var username = (0, protractor_1.element)(protractor_1.by.id('username'));
        protractor_1.browser.wait(EC.visibilityOf(username), 15000);
        expect(username.isDisplayed()).toBeTruthy();
        username.sendKeys("teacherqafixturepoab9");
        protractor_1.browser.driver.findElement(protractor_1.by.id('password')).sendKeys("Testing123!");
        (0, protractor_1.element)(protractor_1.by.xpath(" //*[@query-id='login.submit']")).click();
        //Clicks on Import student
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"))), 15000);
        let import_Student = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Import Students')]"));
        await protractor_1.browser.wait(EC.elementToBeClickable(import_Student), 25000).then(function () {
            import_Student.click();
            //var myModule = require(appRoot + '/POAB_Data/poab-9.csv');
            // console.log(appRoot,'Clicked Import student', excelData.downloadDirPath)
        });
        //Upload file
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Choose File')]"))), 15000);
        console.log(__dirname, "----------__dirname");
        var filePath = path.resolve(__dirname, file_POAB09);
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Choose File')]"))), 15000);
        let choose_File = (0, protractor_1.element)(protractor_1.by.xpath("//*[contains(text(),'Choose File')]"));
        await protractor_1.browser.wait(EC.visibilityOf(choose_File), 15000).then(function () {
            console.log('Choose file clicked', filePath);
            choose_File.click().then(function () {
                console.log('Choose file clicked----', filePath);
                protractor_1.browser.findElement(protractor_1.by.css('input#file-upload')).sendKeys(filePath);
            });
        });
        //Click on Upload button
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.css("button[type='submit']"))), 15000);
        //let upload_Button = element(by.css("button[type='submit']"));
        await protractor_1.browser.wait(EC.elementToBeClickable((0, protractor_1.element)(protractor_1.by.css("button[type='submit']"))), 15000).then(function () {
            console.log('Upload button is enabled');
            (0, protractor_1.element)(protractor_1.by.css("button[type='submit']")).click();
        });
        //Wait untill status changes to "Completed with Error"
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[5]/div/span/span"))), 25000);
        let upload_Status = (0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[5]/div/span/span"));
        await protractor_1.browser.wait(EC.elementToBeClickable((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[5]/div/span/span"))), 25000).then(function () {
            console.log('Kebab menu is available');
            protractor_1.browser.sleep(5000);
        });
        //Varify status
        let flag;
        for (let i = 0; i < 50; i++) {
            upload_Status.getText().then(function (text) {
                if (text == "In Progress" || text == "IN_PROGRESS") {
                    (0, protractor_1.element)(protractor_1.by.css("button[title='filter']")).click().then(function () {
                        console.log(i, '----In Progress');
                        protractor_1.browser.sleep(15000);
                    });
                    flag = false;
                }
                else {
                    console.log(i, '----Completed with Errors');
                    flag = true; //This will be executed
                }
            });
            if (flag == true) {
                break;
            }
        }
        //Click on Kebab menu
        await protractor_1.browser.wait(EC.presenceOf((0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"))), 15000);
        let kebabMenu_Button = (0, protractor_1.element)(protractor_1.by.xpath("//tbody/tr[1]/td[6]/div/mhe-dropdown/div/button"));
        await protractor_1.browser.wait(EC.elementToBeClickable(kebabMenu_Button), 15000).then(function () {
            console.log('Kebab menu button clicked');
            kebabMenu_Button.click();
            protractor_1.browser.sleep(2000);
        });
        //Validate that the options for Uploaded File and Error File are available
        //a[arial-label='Uploaded File']  a[arial-label='Error File']
        let uploadFile = (0, protractor_1.element)(protractor_1.by.css('a[arial-label="Uploaded File"]'));
        let errorFile = (0, protractor_1.element)(protractor_1.by.css('a[arial-label="Error File"]'));
        expect(uploadFile.isPresent()).toBeTruthy();
        expect(errorFile.isPresent()).toBeTruthy();
        expect((0, protractor_1.element)(protractor_1.by.css('a[arial-label="Completed File]')).isPresent()).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0cy9kZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUY7QUFDakYsNERBQXlEO0FBQ3pELG9EQUFnRDtBQUVoRCwyQ0FBNEI7QUFDNUIsSUFBSSxlQUFlLEdBQUcsSUFBSSxnQ0FBZSxFQUFFLENBQUM7QUFDNUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxzQkFBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUN6QyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekIseUNBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFXLDRCQUE0QixDQUFBO0FBQ3RELElBQUksbUJBQTJCLENBQUE7QUFDL0IsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQUMxQyxJQUFJLGtCQUEwQixDQUFDO0FBQy9CLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDaEIsWUFBWTtJQUNaLEVBQUUsQ0FBQyx5RUFBeUUsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0Isc0JBQXNCO1FBQzFCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMzQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0RSxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDM0QsMEJBQTBCO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2RyxJQUFJLGNBQWMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3BFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUN0Qiw0REFBNEQ7WUFDNUQsMkVBQTJFO1FBQy9FLENBQUMsQ0FBQyxDQUFDO1FBQ0gsYUFBYTtRQUNiLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO1FBQzdDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRyxJQUFJLFdBQVcsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyxDQUFBO1lBQzVDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ2hELG9CQUFPLENBQUMsV0FBVyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsd0JBQXdCO1FBQ3hCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRiwrREFBK0Q7UUFDL0QsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzlGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtZQUN2QyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxzREFBc0Q7UUFDdEQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pHLElBQUksYUFBYSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ3RDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDdkMsSUFBSSxJQUFJLElBQUksYUFBYSxJQUFJLElBQUksSUFBSSxhQUFhLEVBQUU7b0JBQ2hELElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7d0JBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUN4QixDQUFDLENBQUMsQ0FBQTtvQkFDRixJQUFJLEdBQUcsS0FBSyxDQUFBO2lCQUNmO3FCQUNJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7b0JBQzVDLElBQUksR0FBRyxJQUFJLENBQUEsQ0FBQSx1QkFBdUI7aUJBQ3JDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQUUsTUFBTTthQUFFO1NBQy9CO1FBQ0QscUJBQXFCO1FBQ3JCLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvRyxJQUFJLGdCQUFnQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQztRQUM1RixNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDeEMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDeEIsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDSCwwRUFBMEU7UUFDMUUsNkRBQTZEO1FBQzdELElBQUksVUFBVSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLFNBQVMsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9