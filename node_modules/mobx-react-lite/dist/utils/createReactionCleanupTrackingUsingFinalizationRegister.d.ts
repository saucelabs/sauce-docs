import { FinalizationRegistry as FinalizationRegistryMaybeUndefined } from "./FinalizationRegistryWrapper";
import { ReactionCleanupTracking } from "./reactionCleanupTrackingCommon";
/**
 * FinalizationRegistry-based uncommitted reaction cleanup
 */
export declare function createReactionCleanupTrackingUsingFinalizationRegister(FinalizationRegistry: NonNullable<typeof FinalizationRegistryMaybeUndefined>): ReactionCleanupTracking;
