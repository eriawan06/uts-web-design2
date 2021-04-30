import { FormatCurrencyMixin } from "../mixins/FormatCurrencyMixin.js";
import { NavigationMixin } from "../mixins/NavigationMixin.js";

export const PaymentPage = {
    mixins: [FormatCurrencyMixin, NavigationMixin],
    props: ["purchasedProduct"],
    methods: {
        decreaseQty(){
            this.purchasedProduct.qty = this.purchasedProduct.qty-1;
        },
        increaseQty(){
            this.purchasedProduct.qty = this.purchasedProduct.qty+1;
        },
        calculatePrice(){
            this.totalBayar = this.purchasedProduct.qty * this.purchasedProduct.price;
        }
    },
    template: `
    <section class="position-relative mt-100 py-5">
        <div class="wrapper">
            <div class="row mb-5">
                <div class="col-lg-12">
                    <h3 class="font-weight-bold">Cart</h3>
                </div>
            </div>
            <div class="bg-white p-5">
                <div class="row">
                    <div class="col-3">
                        <img src="assets/images/asus_tuf.jpeg" style="width: 100%;"/>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-8">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="font-weight-bold">
                                    {{purchasedProduct.name}}
                                </h3>
                                <h4 class="font-weight-bold">
                                    {{formatCurrency(purchasedProduct.price)}}
                                </h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div class="input-group">
                                    <div v-if="purchasedProduct.qty===1">
                                        <input type="button" disabled value="-" @click="decreaseQty()" class="button-minus" data-field="quantity">
                                    </div>
                                    <div v-else="purchasedProduct.qty===1">
                                        <input type="button" value="-" @click="decreaseQty()" class="button-minus" data-field="quantity">
                                    </div>
                                    <input type="number" v-model="purchasedProduct.qty" name="quantity" class="quantity-field">
                                    <input type="button" value="+" @click="increaseQty()" class="button-plus" data-field="quantity">
                                </div>
                            </div>
                            <div class="col-6">
                                <button type="button" @click="calculatePrice()" class="btn btn-success" style="margin-top: 14px;">Proses</button>
                            </div>
                        </div>
                        <div class="row" v-if="totalBayar !== 0">
                            <div class="col-3">
                                <h5 class="font-weight-bold">Total Bayar : </h5> 
                            </div>
                            <div class="col-8">
                                {{formatCurrency(totalBayar)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
}