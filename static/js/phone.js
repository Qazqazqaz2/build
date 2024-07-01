    function copyPhoneNumber() {
        const phoneNumber = document.getElementById('phone-number').textContent;

        // Копируем номер телефона в буфер обмена
        navigator.clipboard.writeText(phoneNumber).then(() => {
            console.log("Phone number copied to clipboard.");
        }).catch(err => {
            console.error('Failed to copy phone number: ', err);
        });

        // Предлагаем позвонить по номеру
        window.location.href = `tel:${phoneNumber}`;
    }