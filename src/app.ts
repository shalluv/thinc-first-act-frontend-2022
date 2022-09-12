interface Course {
	abbrName: string;
	courseNameEn: string;
	courseNameTh: string;
	courseNo: string;
	credit: number;
	creditHours: string;
	department: string;
	genEdType: string;
	updatedAt: string;
}

const getData = async () => {
	const response = await fetch('https://firstact-api.thinc.in.th/courses');
	const data = await response.json();
	const courses: Course[] = data.courses;
	return courses;
};

const init = async () => {
	const courses = await getData();
	for (const course of courses) {
		const div = document.createElement('div');
		div.classList.add('course');
		div.innerHTML = `<h3 class="course-title">${course.courseNo} ${
			course.abbrName
		}</h3>
		<h4 class="course-subheading">จำนวนหน่วยกิต</h4>
		<p class="course-text">${course.credit} หน่วยกิต</p>
		<h4 class="course-subheading">ภาควิชา/กลุ่มวิชา/สาขาวิชา</h4>
		<p class="course-text">${course.department}</p>
		<h4 class="course-subheading">ประเภท GenEd</h4>
		<p class="course-text">${
			course.genEdType === 'NO' ? 'ไม่ใช่ GenEd' : course.genEdType
		}</p>`;
		const container = document.getElementById('courses-container');
		container?.appendChild(div);
	}
};

init();
