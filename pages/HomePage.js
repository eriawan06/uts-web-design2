import { AppBanner } from '../components/AppBanner.js';
import { BannerImage } from '../components/BannerImage.js';
import { ProductCard } from '../components/ProductCard.js';
import { FetchDataMixin } from '../mixins/FetchDataMixin.js';
import { FormatCurrencyMixin } from '../mixins/FormatCurrencyMixin.js';

export const HomePage = {
    mixins: [FetchDataMixin, FormatCurrencyMixin],
    components: {
        'AppBanner': AppBanner,
        'BannerImage': BannerImage,
        'ProductCard': ProductCard,
    },
    computed: {
        featuredProducts() {
            var products = [];
            this.products.forEach(product => {
                if(product.label === 'featured') products.push(product)
            });
            return products;
        },
        popularProducts() {
            var products = [];
            this.products.forEach(product => {
                if(product.label === 'popular') products.push(product)
            });
            return products;
        },
        flashSaleProducts() {
            return this.products.slice(0,4);
        }
    },
    template: `
    <div>
        <!-- BANNER -->
        <app-banner>
            <banner-image img="assets/images/banner_asus.jpg" alt="First slide" is-active="true"></banner-image>
            <banner-image img="assets/images/banner_hp.jpg" alt="Second slide"></banner-image>
        </app-banner>


        <section id="feature" class="position-relative mt-65">
            <div class="wrapper">
                <div class="row">
                    <div class="col-lg-3 text-center">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-3">
                        <h5 class="font-weight-bold">Trusted</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="col-lg-3 text-center">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-3">
                        <h5 class="font-weight-bold">Trusted</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="col-lg-3 text-center">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-3">
                        <h5 class="font-weight-bold">Trusted</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div class="col-lg-3 text-center">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-3">
                        <h5 class="font-weight-bold">Trusted</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="featured-products" class="position-relative mt-65">
            <div class="wrapper">
                <div class="section-title mb-4">
                    <h5 class="font-weight-bold">Featured Products</h5>
                    <a href="#">See all products</a>
                </div>
                <div class="row">
                    <div class="col" v-for="product in featuredProducts">
                        <product-card :productid="product.id" :img="product.image" :title="product.name"
                            :price="product.price">
                        </product-card>
                    </div>
                </div>
            </div>
        </section>

        <section id="flash-deals" class="position-relative mt-65">
            <div class="wrapper">
                <div class="row">
                    <div id="fd-text" class="col">
                        <h4 class="font-weight-bold">Special Deals</h4>
                        <h3 class="font-weight-bold mb-4">FOR YOU !</h3>
                        <h5>00 : 00 : 00</h5>
                    </div>
                    <div class="col" v-for="product in flashSaleProducts">
                        <product-card :productid="product.id" :img="product.image" :title="product.name"
                            :price="product.price">
                        </product-card>
                    </div>
                </div>
            </div>
        </section>

        <section id="popular-products" class="position-relative mt-65">
            <div class="wrapper">
                <div class="section-title mb-4">
                    <h5 class="font-weight-bold">Popular Products</h5>
                    <a href="#">See all products</a>
                </div>
                <div class="row">
                    <div class="col" v-for="product in popularProducts">
                        <product-card :productid="product.id" :img="product.image" :title="product.name"
                            :price="product.price">
                        </product-card>
                    </div>
                </div>
            </div>
        </section>

        <section id="testimoni" class="position-relative mt-65">
            <div class="wrapper p-5 bg-white">
                <div class="row mb-5">
                    <div class="col-lg-12">
                        <h5 class="font-weight-bold text-center">Testimonials</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 text-center pl-4 pr-4">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-4">
                        <h5 class="font-weight-bold">Jhon Doe</h5>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text</p>
                    </div>
                    <div class="col-lg-4 text-center pl-4 pr-4">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-4">
                        <h5 class="font-weight-bold">Jhon Doe</h5>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text</p>
                    </div>
                    <div class="col-lg-4 text-center pl-4 pr-4">
                        <img src="assets/images/product.jpg" alt="trusted" class="mb-4">
                        <h5 class="font-weight-bold">Jhon Doe</h5>
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
}