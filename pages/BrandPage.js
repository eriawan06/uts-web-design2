import { AppBanner } from '../components/AppBanner.js';
import { BannerImage } from '../components/BannerImage.js';
import { BrandHistory } from '../components/BrandHistory.js';

export const BrandPage = {
  name: 'BrandPage',
  components:{
    'AppBanner': AppBanner,
    'BannerImage': BannerImage,
    'BrandHistory': BrandHistory,
  },
  template: `
    <div>
      <app-banner>
        <banner-image img="assets/images/banner_brand.jpg" alt="First slide" is-active="true"></banner-image>
      </app-banner>

      <brand-history v-for="history in histories" :key="history.title" :history="history"></brand-history>
    </div>
  `,
  data() {
    return {
      histories:[
        {
          title:"1989-1995",
          content:[
            {
              sideOne:{
                title:"The Story begins",
                content:[
                  {
                    "paragraph":'The idea for the company that would eventually become ASUS began as a conversation in a coffee shop in Taipei, where a few ambitious engineers shared a dream of creating a "small and beautiful company."',
                    "image":"assets/images/1989_1.jpg"
                  },
                  {
                    "paragraph":'Within eight months, these engineers had created the Cache 386/33 and ISA 486/25 — two personal computer motherboards used in industry-leading products built by IBM and ALR. With the success of these early motherboards, Taiwan became known globally as a hub for high-quality IT products.',
                    "image":"assets/images/1989_2.jpg"
                  }
                ]
              },
              sideTwo:[
                {
                  title:"1989",
                  achivement:[
                    'Launch of the Cache386/33 and 486/25 motherboards, used in IBM and ALR products',
                  ]
                },
                {
                  title:"1990",
                  achivement:[
                    'Launch of the EISA 486 motherboard, which subsequently becomes the most popular motherboard in the world',
                  ]
                },
                {
                  title:"1992",
                  achivement:[
                    'Launch of the 32-bit SCSI interface that includes IC software developed in-house by ASIC: EISA-SC100',
                    'Launch of the advanced Intel',
                  ]
                },
                {
                  title:"1993",
                  achivement:[
                    'Launch the advanced Intel Pentium (586) motherboard',
                  ]
                },
                {
                  title:"1995",
                  achivement:[
                    'ASUS becomes the world’s leading motherboard maker',
                    'Launch of the first ASUS dual-socket Intel Pentium motherboard: PCI/I-P54NP4',
                  ]
                }
              ]
            }
          ]
        },
        {
          title:"1996-2004",
          content:[
            {
              sideOne:{
                title:"The world’s No. 1 motherboard maker …",
                content:[
                  {
                    "paragraph":'As the business quickly developed, ASUS Chairman Jonney Shih actively trained and mentored the company’s new engineers, focusing on advanced electronics theory and product development. He also spearheaded the design of new motherboards, maintaining a passionate focus on innovation.',
                    "image":"assets/images/1996_1.jpg"
                  },
                  {
                    "paragraph":'Talent acquisition became a top priority for the company. Technical experts from all over Taiwan were brought in to design and develop new technologies for computer peripherals, multimedia devices, and application-specific integrated circuits (ASIC). At this time, at least 2 percent of revenue and 10 percent of headcount were designated specifically to R&D. On a percentage basis, this significant investment in R&D was on par with the world’s leading IT companies.',
                    "image":"assets/images/1996_2.jpg"
                  }
                ]
              },
              sideTwo:[
                {
                  title:"1996",
                  achivement:[
                    'ASUS begins trading as a public company on the Taiwan Stock Exchange',
                  ]
                },
                {
                  title:"1997",
                  achivement:[
                    'Launch of the first notebook: ASUS P6300',
                  ]
                },
                {
                  title:"1998",
                  achivement:[
                    'Launch of best-performing Intel Pentium II motherboard: ASUS P2B',
                  ]
                },
                {
                  title:"2000",
                  achivement:[
                    'ASUS customer service centers are established in China, Netherlands, United States, Czech Republic, Australia and Japan',
                  ]
                },
                {
                  title:"2001",
                  achivement:[
                    'The ASUS Royal Club association is established, providing 24/7 technology support and customer service',
                    'Launch of first all-black PCB motherboard: ASUS CUSL2-C Black Pearl'
                  ]
                },
                {
                  title:"2002",
                  achivement:[
                    'Launch of the world’s first PDA to support the Intel',
                  ]
                },
                {
                  title:"2003",
                  achivement:[
                    'Launch of the first ASUS 3G flip phone: J100',
                  ]
                },
                {
                  title:"2004",
                  achivement:[
                    'Launch of the world’s first notebook with a built-in TV-tuner and multimedia software: ASUS W1',
                    'ASUS becomes the world’s leading VGA display maker',
                    'Launch of three-RAID, dual-LAN motherboard: ASUS P5AD2',
                    'Launch of first multi-GPU (NVIDIA SLI) motherboard: ASUS A8N-SLI Deluxe',
                  ]
                },
              ]
            }
          ]
        },
        {
          title:"2005-2008",
          content:[
            {
              sideOne:{
                title:"A new brand … and a revolutionary idea",
                content:[
                  {
                    "paragraph":'Early in the new millennium, a new Lean Thinking initiative was set into motion, integrating key elements of the Six Sigma principles. This new initiative — the ASUS Way — placed an emphasis on encouraging employees to reach their potential while improving efficiency across the organization.',
                    "image":"assets/images/2005_1.jpg"
                  },
                  {
                    "paragraph":'As the company expanded various product lines, it also developed a unique sub-brand called Republic of Gamers (ROG), a division dedicated to creating the world’s best gaming gear. A special committee was formed to oversee the ROG brand and to guide development of leading-edge products known for performance and quality.',
                    "image":"assets/images/2005_2.jpg"
                  },
                  {
                    "paragraph":'During this period, ASUS also introduced the revolutionary Eee PC — a new form factor that captured the imagination of people around the world. Launching a new era of personal mobile computing, the Eee PC became a global top-seller and received scores of international awards. The momentum and recognition from the global success of the Eee PC launched ASUS to the forefront of the industry and transformed the company into a leading international consumer electronics brand.',
                    "image":'assets/images/2005_3.jpg'
                  }
                ]
              },
              sideTwo:[
                {
                  title:"2005",
                  achivement:[
                    'Launch of the first-ever environmentally friendly motherboard developed in Taiwan',
                    'Launch of the first laptop with a built-in, swiveling webcam: ASUS W5A',
                  ]
                },
                {
                  title:"2006",
                  achivement:[
                    'Republic of Gamers (ROG), the only ASUS sub-brand, is established',
                    'Launch of the first motherboard designed for overclockers and gaming enthusiasts: ROG Crosshair',
                  ]
                },
                {
                  title:"2007",
                  achivement:[
                    'Launch of the co-branded phone built in partnership with Mercedes-Benz: ASUS P526 C-Class',
                    'Launch of the notebook developed in partnership with Automobili Lamborghini: ASUS Lamborghini VX series',
                    'Launch of the first ASUS cameras: BrightCam AF-200 and MF-200',
                    'Launch of the world’s thinnest and lightest business laptop: ASUS U1',
                    'Launch of first gaming notebooks: ASUS G1 and G2',
                    'Launch of the company’s first external graphics-card dock: ROG XG Station',
                    'Launch of overclocking record-breaking motherboard: ROG Striker Extreme',
                    'Launch of first motherboard with hybrid (air or water) thermal design: ROG Blitz Extreme',
                  ]
                },
                {
                  title:"2008",
                  achivement:[
                    'Eee PC named Product of the Year by Forbes Asia',
                    'Launch of the world’s first notebook to utilize bamboo as a primary material: ASUS Bamboo series',
                    'Launch of the first ROG graphics card: ROG 9600/9800 GT Matrix',
                    'Launch of the first ASUS All-in-One PC with touchscreen: Eee Top',
                    'The first-ever ASUS cloud service is launched',
                    'ASUS engineers introduce True 16+2 motherboard power-phase technology, significantly improving power efficiency',
                    'Launch of the first laptop to incorporate a premium leather design: ASUS U2E',
                    'Launch of the first motherboard with onboard joystick-lick control for overclocking: ROG Rampage Extreme',
                    'Launch of first motherboard with 16-phase power design for unprecedented power regulation and efficiency: ASUS P5Q Deluxe',
                  ]
                },
              ]
            }
          ]
        }
      ]
    }
  },
}