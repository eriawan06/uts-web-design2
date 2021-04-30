export const NavigationMixin = {
    methods: {
        goToPage(route) {
          this.$emit('update-route', route);
        }
    },
}