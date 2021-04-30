export const FetchDataMixin = {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.readTextFile("../data/allproducts.json", (text) => {
            this.products = JSON.parse(text);
        });
    },
    methods: {
        readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }
    },
}