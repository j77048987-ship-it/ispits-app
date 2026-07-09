import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../infrastructure/db/database";
import type { Attempt } from "../../core/entities/Attempt";

/**
 * `useLiveQuery` re-runs automatically whenever the underlying `attempts` table changes
 * (e.g. right after a practice session finishes), so Dashboard/Review update instantly without
 * any manual refresh plumbing. Falls back to an empty array while the first read is in flight.
 */
export function useLiveAttempts(): Attempt[] {
  const attempts = useLiveQuery(() => db.attempts.orderBy("timestamp").toArray(), [], []);
  return attempts ?? [];
}
