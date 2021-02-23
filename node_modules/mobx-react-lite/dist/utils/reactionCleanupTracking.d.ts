/// <reference types="react" />
export { IReactionTracking } from "./reactionCleanupTrackingCommon";
declare const addReactionToTrack: (reactionTrackingRef: import("react").MutableRefObject<import("./reactionCleanupTrackingCommon").IReactionTracking | null>, reaction: import("mobx").Reaction, objectRetainedByReact: object) => import("./reactionCleanupTrackingCommon").IReactionTracking, recordReactionAsCommitted: (reactionRef: import("react").MutableRefObject<import("./reactionCleanupTrackingCommon").IReactionTracking | null>) => void, resetCleanupScheduleForTests: () => void, forceCleanupTimerToRunNowForTests: () => void;
export { addReactionToTrack, recordReactionAsCommitted, resetCleanupScheduleForTests, forceCleanupTimerToRunNowForTests };
