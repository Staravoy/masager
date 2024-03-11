// Додайте це до вашого скрипту
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeButton = document.getElementsByClassName('close')[0];

document.getElementById('order_form').addEventListener('submit', function(e){
    e.preventDefault();

    let message = `<b>Заявка з сайту: </b>\n`;
    message += `<b>Замовник: </b>${ this.name.value }\n`;
    message += `<b>Номер телефону: </b>${this.phone.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        showModal(this.name.value);
    })
    .catch((err) => {
        console.warn(err);
    });
});

function showModal(userName) {
    modalText.innerHTML = `Дякуємо за замовлення! Наші оператори зв'яжуться з Вами.`;
    modal.style.display = 'block';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
