"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// 父类
var Vechile = /** @class */ (function () {
    function Vechile(brand, vechileNo, days, total, deposit) {
        this.brand = brand;
        this.vechileNo = vechileNo;
        this.days = days;
        this.total = total;
        this.deposit = deposit;
    }
    // 计算价格
    Vechile.prototype.calculate = function () { };
    return Vechile;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, vechileNo, days, total, deposit, type) {
        var _this = _super.call(this, brand, vechileNo, days, total, deposit) || this;
        _this.type = type;
        return _this;
    }
    return Car;
}(Vechile));
