import { NavigationMixin } from "../mixins/NavigationMixin.js";

export const AppHeader = {
  mixins: [NavigationMixin],
  data() {
    return {
      navLinks: {
          '/': 'Home',
          '/brand': 'Brand',
          '/products': 'Products'
      }
    }
  },
  template: `
  <nav class="navbar fixed-top navbar-expand-md shadow navbar-custom">
    <div class="wrapper d-flex flex-row justify-content-between">
      <div class="brand-wrapper">
        <a class="navbar-brand" href="#">
          LOGO
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-for="(value,key) in navLinks">
            <a class="nav-link" @click="goToPage(key)">{{value}}</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>  
  </nav>
  `,
}