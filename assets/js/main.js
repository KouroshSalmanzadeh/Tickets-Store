const boxs = document.querySelectorAll('.box');
const selectCountry = document.querySelector('.phone-number select');
const selectCity = document.querySelector('.city select');
const inputs = document.querySelectorAll('.box input');

boxs.forEach(box => {
    box.addEventListener('click', (event) => {
        const parentBox = event.target.closest('.box');
        const input = event.target.closest('.box').querySelector('input');
        const city = document.querySelector('.city');
        // debugger

        if (event.target !== selectCountry && event.target.parentElement !== city) {
            if (event.target.parentElement == city) {
                parentBox.classList.add('active');
            } else {
                input.focus();
                parentBox.classList.add('active');
                input.addEventListener('blur', (event) => {
                    if (input.value === '') {
                        parentBox.classList.remove('active');
                    }
                });
            }
        } else if (event.target === selectCity) {
            if (selectCity.value == '' && selectCountry.value == 'Your country') {
                alert('ابتدا کشور خود را انتخاب کنید');
                city.classList.remove('active');
            } else {
                city.classList.add('active');
                selectCity.view = window;
                selectCity.bubbles = true;
                selectCity.cancelable = true;
            }
        }
    });
});
inputs.forEach(input => {
    input.addEventListener('focus', (event) => {
        const parentBox = event.target.closest('.box');
        const input = event.target.closest('.box').querySelector('input');
        const city = document.querySelector('.city');
        if (event.target !== selectCountry) {
            if (event.target.parentElement == city) {
                parentBox.classList.add('active');
            } else {
                input.focus();
                parentBox.classList.add('active');
                input.addEventListener('blur', (event) => {
                    if (input.value === '') {
                        parentBox.classList.remove('active');
                    }
                });
            }
        }
    })
})

selectCountry.addEventListener('change', (event) => {
    const country = event.target.value;
    const obj = {
        'Iran': ['tehran', 'mashhad', 'tabriz', 'karaj', 'isfahan', 'kermanshah'],
        'Usa': ['newyork', 'los angeles', 'chicago', 'washington'],
        'Germany': ['berlin', 'hamburg', 'cologne', 'frankfurt'],
        'Poland': ['warsaw', 'krakow', 'gdansk', 'poznan'],
        'Uae': ['dubai', 'abudhabi', 'sharjah', 'ajman'],
        'Canada': ['toronto', 'vancouver', 'calgary', 'montreal'],
        'Uk': ['london', 'manchester', 'birmingham', 'cardiff'],
        'France': ['paris', 'lyon', 'marseille', 'nantes'],
        'Turkey': ['istanbul', 'ankara', 'izmir', 'antalya'],
        'Uae': ['dubai', 'abudhabi', 'sharjah', 'ajman'],
    };
    selectCity.innerHTML = '<option selected hidden></option>';

    for (let i = 0; i < obj[country].length; i++) {
        const option = document.createElement('option');
        option.value = obj[country][i];
        option.textContent = obj[country][i];
        selectCity.appendChild(option);
    }
});