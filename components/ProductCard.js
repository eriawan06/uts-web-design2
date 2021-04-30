import { FetchDataMixin } from '../mixins/FetchDataMixin.js';
import { FormatCurrencyMixin } from '../mixins/FormatCurrencyMixin.js';
import { NavigationMixin } from '../mixins/NavigationMixin.js';


export const ProductCard = {
    mixins: [FormatCurrencyMixin, FetchDataMixin, NavigationMixin],
    props: ['productid','img','alt','title','price'],
    template: `
    <div class="card h-100">
        <div class="h-100">
            <img class="card-img-top" :src="'assets/images/'+img" :alt="alt">
        </div>
        <div class="card-body">
            <p class="card-text">{{title}}</p>
            <h5 class="card-title font-weight-bold">{{formatCurrency(price)}}</h5>
            <div class="text-center">
                <a  class="btn btn-primary"
                    @click="updateIdProduct(productid)">Buy</a>
            </div>
        </div>
    </div>
    `,
}
// :href="'/buy?productid='+productid"