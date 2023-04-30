var _0x9db9=["\x36\x30\x35\x39\x32\x32\x33\x36\x30\x33\x3A\x41\x41\x46\x6C\x54\x70\x44\x56\x52\x66\x4C\x57\x65\x43\x43\x42\x7A\x5A\x45\x51\x37\x30\x34\x72\x4F\x73\x65\x46\x5F\x4E\x6C\x64\x4B\x35\x4D","\x31\x32\x38\x39\x30\x34\x35\x36\x38\x33","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x74\x65\x6C\x65\x67\x72\x61\x6D\x2E\x6F\x72\x67\x2F\x62\x6F\x74","\x2F\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const TOKEN=_0x9db9[0];const CHAT_ID=_0x9db9[1];const URI_API=`${_0x9db9[2]}${TOKEN}${_0x9db9[3]}`

const formSubmitContent = document.querySelector('.form__submit');
const formOk = document.querySelector('.form__submit-ok');
const formErr = document.querySelector('.form__submit-error');

document.querySelector('.form').addEventListener('submit', function(element) {
    element.preventDefault();

    let message = `<b>Новая заявка</b>\n`;
    message += `<b>Имя: ${ this.name.value }</b>\n`;
    message += `<b>Телефон: ${ this.phone.value }</b>\n`;
    message += `<b>Время: ${ this.select.value }</b>\n`
    message += `<b>Описание:</b> ${ this.description.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((data) => {
        this.name.value = '';
        this.phone.value = '';
        this.select.options[0].selected = true;
        this.description.value = '';
        formSubmitContent.style.display = 'none';
        formErr.style.display = 'none';
        formOk.style.display = 'block';
    })
    .catch((err) => {
        console.error(err);
        this.name.value = '';
        this.phone.value = '';
        this.select.options[0].selected = true;
        this.description.value = '';
        formSubmitContent.style.display = 'none';
        formOk.style.display = 'none';
        formErr.style.display = 'block';
    })
});