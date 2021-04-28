import {FormatCurrencyMixin} from '../mixins/FormatCurrencyMixin.js';

export const ProductCard = {
    mixins: [FormatCurrencyMixin],
    props: ['productid','img','alt','title','price'],
    template: `
    <div class="card">
        <img class="card-img-top" :src="'assets/images/'+img" :alt="alt">
        <div class="card-body">
            <p class="card-text">{{title}}</p>
            <h5 class="card-title font-weight-bold">{{formatCurrency(price)}}</h5>
            <a :href="'/buy?productid='+productid" class="btn btn-primary">Buy</a>
        </div>
    </div>
    `,
}