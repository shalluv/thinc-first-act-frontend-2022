"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://firstact-api.thinc.in.th/courses');
    const data = yield response.json();
    const courses = data.courses;
    return courses;
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const courses = yield getData();
    for (const course of courses) {
        const div = document.createElement('div');
        div.classList.add('course');
        div.innerHTML = `<h3 class="course-title">${course.courseNo} ${course.abbrName}</h3>
		<h4 class="course-subheading">จำนวนหน่วยกิต</h4>
		<p class="course-text">${course.credit} หน่วยกิต</p>
		<h4 class="course-subheading">ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
		<p class="course-text">${course.department}</p>
		<h4 class="course-subheading">ประเภท GenEd</h4>
		<p class="course-text">${course.genEdType === 'NO' ? 'ไม่ใช่ GenEd' : course.genEdType}</p>`;
        const container = document.getElementById('courses-container');
        container === null || container === void 0 ? void 0 : container.appendChild(div);
    }
    console.log('done');
});
init();
