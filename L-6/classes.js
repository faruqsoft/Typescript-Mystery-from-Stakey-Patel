var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: ".concat(this.name));
    };
    return Department;
}());
var accounting = new Department('marketing');
accounting.describe();
var accountingCopy = {
    name: 'dummy',
    describe: accounting.describe
};
accountingCopy.describe();
