export interface CompanyResponse {
  data: Company[];
  totalCount: number;
}

export interface Company {
  id: string;
  reference: string;
  name: string;
  imageUrl?: null;
  description?: null;
  headOffice: HeadOffice;
  otherOffices?: null[] | null;
  tags?: null[] | null;
  website: string;
  email: string;
  phone: string;
  faxNo: string;
  facebook?: null;
  linkedIn?: null;
  twitter?: null;
  analytics: Analytics;
  industries?: null[] | null;
  sectors?: null[] | null;
  parent?: null;
  companySizeCode: string;
  companyTypeId: string;
  distributionListId?: null;
  employees?: null;
  client: boolean;
  rating: number;
  createdBySystem: boolean;
  skills?: null[] | null;
  openJobs: boolean;
  placements: boolean;
  benefitsPackage?: null;
  termsAgreed?: null;
  statusId?: null;
  ownerId: string;
  ownerName: string;
  status: Status;
  udfList?: null[] | null;
  type: string;
  logoUrl?: null;
  domain?: null;
  languages?: null;
  labels?: null[] | null;
  apolloRecord?: null;
  createdOn: string;
  modifiedOn: string;
  additionalParams: AdditionalParams;
}
export interface HeadOffice {
  id?: null;
  name?: null;
  address: Address;
}
export interface Address {
  addressLine?: null;
  addressLine2?: null;
  cityName?: null;
  regionName?: null;
  postCode?: null;
  countryCode: string;
  latitude: number;
  longitude: number;
  countryName?: null;
  cityOrRegionAndPostCode: string;
  country?: null;
  hasCity: boolean;
  cityRegion: string;
  hasCityOrRegion: boolean;
  hasValidGeo: boolean;
  hasPostcode: boolean;
  hasRegion: boolean;
  addressLabel: string;
  hasCountry: boolean;
}
export interface Analytics {
  placementsCurrMonth: number;
  placementsPrevMonth: number;
  placementsCurrQrtr: number;
  placementsPrevQrtr: number;
  placementsCurrYear: number;
  placementsPrevYear: number;
  totalPlacements: number;
  billingCurrMonth: number;
  billingPrevMonth: number;
  billingCurrQrtr: number;
  billingPrevQrtr: number;
  billingCurrYear: number;
  billingPrevYear: number;
  totalBillingValue: number;
  openJobsCount: number;
  jobsCurrMonth: number;
  jobsPrevMonth: number;
  jobsCurrQrtr: number;
  jobsPrevQrtr: number;
  jobsCurrYear: number;
  jobsPrevYear: number;
  totalOpportunities: number;
  openOpportunities: number;
  opportunitiesCurrMonth: number;
  opportunitiesPrevMonth: number;
  opportunitiesCurrQrtr: number;
  opportunitiesPrevQrtr: number;
  opportunitiesCurrYear: number;
  opportunitiesPrevYear: number;
  opportunityValueCurrMonth: number;
  opportunityValuePrevMonth: number;
  opportunityValueCurrQrtr: number;
  opportunityValuePrevQrtr: number;
  opportunityValueCurrYear: number;
  opportunityValuePrevYear: number;
  opportunityDealValue: number;
  lostOpportunityValue: number;
  totalJobs: number;
  totalContacts: number;
  avgOfferToPlacementPct: number;
  avgInterviewToOfferPct: number;
  avgOfferToPlacementRatio?: null;
  avgInterviewToOfferRatio?: null;
  avgClientRejectRate: number;
  closedJobsPipelineValue: number;
  openJobsPipelineValue: number;
  totalPositionsToFill: number;
  pendingPositionsToFill: number;
  avgPlacementValue: number;
  avgTimeToFillCurrYear: number;
  avgTimeToFillPrevYear: number;
  avgTimeToFillAllTime: number;
  avgInterviewToOfferDays: number;
  avgJobCreatedToSourcedDays: number;
  avgJobCreatedToShortlistDays: number;
  avgJobCreatedToApplicationDays: number;
  avgCVSentToInterviewDays: number;
  avgOfferToPlacementDays: number;
}
export interface Status {
  position: number;
  color: string;
}
export interface AdditionalParams {}
