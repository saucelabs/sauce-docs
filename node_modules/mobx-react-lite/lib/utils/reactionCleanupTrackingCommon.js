"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLEANUP_TIMER_LOOP_MILLIS = exports.CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = exports.createTrackingData = void 0;
function createTrackingData(reaction) {
    var trackingData = {
        reaction: reaction,
        mounted: false,
        changedBeforeMount: false,
        cleanAt: Date.now() + exports.CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS
    };
    return trackingData;
}
exports.createTrackingData = createTrackingData;
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
exports.CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
exports.CLEANUP_TIMER_LOOP_MILLIS = 10000;
//# sourceMappingURL=reactionCleanupTrackingCommon.js.map