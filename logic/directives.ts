export const vMoney = {
    created(el, { arg, value }) {
        let format = 'en-US',
            union = '';
        if (arg == 'rub') {
            format = 'ru-RU';
            union = ' Р';
        }
        el.innerHTML = new Intl.NumberFormat(format).format(value) + union;
    }
};