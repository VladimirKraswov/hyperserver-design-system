export type IconNode = readonly [
  tag: "path" | "circle" | "rect",
  attributes: Readonly<Record<string, string | number>>,
]

export interface IconDefinition {
  readonly name: string
  readonly nodes: readonly IconNode[]
}

const define = (name: string, nodes: readonly IconNode[]): IconDefinition => ({ name, nodes })

export const iconDefinitions = {
  plus: define("plus", [["path", { d: "M12 5v14M5 12h14" }]]),
  trash: define("trash", [["path", { d: "M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 4v5m4-5v5" }]]),
  settings: define("settings", [
    ["circle", { cx: 12, cy: 12, r: 3 }],
    ["path", { d: "M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" }],
  ]),
  paperclip: define("paperclip", [["path", { d: "m20.5 11.5-8.8 8.8a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 1 1-2.8-2.8l8.5-8.5" }]]),
  mic: define("mic", [["rect", { x: 9, y: 2.5, width: 6, height: 12, rx: 3 }], ["path", { d: "M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3m-4 0h8" }]]),
  voice: define("voice", [["path", { d: "M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" }]]),
  brain: define("brain", [
    ["path", { d: "M9.5 4.2A3.2 3.2 0 0 0 4 6.5c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 5 14.7 3.4 3.4 0 0 0 9.5 19V4.2ZM14.5 4.2A3.2 3.2 0 0 1 20 6.5c0 .5-.1 1-.3 1.4a3.5 3.5 0 0 1-.7 6.8 3.4 3.4 0 0 1-4.5 4.3V4.2Z" }],
    ["path", { d: "M9.5 8H7.8M14.5 8h1.7M9.5 12H7m7.5 0H17M9.5 16H8m6.5 0H16" }],
  ]),
  volume: define("volume", [["path", { d: "M5 9v6h4l5 4V5L9 9H5Z" }], ["path", { d: "M17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11" }]]),
  send: define("send", [["path", { d: "m22 2-7 20-4-9-9-4Z" }], ["path", { d: "M22 2 11 13" }]]),
  stop: define("stop", [["rect", { x: 6, y: 6, width: 12, height: 12, rx: 2 }]]),
  menu: define("menu", [["path", { d: "M4 6h16M4 12h16M4 18h16" }]]),
  more: define("more", [
    ["circle", { cx: 5, cy: 12, r: 1, fill: "currentColor", stroke: "none" }],
    ["circle", { cx: 12, cy: 12, r: 1, fill: "currentColor", stroke: "none" }],
    ["circle", { cx: 19, cy: 12, r: 1, fill: "currentColor", stroke: "none" }],
  ]),
  pencil: define("pencil", [["path", { d: "M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" }], ["path", { d: "m13.5 6.5 4 4" }]]),
  pin: define("pin", [["path", { d: "m15 4 5 5-3 1-4 4 1 4-1 1-4-4-4 4" }], ["path", { d: "m5 19 5-5" }]]),
  close: define("close", [["path", { d: "m6 6 12 12M18 6 6 18" }]]),
  file: define("file", [["path", { d: "M6 2h8l4 4v16H6z" }], ["path", { d: "M14 2v5h5" }]]),
  chat: define("chat", [["path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" }]]),
  services: define("services", [
    ["rect", { x: 3, y: 3, width: 7, height: 7, rx: 2 }],
    ["rect", { x: 14, y: 3, width: 7, height: 7, rx: 2 }],
    ["rect", { x: 3, y: 14, width: 7, height: 7, rx: 2 }],
    ["path", { d: "M17.5 14v7M14 17.5h7" }],
  ]),
  copy: define("copy", [["rect", { x: 8, y: 8, width: 12, height: 12, rx: 2 }], ["path", { d: "M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" }]]),
  eye: define("eye", [["path", { d: "M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" }], ["circle", { cx: 12, cy: 12, r: 2.7 }]]),
  check: define("check", [["path", { d: "m5 12 4.2 4.2L19 6.5" }]]),
  refresh: define("refresh", [["path", { d: "M20 7v5h-5M4 17v-5h5" }], ["path", { d: "M6.1 9A7 7 0 0 1 18 6l2 6M18 15a7 7 0 0 1-11.9 3L4 12" }]]),
  search: define("search", [["circle", { cx: 11, cy: 11, r: 7 }], ["path", { d: "m20 20-4-4" }]]),
  panelClose: define("panelClose", [["rect", { x: 3, y: 4, width: 18, height: 16, rx: 2 }], ["path", { d: "M9 4v16m7-11-3 3 3 3" }]]),
  panelOpen: define("panelOpen", [["rect", { x: 3, y: 4, width: 18, height: 16, rx: 2 }], ["path", { d: "M9 4v16m4 5 3 3-3 3" }]]),
  archive: define("archive", [["path", { d: "M4 7h16v13H4zM3 3h18v4H3z" }], ["path", { d: "M9 12h6" }]]),
  files: define("files", [["path", { d: "M4 4h6l2 3h8v13H4z" }], ["path", { d: "M8 11h8M8 15h6" }]]),
} as const satisfies Record<string, IconDefinition>

export type IconName = keyof typeof iconDefinitions
export const iconNames = Object.freeze(Object.keys(iconDefinitions) as IconName[])

const escapeAttribute = (value: string | number) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll('"', "&quot;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")

export interface RenderIconOptions {
  size?: string | number
  strokeWidth?: string | number
  className?: string
  title?: string
}

export const renderIconSvg = (name: IconName, options: RenderIconOptions = {}): string => {
  const definition = iconDefinitions[name]
  const size = escapeAttribute(options.size ?? 24)
  const strokeWidth = escapeAttribute(options.strokeWidth ?? 1.8)
  const className = options.className ? ` class="${escapeAttribute(options.className)}"` : ""
  const title = options.title ? `<title>${escapeAttribute(options.title)}</title>` : ""
  const accessibility = options.title ? ' role="img"' : ' aria-hidden="true"'
  const nodes = definition.nodes.map(([tag, attributes]) => {
    const serialized = Object.entries(attributes).map(([key, value]) => ` ${key}="${escapeAttribute(value)}"`).join("")
    return `<${tag}${serialized}/>`
  }).join("")
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${className}${accessibility}>${title}${nodes}</svg>`
}
