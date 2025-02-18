export const navbar = [
    {
        id: 1, 
        menu: 'HOME', 
        subheading: [], 
        link : '/'
    },
    {
        id: 2, 
        menu: 'ABOUT SIH',
        subheading: [
          {
            name :  'SIH Process Flow',
            href : '#section1'
          },
           {
            name :'SIH Themes',
            href : '#section2'

           } , 
           {
            name : 'Implementation Team',
            href : '#section3'
          },
           { 
           name : 'SIH Past Editions',
           href : '#section4'
          }]
    },
    {
        id: 3,
        menu: 'GUIDELINES',
        subheading: [
          {
            name : 'For Institutes/Universities',

          },
          {
           name :  'Idea  PPT' 
            },
         {
          name :  'Internal Hackathon Process'
          }
          ]
    },
    {
        id: 4, 
        menu: 'PROBLEM STATEMENT',
        subheading: [],
        link:'problem'
    },
    {
        id: 5, 
        menu: 'KNOW YOUR SPOC',
        subheading: []
    }, 
    {
        id: 6, 
        menu: 'PROJECT IMPLEMENTATION',
        subheading: [],
        link:'implementation'
    },
    {
        id: 7, 
        menu: 'FAQ',
        subheading: [],
        link:'faq'
    },
    {
        id: 8, 
        menu: 'CONTACT US',
        subheading: [],
        link: 'contactus'
    }
];


export const images = [
    './banner/1.png',
    './banner/2.png',
    './banner/3.png',
    './banner/4.png',
    './banner/5.png',
    
]; 

export const slides = [
    {
      title: 'TRANSPORTATION & LOGISTICS',
      description: "Submit your ideas to address the growing pressures on the city's resources, transport networks, and logistic infrastructure.",
      image: './transportation-logistics.png',
    },
    {
      title: 'ROBOTICS AND DRONES',
      description: 'There is a need to design drones and robots that can solve some of the pressing challenges of India such as handling medical emergencies, search and rescue operations, etc.',
      image: './robotics-drones.png',
    },
    {
      title: 'CLEAN & GREEN TECHNOLOGY',
      description: 'Solutions could be in the form of waste segregation, disposal, and improve sanitization system.',
      image: './clean-green-technology.png',
    },
    {
      title: 'MEDTECH/BIOTECH/HEALTHTECH',
      description: 'Cutting-edge technology in these sectors continues to be in demand. Recent shifts in healthcare trends, growing populations also present an array of opportunities for innovation.',
      image: './medtech-biotech-healthtech.png',
    },
    {
      title: 'AGRICULTURE, FOODTECH & RURAL DEVELOPMENT',
      description: 'Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.',
      image: './agriculture-foodtech-rural.png',
    },
    {
      title: 'SMART VEHICLES',
      description: 'Creating intelligent devices to improve commutation sector.',
      image: './smart-vehicles.png',
    },
    {
      title: 'FITNESS & SPORTS',
      description: 'Ideas that can boost fitness activities and assist in keeping fit.',
      image: './fitness-sports.png',
    },
    {
      title: 'SPACE TECHNOLOGY',
      description: "For use in travel or activities beyond Earth's atmosphere, for purposes such as spaceflight or space exploration.",
      image: './space-technology.png',
    },
    {
      title: 'HERITAGE & CULTURE',
      description: 'Ideas that showcase the rich cultural heritage and traditions of India.',
      image: './heritage-culture.png',
    },
  ];
  
export const guidelinePoints = [
    {
      "id": 1,
      "point": "  Hackathons are opportunities to quickly check the feasibility of any novel idea, hence projects developed during Hackathons are usually very crude and absolutely not ready for field implementation or deployment as working solutions. They require considerable work or development before implementation/deployment as reliable, dependable solutions."
    },
    {
      "id": 2,
      "point": "  Ideally, the duration for development and implementation of SIH winning project should be between 6 months to 1 year. However, the duration could be increased/decreased with the mutual consent of all the involved parties."
    },
    {
      "id": 3,
      "point": "  Once the Ministry of Education/AICTE shared the contact details of the winning teams with the respective ministry/department, they are requested to directly initiate communication with the winning teams to discuss further development and implementation roadmap of the winning ideas."
    },
    {
      "id": 4,
      "point": "  Ministry/Department should request a detailed project plan from the winning team which should include implementation details, tools (software & hardware) required, expert support required along with timelines."
    },
    {
      "id": 5,
      "point": "  Ministry should procure commercial software/ hardware critical for the development and implementation of the winning project."
    },
    {
      "id": 6,
      "point": "  Ideally, Ministry/ Department may identify an appropriate autonomous/technical agency/institution under its aegis for the overall coordination, development, and implementation of the proposed winning idea. In case the ministry/department does not have any autonomous/technical agency/institution under its aegis capable of handling this task, then a panel of experts may be appointed to oversee the development and deployment of the SIH-winning solution."
    },
    {
      "id": 7,
      "point": "  Minimum one experienced technical expert per idea/winning solution should be assigned as a ‘mentor’ to ensure timely progress and implementation of the project."
    },
    {
      "id": 8,
      "point": "  In the majority of cases, the winning team will work remotely from their college, hence effective coordination is very critical. It is highly recommended that the ministry/department schedule regular weekly/monthly monitoring sessions with each team through available video conferencing tools."
    },
    {
      "id": 9,
      "point": "  If required, an appropriate faculty member from the same institution of the winning team may be co-opted as an additional ‘mentor’ for better coordination on project development."
    },
    {
      "id": 10,
      "point": "  Additionally, written consent from the winning team’s educational institution should be taken committing support (permissions and time commitments) during the development and deployment of the project. Educational institutions will not have any financial burden in this regard."
    },
    {
      "id": 11,
      "point": "  The selected teams may be asked to visit the ministry/deployment site when required for project-related work. In such cases, expenses related to travel, stay and other logistic support need to be borne by the concerned department/ministry as per usual government norms."
    },
    {
      "id": 12,
      "point": "  In the case of software solutions, a cybersecurity expert may be engaged to ensure that the development of the winning solution is on par with the required safety standards."
    },
    {
      "id": 13,
      "point": "  In the case of a hardware-based product, then it is highly recommended that a ‘Product Design Expert’ may be regularly consulted to ensure state of an art product."
    },
    {
      "id": 14,
      "point": "  Stipend: It is highly recommended that the department/ministry provide a monthly stipend and/or internship to all members of teams working on the development and implementation of winning projects. Each team member can be given a consolidated stipend of Rs 5,000/- per month for a period of 6 months (minimum) or as per the Ministry/Department norms. Note: A maximum of 6 students will get the above-mentioned stipend. If a team has more students (we have given each team a provision to add one more team member), then the stipend per student will be reduced to accommodate extra members."
    },
    {
      "id": 15,
      "point": "  Ministry/Department will share quarterly status reports regarding the implementation and development of SIH-winning solutions with the Ministry of Education’s Innovation cell and AICTE."
    }
  ]
 
 export const milestoneImportant =  [
    {
      "id": 1,
      "point": "In case the solution developed by the teams is an assembly of available components, then any conflict arising due to plagiarism, IP, or copyright violations, the individuals of the concerned team will be solely responsible. Hence, the teams have been advised to use verified open-source components only and acknowledge them appropriately. Ministry/department may also get a signed declaration from all the members of the team in this regard to indemnify itself from any legal conflict."
    },
    {
      "id": 2,
      "point": "In some cases, the final-year students/participants of the winning team pass out of college and proceed to higher studies or jobs, or some members of the team (due to some personal reasons) may not wish to continue with project development post-SIH, in such scenarios the respective teams have the flexibility to include new members into the team as replacements."
    },
    {
      "id": 3,
      "point": "If the IT/Domain expert from the ministry gets involved in the project quite seriously and turns out to be the major contributor (this can be determined after due consultation involving the respective team, the concerned ministry/department, and MIC/AICTE), then he/she can be considered as one of the contributors in IP."
    },
    {
      "id": 4,
      "point": "Long Distance Travel: Each student is entitled to AC-III tier train ticket fare for long-distance travel. The amount will be reimbursed for producing the tickets by your ministry/department."
    },
    {
      "id": 5,
      "point": "Short Distance Travel: Each student will be entitled to a consolidated amount of 1,000/- per day for short-distance travel. The individual will have to justify his/her travel and provide relevant bills and receipts. If the bills/receipts are not produced, he/she won’t be reimbursed the said amount. Any distance within the radius of 100 Km will be considered a short distance. The central point of reference will be the individual’s college. If the student travels from any other location, the matter will be considered after satisfactory justification."
    },
    {
      "id": 6,
      "point": "Stay: Each student can be entitled to a consolidated amount of 1,500/- per day in case of long-distance travel. The amount will be considered for reimbursement on producing relevant bills and receipts."
    },
    {
      "id": 7,
      "point": "Cost Incurred during Field Visits: Other than travel and stay, if any other cost is incurred during any field visit to collect data/field survey or to undertake user testing etc (wherever required), each person will be entitled to an allowance of 500/- per day. To claim this amount, prior approval will have to be taken from your ministry or department for conducting the field visit."
    }
  ]
  
  export const contactLink = [
    {
      "id": 1,
      "point": "sih@aicte-india.org, hackathon@aicte-india.org",
      "link": "./contactLogo/gmail.png"
    },
    {
      "id": 2,
      "point": "+91 011-29581239, +91 011-29581240",
      "link": "./contactLogo/phone.png"
    },
    {
      "id": 3,
      "point": "@SIH2024_MIC",
      "link": "./contactLogo/twitter.png"
    },
    {
      "id": 4,
      "point": "mhrdInnovation",
      "link": "./contactLogo/facebook.png"
    },
    {
      "id": 5,
      "point": "mhrd.innovationcell",
      "link": "./contactLogo/instagram.png"
    },
    {
      "id": 6,
      "point": "MOE's Innovation Cell, AICTE, New Delhi",
      "link": "./contactLogo/map.png"
    }
  ]
  