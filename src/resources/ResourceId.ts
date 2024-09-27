import { randomBytes } from "crypto";

export type ResourceId = string;
export function generateResourceId(source: string, type: string): ResourceId {
  const guid = randomBytes(16).toString("hex");
  return `${source}-${type}-${guid}`;
}
