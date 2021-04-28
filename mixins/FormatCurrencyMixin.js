export const FormatCurrencyMixin = {
    methods: {
        formatCurrency(value) {
            value = parseInt(value);
            return (value).toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0,
            })
        },
    },  
}