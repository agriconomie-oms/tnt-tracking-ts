import { TrackingServicesImplPort } from "../ports/TrackingServicesImplPort";

export interface TrackingServices {
    readonly TrackingServicesImplPort: TrackingServicesImplPort;
}
