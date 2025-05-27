import {
  HikingEvent,
  DifficultyLevel,
  WeatherCondition,
  TerrainType,
  SeasonType,
  EquipmentCategory,
  TripStatus,
} from "./types";
import BorjomKharagauliPark1 from "../../assets/Events/ბორჯომ-ხარაგაულის ეროვნული პარკი1.jpeg";
import BorjomKharagauliPark2 from "../../assets/Events/ბორჯომ-ხარაგაულის ეროვნული პარკი2.jpg";
import BorjomKharagauliPark3 from "../../assets/Events/ბორჯომ-ხარაგაულის ეროვნული პარკი3.jpeg";
import BorjomKharagauliPark4 from "../../assets/Events/ბორჯომ-ხარაგაულის ეროვნული პარკი4.jpg";

import TushetisSoflebi1 from "../../assets/Events/თუშეთის სოფლები1.jpg";
import TushetisSoflebi2 from "../../assets/Events/თუშეთის სოფლები1.jpg";
import TushetisSoflebi3 from "../../assets/Events/თუშეთის სოფლები3.webp";
import TushetisSoflebi4 from "../../assets/Events/თუშეთის სოფლები4.jpg";

import MyinvartsveriHike1 from "../../assets/Events/მყინვარწვერის ლაშქრობა1.jpg";
import MyinvartsveriHike2 from "../../assets/Events/მყინვარწვერის ლაშქრობა2.jpg";
import MyinvartsveriHike3 from "../../assets/Events/მყინვარწვერის ლაშქრობა3.jpg";
import MyinvartsveriHike4 from "../../assets/Events/მყინვარწვერის ლაშქრობა4.jpg";

import SvanetiUshguli1 from "../../assets/Events/სვანეთი უშგული ლაშქრობა1.jpg";
import SvanetiUshguli2 from "../../assets/Events/სვანეთი უშგული ლაშქრობა2.jpg";
import SvanetiUshguli3 from "../../assets/Events/სვანეთი უშგული ლაშქრობა3.jpg";
import SvanetiUshguli4 from "../../assets/Events/სვანეთი უშგული ლაშქრობა4.jpg";



export const hikingEvents: HikingEvent[] = [
  // Event 1 - Svaneti trek
  {
    id: "hike-2025-06-svaneti",
    title: "სვანეთის თრექი - მესტიიდან უშგულამდე",
    description:
      "გაემგზავრეთ საქართველოს სვანეთის რეგიონში, იარეთ მესტიიდან უშგულამდე და აღმოაჩინეთ უძველესი სვანური კოშკები, მწვერვალების შთამბეჭდავი ხედები და აუთენტური მთის სოფლები. ეს ოთხდღიანი ტრეკი გადის ულამაზეს ხეობებში, გადაკვეთს მწვანე მდელოებს და გთავაზობთ დაუვიწყარ შეხვედრას ადგილობრივ კულტურასა და გარემოსთან. იდეალურია გამოცდილი ლაშქრობისთვის, რომელთაც სურთ საქართველოს მთიანი რეგიონების ღრმა შესწავლა.",
    shortDescription:
      "ოთხდღიანი ტრეკი სვანეთის გულში - მესტიიდან ისტორიულ უშგულამდე",
    location: {
      name: "სვანეთი",
      region: "მესტია-უშგული",
      coordinates: {
        latitude: 43.0428,
        longitude: 42.7349,
      },
      meetingPoint: "მესტიის ცენტრალური მოედანი",
      elevation: {
        start: 1500,
        peak: 2200,
        end: 2100,
      },
    },
    startDate: new Date("2025-08-10T09:00:00"),
    endDate: new Date("2025-08-13T16:00:00"),
    registrationDeadline: new Date("2025-08-01T23:59:59"),
    duration: {
      days: 4,
      hours: 30,
    },
    distance: 55, // in kilometers
    difficulty: DifficultyLevel.CHALLENGING,
    expectedWeather: [
      WeatherCondition.SUNNY,
      WeatherCondition.CLOUDY,
      WeatherCondition.RAINY,
    ],
    terrain: [
      TerrainType.MOUNTAINOUS,
      TerrainType.HILLY,
      TerrainType.RIVER_CROSSING,
    ],
    season: SeasonType.SUMMER,

    maxParticipants: 12,
    minParticipants: 4,
    currentParticipants: 7,
    waitingList: 0,

    price: 850,
    currency: "GEL",
    earlyBirdDiscount: {
      amount: 100,
      deadline: new Date("2025-07-10T23:59:59"),
    },
    groupDiscount: {
      minPeople: 3,
      discountPercentage: 12,
    },

    organizer: {
      id: "org-456",
      name: "სვანეთის მოგზაურები",
      contactInfo: {
        email: "info@svanetitrekking.ge",
        phone: "+995599876543",
      },
      rating: 4.9,
      yearsOfExperience: 15,
      certifications: [
        "საქართველოს ტურიზმის ასოციაცია",
        "სამთო გიდების ფედერაცია",
      ],
    },
    guides: [
      {
        id: "guide-002",
        name: "ბექა ქალდანი",
        contactInfo: {
          email: "beka@svanetitrekking.ge",
          phone: "+995599123456",
        },
        rating: 5.0,
        yearsOfExperience: 20,
        certifications: [
          "სამთო გიდი",
          "პირველადი დახმარება",
          "ზვავებზე გადარჩენის კურსი",
        ],
      },
    ],

    requiredEquipment: [
      {
        name: "სამთო ფეხსაცმელი",
        description: "კარგად დარბილებული, წყალგაუმტარი სამთო ფეხსაცმელი",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 45,
      },
      {
        name: "ზურგჩანთა",
        description: "50-60 ლიტრი მოცულობის ზურგჩანთა",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 40,
      },
      {
        name: "სამოსი ფენებად",
        description:
          "საბაზო ფენა, შუა იზოლაციური ფენა და გარე წყალგაუმტარი ფენა",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: false,
      },
    ],
    recommendedEquipment: [
      {
        name: "ტრეკინგის ჯოხები",
        description: "წყვილი რეგულირებადი ტრეკინგის ჯოხები",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: true,
        rentalCost: 25,
      },
      {
        name: "ფოტოაპარატი",
        description:
          "კარგი ხარისხის ფოტოაპარატი შთამბეჭდავი ხედების დასაფიქსირებლად",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: false,
      },
    ],
    itinerary: [
      {
        dayNumber: 1,
        description:
          "მესტიიდან გამგზავრება ჟაბეშისკენ. გზად ვნახავთ სვანური კოშკების კომპლექსს და ლამარიის ეკლესიას.",
        distanceCovered: 12,
        estimatedTime: 6,
        waypoints: [
          {
            name: "მესტია",
            description: "ზემო სვანეთის ადმინისტრაციული ცენტრი",
            coordinates: {
              latitude: 43.0423,
              longitude: 42.7299,
            },
            estimatedArrivalTime: new Date("2025-08-10T09:00:00"),
            facilities: ["სასტუმრო", "კაფე", "მაღაზია", "საპირფარეშო"],
            isRestPoint: true,
          },
          {
            name: "ლამარიის ეკლესია",
            description: "XII საუკუნის ეკლესია უნიკალური ფრესკებით",
            coordinates: {
              latitude: 43.0375,
              longitude: 42.7001,
            },
            estimatedArrivalTime: new Date("2025-08-10T12:30:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "ჟაბეში",
            description: "პატარა სვანური სოფელი, ღამის გასათევი ადგილი",
            coordinates: {
              latitude: 42.9900,
              longitude: 42.8100,
            },
            estimatedArrivalTime: new Date("2025-08-10T17:00:00"),
            facilities: ["საოჯახო სასტუმრო", "საპირფარეშო", "სასმელი წყალი"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 2,
        description:
          "ჟაბეშიდან ადილამდე ტრეკი. გადავკვეთავთ მთის მდინარეს და გავივლით ალპურ მდელოებს.",
        distanceCovered: 15,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ტვიბერის მდინარე",
            description: "მდინარეზე გადასასვლელი ხიდი",
            coordinates: {
              latitude: 42.9730,
              longitude: 42.8400,
            },
            estimatedArrivalTime: new Date("2025-08-11T11:00:00"),
            facilities: ["დასასვენებელი ადგილი", "სასმელი წყალი"],
            isRestPoint: true,
          },
          {
            name: "ადილა",
            description: "მცირე დასახლება, სადაც ღამეს გავათევთ",
            coordinates: {
              latitude: 42.9550,
              longitude: 42.8700,
            },
            estimatedArrivalTime: new Date("2025-08-11T16:00:00"),
            facilities: ["საოჯახო სასტუმრო", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 3,
        description:
          "ადილადან იფარამდე ტრეკი. გადავკვეთავთ ულამაზეს მდელოებს და ვნახავთ ანგურის წყალვარდნილებს.",
        distanceCovered: 14,
        estimatedTime: 8,
        waypoints: [
          {
            name: "ანგურის წყალვარდნილები",
            description: "შთამბეჭდავი წყალვარდნილები მაღალი კლდეებიდან",
            coordinates: {
              latitude: 42.9400,
              longitude: 42.9000,
            },
            estimatedArrivalTime: new Date("2025-08-12T12:30:00"),
            facilities: ["პიკნიკის ადგილი"],
            isRestPoint: true,
          },
          {
            name: "იფარი",
            description: "ისტორიული სოფელი უძველესი კოშკებით",
            coordinates: {
              latitude: 42.9300,
              longitude: 42.9300,
            },
            estimatedArrivalTime: new Date("2025-08-12T17:00:00"),
            facilities: ["სასტუმრო", "კაფე", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 4,
        description:
          "იფარიდან უშგულამდე ტრეკი. დავასრულებთ მოგზაურობას ევროპის ყველაზე მაღალ დასახლებულ სოფელში.",
        distanceCovered: 14,
        estimatedTime: 7,
        waypoints: [
          {
            name: "პანორამული წერტილი",
            description: "ადგილი, საიდანაც ჩანს შხარა და უშბის მწვერვალები",
            coordinates: {
              latitude: 42.9200,
              longitude: 42.9700,
            },
            estimatedArrivalTime: new Date("2025-08-13T11:30:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "უშგული",
            description:
              "UNESCO-ს მსოფლიო მემკვიდრეობის ნუსხაში შეტანილი სოფელი",
            coordinates: {
              latitude: 42.9149,
              longitude: 43.0133,
            },
            estimatedArrivalTime: new Date("2025-08-13T16:00:00"),
            facilities: ["სასტუმრო", "კაფე", "მუზეუმი", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
    ],
    highlights: [
      "UNESCO-ს მსოფლიო მემკვიდრეობაში შეტანილი უშგულის თემი",
      "X-XII საუკუნეების სვანური კოშკები",
      "კავკასიონის ქედის შთამბეჭდავი ხედები",
      "ადგილობრივ ოჯახებში ცხოვრება და სვანური კულტურის გაცნობა",
      "ტრადიციული სვანური სამზარეულო",
    ],

    activities: [
      "ტრეკინგი",
      "კულტურული ძეგლების დათვალიერება",
      "ფოტოგრაფია",
      "ადგილობრივ ოჯახებთან ცხოვრება",
    ],

    includesFood: true,
    includesAccommodation: true,
    includedServices: [
      "პროფესიონალი ადგილობრივი გიდი",
      "ღამისთევა საოჯახო სასტუმროებში",
      "სამჯერადი კვება ტრადიციული კერძებით",
      "ტრანსპორტი ტურის ბოლოს უშგულიდან მესტიაში",
      "ტურისტული დაზღვევა",
    ],

    dangers: [
      "ციცაბო აღმართები და დაღმართები",
      "მდინარეების გადაკვეთა",
      "სწრაფად ცვალებადი ამინდი",
      "მაღალმთიანი ზონის გავლენა (სიმაღლის ავადმყოფობა)",
    ],

    requirementsAndPreparation: [
      "კარგი ფიზიკური მომზადება - 6-8 საათი ლაშქრობა დღეში",
      "მაღალ სიმაღლეზე მუშაობის გამოცდილება",
      "საკმარისი რაოდენობის წყალი (მინიმუმ 2 ლიტრი დღეში)",
      "მზისგან დამცავი საშუალებები",
      "პირადი მედიკამენტები",
    ],

    ageRestriction: {
      minAge: 18,
      maxAge: 60,
    },

    fitnessLevel: "კარგი - უნდა შეგეძლოთ 15+ კმ გავლა დღეში ზურგჩანთით",

    images: [
      SvanetiUshguli1,
      SvanetiUshguli2,
      SvanetiUshguli3,
      SvanetiUshguli4,
    ],

    routeMapUrl: "/maps/svaneti-trek-route.jpg",
    elevationProfileUrl: "/maps/svaneti-trek-elevation.jpg",

    status: TripStatus.UPCOMING,

    reviews: [
      {
        rating: 5,
        comment:
          "ფანტასტიკური ტრეკი! სვანური კოშკები და მთები შთამბეჭდავია. გიდი ბექა ძალიან პროფესიონალური და ცოდნით სავსეა.",
        userName: "ლევან მ.",
        date: new Date("2022-08-25"),
      },
      {
        rating: 5,
        comment:
          "საუკეთესო ტური საქართველოში! უშგული ნამდვილად სანახავია და ადგილობრივ ოჯახებში ცხოვრება შესანიშნავი გამოცდილებაა.",
        userName: "სოფო თ.",
        date: new Date("2022-09-10"),
      },
    ],

    tags: ["სვანეთი", "უშგული", "მესტია", "ტრეკინგი", "UNESCO", "მთის სოფლები"],

    faq: [
      {
        question: "შესაძლებელია ბარგის გადატანა ტრეკისას?",
        answer:
          "დიახ, შესაძლებელია ბარგის გადატანის სერვისის დამატებით შეძენა, რაც საშუალებას მოგცემთ იაროთ მხოლოდ დღის ზურგჩანთით. დამატებითი ღირებულება 200 GEL.",
      },
      {
        question: "არის ინტერნეტი ხელმისაწვდომი მარშრუტზე?",
        answer:
          "ინტერნეტი ხელმისაწვდომია მესტიაში, იფარში და უშგულში, მაგრამ შეზღუდულია შუალედურ სოფლებში.",
      },
      {
        question: "როგორია საპირფარეშოების მდგომარეობა მარშრუტზე?",
        answer:
          "სოფლებში არის ტრადიციული საპირფარეშოები, მაგრამ ტრეკის დროს უმეტესად ბუნებრივი პირობებით მოგიწევთ სარგებლობა.",
      },
    ],

    cancellationPolicy:
      "ტურამდე 2 კვირით ადრე გაუქმების შემთხვევაში თანხა სრულად ბრუნდება. ტურამდე 1 კვირით ადრე გაუქმების შემთხვევაში თანხის 70% ბრუნდება. ტურამდე 3 დღით ადრე გაუქმების შემთხვევაში თანხის 30% ბრუნდება.",
  },
  // Event 3 - Tusheti Adventure
  {
    id: "hike-2025-08-tusheti",
    title: "თუშეთის მთის სოფლების ტური",
    description:
      "ეს ოთხდღიანი სათავგადასავლო ტური გადაგიყვანთ ერთ-ერთ ყველაზე მიუვალ და თვალწარმტაც რეგიონში საქართველოში - თუშეთში. ტური იწყება ლეგენდარული აბანოს უღელტეხილის გადალახვით (2926 მ), რის შემდეგაც მოვინახულებთ ისტორიულ სოფლებს - ომალოს, დართლოს და დიკლოს. მარშრუტი გულისხმობს მაღალმთიან ტრეკინგს, საცხენოსნო გასეირნებებს, ადგილობრივ შატილთან შეხვედრებს და ტრადიციული თუშური სამზარეულოს დაგემოვნებას. ეს ტური გაჩვენებთ საქართველოს ველურ და ხელუხლებელ მთიან რეგიონს, სადაც ჯერ კიდევ ცოცხლობს უძველესი ტრადიციები.",
    shortDescription:
      "ოთხდღიანი ტური კავკასიონის ერთ-ერთ ყველაზე მიუვალ რეგიონში - თუშეთის ისტორიული სოფლების აღმოსაჩენად",
    location: {
      name: "თუშეთი",
      region: "კახეთი",
      coordinates: {
        latitude: 42.3962,
        longitude: 45.6022,
      },
      meetingPoint: "ალვანი, კახეთი",
      elevation: {
        start: 800,
        peak: 2926,
        end: 2100,
      },
    },
    startDate: new Date("2025-07-20T06:00:00"),
    endDate: new Date("2025-07-23T18:00:00"),
    registrationDeadline: new Date("2025-07-10T23:59:59"),
    duration: {
      days: 4,
      hours: 32,
    },
    distance: 60, // in kilometers
    difficulty: DifficultyLevel.CHALLENGING,
    expectedWeather: [
      WeatherCondition.SUNNY,
      WeatherCondition.CLOUDY,
      WeatherCondition.FOGGY,
    ],
    terrain: [TerrainType.MOUNTAINOUS, TerrainType.ROCKY, TerrainType.HILLY],
    season: SeasonType.SUMMER,

    maxParticipants: 10,
    minParticipants: 4,
    currentParticipants: 6,
    waitingList: 0,

    price: 1200,
    currency: "GEL",
    earlyBirdDiscount: {
      amount: 150,
      deadline: new Date("2025-06-20T23:59:59"),
    },
    groupDiscount: {
      minPeople: 4,
      discountPercentage: 15,
    },

    organizer: {
      id: "org-234",
      name: "მთის მოგზაურები",
      contactInfo: {
        email: "info@mountain-travelers.ge",
        phone: "+995599334455",
      },
      rating: 4.9,
      yearsOfExperience: 12,
      certifications: [
        "საქართველოს ტურიზმის ასოციაცია",
        "მთის გიდების საერთაშორისო ასოციაცია",
      ],
    },
    guides: [
      {
        id: "guide-004",
        name: "მამუკა თუშიშვილი",
        contactInfo: {
          email: "mamuka@mountain-travelers.ge",
          phone: "+995599334466",
        },
        rating: 5.0,
        yearsOfExperience: 25,
        certifications: ["სამთო გიდი", "პირველადი დახმარება", "მაშველი"],
        profilePicture: "/images/guides/mamuka.jpg",
      },
    ],

    requiredEquipment: [
      {
        name: "სამთო ფეხსაცმელი",
        description: "მაღალყელიანი, წყალგაუმტარი სამთო ფეხსაცმელი",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: false,
      },
      {
        name: "თბილი ტანსაცმელი",
        description:
          "ღამით ტემპერატურა შეიძლება დაეცეს 0°C-მდე, მაშინაც კი ზაფხულში",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: false,
      },
      {
        name: "წყალგაუმტარი ქურთუკი და შარვალი",
        description: "მთაში ამინდი სწრაფად იცვლება",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 60,
      },
    ],
    recommendedEquipment: [
      {
        name: "ტრეკინგის ჯოხები",
        description: "მნიშვნელოვანია ციცაბო აღმართებისა და დაღმართებისთვის",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: true,
        rentalCost: 30,
      },
      {
        name: "მზისგან დამცავი საშუალებები",
        description: "მზისგან დამცავი კრემი SPF 50+, ქუდი და სათვალე",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: false,
      },
    ],

    itinerary: [
      {
        dayNumber: 1,
        description:
          "ალვანიდან გამგზავრება 4x4 ავტომობილებით აბანოს უღელტეხილისკენ (2926 მ). უღელტეხილის გადალახვის შემდეგ ჩავალთ ომალოში, სადაც დავბინავდებით ტრადიციულ სასტუმრო სახლში.",
        distanceCovered: 15,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ალვანი",
            description: "თუშეთისკენ მიმავალი გზის საწყისი წერტილი",
            coordinates: {
              latitude: 42.0366,
              longitude: 45.3644,
            },
            estimatedArrivalTime: new Date("2025-07-20T06:00:00"),
            facilities: ["კაფე", "მაღაზია", "საპირფარეშო"],
            isRestPoint: true,
          },
          {
            name: "აბანოს უღელტეხილი",
            description: "ევროპაში ერთ-ერთი უმაღლესი გადასასვლელი გზა",
            coordinates: {
              latitude: 42.3035,
              longitude: 45.4527,
            },
            estimatedArrivalTime: new Date("2025-07-20T10:30:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "ომალო",
            description: "თუშეთის ადმინისტრაციული ცენტრი",
            coordinates: {
              latitude: 42.3707,
              longitude: 45.6361,
            },
            estimatedArrivalTime: new Date("2025-07-20T15:00:00"),
            facilities: ["სასტუმრო", "კაფე", "მაღაზია", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 2,
        description:
          "ომალოდან ტრეკინგი დართლოს ისტორიული სოფლისკენ. გზად ვნახავთ ტრადიციულ თუშურ სოფლებს და ციხე-კოშკებს. ღამისთევა დართლოში.",
        distanceCovered: 18,
        estimatedTime: 8,
        waypoints: [
          {
            name: "ზემო ომალო",
            description: "კესელოს ციხის კომპლექსი",
            coordinates: {
              latitude: 42.3651,
              longitude: 45.6308,
            },
            estimatedArrivalTime: new Date("2025-07-21T09:30:00"),
            facilities: ["ისტორიული ძეგლი", "დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "დართლო",
            description: "ტრადიციული თუშური სოფელი თავდაცვითი კოშკებით",
            coordinates: {
              latitude: 42.4082,
              longitude: 45.6392,
            },
            estimatedArrivalTime: new Date("2025-07-21T16:00:00"),
            facilities: ["სასტუმრო", "კაფე", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 3,
        description:
          "დართლოდან ტრეკინგი დიკლოსკენ. გზად გადავკვეთავთ ალპურ მდელოებს და მივაღწევთ ულამაზეს მთის სოფელს, რომელიც მდებარეობს დაღესტნის საზღვართან.",
        distanceCovered: 15,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ალპური მდელოები",
            description: "მწვანე მდელოები სამხრეთის ფერდობზე",
            coordinates: {
              latitude: 42.42,
              longitude: 45.65,
            },
            estimatedArrivalTime: new Date("2025-07-22T11:00:00"),
            facilities: ["დასასვენებელი ადგილი", "წყლის წყარო"],
            isRestPoint: true,
          },
          {
            name: "დიკლო",
            description: "ისტორიული სოფელი რუსეთის საზღვართან",
            coordinates: {
              latitude: 42.3878,
              longitude: 45.7056,
            },
            estimatedArrivalTime: new Date("2025-07-22T16:00:00"),
            facilities: ["საოჯახო სასტუმრო", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 4,
        description:
          "დიკლოდან დაბრუნება ომალოში. შემდეგ გავემგზავრებით ალვანისკენ, აბანოს უღელტეხილის გავლით.",
        distanceCovered: 12,
        estimatedTime: 6,
        waypoints: [
          {
            name: "ომალო",
            description: "თუშეთის ადმინისტრაციული ცენტრი",
            coordinates: {
              latitude: 42.3707,
              longitude: 45.6361,
            },
            estimatedArrivalTime: new Date("2025-07-23T12:00:00"),
            facilities: ["სასტუმრო", "კაფე", "მაღაზია", "საპირფარეშო"],
            isRestPoint: true,
          },
          {
            name: "ალვანი",
            description: "მარშრუტის დასასრული",
            coordinates: {
              latitude: 42.0366,
              longitude: 45.3644,
            },
            estimatedArrivalTime: new Date("2025-07-23T18:00:00"),
            facilities: ["კაფე", "მაღაზია", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
    ],

    highlights: [
      "ევროპაში ერთ-ერთი უმაღლესი მოასფალტებული გზა (აბანოს უღელტეხილი)",
      "თუშეთის ისტორიული ციხე-კოშკები",
      "ტრადიციული თუშური სამზარეულო",
      "შესანიშნავი პანორამული ხედები",
      "ადგილობრივი ხალხის კულტურისა და ტრადიციების გაცნობა",
    ],

    activities: [
      "ტრეკინგი",
      "საცხენოსნო ტური (დამატებით)",
      "კულტურული ღონისძიებები",
      "ფოტოტური",
      "გასტრონომიული ტური",
    ],

    includesFood: true,
    includesAccommodation: true,
    includedServices: [
      "ტრანსპორტირება ალვანიდან თუშეთში და უკან",
      "პროფესიონალი გიდი",
      "განთავსება ადგილობრივ სასტუმრო სახლებში",
      "სამჯერადი კვება ტრადიციული თუშური კერძებით",
      "ტურისტული დაზღვევა",
      "შესვლის ბილეთები ღირსშესანიშნაობებზე",
    ],

    dangers: [
      "მაღალმთიანი ადგილი და მასთან დაკავშირებული სიმაღლის ავადმყოფობა",
      "ციცაბო ბილიკები და ფერდობები",
      "მთის გზებზე მოძრაობა",
      "ამინდის სწრაფი ცვლილებები",
      "შორს სამედიცინო დახმარებიდან",
    ],

    requirementsAndPreparation: [
      "კარგი ფიზიკური მომზადება",
      "მაღალმთიანეთში მოგზაურობის გამოცდილება",
      "საკმარისი რაოდენობის წყალი და წახემსება",
      "პირადი მედიკამენტები",
      "პირადობის დამადასტურებელი დოკუმენტები",
    ],

    ageRestriction: {
      minAge: 16,
      maxAge: 60,
    },

    fitnessLevel:
      "კარგი - უნდა შეგეძლოთ 6-8 საათი ლაშქრობა დღეში რთულ ტერიტორიაზე",

    images: [
      TushetisSoflebi1,
      TushetisSoflebi2,
      TushetisSoflebi3,
      TushetisSoflebi4,
    ],

    routeMapUrl: "/maps/tusheti-route.jpg",
    elevationProfileUrl: "/maps/tusheti-elevation.jpg",

    status: TripStatus.UPCOMING,

    reviews: [
      {
        rating: 5,
        comment:
          "უმაღლესი დონის ტური! მამუკა არის ფანტასტიკური გიდი, რომელიც იცნობს ყველა ბილიკს და ბევრ ისტორიას ყვება ადგილობრივ ტრადიციებზე.",
        userName: "დავით მ.",
        date: new Date("2022-08-05"),
      },
      {
        rating: 5,
        comment:
          "შთამბეჭდავი მოგზაურობა! თუშეთი არის ნამდვილი სამოთხე, რომელიც უნდა ნახოს ყველა ტურისტმა. ტური იყო კარგად ორგანიზებული და საკვები გემრიელი.",
        userName: "ელენე გ.",
        date: new Date("2022-07-28"),
      },
    ],

    tags: [
      "თუშეთი",
      "მთის სოფლები",
      "კულტურული ტური",
      "ტრეკინგი",
      "ტრადიციები",
      "ომალო",
      "დართლო",
    ],

    faq: [
      {
        question: "რა არის საუკეთესო დრო თუშეთში მოსანახულებლად?",
        answer:
          "თუშეთი ხელმისაწვდომია მხოლოდ ზაფხულში, ჩვეულებრივ ივნისის შუა რიცხვებიდან სექტემბრის შუა რიცხვებამდე. უღელტეხილი დანარჩენ დროს თოვლით არის დაფარული.",
      },
      {
        question: "რამდენად კომფორტულია განთავსება?",
        answer:
          "განთავსება არის მარტივი, მაგრამ კომფორტული ადგილობრივ სასტუმრო სახლებში. ძირითადად არის ცხელი წყალი და ელექტროენერგია, თუმცა შეიძლება შეფერხებები იყოს.",
      },
      {
        question: "არის თუ არა ინტერნეტი ხელმისაწვდომი?",
        answer:
          "ინტერნეტი არის შეზღუდული. ზოგიერთ სასტუმროში არის Wi-Fi, მაგრამ კავშირი არასტაბილურია. მობილური ინტერნეტი ხშირად არ მუშაობს.",
      },
    ],

    cancellationPolicy:
      "ტურამდე 3 კვირით ადრე გაუქმების შემთხვევაში თანხა სრულად ბრუნდება. ტურამდე 2 კვირით ადრე გაუქმების შემთხვევაში თანხის 70% ბრუნდება. ტურამდე 1 კვირით ადრე გაუქმების შემთხვევაში თანხა არ ბრუნდება.",
  },
  // Event 2 - myinvartsveri
  {
    id: "hike-2025-05-kazbegi",
    title: "მყინვარწვერის ლაშქრობა",
    description:
      "შეუერთდით ჩვენს სამდღიან სათავგადასავლო ლაშქრობას საქართველოს ერთ-ერთ ულამაზეს მთაზე - მყინვარწვერზე. ეს მარშრუტი გადის თვალწარმტაც პეიზაჟებზე, ალპურ მდელოებზე და გვთავაზობს შესანიშნავ პანორამულ ხედებს კავკასიონის ქედზე. ლაშქრობა მოიცავს ღამისთევას სტეფანწმინდის მახლობლად და ასვლას გერგეტის სამებამდე. იქნება სასიამოვნო გამოცდილება როგორც დამწყები, ასევე გამოცდილი მთამსვლელებისთვის.",
    shortDescription:
      "სამდღიანი ლაშქრობა მყინვარწვერის მიმდებარე ტერიტორიაზე, გერგეტის სამების მონახულებით",
    location: {
      name: "მყინვარწვერი",
      region: "ყაზბეგი",
      coordinates: {
        latitude: 42.6938,
        longitude: 44.5286,
      },
      meetingPoint: "ყაზბეგის მოედანი, სტეფანწმინდა",
      elevation: {
        start: 1740,
        peak: 3800,
        end: 1740,
      },
    },
    startDate: new Date("2025-07-15T08:00:00"),
    endDate: new Date("2025-07-17T18:00:00"),
    registrationDeadline: new Date("2025-07-10T23:59:59"),
    duration: {
      days: 3,
      hours: 20,
    },
    distance: 35, // in kilometers
    difficulty: DifficultyLevel.MODERATE,
    expectedWeather: [WeatherCondition.SUNNY, WeatherCondition.CLOUDY],
    terrain: [TerrainType.MOUNTAINOUS, TerrainType.ROCKY],
    season: SeasonType.SUMMER,

    maxParticipants: 15,
    minParticipants: 5,
    currentParticipants: 8,
    waitingList: 0,

    price: 450,
    currency: "GEL",
    earlyBirdDiscount: {
      amount: 50,
      deadline: new Date("2025-06-15T23:59:59"),
    },
    groupDiscount: {
      minPeople: 4,
      discountPercentage: 10,
    },

    organizer: {
      id: "org-123",
      name: "საქართველოს მთამსვლელთა კლუბი",
      contactInfo: {
        email: "info@georgianhikers.ge",
        phone: "+995555123456",
      },
      rating: 4.8,
      yearsOfExperience: 12,
      certifications: ["საქართველოს მთამსვლელთა ფედერაცია", "UIAA"],
      profilePicture: "/images/organizers/georgian-hikers.jpg",
    },
    guides: [
      {
        id: "guide-001",
        name: "გიორგი მაისურაძე",
        contactInfo: {
          email: "giorgi@georgianhikers.ge",
          phone: "+995555789012",
        },
        rating: 4.9,
        yearsOfExperience: 15,
        certifications: ["პირველადი დახმარება", "მთის გიდი"],
      },
    ],

    requiredEquipment: [
      {
        name: "სამთო ფეხსაცმელი",
        description:
          "წყალგაუმტარი და მაღალყელიანი სამთო ფეხსაცმელი კარგი საყრდენით",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 40,
      },
      {
        name: "თბილი ტანსაცმელი",
        description:
          "თერმული ქვედა საცვლები, სამთო ქურთუკი და წყალგაუმტარი შარვალი",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: false,
      },
      {
        name: "ზურგჩანთა",
        description: "35-45 ლიტრი მოცულობის ზურგჩანთა",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 30,
      },
    ],
    recommendedEquipment: [
      {
        name: "სამთო ჯოხები",
        description: "რეგულირებადი სამთო ჯოხები დაღმართზე მუხლების დასაზოგად",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: true,
        rentalCost: 20,
      },
      {
        name: "მზისგან დამცავი საშუალებები",
        description: "მზისგან დამცავი კრემი (SPF 50+), ქუდი და სათვალე",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: false,
      },
    ],

    itinerary: [
      {
        dayNumber: 1,
        description:
          "შეხვედრა სტეფანწმინდაში დილის 8 საათზე. პირველი დღე მოიცავს ასვლას გერგეტის სამებამდე და ღამისთევას კარვებში სამების მახლობლად.",
        distanceCovered: 8,
        estimatedTime: 5,
        waypoints: [
          {
            name: "სტეფანწმინდა",
            description: "ჩვენი მარშრუტის საწყისი წერტილი",
            coordinates: {
              latitude: 42.6565,
              longitude: 44.6413,
            },
            estimatedArrivalTime: new Date("2025-07-15T08:00:00"),
            facilities: ["საპირფარეშო", "მაღაზია", "კაფე"],
            isRestPoint: true,
          },
          {
            name: "გერგეტის სამება",
            description:
              "XIV საუკუნის ტაძარი, რომელიც განლაგებულია მყინვარწვერის პირისპირ",
            coordinates: {
              latitude: 42.6636,
              longitude: 44.6225,
            },
            estimatedArrivalTime: new Date("2025-07-15T13:00:00"),
            facilities: ["საპირფარეშო", "წყლის წყარო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 2,
        description:
          "მეორე დღეს ვაგრძელებთ ასვლას მეტეოსადგურისკენ. გზად ვხვდებით შესანიშნავ ხედებს და ულამაზეს ალპურ მდელოებს.",
        distanceCovered: 12,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ალპური მდელოები",
            description: "ლამაზი ხედებით და ყვავილებით სავსე მდელოები",
            coordinates: {
              latitude: 42.6739,
              longitude: 44.5981,
            },
            estimatedArrivalTime: new Date("2025-07-16T10:30:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "მეტეოსადგური",
            description:
              "ძველი მეტეოროლოგიური სადგური, საიდანაც გადაშლილია შესანიშნავი ხედები",
            coordinates: {
              latitude: 42.6842,
              longitude: 44.5723,
            },
            estimatedArrivalTime: new Date("2025-07-16T15:00:00"),
            facilities: ["თავშესაფარი", "წყლის წყარო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 3,
        description:
          "მესამე დღეს ვბრუნდებით სტეფანწმინდაში სხვა მარშრუტით, რაც საშუალებას გვაძლევს ვნახოთ ახალი ხედები და ლანდშაფტები.",
        distanceCovered: 15,
        estimatedTime: 8,
        waypoints: [
          {
            name: "ჩანჩქერი",
            description: "პატარა მთის ჩანჩქერი, სადაც შესაძლებელია გაგრილება",
            coordinates: {
              latitude: 42.6701,
              longitude: 44.6119,
            },
            estimatedArrivalTime: new Date("2025-07-17T11:00:00"),
            facilities: ["დასასვენებელი ადგილი", "წყლის წყარო"],
            isRestPoint: true,
          },
          {
            name: "სტეფანწმინდა",
            description: "მარშრუტის დასასრული",
            coordinates: {
              latitude: 42.6565,
              longitude: 44.6413,
            },
            estimatedArrivalTime: new Date("2025-07-17T18:00:00"),
            facilities: ["საპირფარეშო", "მაღაზია", "კაფე", "სასტუმრო"],
            isRestPoint: true,
          },
        ],
      },
    ],

    highlights: [
      "გერგეტის სამების მონახულება",
      "ულამაზესი ხედები კავკასიონის ქედზე",
      "მყინვარწვერის პანორამა",
      "ალპური მდელოები",
      "ადგილობრივი ფლორა და ფაუნა",
    ],

    activities: [
      "ლაშქრობა",
      "ფოტოგრაფია",
      "ველური ბუნების დაკვირვება",
      "კემპინგი",
    ],

    includesFood: true,
    includesAccommodation: true,
    includedServices: [
      "პროფესიონალი გიდი",
      "კვება (საუზმე, ლანჩი, ვახშამი)",
      "კარვები და საძილე ტომრები",
      "პირველადი დახმარების ნაკრები",
      "ტრანსპორტირება ხეობაში",
    ],

    dangers: [
      "მაღალი სიმაღლიდან გამოწვეული შესაძლო პრობლემები",
      "ცვალებადი ამინდის პირობები",
      "ციცაბო და კლდოვანი ადგილები",
      "გადაღლა ხანგრძლივი ლაშქრობის შედეგად",
    ],

    requirementsAndPreparation: [
      "საშუალო ფიზიკური მომზადება",
      "მინიმუმ 2 ლიტრი წყალი დღეში",
      "შესაბამისი ტანსაცმელი და ფეხსაცმელი",
      "პირადი ჰიგიენის საშუალებები",
      "პირადობის დამადასტურებელი დოკუმენტი",
    ],

    ageRestriction: {
      minAge: 16,
      maxAge: 65,
    },

    fitnessLevel: "საშუალო - უნდა შეგეძლოთ 6-8 საათი ლაშქრობა დღეში",

    images: [
MyinvartsveriHike1,
MyinvartsveriHike2,
MyinvartsveriHike3,
MyinvartsveriHike4,

    ],

    routeMapUrl: "/maps/kazbegi-route.jpg",
    elevationProfileUrl: "/maps/kazbegi-elevation.jpg",

    status: TripStatus.UPCOMING,

    reviews: [
      {
        rating: 5,
        comment:
          "შესანიშნავი გამოცდილება! გიდი ძალიან პროფესიონალი იყო და მარშრუტი საოცრად ლამაზი.",
        userName: "ნიკა გ.",
        date: new Date("2022-08-20"),
      },
      {
        rating: 4,
        comment:
          "ძალიან მომეწონა ლაშქრობა, მაგრამ იყო რამდენიმე რთული მონაკვეთი, რომელზეც მეტი გაფრთხილება სჯობდა.",
        userName: "თამარ მ.",
        date: new Date("2022-07-15"),
      },
    ],

    tags: [
      "კავკასიონი",
      "მყინვარწვერი",
      "გერგეტი",
      "ლაშქრობა",
      "ალპური მდელოები",
    ],

    faq: [
      {
        question: "როგორ უნდა მოვემზადო ლაშქრობისთვის?",
        answer:
          "რეკომენდებულია მსუბუქი ფიზიკური ვარჯიში ლაშქრობამდე 2-3 კვირით ადრე. ასევე მნიშვნელოვანია შესაბამისი ტანსაცმლის და ფეხსაცმლის ქონა.",
      },
      {
        question: "შესაძლებელია თუ არა მარშრუტის გამარტივება?",
        answer:
          "დიახ, თუ ამინდი ან ჯგუფის მდგომარეობა მოითხოვს, ჩვენ შეგვიძლია გამარტივებული მარშრუტის შეთავაზება.",
      },
      {
        question: "ინტერნეტი ხელმისაწვდომია ლაშქრობის დროს?",
        answer:
          "ინტერნეტი ხელმისაწვდომია მხოლოდ სტეფანწმინდაში. მარშრუტის უმეტეს ნაწილზე მობილური კავშირი სუსტია ან საერთოდ არ არის.",
      },
    ],

    cancellationPolicy:
      "ლაშქრობამდე 1 კვირით ადრე გაუქმების შემთხვევაში თანხის 80% დაბრუნდება. ლაშქრობამდე 3 დღით ადრე გაუქმების შემთხვევაში თანხის 50% დაბრუნდება. უფრო გვიან გაუქმების შემთხვევაში თანხა არ ბრუნდება.",
  },
  {
    id: "hike-2025-07-borjomi",
    title: "ბორჯომ-ხარაგაულის ეროვნული პარკის ტრეკი",
    description:
      "გაიცანით საქართველოს ერთ-ერთი უდიდესი დაცული ტერიტორია - ბორჯომ-ხარაგაულის ეროვნული პარკი, რომელიც გამოირჩევა ბიომრავალფეროვნებით და ულამაზესი ლანდშაფტებით. ხუთდღიანი მარშრუტი გატარებთ უნიკალური ტყეებით, ალპური მდელოებით, მაღალი მთების პანორამული ხედებით და გასაოცარი ველური ბუნებით. ტრეკინგის დროს დავათვალიერებთ ისტორიულ ძეგლებს, მინერალური წყლების წყაროებს, ვეწვევით მთის პატარა სოფლებს და გავეცნობით ადგილობრივ ტრადიციებს. იდეალური მარშრუტია ბუნების მოყვარულთათვის, რომლებსაც სურთ საქართველოს მთიანი რეგიონების ღრმა შესწავლა და განუმეორებელი შთაბეჭდილებების მიღება.",
    shortDescription:
      "ხუთდღიანი ტრეკი ბორჯომ-ხარაგაულის ეროვნულ პარკში - ტყეების, მდელოების და ისტორიული ადგილების აღმოჩენა",
    location: {
      name: "ბორჯომ-ხარაგაულის ეროვნული პარკი",
      region: "სამცხე-ჯავახეთი",
      coordinates: {
        latitude: 41.8496,
        longitude: 43.3166,
      },
      meetingPoint: "ბორჯომის პარკი, მინერალური წყლის წყარო",
      elevation: {
        start: 850,
        peak: 2642,
        end: 1000,
      },
    },
    startDate: new Date("2025-07-15T08:30:00"),
    endDate: new Date("2025-07-19T16:00:00"),
    registrationDeadline: new Date("2025-07-05T23:59:59"),
    duration: {
      days: 5,
      hours: 38,
    },
    distance: 65, // in kilometers
    difficulty: DifficultyLevel.MODERATE,
    expectedWeather: [
      WeatherCondition.SUNNY,
      WeatherCondition.CLOUDY,
      WeatherCondition.MIXED,
    ],
    terrain: [TerrainType.FOREST, TerrainType.HILLY, TerrainType.MOUNTAINOUS],
    season: SeasonType.SUMMER,

    maxParticipants: 15,
    minParticipants: 5,
    currentParticipants: 9,
    waitingList: 2,

    price: 780,
    currency: "GEL",
    earlyBirdDiscount: {
      amount: 120,
      deadline: new Date("2025-06-15T23:59:59"),
    },
    groupDiscount: {
      minPeople: 4,
      discountPercentage: 15,
    },

    organizer: {
      id: "org-789",
      name: "საქართველოს ბუნების მკვლევარები",
      contactInfo: {
        email: "info@borjomitravel.ge",
        phone: "+995598765432",
      },
      rating: 4.8,
      yearsOfExperience: 12,
      certifications: [
        "ეკოტურიზმის ასოციაცია",
        "ეროვნული პარკების გიდების სერტიფიკატი",
      ],
    },
    guides: [
      {
        id: "guide-078",
        name: "გიორგი მაისურაძე",
        contactInfo: {
          email: "giorgi@borjomitravel.ge",
          phone: "+995599876123",
        },
        rating: 4.9,
        yearsOfExperience: 15,
        certifications: [
          "ეკოტურიზმის გიდი",
          "პირველადი დახმარება",
          "ბორჯომ-ხარაგაულის პარკის სერტიფიცირებული გიდი",
        ],
      },
      {
        id: "guide-082",
        name: "თამარ გელაშვილი",
        contactInfo: {
          email: "tamar@borjomitravel.ge",
          phone: "+995598765111",
        },
        rating: 4.7,
        yearsOfExperience: 10,
        certifications: ["ეკოტურიზმის გიდი", "ბოტანიკური ექსპერტი"],
      },
    ],

    requiredEquipment: [
      {
        name: "ტრეკინგის ფეხსაცმელი",
        description: "კომფორტული, წყალგაუმტარი სამთო ფეხსაცმელი",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 50,
      },
      {
        name: "საძილე ტომარა",
        description: "0-10°C ტემპერატურაზე გათვლილი საძილე ტომარა",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 40,
      },
      {
        name: "წყალგაუმტარი სამოსი",
        description: "წყალგაუმტარი ქურთუკი და შარვალი",
        category: EquipmentCategory.ESSENTIAL,
        canBeRented: true,
        rentalCost: 35,
      },
    ],
    recommendedEquipment: [
      {
        name: "სამგზავრო ჯოხები",
        description: "რეგულირებადი ტრეკინგის ჯოხები",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: true,
        rentalCost: 20,
      },
      {
        name: "ბინოკლი",
        description: "ველური ბუნების დასაკვირვებლად",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: true,
        rentalCost: 15,
      },
      {
        name: "მწერებისგან დამცავი საშუალება",
        description: "ხარისხიანი რეპელენტი",
        category: EquipmentCategory.RECOMMENDED,
        canBeRented: false,
      },
    ],

    itinerary: [
      {
        dayNumber: 1,
        description:
          "შეხვედრა ბორჯომის პარკში. ტრეკი ბორჯომიდან ლიკანის გავლით ყვიბისის მიმართულებით. მინერალური წყაროების მონახულება და ისტორიული ტყეპარკის დათვალიერება.",
        distanceCovered: 10,
        estimatedTime: 5,
        waypoints: [
          {
            name: "ბორჯომის პარკი",
            description: "ცნობილი მინერალური წყლის წყარო და საწყისი წერტილი",
            coordinates: {
              latitude: 41.8381,
              longitude: 43.3891,
            },
            estimatedArrivalTime: new Date("2025-07-15T08:30:00"),
            facilities: [
              "კაფე",
              "საპირფარეშო",
              "სასმელი წყალი",
              "ტურისტული ინფორმაცია",
            ],
            isRestPoint: true,
          },
          {
            name: "ლიკანის სასახლე",
            description: "ისტორიული სასახლე და ბოტანიკური ბაღი",
            coordinates: {
              latitude: 41.8467,
              longitude: 43.3705,
            },
            estimatedArrivalTime: new Date("2025-07-15T11:00:00"),
            facilities: ["საპირფარეშო", "დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "ყვიბისის ეკოსახლი",
            description: "ღამის გასათევი ეკოლოგიური სახლი ტყეში",
            coordinates: {
              latitude: 41.8562,
              longitude: 43.3402,
            },
            estimatedArrivalTime: new Date("2025-07-15T16:30:00"),
            facilities: ["საოჯახო სასტუმრო", "საპირფარეშო", "სამზარეულო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 2,
        description:
          "ყვიბისიდან ქციის ხეობის გავლით მივადგებით ლომისმთას. გზად დავათვალიერებთ ენდემური მცენარეების რეზერვატს და ვეწვევით მთის პატარა სოფელს.",
        distanceCovered: 14,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ქციის ხეობა",
            description: "ბიომრავალფეროვნებით გამორჩეული ხეობა",
            coordinates: {
              latitude: 41.8721,
              longitude: 43.3198,
            },
            estimatedArrivalTime: new Date("2025-07-16T11:30:00"),
            facilities: ["დასასვენებელი ადგილი", "სასმელი წყალი"],
            isRestPoint: true,
          },
          {
            name: "მთის სოფელი",
            description: "პატარა სოფელი ტრადიციული სახლებით",
            coordinates: {
              latitude: 41.8832,
              longitude: 43.2965,
            },
            estimatedArrivalTime: new Date("2025-07-16T14:00:00"),
            facilities: ["სოფლის მაღაზია", "სასმელი წყალი"],
            isRestPoint: true,
          },
          {
            name: "ლომისმთა",
            description: "ღამის გასათევი ადგილი კარვებში",
            coordinates: {
              latitude: 41.8976,
              longitude: 43.2754,
            },
            estimatedArrivalTime: new Date("2025-07-16T17:30:00"),
            facilities: ["საკარვე ადგილი", "კოცონი", "საველე ტუალეტი"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 3,
        description:
          "ლომისმთიდან ავალთ მაღალმთიან ზონაში. გავივლით ალპურ მდელოებს და ავალთ ლომისწვერზე, საიდანაც იშლება შთამბეჭდავი პანორამა.",
        distanceCovered: 12,
        estimatedTime: 8,
        waypoints: [
          {
            name: "ალპური მდელოები",
            description: "მაღალმთიანი მდელო ყვავილების მრავალფეროვნებით",
            coordinates: {
              latitude: 41.9121,
              longitude: 43.2543,
            },
            estimatedArrivalTime: new Date("2025-07-17T11:00:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "ლომისწვერი",
            description: "მწვერვალი (2642მ) პანორამული ხედებით",
            coordinates: {
              latitude: 41.9345,
              longitude: 43.2332,
            },
            estimatedArrivalTime: new Date("2025-07-17T14:00:00"),
            facilities: ["დასასვენებელი ადგილი"],
            isRestPoint: true,
          },
          {
            name: "მთის თავშესაფარი",
            description: "ღამის გასათევი თავშესაფარი",
            coordinates: {
              latitude: 41.9187,
              longitude: 43.2156,
            },
            estimatedArrivalTime: new Date("2025-07-17T17:30:00"),
            facilities: ["თავშესაფარი", "საველე ტუალეტი", "წყლის წყარო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 4,
        description:
          "თავშესაფრიდან ჩავდივართ ხარაგაულის მხარეს. გავივლით ძველ ტყეებს, ვეწვევით ისტორიულ სამონასტრო კომპლექსს.",
        distanceCovered: 16,
        estimatedTime: 7,
        waypoints: [
          {
            name: "ძველი ტყე",
            description: "ხელუხლებელი წიწვოვანი ტყე ასწლოვანი ხეებით",
            coordinates: {
              latitude: 41.9023,
              longitude: 43.1867,
            },
            estimatedArrivalTime: new Date("2025-07-18T11:00:00"),
            facilities: ["დასასვენებელი ადგილი", "წყლის წყარო"],
            isRestPoint: true,
          },
          {
            name: "მონასტერი",
            description: "შუა საუკუნეების სამონასტრო კომპლექსი",
            coordinates: {
              latitude: 41.8876,
              longitude: 43.1598,
            },
            estimatedArrivalTime: new Date("2025-07-18T14:30:00"),
            facilities: ["საპირფარეშო", "სასმელი წყალი"],
            isRestPoint: true,
          },
          {
            name: "მთის სასტუმრო",
            description: "კომფორტული სასტუმრო მთის ძირში",
            coordinates: {
              latitude: 41.8723,
              longitude: 43.1423,
            },
            estimatedArrivalTime: new Date("2025-07-18T17:30:00"),
            facilities: ["სასტუმრო", "რესტორანი", "ცხელი შხაპი", "საპირფარეშო"],
            isRestPoint: true,
          },
        ],
      },
      {
        dayNumber: 5,
        description:
          "სასტუმროდან გასეირნება ხარაგაულის მიმდებარე ბუნებრივ ღირსშესანიშნაობებთან. შემდეგ დაბრუნება ბორჯომისკენ ტრანსფერით.",
        distanceCovered: 13,
        estimatedTime: 5,
        waypoints: [
          {
            name: "მინერალური წყარო",
            description:
              "ბუნებრივი მინერალური წყლის წყარო სამკურნალო თვისებებით",
            coordinates: {
              latitude: 41.8645,
              longitude: 43.1288,
            },
            estimatedArrivalTime: new Date("2025-07-19T10:30:00"),
            facilities: ["დასასვენებელი ადგილი", "სასმელი წყალი"],
            isRestPoint: true,
          },
          {
            name: "პანორამული პლატო",
            description: "ხედი ხარაგაულის ხეობაზე",
            coordinates: {
              latitude: 41.8567,
              longitude: 43.1143,
            },
            estimatedArrivalTime: new Date("2025-07-19T12:30:00"),
            facilities: ["პიკნიკის ადგილი"],
            isRestPoint: true,
          },
          {
            name: "ბორჯომი",
            description: "დასასრული წერტილი - ბორჯომის ცენტრი",
            coordinates: {
              latitude: 41.8381,
              longitude: 43.3891,
            },
            estimatedArrivalTime: new Date("2025-07-19T16:00:00"),
            facilities: ["რესტორანი", "კაფე", "საპირფარეშო", "მაღაზია"],
            isRestPoint: true,
          },
        ],
      },
    ],

    highlights: [
      "უნიკალური ბიომრავალფეროვნება - ენდემური მცენარეები და ცხოველები",
      "ბორჯომის ცნობილი მინერალური წყლები",
      "შუა საუკუნეების სამონასტრო კომპლექსი",
      "კავკასიონის შთამბეჭდავი პანორამული ხედები",
      "ხელუხლებელი ტყეები და ალპური მდელოები",
      "ტრადიციული მთის სოფლები",
    ],

    activities: [
      "ტრეკინგი",
      "ბუნებაზე დაკვირვება",
      "ფოტოგრაფია",
      "კულტურული ძეგლების მონახულება",
      "ადგილობრივ ოჯახებთან შეხვედრა",
      "ბოტანიკური ტური",
    ],

    includesFood: true,
    includesAccommodation: true,
    includedServices: [
      "პროფესიონალი გიდი ბოტანიკური და ზოოლოგიური ცოდნით",
      "ღამისთევა (2 ღამე ეკოსახლში, 1 ღამე კარვებში, 1 ღამე მთის სასტუმროში)",
      "სამჯერადი კვება ადგილობრივი პროდუქტებით",
      "ტრანსფერი ხარაგაულიდან ბორჯომში ტურის ბოლოს",
      "პარკის შესვლის ბილეთები",
      "საველე აღჭურვილობა საზიარო გამოყენებისთვის",
      "ტურისტული დაზღვევა",
    ],

    dangers: [
      "მთის რელიეფი და ციცაბო ფერდობები",
      "ამინდის სწრაფი ცვლილება",
      "გზების დაზიანება წვიმის შემდეგ",
      "შხამიანი მცენარეები",
      "დათვების და მგლების არეალი (იშვიათად, მაგრამ შესაძლებელია)",
    ],

    requirementsAndPreparation: [
      "საშუალო ფიზიკური მომზადება - 5-8 საათი სიარული დღეში",
      "მთის პირობებთან ადაპტაციის უნარი",
      "პირადი ჰიგიენის ნივთები",
      "მზისგან დამცავი საშუალებები",
      "თერმოსი ან წყლის ბოთლი (მინ. 1.5 ლიტრი)",
      "პირადი მედიკამენტები",
    ],

    ageRestriction: {
      minAge: 14,
      maxAge: 65,
    },

    fitnessLevel: "საშუალო - უნდა შეგეძლოთ 15+ კმ გავლა დღეში ზურგჩანთით",

    images: [
      BorjomKharagauliPark1,
      BorjomKharagauliPark2,
      BorjomKharagauliPark3,
      BorjomKharagauliPark4,
    ],

    routeMapUrl: "/maps/borjomi-trek-route.jpg",
    elevationProfileUrl: "/maps/borjomi-trek-elevation.jpg",

    status: TripStatus.UPCOMING,

    reviews: [
      {
        rating: 5,
        comment:
          "საოცარი მოგზაურობა! ბორჯომ-ხარაგაულის პარკი ნამდვილი საგანძურია. გიდმა გიორგიმ უამრავი საინტერესო ამბავი გვიამბო მცენარეებზე და ცხოველებზე.",
        userName: "ნინო კ.",
        date: new Date("2025-07-27"),
      },
      {
        rating: 4,
        comment:
          "ძალიან კარგად ორგანიზებული ტური. განსაკუთრებით მომეწონა თავშესაფარში გატარებული დრო და მონასტრის მონახულება. ერთადერთი მინუსი - წვიმდა ერთი დღე.",
        userName: "დავით ს.",
        date: new Date("2025-08-10"),
      },
      {
        rating: 5,
        comment:
          "უნიკალური გამოცდილება! ბუნება, კულტურა, ისტორია - ყველაფერი ერთად. გიდი თამარი ფანტასტიკური იყო, განსაკუთრებით მისი ცოდნა ბოტანიკაში.",
        userName: "ლელა მ.",
        date: new Date("2024-07-02"),
      },
    ],

    tags: [
      "ბორჯომი",
      "ხარაგაული",
      "ეროვნული პარკი",
      "ეკოტურიზმი",
      "ტრეკინგი",
      "მინერალური წყლები",
      "ბოტანიკა",
    ],

    faq: [
      {
        question: "რა ტიპის საკვებს გვთავაზობთ ტურის განმავლობაში?",
        answer:
          "ვთავაზობთ ტრადიციულ ქართულ კერძებს, უმეტესად ორგანული და ადგილობრივი პროდუქტებით. ვეგეტარიანული და ვეგანური ვარიანტები ხელმისაწვდომია წინასწარი შეტყობინების შემთხვევაში.",
      },
      {
        question: "რა ტიპის საძილე საშუალებებია ხელმისაწვდომი?",
        answer:
          "მარშრუტზე გვაქვს მრავალფეროვანი საცხოვრებელი: ეკოსახლები ადგილობრივ ოჯახებთან, საკარვე ადგილები (კარვებს ჩვენ ვუზრუნველყოფთ), მთის თავშესაფარი (საზიარო ოთახებით) და კომფორტული სასტუმრო ბოლო ღამისთვის.",
      },
      {
        question: "არის ელექტროობა და დამუხტვის შესაძლებლობა?",
        answer:
          "ელექტროობა ხელმისაწვდომია ეკოსახლებში და სასტუმროში, მაგრამ არა კარვების ადგილას და თავშესაფარში. რეკომენდებულია პორტატული დამტენის წამოღება.",
      },
      {
        question: "რა ტიპის ველური ცხოველები შეიძლება შეგვხვდეს?",
        answer:
          "პარკში ბინადრობს მრავალი სახეობა: ირმები, მგლები, დათვები, ფოცხვერები და მრავალი ფრინველი. დათვები და მგლები ძალიან იშვიათად გვხვდება და როგორც წესი, ადამიანებს ერიდებიან. გიდები აღჭურვილნი არიან უსაფრთხოების აღჭურვილობით.",
      },
    ],

    cancellationPolicy:
      "ტურამდე 3 კვირით ადრე გაუქმების შემთხვევაში თანხა სრულად ბრუნდება. ტურამდე 2 კვირით ადრე გაუქმების შემთხვევაში თანხის 80% ბრუნდება. ტურამდე 1 კვირით ადრე გაუქმების შემთხვევაში თანხის 50% ბრუნდება. ტურამდე 3 დღით ადრე გაუქმების შემთხვევაში თანხა არ ბრუნდება.",
  },
];
