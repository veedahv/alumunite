const schoolInfo = document.getElementById('school-info');
const schoolInfoContainer = document.getElementById('school-info-container');
const addSchoolBtn = document.getElementById('add-school-btn');
const form = document.getElementById('form');
const successToast = document.getElementById('success-toast');
const step2 = document.querySelector('.step-2');

const addNewSchool = () => {
    const cloneSchool = schoolInfo.content.cloneNode(true);
    schoolInfoContainer.appendChild(cloneSchool);
    schoolInfoContainer.querySelectorAll('.form-check').forEach((input, i) => {
        input.id = `form-check${i}`;
        input.parentElement.querySelectorAll('.form-label').forEach(label => {
            label.htmlFor = `form-check${i}`;
        })
        input.addEventListener('change', () => {
            input.closest('.school-info').querySelector('.form-date').disabled = input.checked;
        });
    })
    schoolInfoContainer.querySelectorAll('.form-date').forEach(input => {
        input.addEventListener('focus', function(event) {
            event.target.showPicker();
          });
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
    schoolInfoContainer.querySelectorAll('.form-input').forEach((input) => {
        input.addEventListener('blur', () => {
            if (input.value) {
                input.classList.remove('error');
                input.classList.add('success');
            } else {
                input.classList.add('error');
            }
        })
    });
}

const submitForm = (e) => {
    e.preventDefault();
    let isError = false;
    schoolInfoContainer.querySelectorAll('.school-info').forEach(container => {
        let formSelect = container.querySelector('.form-select');
        let formDate = container.querySelector('.form-date');
        let formDateCheck = container.querySelector('.form-check');
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
    successToast.style.display = 'flex';
    form.querySelectorAll('.form-input').forEach(input => {
        input.disabled = true;
    });
    form.querySelectorAll('button').forEach(btn => {
        btn.disabled = true;
    });
    setInterval(() => {
        successToast.style.display = 'none';
    }, 3000);
}

form.addEventListener('submit', submitForm);
addSchoolBtn.addEventListener('click', addNewSchool);
addNewSchool();