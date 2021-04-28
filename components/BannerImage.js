export const BannerImage = {
    props: ['img', 'alt', 'isActive'],
    computed: {
        getClass: function() {
            return this.isActive ? 'carousel-item active' : 'carousel-item'; 
        }
    },
    template: `
    <div :class="getClass">
        <img class="d-block w-100" :src="img" :alt="alt">
    </div>
    `,
}