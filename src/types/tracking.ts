declare global {
    interface Window {
        umami?: {
            track: (evName: string, evData?: Record<string, string>) => void;
        };
    }
}

export type TrackingIdType =
    | "NAVIGATE_TO_SECTION"
    | "VIEWED_SECTION"
    | "OPEN_EXTERNAL_LINK";

export type TrackingPropsType = {
    trackId?: TrackingIdType;
    properties?: Record<string, string>;
};

export type WithTrackingProps = {
    tracking?: TrackingPropsType;
};

export type TrackingReturnType =
    | ({ "data-umami-event": string } & object)
    | undefined;

export const buildTrackingProps = (
    props?: TrackingPropsType,
): TrackingReturnType => {
    if (!props?.trackId) return undefined;

    const keyPrefix = "data-umami-event";
    return {
        [keyPrefix]: props.trackId,
        ...Object.entries(props.properties ?? {})
            .map(([key, value]) => ({
                [`${keyPrefix}-${key}`]: value,
            }))
            .reduce((prev, cur) => ({ ...prev, ...cur }), {}),
    };
};

export const trackEvent = (
    eventName: TrackingIdType,
    eventData?: Record<string, string>,
) => {
    if (typeof window !== "undefined" && window.umami) {
        window.umami.track(eventName, eventData);
    }
};
