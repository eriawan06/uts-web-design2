export const BrandHistory = {
    data(){
      return{
        classCard:"position-relative mt-65",
        classWrapper:"wrapper p-5 bg-white",
        classFont:"font-weight-bold",
        classRow:"row",
        classCol6:"col-lg-6",
        classCol12:"col-lg-12"
      }
    },
    props:["history"],
    template:`
      <section :class="classCard">
        <div :class="classWrapper">
          <h4 :class="classFont">{{history.title}}</h4>
          <div :class="classRow" v-for="(item,index) of history.content" :key="index">
            <div :class="classCol6">
              <h5 :class="classFont">{{item.sideOne.title}}</h5>
              <div :class="classRow">
                <div :class="classCol12" v-for="(contentSideOne,index2) of item.sideOne.content" :key="index2">
                  <p>
                    {{contentSideOne.paragraph}}
                  </p>
                  <img :src="contentSideOne.image" class="card-img-top" alt="">
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
            <div :class="classCol6">
              <div :class="classRow">
                <div :class="classCol12" v-for="(contentSideTwo,index3) of item.sideTwo" :key="index3">
                  <h5 :class="classFont">{{contentSideTwo.title}}</h5>
                  <ul v-for="(achivement,index4) of contentSideTwo.achivement" :key="index4">
                    <li>{{achivement}}</li>  
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
}