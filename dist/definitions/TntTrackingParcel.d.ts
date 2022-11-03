import { TntTrackingDropOffPoint } from "./TntTrackingDropOffPoint";
import { TntTrackingEvents } from "./TntTrackingEvents";
import { TntTrackingReceiver } from "./TntTrackingReceiver";
/**
 * Parcel
 * @targetNSAlias `tns`
 * @targetNamespace `http://cxf.ws.app.tnt.fr/`
 */
export interface TntTrackingParcel {
    /** xs:string */
    accountNumber?: string;
    /** xs:string */
    consignmentNumber?: string;
    /** dropOffPoint */
    dropOffPoint?: TntTrackingDropOffPoint;
    /** events */
    events?: TntTrackingEvents;
    /** typeMatiereDangereuse|xs:string|EQ,LQ,BB,GM,LB */
    hazardousMaterial?: string;
    /** xs:string */
    longStatus?: Array<string>;
    /** xs:anyURI */
    primaryPODUrl?: string;
    /** receiver */
    receiver?: TntTrackingReceiver;
    /** xs:string */
    reference?: string;
    /** xs:anyURI */
    secondaryPODUrl?: string;
    /** sender */
    sender?: TntTrackingReceiver;
    /** xs:string */
    service?: string;
    /** xs:string */
    shortStatus?: string;
    /** xs:string */
    statusCode?: string;
    /** xs:float */
    weight?: string;
}
