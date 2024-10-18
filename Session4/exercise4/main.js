const text = "Thủ đô của Việt Nam là {{Hà Nội}}. Thủ đô của Nhật Bản là {{Tokyo}}. Thủ đô của Hàn Quốc là {{Seoul}}. Thủ đô của Trung Quốc là {{Bắc Kinh}}. Thủ đô của Indonesia là {{Jakarta}}. Thủ đô của Philippines là {{Manila}}. Thủ đô của Singapore là {{Singapore}}. Thủ đô của Malaysia là {{Kuala Lumpur}}. Thủ đô của Campuchia là {{Phnom Penh}}. Thủ đô của Lào là {{Vientiane}}. Thủ đô của Myanmar là {{Naypyidaw}}. Thủ đô của Thái Lan là {{Bangkok}}. Thủ đô của Ấn Độ là {{New Delhi}}. Thủ đô của Nepal là {{Kathmandu}}. Thủ đô của Bhutan là {{Thimphu}}. Thủ đô của Bangladesh là {{Dhaka}}. Thủ đô của Sri Lanka là {{Colombo}}. Thủ đô của Pakistan là {{Islamabad}}. Thủ đô của Afghanistan là {{Kabul}}. Thủ đô của Iran là {{Tehran}}. Thủ đô của Iraq là {{Baghdad}}. Thủ đô của Ả Rập Xê Út là {{Riyadh}}. Thủ đô của Qatar là {{Doha}}. Thủ đô của Kuwait là {{Kuwait City}}"
const divElement = document.getElementsByClassName('text_content')[0];

const buttonElement = document.getElementsByTagName('button')[0];
let countryArray;

function dataCountryProcessing() {
    const re = /Thủ đô của (.*?) là {{(.*?)}}/g;

    countryArray = [...text.matchAll(re)].map((match, index) => ({
        id: index + 1, 
        
        country: match[1],
        capital: match[2]
    }));

    countryArray.forEach(item => {
        const textElement = document.createElement('span');
        textElement.innerHTML = `
                        
                        <span>Thủ đô của ${item.country} là: </span>
                        <span class="number_answer">${item.id}</span>
                        <input type="text" id="answer-${item.id}" data-correct="${item.capital}">
                    `;

        divElement.appendChild(textElement);
    })

}

buttonElement.addEventListener('click', () => {
    countryArray.forEach(item => {
        const inputElement = document.getElementById(`answer-${item.id}`);
        const num = inputElement.previousElementSibling;

        if (inputElement.value != '') {
            if (inputElement.value == item.capital) {
                num.style.backgroundColor = 'green';
                console.log('ok');
            }
            else {
                num.style.backgroundColor = 'red';
                console.log('sai');
            }
        }
        return;
    })
})
dataCountryProcessing();