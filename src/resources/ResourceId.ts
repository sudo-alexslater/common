import { randomBytes } from "crypto";
import { ResourceSource } from "./ResourceSource";
import { ResourceType } from "./ResourceType";

export type ResourceId = `${ResourceSource}-${ResourceType}-${string}`;
export function generateResourceId(
  source: ResourceSource,
  type: ResourceType
): ResourceId {
  const guid = randomBytes(16).toString("hex");
  return `${source}-${type}-${guid}`;
}
