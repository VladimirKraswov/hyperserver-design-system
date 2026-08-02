import { describe, expect, it } from "vitest"

import { iconDefinitions, iconNames, renderIconSvg } from "./icons.js"

describe("HyperServer icons", () => {
  it("exports unique, non-empty definitions", () => {
    expect(new Set(iconNames).size).toBe(iconNames.length)
    expect(iconNames.length).toBeGreaterThanOrEqual(25)
    for (const name of iconNames) expect(iconDefinitions[name].nodes.length).toBeGreaterThan(0)
  })

  it("renders accessible framework-independent SVG", () => {
    const decorative = renderIconSvg("copy")
    const labelled = renderIconSvg("copy", { title: "Копировать", size: 18, className: "action-icon" })
    expect(decorative).toContain('aria-hidden="true"')
    expect(labelled).toContain("<title>Копировать</title>")
    expect(labelled).toContain('role="img"')
    expect(labelled).toContain('width="18"')
  })
})
