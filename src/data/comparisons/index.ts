import { CompetitorComparison } from "./types";
import { intercomComparison } from "./intercom";
import { zendeskComparison } from "./zendesk";
import { freshdeskComparison } from "./freshdesk";
import { tidioComparison } from "./tidio";

export * from "./types";
export { intercomComparison } from "./intercom";
export { zendeskComparison } from "./zendesk";
export { freshdeskComparison } from "./freshdesk";
export { tidioComparison } from "./tidio";

export const allComparisons: CompetitorComparison[] = [
  intercomComparison,
  zendeskComparison,
  freshdeskComparison,
  tidioComparison,
];

export function getComparisonBySlug(slug: string): CompetitorComparison | undefined {
  return allComparisons.find(
    (c) => c.slug === slug || c.id === slug || `yedii-vs-${c.id}` === slug
  );
}

export function getAllComparisons(): CompetitorComparison[] {
  return allComparisons;
}

