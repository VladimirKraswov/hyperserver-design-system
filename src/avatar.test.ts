import { describe, expect, it } from "vitest"

import {
  agentAvatarPalettes,
  createAgentAvatarProfile,
  hashAgentAvatarSeed,
  resolveAgentAvatarSize,
} from "./avatar.js"

describe("agent avatars", () => {
  it("creates a stable procedural profile from a seed", () => {
    expect(createAgentAvatarProfile("Alex")).toEqual(createAgentAvatarProfile("Alex"))
    expect(createAgentAvatarProfile(" Alex ")).toEqual(createAgentAvatarProfile("alex"))
  })

  it("uses the complete palette and face range across representative seeds", () => {
    const profiles = Array.from({ length: 300 }, (_, index) => createAgentAvatarProfile(`agent-${index}`))
    expect(new Set(profiles.map(({ palette }) => palette.name)).size).toBe(agentAvatarPalettes.length)
    expect(new Set(profiles.map(({ variant }) => variant)).size).toBe(6)
  })

  it("resolves named and numeric sizes safely", () => {
    expect(resolveAgentAvatarSize("xs")).toBe(24)
    expect(resolveAgentAvatarSize("xl")).toBe(84)
    expect(resolveAgentAvatarSize(37.6)).toBe(38)
    expect(resolveAgentAvatarSize(4)).toBe(20)
  })

  it("returns an unsigned deterministic hash", () => {
    expect(hashAgentAvatarSeed("agent")).toBe(hashAgentAvatarSeed("agent"))
    expect(hashAgentAvatarSeed("agent")).toBeGreaterThanOrEqual(0)
  })
})
