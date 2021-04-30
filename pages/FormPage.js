import { ProductCard } from "../components/ProductCard.js";
import { FetchDataMixin } from "../mixins/FetchDataMixin.js";
import { FormatCurrencyMixin } from "../mixins/FormatCurrencyMixin.js";

export const FormPage = {
    mixins: [FetchDataMixin, FormatCurrencyMixin],
    components: {
        'ProductCard': ProductCard,
    },
    methods:{
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        decreaseQty(){
            this.laptop.qty = this.laptop.qty-1;
        },
        increaseQty(){
            this.laptop.qty = this.laptop.qty+1;
        },
        calculatePrice(){
            this.totalBayar = this.laptop.qty * this.laptop.price;
        }
    },
    data() {
        return {
            laptop:{
                name:"",
                qty:1,
                price:0,
                image:""
            },
            totalBayar:0
        }
    },
    created(){
        let uri = window.location.search.substring(1); 
        let params = new URLSearchParams(uri);
        this.indexLaptop = params.get("productid");
        console.log(this.indexLaptop);
        this.readTextFile("./data/allproducts.json", (text) => {
            var products = JSON.parse(text);
            var _product = products[params.get("productid")-1];
            this.laptop = {
                name : _product.name,
                price : _product.price,
                qty:1,
                image : _product.image
            }
        });
    },
    template: `
    <section class="position-relative mt-100 py-5">
            <div class="wrapper">
                <div class="row mb-5">
                    <div class="col-lg-12">
                        <h3 class="font-weight-bold">Checkout</h3>
                    </div>
                </div>
                <div class="bg-white p-5">
                    <div class="row">
                        <div class="col-3">
                            <img :src="'assets/images/'+laptop.image" style="width: 100%;"/>
                        </div>
                        <div class="col-1"></div>
                        <div class="col-8">
                            <div class="row">
                                <div class="col-12">
                                    <h3 class="font-weight-bold">
                                        {{laptop.name}}
                                    </h3>
                                    <h4 class="font-weight-bold">
                                        Rp. {{formatPrice(laptop.price)}}
                                    </h4>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="input-group">
                                        <div v-if="laptop.qty===1">
                                            <input type="button" disabled value="-" @click="decreaseQty()" class="button-minus" data-field="quantity">
                                        </div>
                                        <div v-else="laptop.qty===1">
                                            <input type="button" value="-" @click="decreaseQty()" class="button-minus" data-field="quantity">
                                        </div>
                                        <input type="number" v-model="laptop.qty" name="quantity" class="quantity-field">
                                        <input type="button" value="+" @click="increaseQty()" class="button-plus" data-field="quantity">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <button type="button" @click="calculatePrice()" class="btn btn-success" style="margin-top: 14px;">Proses</button>
                                </div>
                            </div>
                            <div class="row" v-if="totalBayar !== 0">
                                <div class="col-4">
                                    <h5 class="font-weight-bold">Total Bayar : </h5> 
                                </div>
                                <div class="col-8">
                                    Rp. {{formatPrice(totalBayar)}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
}