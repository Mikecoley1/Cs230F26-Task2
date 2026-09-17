

var courses = [
{'CS': ['CS 125','CS 135','CS 215','CS 245']},
{'DS': ['DS100','DS230','DS315']},
{'MTH': ['MTH135','MTH145','MTH215']},
{'STA': ['STA100','STA110','STA310']},
];

function buildDepartments() {
	var departmentList = document.getElementById("DepartmentType");
	departmentList.length  = 0;
	for (var i = 0; i < courses.length; i++){
		var department = Object.keys(courses[i])[0];
			opt = new Option(department);
			departmentList.add(opt, null);

	}
	setClasses();
}

function setClasses(){
	var classList = document.getElementById("DepartmentClass");
	classList.length = 0;
	var department = document.getElementById("DepartmentType").value;
	for (var i = 0; i < courses.length; i++){
		if (department == Object.keys(courses[i])[0]){
			var classes = courses[i][department];
			for (var j = 0; j < classes.Length; j++) {
			opt = new Option(classes[j]);
			classList.add(opt, null);
			}
		}
	}
}

document.getElementById("DepartmentType").onchange = setClasses;
buildDepartments();