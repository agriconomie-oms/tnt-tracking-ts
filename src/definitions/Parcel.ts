import { DropOffPoint } from "./DropOffPoint";
import { Events } from "./Events";
import { Receiver } from "./Receiver";

/**
 * Parcel
 * @targetNSAlias `tns`
 * @targetNamespace `http://cxf.ws.app.tnt.fr/`
 */
export interface Parcel {
    /** xs:string */
    accountNumber?: string;
    /** xs:string */
    consignmentNumber?: string;
    /** dropOffPoint */
    dropOffPoint?: DropOffPoint;
    /** events */
    events?: Events;
    /** typeMatiereDangereuse|xs:string|EQ,LQ,BB,GM,LB */
    hazardousMaterial?: string;
    /** xs:string */
    longStatus?: Array<string>;
    /** xs:anyURI */
    primaryPODUrl?: string;
    /** receiver */
    receiver?: Receiver;
    /** xs:string */
    reference?: string;
    /** xs:anyURI */
    secondaryPODUrl?: string;
    /** sender */
    sender?: Receiver;
    /** xs:string */
    service?: string;
    /** xs:string */
    shortStatus?: string;
    /** xs:string */
    statusCode?: string;
    /** xs:float */
    weight?: string;
}
