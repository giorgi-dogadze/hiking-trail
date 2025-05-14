// Enums for the hiking events
export enum DifficultyLevel {
    EASY = "EASY",
    MODERATE = "MODERATE",
    CHALLENGING = "CHALLENGING",
    DIFFICULT = "DIFFICULT",
    EXTREME = "EXTREME"
  }
  
  export enum WeatherCondition {
    SUNNY = "SUNNY",
    CLOUDY = "CLOUDY",
    RAINY = "RAINY",
    SNOWY = "SNOWY",
    WINDY = "WINDY",
    FOGGY = "FOGGY",
    MIXED = "MIXED"
  }
  
  export enum TerrainType {
    FLAT = "FLAT",
    HILLY = "HILLY",
    MOUNTAINOUS = "MOUNTAINOUS",
    ROCKY = "ROCKY",
    FOREST = "FOREST",
    RIVER_CROSSING = "RIVER_CROSSING",
    MIXED = "MIXED"
  }
  
  export enum EquipmentCategory {
    ESSENTIAL = "ESSENTIAL",
    RECOMMENDED = "RECOMMENDED",
    OPTIONAL = "OPTIONAL"
  }
  
  export enum TripStatus {
    UPCOMING = "UPCOMING",
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
  }
  
  export enum SeasonType {
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    AUTUMN = "AUTUMN",
    WINTER = "WINTER",
    ALL_SEASONS = "ALL_SEASONS"
  }
  
  // Interface for the location
  export interface Location {
    name: string;
    region: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    meetingPoint: string;
    elevation: {
      start: number;
      peak: number;
      end: number;
    };
  }
  
  // Interface for the organizer
  export interface Organizer {
    id: string;
    name: string;
    contactInfo: {
      email: string;
      phone: string;
    };
    rating: number;
    yearsOfExperience: number;
    certifications?: string[];
    profilePicture?: string;
  }
  
  // Interface for equipment item
  export interface EquipmentItem {
    name: string;
    description: string;
    category: EquipmentCategory;
    canBeRented: boolean;
    rentalCost?: number;
  }
  
  // Interface for a waypoint/checkpoint
  export interface Waypoint {
    name: string;
    description: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    estimatedArrivalTime: Date;
    facilities: string[];
    isRestPoint: boolean;
  }
  
  // Interface for the hiking event
  export interface HikingEvent {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    location: Location;
    startDate: Date;
    endDate: Date;
    registrationDeadline: Date;
    duration: {
      days: number;
      hours: number;
    };
    distance: number; // in kilometers
    difficulty: DifficultyLevel;
    expectedWeather: WeatherCondition[];
    terrain: TerrainType[];
    season: SeasonType;
    
    // Participants
    maxParticipants: number;
    minParticipants: number;
    currentParticipants: number;
    waitingList: number;
    
    // Pricing
    price: number;
    currency: string;
    earlyBirdDiscount?: {
      amount: number;
      deadline: Date;
    };
    groupDiscount?: {
      minPeople: number;
      discountPercentage: number;
    };
    
    // Organizer information
    organizer: Organizer;
    guides: Organizer[];
    
    // Equipment
    requiredEquipment: EquipmentItem[];
    recommendedEquipment: EquipmentItem[];
    
    // Itinerary
    itinerary: {
      dayNumber: number;
      description: string;
      distanceCovered: number;
      estimatedTime: number; // in hours
      waypoints: Waypoint[];
    }[];
    
    // Features
    highlights: string[];
    activities: string[];
    includesFood: boolean;
    includesAccommodation: boolean;
    includedServices: string[];
    
    // Important information
    dangers: string[];
    requirementsAndPreparation: string[];
    ageRestriction?: {
      minAge: number;
      maxAge?: number;
    };
    fitnessLevel: string;
    
    // Media
    images: string[];
    routeMapUrl: string;
    elevationProfileUrl?: string;
    
    // Status
    status: TripStatus;
    
    // Reviews from past trips
    reviews?: {
      rating: number;
      comment: string;
      userName: string;
      date: Date;
    }[];
    
    // Additional
    tags: string[];
    faq: {
      question: string;
      answer: string;
    }[];
    
    // Cancellation policy
    cancellationPolicy: string;
  }
  