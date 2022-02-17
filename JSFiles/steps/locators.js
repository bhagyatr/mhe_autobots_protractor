"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageLocator = void 0;
const protractor_1 = require("protractor");
class PageLocator {
    constructor() {
        this.browserURL = 'https://my-qastg.mheducation.com/secure/';
        this.LoginUsernameInput = (0, protractor_1.element)(protractor_1.by.id('username'));
        this.LoginPasswordInput = (0, protractor_1.element)(protractor_1.by.id('password'));
        this.LoginSubmitBtn = (0, protractor_1.element)(protractor_1.by.xpath(" //*[@query-id='login.submit']"));
    }
}
exports.PageLocator = PageLocator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwcy9sb2NhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBa0Q7QUFFbEQsTUFBYSxXQUFXO0lBQXhCO1FBRUksZUFBVSxHQUFHLDBDQUEwQyxDQUFDO1FBQ3hELHVCQUFrQixHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEQsdUJBQWtCLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNoRCxtQkFBYyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztJQUd6RSxDQUFDO0NBQUE7QUFSRCxrQ0FRQyJ9