import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { TnstrackingByConsignment } from "./definitions/TnstrackingByConsignment";
import { TnstrackingByConsignmentResponse } from "./definitions/TnstrackingByConsignmentResponse";
import { TnscontactRequest } from "./definitions/TnscontactRequest";
import { TnscontactRequestResponse } from "./definitions/TnscontactRequestResponse";
import { TnscontactInterRequest } from "./definitions/TnscontactInterRequest";
import { TnscontactInterRequestResponse } from "./definitions/TnscontactInterRequestResponse";
import { TrackingServices } from "./services/TrackingServices";
export interface Client extends SoapClient {
    TrackingServices: TrackingServices;
    trackingByConsignmentAsync(trackingByConsignment: TnstrackingByConsignment): Promise<[result: TnstrackingByConsignmentResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    contactRequestAsync(contactRequest: TnscontactRequest): Promise<[result: TnscontactRequestResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    contactInterRequestAsync(contactInterRequest: TnscontactInterRequest): Promise<[result: TnscontactInterRequestResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}
/** Create Client */
export declare function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<Client>;
