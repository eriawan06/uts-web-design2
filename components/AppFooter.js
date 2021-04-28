export const AppFooter = {
    name: 'AppFooter',
    data() {
        return {
            footerLinks: {
                'Support': {
                    '/contact': 'Contact Us',
                    '/technical-support': 'Technical Support',
                    '/privacy': 'Privacy Policy',
                    '/faqs': 'FAQs',
                },
                'Quick Links': {
                    '/': 'Home',
                    '/brands': 'Brands',
                    '/products': 'Products',
                },
                'Social': {
                    'https://www.instagram.com/': 'Instagram',
                    'https://www.facebook.com/': 'Facebook',
                    'https://twitter.com/': 'Twitter',
                    'https://www.youtube.com/': 'Youtube',
                }
            }
        }
    },
    template: `
    <footer class="position-relative mt-65">
        <div class="wrapper">
            <div class="row mb-5">
                <div class="col-lg-6 pl-4 pr-4">
                    <h5 class="font-weight-bold mb-3">About Us</h5>
                    <p>ASUS is passionate about technology and driven by innovation. We dream, we dare and we strive to create an effortless and joyful digital life for everyone. We're always in search of incredible ideas and experiences, and we aspire to deliver the incredible in everything we do.</p>
                </div>
                <div class="col-lg-2 pl-4 pr-4" v-for="(value,key) in footerLinks">
                    <h5 class="font-weight-bold mb-3">{{key}}</h5>
                    <template v-for="(linkName, linkRef) in value">
                        <a :href="linkRef">{{linkName}}</a>
                    </template>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p class="text-center">&copy; 2021 All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    `
}
