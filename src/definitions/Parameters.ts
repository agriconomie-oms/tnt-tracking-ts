
/**
 * parameters
 * @targetNSAlias `tns`
 * @targetNamespace `http://cxf.ws.app.tnt.fr/`
 */
export interface Parameters {
    /** xs:string */
    contactFirstName?: string;
    /** xs:string */
    contactLastName?: string;
    /** civilite|xs:string|NONE,MRS,MS,MR */
    contactTitle?: string;
    /** xs:string */
    emailAdress?: string;
    /** xs:string */
    message?: string;
    /** xs:string */
    parcelNumber?: string;
    /** xs:string */
    phoneNumber?: string;
    /** contactType|xs:string|IPHONE */
    requestType?: string;
}
