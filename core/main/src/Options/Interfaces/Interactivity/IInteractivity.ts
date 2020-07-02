import type { InteractivityDetect } from "../../../Enums";
import type { IEvents } from "./Events/IEvents";
import type { IModes } from "./Modes/IModes";

export interface IInteractivity {
    /**
     * @deprecated use the new detectsOn instead
     */
    detect_on: InteractivityDetect;

    detectsOn: InteractivityDetect;
    events: IEvents;
    modes: IModes;
}
