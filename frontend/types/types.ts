export interface IDepartment {
    id: number
    available: boolean
    averageRating: number
    mainImage: string;
    unitAddress: { city: string; fullAddress: string };
    unitDetails: {
        unitSize: number;
        numberOfBathrooms: number;
        numberOfBedrooms: number;
    };
    unitName: string;
    unitType: string;
    rentingPrice: number;
    description: string
};

export interface DepartDetails  {
    id: string;
    unitName: string;
    projectName: string;
    available: boolean;
    mainImage: string;
    imagesGallery: string[];
    unitAddress: {
        fullAddress: string;
        city: string;
        district: string;
    };
    unitDetails: {
        unitSize: number;
        numberOfBedrooms: number;
        numberOfBathrooms: number;
        hasElevator: boolean;
        floorNumber: number
    };
    contactDetails: {
        agentName : string;
        phone : number;
        email: string
    }
    rentingPrice: number;
    description: string;
    unitType: string;
    averageRating: number
};
