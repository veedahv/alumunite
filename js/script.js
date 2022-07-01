const schoolInfo = document.getElementById('school-info');
const schoolInfoContainer = document.getElementById('school-info-container');
const addSchoolBtn = document.getElementById('add-school-btn');


const addNewSchool = () => {
    const cloneSchool = schoolInfo.content.cloneNode(true);
    console.log(cloneSchool);
    schoolInfoContainer.appendChild(cloneSchool);
    console.log(schoolInfoContainer);
    schoolInfoContainer.querySelectorAll('.form-check').forEach((input, i) => {
        input.id = `form-check${i}`;
        console.log(input);
        console.log(input.parentElement);
        console.log(input.parentElement.querySelectorAll('.form-label'));
        input.parentElement.querySelectorAll('.form-label').forEach(label => {
            label.htmlFor = `form-check${i}`;
            console.log(label);
        })
        console.log(i);
        console.log(input.parentElement);
    })
}

addSchoolBtn.addEventListener('click', addNewSchool);

addNewSchool();
