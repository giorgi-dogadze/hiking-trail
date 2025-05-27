export enum DifficultyLevel {
  Easy = "Easy",
  Moderate = "Moderate",
  Difficult = "Difficult",
}

export enum RecommendedExperience {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Experienced = "Experienced",
  Advanced='Advanced'
}

export enum TrailType {
  Loop="Loop",
OutAndBack="OutAndBack",
PointToPoint="PointToPoint",
Linear="Linear",
}

export enum LengthUnit {
  Kilometers = "km",
  Miles = "miles",
}

export enum ElevationUnit {
  Meters = "m",
  Feet = "ft",
}

export enum TimeUnit {
  Hours = "hours",
  Days = "days",
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface StartingPoint {
  name: string;
  coordinates: Coordinates;
  googleMapsUrl: string;
}

interface Difficulty {
  level: DifficultyLevel;
  technicalDifficulty: number;
  physicalDemand: number;
  recommendedExperience: RecommendedExperience;
}

interface EstimatedTime {
  minimum: number;
  maximum: number;
  timeUnit: TimeUnit;
}

interface Seasons {
  spring: boolean;
  summer: boolean;
  autumn: boolean;
  winter: boolean;
  bestSeason: string[];
}

interface Facilities {
  waterAvailability: string;
  restroomAccess: boolean | string;
  parkingAvailable: boolean | string;
  publicTransportAccess: boolean | string;
}

interface CrowdLevel {
  weekday: string;
  weekend: string;
  peakSeason: string;
}

export enum Region {
  Tbilisi = "Tbilisi",
  Adjara = "Adjara",
  Kakheti = "Kakheti",
  Tusheti = "Tusheti",
  Kazbegi = "Kazbegi",
  Svaneti = "Svaneti",
  Imereti = "Imereti",
  Samegrelo_Zemo_Svaneti = "Samegrelo-Zemo Svaneti",
  Shida_Kartli = "Shida Kartli",
  Kvemo_Kartli = "Kvemo Kartli",
  Samtskhe_Javakheti = "Samtskhe-Javakheti",
  Racha_Lechkhumi = "Racha-Lechkhumi",
  Mtskheta_Mtianeti = "Mtskheta-Mtianeti",
}

export interface HikingTrail {
  id: number;
  title: string;
  georgianTitle?: string; // Added Georgian title field
  description: string;
  region: Region;
  difficulty: Difficulty;
  length: number;
  lengthUnit: LengthUnit;
  heightUp: number;
  heightDown: number;
  elevationUnit: ElevationUnit;
  estimatedTime: EstimatedTime;
  trailType: TrailType;
  terrain: string[];
  seasons: Seasons;
  facilities: Facilities;
  trailCondition: string;
  campingOptions: string;
  crowdLevel: CrowdLevel;
  familyFriendly: boolean;
  dogFriendly: boolean;
  wheelchairAccessible: string;
  hikingPoles: string;
  highlights: string[];
  hazards: string[];
  nearbyAttractions: string[];
  startingPoint: StartingPoint;
  endPoint: string | StartingPoint;
  cellPhoneReception: string;
  image: string;
  tags: string[];
  permitRequired?: boolean;
  equipmentNeeded?: string[];
  entranceFee?: boolean;
}
