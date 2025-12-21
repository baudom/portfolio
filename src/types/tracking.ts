export type WithTrackId = {
    trackId?: string;
};

export type TrackingReturnType =
    | ({ "data-umami-event": string } & object)
    | undefined;

export const buildTrackingProps = (
    trackId?: string,
    properties?: Record<string, string>,
): TrackingReturnType => {
    if (!trackId) return undefined;

    const keyPrefix = "data-umami-event";
    return {
        [keyPrefix]: trackId,
        ...Object.entries(properties ?? {}).map(([key, value]) => ({
            [`${keyPrefix}-${key}`]: value, // will result in "data-umami-event-<key>": "value"
            // https://umami.is/docs/track-events#using-data-attributes > additional properties
        })),
    };
};
