const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeButton = document.getElementsByClassName('close')[0];

document.getElementById('order_form').addEventListener('submit', function(e){
    e.preventDefault();

    const TOKEN = "6856390087:AAFAnoOfqIoCZTIL4BS_j8tn9fuDUmXT-4k";
    const CHAT_ID = "-1002002230194";
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    let userName = this.name.value;  // Зберегти ім'я перед очищенням полів

    let message = `<b>Заявка з сайту:</b>\n`;
    message += `<b>Замовник:</b> ${userName}\n`;
    message += `<b>Номер телефону:</b> ${this.phone.value}`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.phone.value = "";
        showModal(userName);  // Передати ім'я в showModal
    })
    .catch((err) => {
        console.warn(err);
    });
});

function showModal(userName) {
    modalText.innerHTML = `Дякуємо за замовлення, ${userName}! Наші оператори зв'яжуться з Вами.`;
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
