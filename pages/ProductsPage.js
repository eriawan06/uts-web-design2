export const ProductsPage = {
    template: `
    <section class="position-relative mt-100 py-5">
        <div class="wrapper">
        <div class="row mb-5">
            <div class="col-lg-12">
            <h3 class="font-weight-bold">All Products</h3>
            </div>
        </div>
        <div class="row">
            <div id="collection-filters" class="col-lg-3">
            <div class="filter-container">
                <div class="filter-group">
                <h5 class="font-weight-bold mb-3">Product Name</h5>
                <input type="text" class="form-control">
                </div>
                <div class="filter-group">
                <h5 class="font-weight-bold mb-3">Intended Use</h5>
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" name="for-home" value="home">
                    <label class="form-check-label" for="for-home">For Home</label>
                </div>
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" name="for-work" value="work">
                    <label class="form-check-label" for="for-work">For Work</label>
                </div>
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" name="for-creators" value="creators">
                    <label class="form-check-label" for="for-creators">For Creators</label>
                </div>
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" name="for-students" value="students">
                    <label class="form-check-label" for="for-students">For Students</label>
                </div>
                <div class="form-check mb-2">
                    <input type="checkbox" class="form-check-input" name="for-gaming" value="gaming">
                    <label class="form-check-label" for="for-gaming">For Gaming</label>
                </div>
                </div>
                <div class="filter-group">
                <h5 class="font-weight-bold mb-3">Series</h5>
                <select multiple class="form-control" size="5">
                    <option value="all" class="mb-2">All Series</option>
                    <option value="ProArt StudioBook" class="mb-2">ProArt StudioBook</option>
                    <option value="ZenBook" class="mb-2">ZenBook</option>
                    <option value="VivoBook" class="mb-2">VivoBook</option>
                    <option value="ChromeBook" class="mb-2">ChromeBook</option>
                    <option value="Everyday use" class="mb-2">Everyday use</option>
                    <option value="ExpertBook" class="mb-2">ExpertBook</option>
                    <option value="ROG Zephyrus" class="mb-2">ROG Zephyrus</option>
                    <option value="ROG - Republic of Gamers" class="mb-2">ROG - Republic of Gamers</option>
                    <option value="TUF Gaming" class="mb-2">TUF Gaming</option>
                </select>
                </div>
                <div class="filter-group">
                <h5 class="font-weight-bold mb-3">Pricing</h5>
                <div class="filter-price-group">
                    <label for="filter-price-min" class="filter-price-label">
                        Min Price : <span class="filter-price-tag">Rp 0</span>
                    </label>
                    <input type="range" name="filter-price-min" id="filter-price-min" 
                        class="price-slider" min="0" max="10000000" step="100000" value="0">
                </div>
                <div class="filter-price-group">
                    <label for="filter-price-max" class="filter-price-label">
                        Max Price : <span class="filter-price-tag">Rp 0</span>
                    </label>
                    <input type="range" name="filter-price-max" id="filter-price-max" 
                        class="price-slider" min="0" max="10000000" step="100000" value="0">
                </div>
                </div>
            </div>
            </div>
            <div class="col-lg-9">
            <div class="row mb-5">
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
                <div class="col-lg-4">
                <div class="card">
                    <img class="card-img-top" src="assets/images/product.jpg" alt="Card image cap">
                    <div class="card-body">
                    <p class="card-text">Laptop HP Pavilion Gaming Laptop - 15- dxxdsxdsfdss...</p>
                    <h5 class="card-title font-weight-bold">Rp 10.000.000</h5>
                    <a href="#" class="btn btn-primary">Detail</a>
                    <a href="#" class="btn btn-primary">Buy</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    `,
}