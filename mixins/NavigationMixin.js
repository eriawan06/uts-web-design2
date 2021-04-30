export const NavigationMixin = {
  data(){
    return {
      currentRoute:'/',
      currIdProduct:null,
    };
  },
    methods: {
      goToPage(route) {
        this.$emit('update-route', route);
      },
      updateCart(id){
        console.log(id);
        this.$emit('update-id-product', id);
        this.goToPage('/buy');
      },
      updateIdProduct(id){
        this.currIdProduct = id;
        this.updateCart(id);
      },
      updateCurrRoute(route){
        this.currRoute = route;
        this.goToPage(route);
      }
    },
}