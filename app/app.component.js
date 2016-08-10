"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Assignment = (function () {
    function Assignment() {
    }
    return Assignment;
}());
exports.Assignment = Assignment;
var AppComponent = (function () {
    function AppComponent() {
        this.assignments = ASSIGNMENTS;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>Assignments</h1>\n\t<div *ngFor=\"let assignment of assignments\">\n\t<div class=\"card card__details\">\n\t<h2>{{assignment.title}}</h2>\n\t<div class=\"card__summary\">\n\t<p>{{assignment.subtitle}}</p>\n\t</div>\n\t<button class=\"btn btn__watch\">watch</button>\n\t</div>\n\t</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var ASSIGNMENTS = [
    { id: 11, title: 'MCAT Assignment 11', subtitle: 'MCAT Diagnostic Exam' },
    { id: 12, title: 'MCAT Assignment 12', subtitle: 'Science Assessments' },
    { id: 13, title: 'MCAT Assignment 13', subtitle: 'Important Welcome Message' },
    { id: 14, title: 'MCAT Assignment 14', subtitle: 'How to Access your  MCAT Flashcard App' },
    { id: 15, title: 'MCAT Assignment 15', subtitle: 'How to Access a Digital Version of your MCAT Review Books' },
    { id: 16, title: 'MCAT Assignment 16', subtitle: 'Information About your Higher Score Guarantee' }
];
//# sourceMappingURL=app.component.js.map