const schoolInfo = document.getElementById('school-info');
const schoolInfoContainer = document.getElementById('school-info-container');
const addSchoolBtn = document.getElementById('add-school-btn');
const form = document.getElementById('form');
const successToast = document.getElementById('success-toast');
const step2 = document.querySelector('.step-2')


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
        input.addEventListener('change', () => {
            console.log('working?');
            console.log(input.checked);
            console.log(input.closest('.school-info').querySelector('.form-date'));
            console.log(input.closest('.school-info').querySelector('.form-date').disabled);
            input.closest('.school-info').querySelector('.form-date').disabled = input.checked;
        })
        console.log(i);
        console.log(input.parentElement);
    })
    schoolInfoContainer.querySelectorAll('.school-info').forEach((container, i) => {
        if (i !== 0) {
            let btn = container.querySelector('.trash-btn');
            btn.addEventListener('click', () => {
                btn.closest('.school-info').remove();
            })
        } else {
            container.querySelector('.trash-btn').style.display = 'none';
        }
    })
}

addSchoolBtn.addEventListener('click', addNewSchool);

addNewSchool();

const submitForm = (e) => {
    e.preventDefault();
    let isError = false;
    schoolInfoContainer.querySelectorAll('.school-info').forEach(container => {
        // input.id = `form-check${i}`;
        // console.log(input.parentElement);
        // console.log(input.parentElement.querySelectorAll('.form-label'));
        // console.log(input.value);
        let formSelect = container.querySelector('.form-select');
        let formDate = container.querySelector('.form-date');
        let formDateCheck = container.querySelector('.form-check');
        console.log(formDate.value);
        console.log(formDateCheck.value);
        console.log(formSelect.value);
        if (!formDate.value && !formDateCheck.checked) {
            formDate.classList.add('error');
            isError = true;
        } else {
            formDate.classList.remove('error');
        }
        if (!formSelect.value) {
            formSelect.classList.add('error');
            isError = true;
        } else {
            formSelect.classList.remove('error');
        }
    })
    if (isError) {
        return;
    }
    step2.classList.replace('unchecked', 'checked');
    console.log('worked?');
    // successToast.style.display = 'block';
    successToast.style.display = 'flex';
    schoolInfoContainer.querySelectorAll('.form-input').forEach((input) => {
        input.disabled = true;
    })
    setInterval(() => {
        successToast.style.display = 'none';
    }, 3000);
}

form.addEventListener('submit', submitForm);
