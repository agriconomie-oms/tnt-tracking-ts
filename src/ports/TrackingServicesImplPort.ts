import { TnstrackingByConsignment } from "../definitions/TnstrackingByConsignment";
import { TnstrackingByConsignmentResponse } from "../definitions/TnstrackingByConsignmentResponse";
import { TnscontactRequest } from "../definitions/TnscontactRequest";
import { TnscontactRequestResponse } from "../definitions/TnscontactRequestResponse";
import { TnscontactInterRequest } from "../definitions/TnscontactInterRequest";
import { TnscontactInterRequestResponse } from "../definitions/TnscontactInterRequestResponse";

export interface TrackingServicesImplPort {
    trackingByConsignment(trackingByConsignment: TnstrackingByConsignment, callback: (err: any, result: TnstrackingByConsignmentResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    contactRequest(contactRequest: TnscontactRequest, callback: (err: any, result: TnscontactRequestResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    contactInterRequest(contactInterRequest: TnscontactInterRequest, callback: (err: any, result: TnscontactInterRequestResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
