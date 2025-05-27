import JackBackpack from "../../assets/Equipments/Jack Wolfskin Wilderness 65L ზურგჩანთა.jpg";
import EcoKitchenSet from "../../assets/Equipments/ეკო სამზარეულოს ნაკრები.jpg";
import NorthFaceJacket from "../../assets/Equipments/The North Face Mountain Light FUTURELIGHT ქურთუკი.png";
import TiflisGPS from "../../assets/Equipments/ტიფლისი მთის GPS ნავიგატორი.jpg";
import SleepingBag from "../../assets/Equipments/ექსტრემალური საძილე ტომარა.jpg";
import TrekkingPoles from "../../assets/Equipments/ქართული ტრეკინგის ჯოხები.jpg";
import CompactStove from "../../assets/Equipments/ულტრა კომპაქტური ქურა.jpg";
import KhevsuriTarp from "../../assets/Equipments/ხევსურული ტილო.webp";
import SalomonShoes from "../../assets/Equipments/Salomon Speedcross 6 GTX სალაშქრო ფეხსაცმელი.jpg";
import AlpineTent from "../../assets/Equipments/მესტია ალპური კარავი.jpg";
import MSRReactor from "../../assets/Equipments/MSR Reactor 1.7L საველე ქვაბი.jpg";
import Headlamp from "../../assets/Equipments/სანათი ფანარი.webp";
import MultiTool from "../../assets/Equipments/მულტიფუნქციური ხელსაწყო.jpg";
import AlpineHelmet from "../../assets/Equipments/ალპური ჩაფხუტი.jpeg";
import FieldFoodKit from "../../assets/Equipments/საველე კვების ნაკრები.jpg";
import AvalancheBag from "../../assets/Equipments/ანტიასფიქსიური ზურგჩანთა.jpg";

export interface Equipment {
  id: string;
  name: string;
  categoryId: string;
  brandId: string;
  description: string;
  price: {
    amount: number;
    currency: Currency;
    discountAmount?: number;
    originalAmount?: number;
  };
  images: string[];
  weight: {
    value: number;
    unit: WeightUnit;
  };
  dimensions: {
    length: number;
    width: number;
    height: number;
    unit: SizeUnit;
  };
  material: string;
  color: string;
  weatherResistance: {
    waterproof?: boolean;
    windproof?: boolean;
    waterResistanceRating?: string;
    uvProtection?: boolean;
    windResistanceRating?: string;
    snowResistant?: string | boolean;
    mudproof?: boolean;
    shockproof?: boolean;
    coldResistant?: boolean;
    rustproof?: boolean;
    uv_resistance?: boolean;
    snowproof?: boolean;
  };
  seasonRating: SeasonRating;
  features: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  specifications: Record<string, any>;
  stock: {
    available: number;
    status: AvailabilityStatus;
    restock?: Date;
  };
  rating: {
    average: number;
    count: number;
  };
  tags: string[];
  recommendedFor: {
    difficulty: Difficulty;
    terrain: string[];
    activities: string[];
  };
  maintenanceInfo: string;
  warrantyInMonths: number;
  origin: string;
  eco: {
    sustainable: boolean;
    recyclable: boolean;
    description: string;
  };
  lastUpdated: Date;
  image: string
}

export enum AvailabilityStatus {
  IN_STOCK = "IN_STOCK",
  OUT_OF_STOCK = "OUT_OF_STOCK",
  LOW_STOCK = "LOW_STOCK",
  PRE_ORDER = "PRE_ORDER",
}

export enum SeasonRating {
  ALL_SEASON = "ALL_SEASON",
  WINTER = "WINTER",
  SUMMER = "SUMMER",
  SPRING = "SPRING",
  AUTUMN = "AUTUMN",
}

export enum Currency {
  GEL = "GEL",
  USD = "USD",
  EUR = "EUR",
}

export enum WeightUnit {
  G = "g",
  KG = "kg",
  OZ = "oz",
  LB = "lb",
}

export enum SizeUnit {
  CM = "cm",
  IN = "in",
}

export enum Difficulty {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERT = "EXPERT",
  ALL_LEVELS = "ALL_LEVELS",
}


export const Categories = [
  {
    id: "cat1",
    name: "Shelter",
    description: "Tents, tarps, hammocks, and other shelter equipment",
  },
  {
    id: "cat2",
    name: "Sleeping Gear",
    description: "Sleeping bags, pads, and accessories",
  },
  {
    id: "cat3",
    name: "Footwear",
    description: "Boots, shoes, sandals for hiking and camping",
  },
  {
    id: "cat4",
    name: "Clothing",
    description: "Outerwear, layers, and hiking apparel",
  },
  {
    id: "cat5",
    name: "Cooking",
    description: "Stoves, cookware, and food preparation equipment",
  },
  {
    id: "cat6",
    name: "Navigation",
    description: "Maps, compasses, GPS devices",
  },
  {
    id: "cat7",
    name: "Backpacks",
    description: "Day packs, multi-day packs, and accessories",
  },
  {
    id: "cat8",
    name: "Safety & First Aid",
    description: "First aid kits, safety equipment, and emergency gear",
  },
];

export const equipments:Equipment[] = [
  {
    id: "equip6",
    name: "ეკო სამზარეულოს ნაკრები",
    categoryId: "cat5",
    brandId: "Eco Brand",
    description:
      "მდგრადი სამზარეულოს ნაკრები, შექმნილი ეკოლოგიურად მგრძნობიარე მოგზაურებისთვის. მოიცავს ბამბუკის სასადილო ნაკრებს, მრავალჯერადი გამოყენების შესანახ კონტეინერებს და ბუნებრივი მასალებისგან დამზადებულ სამზარეულოს აქსესუარებს. შესაფერისია კემპინგისა და პიკნიკებისთვის ქართულ ბუნებაში, განსაკუთრებით ბორჯომისა და ლაგოდეხის ნაკრძალების მსგავს ადგილებში. დაიცავით ბუნება თქვენი მოგზაურობის დროს!",
    price: {
      amount: 149.99,
      currency: Currency.GEL,
      discountAmount: 129.99,
      originalAmount: 149.99,
    },
    images: [
      "eco-kitchen-main.jpg",
      "eco-kitchen-items.jpg",
      "eco-kitchen-packed.jpg",
    ],
    weight: {
      value: 980,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 25,
      width: 18,
      height: 12,
      unit: SizeUnit.CM,
    },
    material: "ბამბუკი, სილიკონი, უჟანგავი ფოლადი",
    color: "ბუნებრივი/მწვანე",
    weatherResistance: {
      waterproof: false,
      windproof: false,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "4 პირის სასადილო ნაკრები",
      "მრავალჯერადი გამოყენების კონტეინერები",
      "დასაკეცი ბამბუკის თასები",
      "სპირტის ქურა",
      "კომპაქტურად დალაგებული ჩანთა",
      "100% ბიოდეგრადირებადი შესაფუთი მასალა",
    ],
    specifications: {
      contents: [
        "4x ბამბუკის თეფშები",
        "4x ბამბუკის ჭიქები",
        "4x უჟანგავი ფოლადის დანა-ჩანგალი",
        "2x სილიკონის შესანახი კონტეინერი",
        "1x ბამბუკის სალათის თასი",
        "1x ეკო სპირტის ქურა",
      ],
      packedSize: "25 x 18 x 12 სმ",
      cleaningMethod: "წყალსა და საპონში გასარეცხი",
    },
    stock: {
      available: 25,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.5,
      count: 34,
    },
    tags: ["სამზარეულო", "ეკო", "მდგრადი", "კემპინგი", "პიკნიკი", "ბამბუკი"],
    recommendedFor: {
      difficulty: Difficulty.BEGINNER,
      terrain: ["ყველა ტერენი", "კემპინგის ადგილები", "პიკნიკის ადგილები"],
      activities: ["კემპინგი", "პიკნიკი", "დღის ლაშქრობები"],
    },
    maintenanceInfo:
      "გარეცხეთ წყლითა და მსუბუქი საპნით. გააშრეთ საფუძვლიანად შენახვამდე. დროდადრო გამოიყენეთ ბამბუკის ზეთი ხის ელემენტების დასაცავად.",
    warrantyInMonths: 12,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "100% მდგრადი, ბიოდეგრადირებადი მასალები. კომპანია რგავს 1 ხეს ყოველი გაყიდული ნაკრებისთვის.",
    },
    lastUpdated: new Date("2025-04-30"),
    image: EcoKitchenSet,
  },
  {
    id: "equip7",
    name: "The North Face Mountain Light FUTURELIGHT ქურთუკი",
    categoryId: "cat4",
    brandId: "The North Face",
    description:
      "The North Face-ის უახლესი FUTURELIGHT ტექნოლოგიის სადემონსტრაციო ქურთუკი, რომელიც უზრუნველყოფს უპრეცედენტო წყალგაუმტარობას და სუნთქვას. ეს პრემიუმ კლასის ქურთუკი იდეალურია ექსტრემალური ამინდის პირობებისთვის, როგორც ალპურ ზონაში ლაშქრობისთვის, ასევე თოვლიან მთებში. გამოცდილი ალპინისტების სტანდარტებით დამზადებული, ეს ქურთუკი არის ნებისმიერი სერიოზული მთამსვლელის აუცილებელი აღჭურვილობა.",
    price: {
      amount: 999.99,
      currency: Currency.GEL,
    },
    images: [
      "tnf-futurelight-main.jpg",
      "tnf-futurelight-back.jpg",
      "tnf-futurelight-detail.jpg",
    ],
    weight: {
      value: 580,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 72,
      width: 62,
      height: 8,
      unit: SizeUnit.CM,
    },
    material: "100% ნეილონი FUTURELIGHT მემბრანით",
    color: "შავი/ცისფერი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "25,000mm",
      windproof: true,
      uvProtection: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "რევოლუციური FUTURELIGHT მემბრანა",
      "100% დაბეჭდილი ნაკერები",
      "შესაკრავი ქვედა პირი",
      "რეგულირებადი ხელთათმანთან თავსებადი მანჟეტები",
      "ერგონომიული კაპიშონი ჩაფხუტზე გამოსაყენებლად",
      "პიტის სავენტილაციო ელვა შესაკრავები",
      "შიდა და გარე ჯიბეები უსაფრთხო შენახვისთვის",
    ],
    specifications: {
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      fit: "რეგულარული ალპური მორგება",
      layerType: "გარე შრე",
      packable: true,
      weightCategory: "ულტრა-მსუბუქი",
      sustainablyMade: true,
    },
    stock: {
      available: 4,
      status: AvailabilityStatus.LOW_STOCK,
      restock: new Date("2025-07-01"),
    },
    rating: {
      average: 4.9,
      count: 28,
    },
    tags: [
      "ქურთუკი",
      "წყალგაუმტარი",
      "FUTURELIGHT",
      "მთამსვლელობა",
      "ექსტრემალური ამინდი",
      "The North Face",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["მაღალი მთა", "ალპური", "თოვლიანი პირობები", "წვიმიანი"],
      activities: [
        "მთამსვლელობა",
        "ალპინიზმი",
        "სათხილამურო ტურინგი",
        "მაღალი სიმაღლის ლაშქრობა",
      ],
    },
    maintenanceInfo:
      "რეცხეთ ცივ წყალში ნაზი ციკლით. გამოიყენეთ ტექნიკური წყალგაუმტარი ტანსაცმლის გამწმენდი საშუალება. არ გამოიყენოთ დამარბილებელი.",
    warrantyInMonths: 60,
    origin: "დამზადებულია ვიეტნამში",
    eco: {
      sustainable: true,
      recyclable: false,
      description:
        "დამზადებულია გადამუშავებული მასალებისგან და შეესაბამება Bluesign-ის სტანდარტებს.",
    },
    lastUpdated: new Date("2025-04-25"),
    image: NorthFaceJacket,
  },
  {
    id: "equip8",
    name: "ტიფლისი მთის GPS ნავიგატორი",
    categoryId: "cat6",
    brandId: "Geo Tech",
    description:
      "ქართული წარმოების GPS ნავიგატორი, რომელიც სპეციალურად შექმნილია ქართული მთის ბილიკებისთვის. წინასწარ ჩატვირთულია საქართველოს ყველა პოპულარული სათავგადასავლო მარშრუტი, მათ შორის კავკასიონის ქედი, სვანეთი, თუშეთი და სხვა რეგიონები. მედეგი და წყალგაუმტარი მოწყობილობა გააჩნია ხანგრძლივი ბატარეის სიცოცხლე და მუშაობს უკიდურეს გარემო პირობებშიც კი.",
    price: {
      amount: 750,
      currency: Currency.GEL,
      discountAmount: 649.99,
      originalAmount: 750,
    },
    images: [
      "tiflis-gps-main.jpg",
      "tiflis-gps-screen.jpg",
      "tiflis-gps-hand.jpg",
    ],
    weight: {
      value: 230,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 12,
      width: 7,
      height: 3.5,
      unit: SizeUnit.CM,
    },
    material: "მაღალი სიმკვრივის პოლიკარბონატი, გორილას მინა",
    color: "შავი/წითელი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "IPX7",
      windproof: true,
      uvProtection: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "წინასწარ ჩატვირთული საქართველოს ყველა მთის მარშრუტი",
      '3.5" მაღალი გარჩევადობის მზეზე წაკითხვადი ეკრანი',
      "GPS და GLONASS თანამგზავრული სისტემები",
      "altimeter, ბარომეტრი და 3-ღერძიანი კომპასი",
      "30 საათიანი ბატარეის მუშაობა",
      "ავარიული SOS სიგნალი",
      "Bluetooth კავშირი სმარტფონთან",
    ],
    specifications: {
      screenSize: "3.5 დუიმი",
      resolution: "240 x 400 პიქსელი",
      memory: "16GB, microSD-ით გაფართოებადი 64GB-მდე",
      waterRating: "IPX7 (1 მეტრი წყალქვეშ 30 წუთის განმავლობაში)",
      batteryType: "მრავალჯერადი დატენვის ლითიუმ-იონის",
      batteryLife: "30 საათი ჩვეულებრივ რეჟიმში",
      connectivity: "Bluetooth 5.0, USB-C",
    },
    stock: {
      available: 10,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.6,
      count: 52,
    },
    tags: [
      "GPS",
      "ნავიგაცია",
      "მთის მარშრუტები",
      "წყალგაუმტარი",
      "სამთო",
      "ელექტრონიკა",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["მთა", "უდაბნო", "ტყე", "ალპური"],
      activities: ["ლაშქრობა", "ტრეკინგი", "მთამსვლელობა", "ველოტურები"],
    },
    maintenanceInfo:
      "შეინახეთ მშრალ ადგილას. დატენეთ სრულად ყოველთვიურად, როცა არ იყენებთ.",
    warrantyInMonths: 36,
    origin: "აწყობილია საქართველოში",
    eco: {
      sustainable: false,
      recyclable: true,
      description:
        "გადამუშავებადი კომპონენტები. მწარმოებელს აქვს ელექტრონული ნარჩენების გადამუშავების პროგრამა.",
    },
    lastUpdated: new Date("2025-05-07"),
    image: TiflisGPS,
  },
  {
    id: "equip9",
    name: "Jack Wolfskin Wilderness 65L ზურგჩანთა",
    categoryId: "cat7",
    brandId: "Jack Wolfskin",
    description:
      "Jack Wolfskin-ის პრემიუმ კლასის ზურგჩანთა მრავალდღიანი ლაშქრობებისთვის. ერგონომიული X-Transition ზურგის სისტემა უზრუნველყოფს მაქსიმალურ კომფორტს მძიმე ტვირთის ტარებისას. თანამედროვე დიზაინი აერთიანებს გერმანულ საინჟინრო აზროვნებას და მაღალი ხარისხის მასალებს. იდეალურია საქართველოს მთიანი რელიეფისთვის, განსაკუთრებით გრძელი მარშრუტებისთვის ბორჯომ-ხარაგაულის ეროვნულ პარკში, სვანეთსა და ყაზბეგში.",
    price: {
      amount: 799.99,
      currency: Currency.GEL,
    },
    images: [
      "wolfskin-backpack-main.jpg",
      "wolfskin-backpack-side.jpg",
      "wolfskin-backpack-back.jpg",
    ],
    weight: {
      value: 2.4,
      unit: WeightUnit.KG,
    },
    dimensions: {
      length: 78,
      width: 36,
      height: 32,
      unit: SizeUnit.CM,
    },
    material: "Texapore მასალა, მაღალი სიმკვრივის პოლიესტერი",
    color: "ფოთლის მწვანე/შავი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "Texapore 5000mm",
      windproof: true,
      uvProtection: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "X-Transition ზურგის სისტემა",
      "ACS tight უზრუნველყოფს ოპტიმალურ ვენტილაციას",
      "რეგულირებადი ტორსის სიგრძე",
      "წვიმის საფარი ჩაშენებული",
      "ჰიდრატაციის სისტემასთან თავსებადი",
      "ქვედა და ზედა დაშვების წერტილები",
      "მოხსნადი ზედა განყოფილება",
    ],
    specifications: {
      capacity: "65 ლიტრი",
      backLength: "რეგულირებადი (42-56 სმ)",
      material: "Texapore 5000mm",
      hipBeltFeatures: "სისტემა 3D-მორგებით",
      compartments: 3,
      externalAttachments: "ტრეკინგის ჯოხებისთვის, საძილე მატრასისთვის",
    },
    stock: {
      available: 7,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.8,
      count: 32,
    },
    tags: [
      "ზურგჩანთა",
      "Jack Wolfskin",
      "65L",
      "მრავალდღიანი",
      "ერგონომიული",
      "გერმანული ხარისხი",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["მთა", "ალპური", "გრძელი მარშრუტები"],
      activities: ["ბექფეკინგი", "ლაშქრობა", "საერთაშორისო მოგზაურობა"],
    },
    maintenanceInfo:
      "გაწმინდეთ სველი ღრუბლით. არ გარეცხოთ მანქანაში. გააშრეთ ბუნებრივად.",
    warrantyInMonths: 24,
    origin: "დამზადებულია ვიეტნამში",
    eco: {
      sustainable: true,
      recyclable: false,
      description:
        "PFC-თავისუფალი წყალგაუმტარი დამუშავება. შეესაბამება ბლუსაინის (bluesign®) სტანდარტებს.",
    },
    lastUpdated: new Date("2025-04-27"),
    image: JackBackpack,
  },
  {
    id: "equip10",
    name: "ექსტრემალური საძილე ტომარა",
    categoryId: "cat2",
    brandId: "Geo Tech",
    description:
      "უმაღლესი ხარისხის საძილე ტომარა ექსტრემალური პირობებისთვის, შექმნილია საქართველოს მაღალმთიანი რეგიონების ზამთრის ტემპერატურისთვის. განსაკუთრებული თერმული იზოლაციის ტექნოლოგია უზრუნველყოფს სითბოს შენარჩუნებას -30°C ტემპერატურაზეც კი. იდეალურია ყაზბეგის, თუშეთის და სვანეთის მაღალმთიანი ექსპედიციებისთვის. ულტრა-თბილი და მაინც კომპაქტურად დასაკეცი.",
    price: {
      amount: 849.99,
      currency: Currency.GEL,
      discountAmount: 749.99,
      originalAmount: 849.99,
    },
    images: [
      "tbilisi-sleepingbag-main.jpg",
      "tbilisi-sleepingbag-open.jpg",
      "tbilisi-sleepingbag-packed.jpg",
    ],
    weight: {
      value: 1.8,
      unit: WeightUnit.KG,
    },
    dimensions: {
      length: 220,
      width: 80,
      height: 5,
      unit: SizeUnit.CM,
    },
    material:
      "გარე: რიპსტოპ ნეილონი, შიდა: მიკროფიბრა, იზოლაცია: საკუთარი GeoDown ბუმბული",
    color: "შავი/წითელი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "DWR დამუშავება",
      windproof: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "ექსტრემალური ტემპერატურის რეიტინგი: -30°C",
      "900+ ძალის GeoDown იზოლაცია",
      "ანატომიური კაპიშონი სითბოს შესანარჩუნებლად",
      "შიდა ჯიბეები წვრილი ნივთებისთვის",
      "ორმხრივი YKK ელვა შესაკრავი",
      "წყალგაუმტარი შესანახი ტომარა",
      "შეკუმშვის სამაგრები",
    ],
    specifications: {
      fillPower: "900+ GeoDown",
      fillWeight: "650გ",
      temperature: {
        comfort: "-20°C",
        limit: "-25°C",
        extreme: "-30°C",
      },
      construction: "ბაფლბოქსი დაყოფილი კამერებით",
      packedSize: "25 x 18 სმ",
      gender: "უნისექსი",
      zipperSide: "მარჯვენა (ხელმარცხენებისთვის ვარიანტიც ხელმისაწვდომია)",
    },
    stock: {
      available: 5,
      status: AvailabilityStatus.LOW_STOCK,
      restock: new Date("2025-08-15"),
    },
    rating: {
      average: 4.9,
      count: 24,
    },
    tags: [
      "საძილე ტომარა",
      "ზამთარი",
      "ექსტრემალური",
      "მაღალმთიანი",
      "ბუმბული",
      "-30°C",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["მაღალმთიანი", "თოვლიანი", "ექსტრემალური სიცივე"],
      activities: ["ზამთრის ლაშქრობა", "ალპინიზმი", "მაღალმთიანი ექსპედიციები"],
    },
    maintenanceInfo:
      "შენახვისას ჩაუკეცავი დატოვეთ. გარეცხეთ ხელით სპეციალური ბუმბულის სარეცხი საშუალებით. სრულად გააშრეთ გამოყენებამდე.",
    warrantyInMonths: 60,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: false,
      description:
        "ეთიკურად მოპოვებული RDS-სერტიფიცირებული ბუმბული. ბუმბულის 5% იხარჯება ფრინველთა კონსერვაციის პროექტებზე.",
    },
    lastUpdated: new Date("2025-04-20"),
    image: SleepingBag,
  },
  {
    id: "equip11",
    name: "ქართული ტრეკინგის ჯოხები",
    categoryId: "cat4",
    brandId: "Geo Tech",
    description:
      "ულტრა-მსუბუქი ტრეკინგის ჯოხები ადგილობრივი წარმოების, იდეალური საქართველოს მთიანი მარშრუტებისთვის. დამზადებულია ავიაციური ალუმინისგან შესანიშნავი სიმტკიცისა და დაბალი წონისთვის. ერგონომიული სახელურები ნატურალური კორპის ელემენტებით უზრუნველყოფს კომფორტს ხანგრძლივი გამოყენებისას. ორიგინალური ქართული ორნამენტით დამშვენებული დიზაინი, რომელიც აერთიანებს თანამედროვე ტექნოლოგიას და ტრადიციულ ესთეტიკას.",
    price: {
      amount: 199.99,
      currency: Currency.GEL,
      discountAmount: 169.99,
      originalAmount: 199.99,
    },
    images: [
      "georgian-trekking-poles-main.jpg",
      "georgian-trekking-poles-detail.jpg",
      "georgian-trekking-poles-folded.jpg",
    ],
    weight: {
      value: 450,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 135,
      width: 12,
      height: 12,
      unit: SizeUnit.CM,
    },
    material: "7075-T6 ავიაციური ალუმინი, კორპი, EVA ქაფი",
    color: "ვერცხლისფერი/წითელი",
    weatherResistance: {
      waterproof: true,
      windproof: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "3-ნაწილიანი დასაკეცი დიზაინი",
      "სწრაფი დაფიქსირების მექანიზმი",
      "რეგულირებადი სიგრძე: 65-135 სმ",
      "ტრადიციული ქართული ორნამენტი",
      "ანტი-შოკის სისტემა",
      "ზამთრის და სამთო ბუნიკები კომპლექტში",
      "შესანახი ჩანთა ტრანსპორტირებისთვის",
    ],
    specifications: {
      minLength: "65 სმ",
      maxLength: "135 სმ",
      sections: 3,
      gripMaterial: "ნატურალური კორპი და EVA ქაფი",
      tipType: "ვოლფრამის კარბიდი",
      basketTypes: ["სტანდარტული", "თოვლის ფართო"],
    },
    stock: {
      available: 30,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.7,
      count: 42,
    },
    tags: [
      "ტრეკინგის ჯოხები",
      "მსუბუქი",
      "დასაკეცი",
      "ალუმინი",
      "ქართული დიზაინი",
      "ლაშქრობა",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["მთა", "ბილიკები", "კლდოვანი", "თოვლიანი"],
      activities: [
        "ლაშქრობა",
        "ტრეკინგი",
        "ნორდიული სიარული",
        "თოვლში სიარული",
      ],
    },
    maintenanceInfo:
      "გარეცხეთ მტკნარი წყლით გამოყენების შემდეგ. პერიოდულად გაამშრალეთ და შეზეთეთ დაფიქსირების მექანიზმები.",
    warrantyInMonths: 24,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "ყველა მასალა მდგრადი წყაროებიდან. კომპანია მონაწილეობს ტყის აღდგენის პროგრამაში.",
    },
    lastUpdated: new Date("2025-04-12"),
    image: TrekkingPoles,
  },
  {
    id: "equip12",
    name: "ულტრა კომპაქტური ქურა",
    categoryId: "cat5",
    brandId: "Geo Tech",
    description:
      "ინოვაციური ქართული ქურა შექმნილია ექსტრემალური პირობებისთვის. წონის და სივრცის მინიმალიზაციით, იდეალურია მსუბუქი ლაშქრობებისთვის. მუშაობს როგორც გაზის ბალონებით, ასევე საავარიო რეჟიმში მყარი საწვავით. გამოირჩევა საუკეთესო ენერგოეფექტურობით - 1 ლიტრი წყალი დუღს 2.5 წუთში. საქართველოს მთიან რეგიონებში მრავალჯერ გამოცდილი, იდეალური თანამგზავრია ნებისმიერი სირთულის ექსპედიციისთვის.",
    price: {
      amount: 349.99,
      currency: Currency.GEL,
    },
    images: [
      "borjomi-stove-main.jpg",
      "borjomi-stove-cooking.jpg",
      "borjomi-stove-packed.jpg",
    ],
    weight: {
      value: 85,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 5.8,
      width: 5.8,
      height: 3.2,
      unit: SizeUnit.CM,
    },
    material: "ტიტანი, უჟანგავი ფოლადი",
    color: "ტიტანი/ნარინჯისფერი",
    weatherResistance: {
      waterproof: true,
      windproof: true,
      windResistanceRating: "40 კმ/სთ-მდე ქარის მდგრადობა",
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "ულტრა-კომპაქტური დიზაინი",
      "ორმაგი საწვავის ტექნოლოგია",
      "პიეზო ანთების სისტემა",
      "ქარისგან დამცავი სისტემა",
      "ეფექტური სითბოს ამრეკლი",
      "თერმორეგულირების კონტროლი",
      "ადაპტერები სხვადასხვა ტიპის გაზის ბალონებისთვის",
    ],
    specifications: {
      output: "3,200 BTU",
      boilTime: "2.5 წუთი 1 ლიტრისთვის",
      fuelType: ["ბუტანი", "პროპანი", "იზობუტანი", "მყარი საწვავი"],
      burnTime: "1 საათი სტანდარტული 100გ ბალონით",
      ignitionType: "პიეზო და მექანიკური რეზერვი",
      compatibleCookware: "8 დუიმამდე დიამეტრის ჭურჭელი",
    },
    stock: {
      available: 15,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.8,
      count: 67,
    },
    tags: [
      "ქურა",
      "ულტრა-მსუბუქი",
      "კემპინგი",
      "სამზარეულო",
      "ტიტანი",
      "ორმაგი საწვავი",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["ყველა ტერენი", "მაღალი სიმაღლე", "ექსტრემალური პირობები"],
      activities: [
        "ბექფეკინგი",
        "ალპინიზმი",
        "სათხილამურო ტურები",
        "საგანგებო სიტუაციები",
      ],
    },
    maintenanceInfo:
      "გაწმინდეთ საწვავის საცმები რეგულარულად. შეინახეთ მშრალ ადგილას. არ დაშალოთ თვითნებურად.",
    warrantyInMonths: 60,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "100% გადამუშავებადი მასალები. მწარმოებელი ახორციელებს CO2 კომპენსაციის პროგრამას.",
    },
    lastUpdated: new Date("2025-05-02"),
    image: CompactStove,
  },
  {
    id: "equip13",
    name: "ხევსურული ბუნებრივი წყალგაუმტარი ტილო",
    categoryId: "cat1",
    brandId: "South Face",
    description:
      "ტრადიციული მეთოდით დამზადებული წყალგაუმტარი ტილო, შექმნილია ხევსურეთის მთის სოფლებში ადგილობრივი ოსტატების მიერ. ბამბის ქსოვილი დამუშავებულია მდგრადი მცენარეული ცვილებით, რაც ანიჭებს გამძლეობას და წყალგაუმტარობას ქიმიური დანამატების გარეშე. მრავალფუნქციური: შეიძლება გამოყენებულ იქნას როგორც ტენტი, გადასაფარებელი, საფუძველი, ან საგანგებო შემთხვევაში მაკეშიფტ-ზურგჩანთად. უნიკალური ხევსურული ორნამენტებით, ყოველი ნაჭერი არის ხელოვნების ნიმუში.",
    price: {
      amount: 259.99,
      currency: Currency.GEL,
      discountAmount: 229.99,
      originalAmount: 259.99,
    },
    images: [
      "khevsuri-tarp-main.jpg",
      "khevsuri-tarp-setup.jpg",
      "khevsuri-tarp-detail.jpg",
    ],
    weight: {
      value: 1.1,
      unit: WeightUnit.KG,
    },
    dimensions: {
      length: 300,
      width: 250,
      height: 0.3,
      unit: SizeUnit.CM,
    },
    material: "მძიმე ბამბის ქსოვილი, მცენარეული ცვილით დამუშავებული",
    color: "ბუნებრივი/წითელი ორნამენტით",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "ბუნებრივი 800mm",
      windproof: true,
      uvProtection: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "100% ბუნებრივი წყალგაუმტარი საფარი",
      "გამძლე დაწნული კიდეები",
      "გასამაგრებელი რგოლები 8 წერტილში",
      "მრავალფუნქციური გამოყენება",
      "ტრადიციული ხევსურული ორნამენტი",
      "UV დამცავი",
      "შესანახი ტომარა თოკით",
    ],
    specifications: {
      materialWeight: "450 გ/მ²",
      sewingMethod: "გაძლიერებული ორმაგი ნაკერები",
      reinforcedCorners: true,
      grommets: "8 სპილენძის საყელური",
      coatingType: "ბუნებრივი მცენარეული ცვილები",
      packSize: "30 x 15 სმ დიამეტრი",
    },
    stock: {
      available: 8,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.9,
      count: 27,
    },
    tags: [
      "ტილო",
      "წყალგაუმტარი",
      "ბუნებრივი",
      "ხევსურული",
      "ტრადიციული",
      "მრავალფუნქციური",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["ყველა ტერენი", "ტრადიციული კემპინგი"],
      activities: ["ლაშქრობა", "ბუშკრაფტი", "კემპინგი", "პიკნიკები"],
    },
    maintenanceInfo:
      "პერიოდულად განაახლეთ წყალგაუმტარი საფარი მცენარეული ცვილით. ნაზად გარეცხეთ ცივი წყლით საჭიროების შემთხვევაში. გააშრეთ ჩრდილში.",
    warrantyInMonths: 24,
    origin: "ხელნაკეთი ხევსურეთში, საქართველო",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "100% ბუნებრივი მასალები და საღებავები. ხელით დამზადებული. მხარს უჭერს მთის თემების ტრადიციულ რეწვას.",
    },
    lastUpdated: new Date("2025-05-04"),
    image: KhevsuriTarp,
  },
  {
    id: "equip14",
    name: "Salomon Speedcross 6 GTX სალაშქრო ფეხსაცმელი",
    categoryId: "cat3",
    brandId: "Salomon",
    description:
      "Salomon-ის ულტრა-პრემიუმ ტრეილ საბეგი და სალაშქრო ფეხსაცმელი, სპეციალურად ადაპტირებული საქართველოს მთიანი ბილიკებისთვის. GORE-TEX წყალგაუმტარი მემბრანა და ყველაზე აგრესიული Contagrip TA პროტექტორი უზრუნველყოფს მაქსიმალურ მწებვარობას ნებისმიერ ზედაპირზე - სველი ქვებიდან დაწყებული ტალახიანი ფერდობებით დამთავრებული. იდეალურია კავკასიონის რთული მარშრუტებისთვის, მათ შორის თუშეთის, სვანეთის და ხევსურეთის ბილიკებზე.",
    price: {
      amount: 449.99,
      currency: Currency.GEL,
    },
    images: [
      "salomon-speedcross-main.jpg",
      "salomon-speedcross-side.jpg",
      "salomon-speedcross-sole.jpg",
    ],
    weight: {
      value: 320,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 31,
      width: 12,
      height: 15,
      unit: SizeUnit.CM,
    },
    material: "სინთეტიკური ტექსტილი, GORE-TEX მემბრანა, Contagrip TA რეზინი",
    color: "ლურჯი/შავი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "GORE-TEX",
      mudproof: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "GORE-TEX მემბრანა 100% წყალგაუმტარობისთვის",
      "Contagrip TA ულტრა-აგრესიული პროტექტორი",
      "Quicklace თასმის სისტემა",
      "SensiFit სისტემა ფეხის ზუსტი ფიქსაციისთვის",
      "EnergyCell+ შუა ძირი დარტყმის შთანთქმისთვის",
      "OrthoLite ჩასადები სუპინატორი",
      "დამცავი წინა ნაწილი",
    ],
    specifications: {
      drop: "10 მმ",
      weight: "320 გ (ზომა 42 ერთი ფეხსაცმელი)",
      closure: "Quicklace სისტემა",
      waterproofing: "GORE-TEX Performance Comfort",
      soleCompound: "Premium Wet Contagrip",
      terrain: "ტექნიკური ტრეილი",
    },
    stock: {
      available: 12,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.9,
      count: 85,
    },
    tags: [
      "ფეხსაცმელი",
      "ტრეილი",
      "წყალგაუმტარი",
      "GORE-TEX",
      "Salomon",
      "Speedcross",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["მთა", "ტალახიანი", "კლდოვანი", "ალპური", "ტექნიკური"],
      activities: ["ლაშქრობა", "ტრეილ რანინგი", "სათავგადასავლო რბოლები"],
    },
    maintenanceInfo:
      "გარეცხეთ ცივი წყლით, მოაცილეთ ტალახი რბილი ჯაგრისით. გააშრეთ ბუნებრივად, მოარიდეთ პირდაპირ სითბოს.",
    warrantyInMonths: 24,
    origin: "დამზადებულია ვიეტნამში",
    eco: {
      sustainable: false,
      recyclable: false,
      description:
        "Salomon-ის სტანდარტი წარმოებაში, მუშაობს მდგრადი ალტერნატივების განვითარებაზე.",
    },
    lastUpdated: new Date("2025-05-01"),
    image: SalomonShoes,
  },
  {
    id: "equip15",
    name: "ალპური კარავი",
    categoryId: "cat1",
    brandId: "Geo Tech",
    description:
      "უმაღლესი ხარისხის ოთხ-სეზონიანი ალპური კარავი, შექმნილი საქართველოს მაღალმთიანეთის ექსტრემალური პირობებისთვის. ინოვაციური გეოდეზიური კონსტრუქცია უძლებს ძლიერ ქარებს და თოვლის დატვირთვას კავკასიონის მწვერვალებზე. ულტრა-მსუბუქი მაღალტექნოლოგიური მასალები უზრუნველყოფს მაქსიმალურ სიმტკიცეს მინიმალური წონით. იდეალურია ალპინისტებისთვის, მთამსვლელებისთვის და ზამთრის ექსპედიციებისთვის ყაზბეგის, თეთნულდის და უშბის რაიონებში.",
    price: {
      amount: 1499.99,
      currency: Currency.GEL,
      discountAmount: 1299.99,
      originalAmount: 1499.99,
    },
    images: [
      "mestia-tent-main.jpg",
      "mestia-tent-setup.jpg",
      "mestia-tent-inside.jpg",
    ],
    weight: {
      value: 2.8,
      unit: WeightUnit.KG,
    },
    dimensions: {
      length: 230,
      width: 150,
      height: 110,
      unit: SizeUnit.CM,
    },
    material:
      "გარე: 40D Ripstop სილიკონიზირებული ნეილონი, შიდა: 30D რიპსტოპ ნეილონი, იატაკი: 70D ნეილონი",
    color: "წითელი/ნაცრისფერი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "გარე - 5000mm, იატაკი - 10000mm",
      windproof: true,
      uvProtection: true,
      snowResistant: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "გეოდეზიური 4-სეზონიანი დიზაინი",
      "DAC Featherlite NSL ალუმინის კარკასი",
      "ორმაგი კარი და აბსიდა",
      "სრულად დალუქული ნაკერები",
      "6 მაღალმთიანი სამაგრი",
      "ვენტილაციის სისტემა კონდენსატის პრევენციისთვის",
      "ანარეკლი გაიები და პალოები",
    ],
    specifications: {
      capacity: "2 ადამიანი",
      poles: "DAC Featherlite NSL ალუმინი",
      setupTime: "5 წუთი",
      freestanding: true,
      entrances: 2,
      vestibuleArea: "0.8 + 0.8 მ²",
      packSize: "45 x 15 სმ",
    },
    stock: {
      available: 4,
      status: AvailabilityStatus.LOW_STOCK,
      restock: new Date("2025-07-10"),
    },
    rating: {
      average: 4.9,
      count: 19,
    },
    tags: [
      "კარავი",
      "ალპური",
      "ოთხ-სეზონიანი",
      "გეოდეზიური",
      "მაღალი მთა",
      "ზამთარი",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["მაღალმთიანი", "ალპური", "თოვლიანი", "ქარიანი"],
      activities: [
        "ალპინიზმი",
        "მთამსვლელობა",
        "ზამთრის ბანაკი",
        "ექსტრემალური ექსპედიციები",
      ],
    },
    maintenanceInfo:
      "გააშრეთ სრულად შენახვის წინ. პერიოდულად შეამოწმეთ ნაკერები და გაიმტკიცეთ საჭიროების შემთხვევაში. გაწმინდეთ რბილი ღრუბლით.",
    warrantyInMonths: 36,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: false,
      description:
        "PFC-თავისუფალი წყალგაუმტარი დამუშავება. მწარმოებელი მონაწილეობს მთის ეკოსისტემების დაცვის პროგრამაში.",
    },
    lastUpdated: new Date("2025-04-25"),
    image: AlpineTent,
  },
  {
    id: "equip16",
    name: "MSR Reactor 1.7L საველე ქვაბი",
    categoryId: "cat5",
    brandId: "South Face",
    description:
      "MSR-ის რევოლუციური საველე ქვაბი ინტეგრირებული სითბოს გამცვლელი ტექნოლოგიით, შექმნილია მაღალი სიმაღლისა და ექსტრემალური პირობებისთვის. უნიკალური კონსტრუქცია უზრუნველყოფს უსწრაფეს დუღილის დროს და მაქსიმალურ ეფექტიანობას ქარიან და ცივ გარემოში. იდეალურია ალპური სტილის ასვლებისთვის და ექსპედიციებისთვის საქართველოს მაღალ მთებში, სადაც სწრაფად საჭირო გახდება თოვლის გალღობა და წყლის ადუღება.",
    price: {
      amount: 429.99,
      currency: Currency.GEL,
    },
    images: [
      "msr-reactor-main.jpg",
      "msr-reactor-cooking.jpg",
      "msr-reactor-packed.jpg",
    ],
    weight: {
      value: 490,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 15,
      width: 15,
      height: 16,
      unit: SizeUnit.CM,
    },
    material: "უჟანგავი ფოლადი, ალუმინი",
    color: "ვერცხლისფერი/წითელი",
    weatherResistance: {
      windproof: true,
      windResistanceRating: "უმუშავებს 80 კმ/სთ ქარში",
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "ინტეგრირებული სითბოს გამცვლელი",
      "ულტრა-ეფექტური საქვაბე სისტემა",
      "დაცული ქურა ექსტრემალური პირობებისთვის",
      "1.7 ლიტრი მოცულობა",
      "დუღს 1 ლიტრი წყალი 3 წუთში",
      "მუშაობს MSR IsoPro საწვავით",
      "კომპაქტურად იკეცება",
    ],
    specifications: {
      capacity: "1.7 ლიტრი",
      boilTime: "3 წუთი 1 ლიტრისთვის სტანდარტულ პირობებში",
      fuelEfficiency: "80% მეტი ეფექტიანობა ტრადიციულ სისტემებთან შედარებით",
      fuelType: "ბუტანი-პროპანის ნარევი (MSR IsoPro)",
      maxHeight: "16 სმ",
      operationalTemperature: "-25°C-დან +30°C-მდე",
    },
    stock: {
      available: 7,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.8,
      count: 36,
    },
    tags: ["ქვაბი", "MSR", "Reactor", "სამზარეულო"],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["მაღალმთიანი", "ალპური", "თოვლიანი", "ქარიანი"],
      activities: [
        "ალპინიზმი",
        "მთამსვლელობა",
        "ზამთრის ბანაკი",
        "ექსტრემალური ექსპედიციები",
      ],
    },
    maintenanceInfo:
      "გააშრეთ სრულად შენახვის წინ. პერიოდულად შეამოწმეთ ნაკერები და გაიმტკიცეთ საჭიროების შემთხვევაში. გაწმინდეთ რბილი ღრუბლით.",
    warrantyInMonths: 36,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: false,
      description:
        "PFC-თავისუფალი წყალგაუმტარი დამუშავება. მწარმოებელი მონაწილეობს მთის ეკოსისტემების დაცვის პროგრამაში.",
    },
    lastUpdated: new Date("2025-04-25"),
    image: MSRReactor,
  },
  {
    id: "equip17",
    name: "სანათი ფანარი",
    categoryId: "cat8",
    brandId: "Geo Tech",
    description:
      "მძლავრი და საიმედო სანათი ფანარი, შექმნილი საქართველოს მთის პირობებისთვის. 1200 ლუმენის სიმძლავრის LED განათება უზრუნველყოფს მაქსიმალურ ხილვადობას ღამის ლაშქრობებზე და საგანგებო სიტუაციებში. წყალგაუმტარი და დარტყმაგამძლე კორპუსი უძლებს უკიდურეს პირობებს. ნებისმიერი გამოცდილი მთამსვლელისთვის აუცილებელი მოწყობილობა.",
    price: {
      amount: 189.99,
      currency: Currency.GEL,
      discountAmount: 159.99,
      originalAmount: 189.99,
    },
    images: [
      "caucasus-headlamp-main.jpg",
      "caucasus-headlamp-beams.jpg",
      "caucasus-headlamp-straps.jpg",
    ],
    weight: {
      value: 185,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 6.5,
      width: 4.2,
      height: 3.8,
      unit: SizeUnit.CM,
    },
    material: "ავიაციური ალუმინი, გამძლე პოლიმერი",
    color: "შავი/ნარინჯისფერი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "IPX8 (30 წუთი 2 მეტრ სიღრმეზე)",
      shockproof: true,
      coldResistant: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "1200 ლუმენის LED განათება",
      "5 განათების რეჟიმი",
      "SOS საგანგებო სიგნალი",
      "მოძრავი განათების კუთხე",
      "გამძლე მარეგულირებელი თასმები",
      "წითელი უკანა განათება",
      "დისტანციური მართვის ღილაკი",
    ],
    specifications: {
      brightness: "1200 ლუმენი მაქსიმალური",
      batteryType: "18650 ლითიუმ-იონის (ხელახლა დასატენი)",
      batteryLife: "4-120 საათი (რეჟიმის მიხედვით)",
      beamDistance: "200 მეტრი",
      chargingMethod: "USB-C სწრაფი დატენვა",
      lightModes: ["მაქსიმალური", "მაღალი", "საშუალო", "დაბალი", "სტრობოსკოპი", "SOS"],
    },
    stock: {
      available: 22,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.8,
      count: 47,
    },
    tags: [
      "სანათი",
      "ფანარი",
      "LED",
      "წყალგაუმტარი",
      "ღამის ლაშქრობა",
      "უსაფრთხოება",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["ყველა ტერენი", "ღამის პირობები", "გამოქვაბულები"],
      activities: [
        "ღამის ლაშქრობები",
        "ალპინიზმი",
        "გამოქვაბულების კვლევა",
        "საგანგებო სიტუაციები",
      ],
    },
    maintenanceInfo:
      "გამორეცხეთ მტკნარი წყლით მარილიან წყალში გამოყენების შემდეგ. შეინახეთ დატენილი 50%-მდე თუ ხანგრძლივად არ იყენებთ.",
    warrantyInMonths: 60,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "ხელახლა დასატენი ბატარეა. მწარმოებელი მონაწილეობს ელექტრონული ნარჩენების გადამუშავების პროგრამაში.",
    },
    lastUpdated: new Date("2025-05-10"),
    image: Headlamp,
  },
  {
    id: "equip18",
    name: "მულტიფუნქციური ხელსაწყო",
    categoryId: "cat8",
    brandId: "Geo Tech",
    description:
      "უმაღლესი ხარისხის ქართული წარმოების მულტიფუნქციური ხელსაწყო, შექმნილი სალაშქრო და საველე პირობებისთვის. 24 სხვადასხვა ფუნქცია კომპაქტურ დიზაინში, დამზადებული უჟანგავი ფოლადისგან. ტრადიციული ქართული ორნამენტით მოჩუქურთმებული სახელური და შესანახი ტყავის ბუდე. თითოეული ინსტრუმენტი გამოწრთობილია ხელით და გამოცდილია უკიდურეს პირობებში.",
    price: {
      amount: 245.99,
      currency: Currency.GEL,
    },
    images: [
      "imereti-multitool-main.jpg",
      "imereti-multitool-open.jpg",
      "imereti-multitool-case.jpg",
    ],
    weight: {
      value: 280,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 10.5,
      width: 3.2,
      height: 2.1,
      unit: SizeUnit.CM,
    },
    material: "440C უჟანგავი ფოლადი, ბზის ხის სახელურები",
    color: "ვერცხლისფერი/ბუნებრივი ხე",
    weatherResistance: {
      waterproof: false,
      rustproof: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "24 სხვადასხვა ინსტრუმენტი",
      "დანის პირი საჭრელი და ხერხისებრი",
      "მავთულის მჭრელი",
      "სამარჯვები კანაფისა და თოკისათვის",
      "სხვადასხვა ზომის სახრახნისები",
      "ქართული ორნამენტით შემკული",
      "ტყავის შესანახი ბუდე",
    ],
    specifications: {
      tools: [
        "დანა",
        "ხერხი",
        "მაკრატელი",
        "კომბინირებული ბრტყელი სახრახნისი",
        "Phillips სახრახნისი",
        "კონსერვის გამხსნელი",
        "ბოთლის გამხსნელი",
        "პატარა, საშუალო და დიდი სახრახნისები",
        "სადენების გამტარები",
        "ბრტყელტუჩა",
        "წვეტიანი ბრტყელტუჩა",
        "მავთულის მჭრელი",
        "მავთულის გასაძრობი",
        "საზომი სახაზავი (8 სმ)",
        "კაუჭი თოკისთვის",
        "კომპასი",
        "საფუთავი ბაწრის მჭრელი",
      ],
      steelHardness: "58-60 HRC",
      locking: "Liner Lock სისტემა",
      finish: "ხელით გაპრიალებული",
    },
    stock: {
      available: 17,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.9,
      count: 39,
    },
    tags: [
      "მულტიტული",
      "ხელსაწყო",
      "დანა",
      "უჟანგავი ფოლადი",
      "ქართული დიზაინი",
      "გადარჩენის ხელსაწყო",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["ყველა ტერენი"],
      activities: [
        "ლაშქრობა",
        "კემპინგი",
        "ბუშკრაფტი",
        "საველე რემონტი",
        "გადარჩენის სიტუაციები",
      ],
    },
    maintenanceInfo:
      "პერიოდულად გაზეთეთ საჭრელი კიდეები და მოძრავი ნაწილები. დაიცავით ტენისგან. შეინახეთ მშრალ ადგილას.",
    warrantyInMonths: 300,
    origin: "ხელნაკეთი საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "ხელნაკეთი გამძლე პროდუქტი, შექმნილი სამუდამო გამოყენებისთვის. მწარმოებელი იძლევა მთელი სიცოცხლის მანძილზე შეკეთების გარანტიას.",
    },
    lastUpdated: new Date("2025-04-22"),
    image: MultiTool,
  },
  {
    id: "equip19",
    name: "",
    categoryId: "cat8",
    brandId: "Geo Tech",
    description:
      "უმაღლესი კლასის ალპური ჩაფხუტი, შექმნილი კავკასიონის კლდოვანი მარშრუტებისთვის. ინოვაციური კონსტრუქცია აერთიანებს მაქსიმალურ დაცვას და მინიმალურ წონას. შემუშავებულია ქართველი ალპინისტების მიერ და გამოცდილია უშბისა და თეთნულდის რთულ კედლებზე. ულტრა-მსუბუქი კომპოზიტური მასალა უზრუნველყოფს მაღალ დარტყმაგამძლეობას და კომფორტს ხანგრძლივი გამოყენებისას.",
    price: {
      amount: 379.99,
      currency: Currency.GEL,
    },
    images: [
      "dariali-helmet-main.jpg",
      "dariali-helmet-side.jpg",
      "dariali-helmet-details.jpg",
    ],
    weight: {
      value: 240,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 24,
      width: 20,
      height: 13,
      unit: SizeUnit.CM,
    },
    material: "კომპოზიტური პოლიკარბონატი, EVA შიდა ფენა",
    color: "წითელი/შავი",
    weatherResistance: {
      waterproof: true,
      uvProtection: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "უმაღლესი დარტყმაგამძლეობა",
      "ვენტილაციის 12 არხი",
      "რეგულირებადი ზომა",
      "მაგნიტური საკეტი",
      "სათვალის დასამაგრებელი კლიპები",
      "შუბლის განათების დამჭერები",
      "ქვემოდან მიმაგრების ზონა",
    ],
    specifications: {
      certifications: [
        "UIAA 106",
        "EN 12492",
        "CE 1019",
      ],
      impact: "კლდიდან ვარდნის დაცვა",
      headSizeRange: "53-62 სმ",
      ventilationArea: "92 სმ²",
      adjustmentSystem: "360° მიკრორეგულირებადი",
      style: "ჰარდშელი",
    },
    stock: {
      available: 9,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.9,
      count: 28,
    },
    tags: [
      "ჩაფხუტი",
      "ალპინიზმი",
      "დაცვა",
      "მსუბუქი",
      "კლდეზე ცოცვა",
      "უსაფრთხოება",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["კლდოვანი", "ალპური", "მაღალმთიანი"],
      activities: [
        "ალპინიზმი",
        "კლდეზე ცოცვა",
        "via ferrata",
        "მთის ველოსპორტი",
        "ხეობაში დაშვება",
      ],
    },
    maintenanceInfo:
      "რეგულარულად შეამოწმეთ ბზარების არსებობა. გარეცხეთ ცივი წყლით და მსუბუქი საპნით. მოარიდეთ გამხსნელებსა და ქიმიურ საღებავებს.",
    warrantyInMonths: 60,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "გადამუშავებადი მასალები. მწარმოებელი მონაწილეობს მთის გარემოს დასუფთავების პროგრამებში.",
    },
    lastUpdated: new Date("2025-05-15"),
    image: AlpineHelmet,
  },
  {
    id: "equip20",
    name: "საველე კვების ნაკრები",
    categoryId: "cat5",
    brandId: "South Face",
    description:
      "ენდემური ქართული მცენარეებისგან შექმნილი მაღალკალორიული საველე საკვები ნაკრები. სპეციალურად შემუშავებული რეცეპტურა უზრუნველყოფს ხანგრძლივ ენერგიას მთის პირობებში. ლიოფილიზირებული და ვაკუუმში შეფუთული ინგრედიენტები ინარჩუნებს სრულ საკვებ ღირებულებას და გემოს. შეიცავს კოლხეთისა და კავკასიის უნიკალურ მცენარეებს, კენკრას და სანელებლებს. იდეალურია ხანგრძლივი ექსპედიციებისთვის.",
    price: {
      amount: 139.99,
      currency: Currency.GEL,
      discountAmount: 119.99,
      originalAmount: 139.99,
    },
    images: [
      "colchis-food-main.jpg",
      "colchis-food-content.jpg",
      "colchis-food-prepared.jpg",
    ],
    weight: {
      value: 650,
      unit: WeightUnit.G,
    },
    dimensions: {
      length: 25,
      width: 18,
      height: 8,
      unit: SizeUnit.CM,
    },
    material: "ლიოფილიზირებული ნატურალური ინგრედიენტები, ვაკუუმური შეფუთვა",
    color: "ნ/ა",
    weatherResistance: {
      waterproof: true,
      uv_resistance: true,
    },
    seasonRating: SeasonRating.ALL_SEASON,
    features: [
      "5-დღიანი საკვები მარაგი",
      "მაღალი კალორიულობა - 3500+ კკალ/დღეში",
      "მარტივად მოსამზადებელი - მხოლოდ ცხელი წყალი სჭირდება",
      "ცხიმების, ცილების და ნახშირწყლების დაბალანსებული შემცველობა",
      "დამატებული ვიტამინები და მინერალები",
      "ტრადიციული ქართული გემო",
      "ვეგანური ოფციებიც ხელმისაწვდომია",
    ],
    specifications: {
      servings: "15 ულუფა",
      preparationTime: "5-8 წუთი",
      shelfLife: "5 წელი დაულუქავ მდგომარეობაში",
      energyValue: "~700 კკალ ერთ ულუფაზე",
      dietaryInfo: "არ შეიცავს ხელოვნურ დანამატებს, კონსერვანტებს, GMO-ს",
      contents: [
        "გადაბმული ჯოხი თაფლითა და კაკლით",
        "მშრალი ხორცი ადგილობრივი სანელებლებით",
        "კოლხური ბრინჯის კეთილი მშრალი ინგრედიენტებით",
        "მთის კენკრის ენერგეტიკული ფილები",
        "გამომშრალი ხილის და კაკლის ნარევი",
        "ლიოფილიზირებული სუპები",
      ],
    },
    stock: {
      available: 25,
      status: AvailabilityStatus.IN_STOCK,
    },
    rating: {
      average: 4.7,
      count: 54,
    },
    tags: [
      "საკვები",
      "ლიოფილიზირებული",
      "მაღალკალორიული",
      "ექსპედიცია",
      "ენდემური",
      "ქართული",
    ],
    recommendedFor: {
      difficulty: Difficulty.ALL_LEVELS,
      terrain: ["ყველა ტერენი"],
      activities: [
        "ლაშქრობა",
        "ალპინიზმი",
        "ბექფეკინგი",
        "ხანგრძლივი ექსპედიციები",
      ],
    },
    maintenanceInfo:
      "შეინახეთ გრილ, მშრალ ადგილას. ერთხელ გახსნის შემდეგ გამოიყენეთ 48 საათის განმავლობაში.",
    warrantyInMonths: 60,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "მდგრადი წარმოება. შეფუთვა 100% გადამუშავებადია. ინგრედიენტები მოპოვებულია ეთიკური და მდგრადი წყაროებიდან.",
    },
    lastUpdated: new Date("2025-05-08"),
    image: FieldFoodKit,
  },
  {
    id: "equip21",
    name: "ანტიასფიქსიური ზურგჩანთა",
    categoryId: "cat7",
    brandId: "Geo Tech",
    description:
      "ინოვაციური ზვავსაწინააღმდეგო ზურგჩანთა, შექმნილი კავკასიონის ზამთრის ფრირაიდული მარშრუტებისთვის. დუალური საჰაერო ბალიშები უზრუნველყოფს მაქსიმალურ დაცვას ზვავში მოხვედრისას. მოწინავე გააქტიურების სისტემა იძლევა სწრაფი რეაგირების საშუალებას კრიტიკულ სიტუაციებში. იდეალურია ფრირაიდერებისთვის, ალპინისტებისთვის და ყველასთვის, ვინც ზამთარს ზვავსაშიშ ზონაში ატარებს.",
    price: {
      amount: 1299.99,
      currency: Currency.GEL,
    },
    images: [
      "kakheti-avalanche-pack-main.jpg",
      "kakheti-avalanche-pack-deployed.jpg",
      "kakheti-avalanche-pack-back.jpg",
    ],
    weight: {
      value: 2.4,
      unit: WeightUnit.KG,
    },
    dimensions: {
      length: 56,
      width: 32,
      height: 20,
      unit: SizeUnit.CM,
    },
    material: "კორდურა 500D, ბალისტიკური ნეილონი",
    color: "ნარინჯისფერი/შავი",
    weatherResistance: {
      waterproof: true,
      waterResistanceRating: "DWR დამუშავება",
      snowproof: true,
    },
    seasonRating: SeasonRating.WINTER,
    features: [
      "დუალური საჰაერო ბალიშები - 150L მოცულობა",
      "ელექტრონული გააქტიურების სისტემა მექანიკური რეზერვით",
      "ზურგის დამცავი სისტემა",
      "შესაძლებლობა ტვირთის ფიქსირებისთვის გააქტიურების შემდეგ",
      "ინტეგრირებული სასტვენი",
      "დაბალტემპერატურული ელემენტი -30°C-მდე",
      "30L მოცულობა აღჭურვილობისთვის",
    ],
    specifications: {
      capacity: "30 ლიტრი",
      airbagVolume: "150 ლიტრი (დუალური)",
      deploymentTime: "3 წამზე ნაკლები",
      batteryLife: "200+ საათი მზადყოფნის რეჟიმში, 3+ გააქტიურება",
      rechargeMethod: "USB-C",
      certifications: ["CE", "UIAA ტესტირებული"],
      compatibleAccessories: ["ზვავის ზონდი", "ნიჩაბი", "რადიოგადამცემი"],
    },
    stock: {
      available: 7,
      status: AvailabilityStatus.LOW_STOCK,
      restock: new Date("2025-10-15"),
    },
    rating: {
      average: 4.9,
      count: 15,
    },
    tags: [
      "ზვავსაწინააღმდეგო",
      "უსაფრთხოება",
      "ზურგჩანთა",
      "ფრირაიდი",
      "ზამთარი",
      "ბექქანთრი",
    ],
    recommendedFor: {
      difficulty: Difficulty.EXPERT,
      terrain: ["ალპური", "თოვლიანი", "ზვავსაშიში"],
      activities: [
        "ზამთრის ალპინიზმი",
        "ფრირაიდი",
        "ბექქანთრი სქი",
        "სფლითბორდი",
      ],
    },
    maintenanceInfo:
      "შეამოწმეთ სისტემა ყოველ სეზონზე. გაატარეთ ტესტი გააქტიურების ყოველ 3 თვეში. შეცვალეთ ბატარეა ყოველწლიურად.",
    warrantyInMonths: 36,
    origin: "დამზადებულია საქართველოში",
    eco: {
      sustainable: true,
      recyclable: true,
      description:
        "გადამუშავებადი ელექტრონული კომპონენტები. მწარმოებელი პროცენტს გადარიცხავს სამთო მაშველთა ფონდში.",
    },
    lastUpdated: new Date("2025-05-20"),
    image: AvalancheBag,
  },
];
