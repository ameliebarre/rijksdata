export interface ArtObjectDetails {
  artObject: {
    colors: {
      hex: string;
      percentage: number;
    }[];
    dating: {
      period: number;
      presentingDate: string;
      sortingDate: number;
      yearEarly: number;
      yearLate: number;
    };
    description: string;
    documentation: string[];
    exhibitions: string[];
    historicalPersons: string[];
    id: string;
    inscriptions: string[];
    label: {
      date: string;
      description: string;
      makerLine: string;
      notes: string;
      title: string;
    };
    links: {
      search: string;
    };
    location: string;
    longTitle: string;
    makers: string[];
    materials: string[];
    objectCollection: string[];
    objectNumber: string;
    objectTypes: string[];
    physicalMedium: string;
    principalMaker: string;
    principalMakers: {
      dateOfBirth: string;
      dateOfDeath: string;
      name: string;
      nationality: string;
      roles: string[];
    }[];
    productionPlaces: string[];
    scLabelLine: string;
    subTitle: string;
    techniques: string[];
    title: string;
    webImage: {
      guid: string;
      height: number;
      offsetPercentageX: number;
      offsetPercentageY: number;
      url: string;
      width: number;
    };
  };
}
