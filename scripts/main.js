const TOKEN = '6150552774:AAGCiDxSWpfEd05jL4cLmc8iomPaTUETbZs';
const CHAT_ID = '-1001856448512';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const formSubmitContent = document.querySelector('.form__submit');
const formOk = document.querySelector('.form__submit-ok');
const formErr = document.querySelector('.form__submit-error');

document.querySelector('.form').addEventListener('submit', function(element) {
    element.preventDefault();

    let message = `<b>Новая заявка</b>\n`;
    message += `<b>Имя: ${ this.name.value }</b>\n`;
    message += `<b>Телефон: ${ this.phone.value }</b>\n`;
    message += `<b>Описание:</b> ${ this.description.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((data) => {
        this.name.value = '';
        this.phone.value = '';
        this.description.value = '';
        formSubmitContent.style.display = 'none';
        formErr.style.display = 'none';
        formOk.style.display = 'block';
    })
    .catch((err) => {
        console.error(err);
        this.name.value = '';
        this.phone.value = '';
        this.description.value = '';
        formSubmitContent.style.display = 'none';
        formOk.style.display = 'none';
        formErr.style.display = 'block';
    })
});