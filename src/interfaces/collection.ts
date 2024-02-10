export interface Facet {
  key: number;
  value: string;
}

export interface ArtObject {
  hasImage: boolean;
  headerImage: {
    guid: string;
    height: number;
    offsetPercentageX: number;
    offsetPercentageY: number;
    url: string;
    width: number;
  };
  id: string;
  links: {
    self: string;
    web: string;
  };
  longTitle: string;
  objectNumber: string;
  permitDownload: boolean;
  principalOrFirstMaker: string;
  productionPlaces: string[];
  showImage: boolean;
  title: string;
  webImage: {
    guid: string;
    height: number;
    offsetPercentageX: number;
    offsetPercentageY: number;
    url: string;
    width: number;
  };
}

export interface Collection {
  artObjects: ArtObject[];
  count: number;
  countFacets: {
    hasimage: number;
    ondisplay: number;
  };
  elapsedMilliseconds: number;
  facets: {
    facets: Facet[];
    name: string;
    otherTerms: number;
    prettyName: number;
  };
}
