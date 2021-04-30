import { ProductCard } from "../components/ProductCard.js";
import { FetchDataMixin } from "../mixins/FetchDataMixin.js";
import { FormatCurrencyMixin } from "../mixins/FormatCurrencyMixin.js";
import { NavigationMixin } from "../mixins/NavigationMixin.js";

export const ProductsPage = {
    mixins: [FetchDataMixin, FormatCurrencyMixin,NavigationMixin],
    components: {
        'ProductCard': ProductCard,
    },
    data() {
        return {
            filters : {
                name: '',
                use: [],
                series: [],
            },
            filterMinPrice: 0,
            filterMaxPrice: 0,
            countProducts: 0,
        }
    },
    computed: {
        filteredProducts: function() {
            if(this.filters.name=='' && this.filters.use.length==0 && 
                this.filters.series.length==0 && this.filterMinPrice == 0 && this.filterMaxPrice == 0) {
                this.countProducts = this.products.length;
                return this.products;
            }

            var products = this.products;

            if(this.filters.name != '') {
                products = products.filter(product => {
                    return product.name.includes(this.filters.name);
                });
            }

            if(this.filters.use.length > 0) {
                products = products.filter(product => {
                    return this.filters.use.some(use => {
                        return product.use.includes(use);
                    });
                });
            }

            if(this.filters.series.length > 0 && !this.filters.series.includes('all')) {
                products = products.filter(product => {
                    return this.filters.series.includes(product.series);
                });
            }

            this.filterMinPrice = Number(this.filterMinPrice);
            this.filterMaxPrice = Number(this.filterMaxPrice);
            if(this.filterMaxPrice > this.filterMinPrice) {
                products = products.filter(product => {
                    return product.price >= this.filterMinPrice && product.price <= this.filterMaxPrice;
                });
                console.log("MAXPRICE > MINPRICE");
            }else if(this.filterMaxPrice < this.filterMinPrice){
                products = [];
                console.log("MAXPRICE < MINPRICE");
            }

            this.countProducts = products.length;
            return products;
        }
    },
    template: `
    <section class="position-relative mt-100 py-5">
        <div class="wrapper">
        <div class="row mb-5">
            <div class="col-lg-12">
            <h3 class="font-weight-bold">All Products ({{countProducts}})</h3>
            </div>
        </div>
        <div class="row">
            <div id="collection-filters" class="col-lg-3">
            <div class="filter-container">
                <div class="filter-group">
                    <h5 class="font-weight-bold mb-3">Product Name</h5>
                    <input type="text" class="form-control" v-model="filters.name">
                </div>
                <div class="filter-group">
                    <h5 class="font-weight-bold mb-3">Intended Use</h5>
                    <div class="form-check mb-2">
                        <input type="checkbox" class="form-check-input" name="for-home" 
                            value="home" v-model="filters.use">
                        <label class="form-check-label" for="for-home">For Home</label>
                    </div>
                    <div class="form-check mb-2">
                        <input type="checkbox" class="form-check-input" name="for-work" 
                            value="work" v-model="filters.use">
                        <label class="form-check-label" for="for-work">For Work</label>
                    </div>
                    <div class="form-check mb-2">
                        <input type="checkbox" class="form-check-input" name="for-creators" 
                            value="creators" v-model="filters.use">
                        <label class="form-check-label" for="for-creators">For Creators</label>
                    </div>
                    <div class="form-check mb-2">
                        <input type="checkbox" class="form-check-input" name="for-students" 
                            value="students" v-model="filters.use">
                        <label class="form-check-label" for="for-students">For Students</label>
                    </div>
                    <div class="form-check mb-2">
                        <input type="checkbox" class="form-check-input" name="for-gaming" 
                            value="gaming" v-model="filters.use">
                        <label class="form-check-label" for="for-gaming">For Gaming</label>
                    </div>
                </div>
                <div class="filter-group">
                    <h5 class="font-weight-bold mb-3">Series</h5>
                    <select multiple class="form-control" size="5" v-model="filters.series">
                        <option value="all" class="mb-2">All Series</option>
                        <option value="ProArt StudioBook" class="mb-2">ProArt StudioBook</option>
                        <option value="ZenBook" class="mb-2">ZenBook</option>
                        <option value="VivoBook" class="mb-2">VivoBook</option>
                        <option value="ChromeBook" class="mb-2">ChromeBook</option>
                        <option value="Everyday use" class="mb-2">Everyday use</option>
                        <option value="ExpertBook" class="mb-2">ExpertBook</option>
                        <option value="ROG" class="mb-2">ROG</option>
                        <option value="TUF Gaming" class="mb-2">TUF Gaming</option>
                    </select>
                </div>
                <div class="filter-group">
                    <h5 class="font-weight-bold mb-3">Pricing</h5>
                    <div class="filter-price-group">
                        <label for="filter-price-min" class="filter-price-label">
                            Min Price : <span class="filter-price-tag">{{formatCurrency(filterMinPrice)}}</span>
                        </label>
                        <input type="range" name="filter-price-min" id="filter-price-min" 
                            class="price-slider" min="0" max="200000000" step="1000000" v-model="filterMinPrice">
                    </div>
                <div class="filter-price-group">
                    <label for="filter-price-max" class="filter-price-label">
                        Max Price : <span class="filter-price-tag">{{formatCurrency(filterMaxPrice)}}</span>
                    </label>
                    <input type="range" name="filter-price-max" id="filter-price-max" 
                        class="price-slider" min="0" max="200000000" step="1000000" v-model="filterMaxPrice">
                </div>
                </div>
            </div>
            </div>
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-lg-4 mb-5" v-for="product in filteredProducts">
                        <product-card @update-route="updateCurrRoute" @update-id-product="updateIdProduct" :productid="product.id" :img="product.image" :title="product.name"
                            :price="product.price">
                        </product-card>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    `,
}