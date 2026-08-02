import { describe, expect, it } from "vitest"

import { cssVariable, normalizeTheme, themeNames, themes, themeTokenNames } from "./themes.js"

describe("HyperServer themes", () => {
  it("keeps the same complete token contract in every theme", () => {
    for (const theme of themeNames) {
      expect(Object.keys(themes[theme].tokens)).toEqual([...themeTokenNames])
      expect(Object.values(themes[theme].tokens).every(Boolean)).toBe(true)
    }
  })

  it("normalizes unknown persisted values", () => {
    expect(normalizeTheme("ember-dark")).toBe("ember-dark")
    expect(normalizeTheme("unknown")).toBe("peach-light")
    expect(cssVariable("accent-soft")).toBe("--accent-soft")
  })
})
