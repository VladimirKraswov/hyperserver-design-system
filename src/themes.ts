export const themeNames = ["peach-light", "ember-dark"] as const
export type HyperTheme = typeof themeNames[number]
export type ThemeColorScheme = "light" | "dark"

export const themeTokenNames = [
  "paper", "panel", "panel-strong", "surface", "surface-raised", "surface-soft", "surface-hover",
  "line", "line-strong", "ink", "ink-soft", "muted", "muted-faint", "accent", "accent-hover",
  "accent-soft", "accent-faint", "accent-ink", "plum", "plum-soft", "success", "success-soft",
  "danger", "danger-soft", "user-bubble", "code", "code-block", "code-toolbar", "code-line",
  "code-text", "code-muted", "syntax-comment", "syntax-keyword", "syntax-string", "syntax-number",
  "syntax-title", "syntax-variable", "syntax-built-in", "input", "overlay", "drop-overlay", "disabled",
  "shadow", "shadow-small", "accent-shadow", "ambient",
] as const

export type ThemeTokenName = typeof themeTokenNames[number]
export type ThemeTokens = Readonly<Record<ThemeTokenName, string>>

export interface ThemeDefinition {
  readonly name: HyperTheme
  readonly label: string
  readonly description: string
  readonly colorScheme: ThemeColorScheme
  readonly metaColor: string
  readonly tokens: ThemeTokens
}

export const themes: Readonly<Record<HyperTheme, ThemeDefinition>> = {
  "peach-light": {
    name: "peach-light",
    label: "Персиковый свет",
    description: "Тёплая светлая тема с мягким коралловым акцентом.",
    colorScheme: "light",
    metaColor: "#fff7f1",
    tokens: {
      "paper": "#fff7f1", "panel": "#f7dfd0", "panel-strong": "#f1cdb9", "surface": "#fffdfb",
      "surface-raised": "#ffffff", "surface-soft": "#fdf0e8", "surface-hover": "rgba(255, 255, 255, .72)",
      "line": "#ead6cb", "line-strong": "#dcbdae", "ink": "#382c35", "ink-soft": "#5d5058",
      "muted": "#897a7e", "muted-faint": "#aa9999", "accent": "#f05c3d", "accent-hover": "#d94c30",
      "accent-soft": "#fde0d1", "accent-faint": "rgba(240, 92, 61, .11)", "accent-ink": "#a73d27",
      "plum": "#3d2f3b", "plum-soft": "#584452", "success": "#35a368", "success-soft": "#e0f2e7",
      "danger": "#b9483b", "danger-soft": "#fae6e1", "user-bubble": "rgba(255, 255, 255, .75)",
      "code": "#f4e8e1", "code-block": "#211d24", "code-toolbar": "rgba(45, 39, 48, .94)",
      "code-line": "#443b48", "code-text": "#f7f1ee", "code-muted": "#b9acb5", "syntax-comment": "#958994",
      "syntax-keyword": "#ff8f73", "syntax-string": "#b9d88d", "syntax-number": "#e7b978",
      "syntax-title": "#86c9df", "syntax-variable": "#eab1cb", "syntax-built-in": "#c7a6ec",
      "input": "#ffffff", "overlay": "rgba(57, 39, 49, .34)", "drop-overlay": "rgba(255, 247, 241, .95)",
      "disabled": "#c9bab5", "shadow": "0 18px 55px rgba(86, 49, 38, .10)",
      "shadow-small": "0 7px 20px rgba(86, 49, 38, .08)", "accent-shadow": "0 8px 22px rgba(240, 92, 61, .24)",
      "ambient": "rgba(245, 133, 86, .10)",
    },
  },
  "ember-dark": {
    name: "ember-dark",
    label: "Тёмный графит",
    description: "Графитовая тема с контрастным огненным акцентом.",
    colorScheme: "dark",
    metaColor: "#171716",
    tokens: {
      "paper": "#171716", "panel": "#1e1e1d", "panel-strong": "#272624", "surface": "#242423",
      "surface-raised": "#2b2a29", "surface-soft": "#302722", "surface-hover": "rgba(255, 255, 255, .055)",
      "line": "#393735", "line-strong": "#4b4642", "ink": "#f3eee9", "ink-soft": "#d0c8c1",
      "muted": "#a29b94", "muted-faint": "#77716b", "accent": "#ff6b35", "accent-hover": "#ff7c4d",
      "accent-soft": "#43291f", "accent-faint": "rgba(255, 107, 53, .13)", "accent-ink": "#ff9a73",
      "plum": "#151514", "plum-soft": "#33302e", "success": "#45bd79", "success-soft": "#20382a",
      "danger": "#ff7a6b", "danger-soft": "#402522", "user-bubble": "rgba(47, 46, 44, .82)",
      "code": "#111110", "code-block": "#101114", "code-toolbar": "rgba(29, 30, 34, .95)",
      "code-line": "#34363d", "code-text": "#f2efec", "code-muted": "#9899a3", "syntax-comment": "#7e818c",
      "syntax-keyword": "#ff866d", "syntax-string": "#acd27f", "syntax-number": "#e7b46f",
      "syntax-title": "#79c6df", "syntax-variable": "#e7a8c7", "syntax-built-in": "#bd9be8",
      "input": "#20201f", "overlay": "rgba(0, 0, 0, .64)", "drop-overlay": "rgba(28, 25, 22, .96)",
      "disabled": "#55514d", "shadow": "0 20px 65px rgba(0, 0, 0, .42)",
      "shadow-small": "0 8px 24px rgba(0, 0, 0, .28)", "accent-shadow": "0 8px 25px rgba(255, 107, 53, .22)",
      "ambient": "rgba(255, 92, 32, .09)",
    },
  },
}

export const isTheme = (value: unknown): value is HyperTheme =>
  typeof value === "string" && (themeNames as readonly string[]).includes(value)

export const normalizeTheme = (value: unknown, fallback: HyperTheme = "peach-light"): HyperTheme =>
  isTheme(value) ? value : fallback

export const cssVariable = (token: ThemeTokenName) => `--${token}` as const

export interface ThemeStorageOptions {
  storageKey?: string
  legacyStorageKeys?: readonly string[]
  fallback?: HyperTheme
}

export const loadStoredTheme = (options: ThemeStorageOptions = {}): HyperTheme => {
  const fallback = options.fallback ?? "peach-light"
  if (typeof window === "undefined") return fallback
  const storageKey = options.storageKey ?? "hyperserver-theme"
  try {
    const value = window.localStorage.getItem(storageKey)
      ?? options.legacyStorageKeys?.map((key) => window.localStorage.getItem(key)).find(Boolean)
    return normalizeTheme(value, fallback)
  } catch {
    return fallback
  }
}

export interface ApplyThemeOptions extends ThemeStorageOptions {
  target?: HTMLElement
  attribute?: "data-theme" | "data-hyper-theme"
  persist?: boolean
  updateMetaThemeColor?: boolean
}

export const applyTheme = (theme: HyperTheme, options: ApplyThemeOptions = {}): ThemeDefinition => {
  const definition = themes[normalizeTheme(theme, options.fallback)]
  if (typeof document === "undefined") return definition
  const target = options.target ?? document.documentElement
  const attribute = options.attribute ?? "data-theme"
  target.setAttribute(attribute, definition.name)
  target.style.colorScheme = definition.colorScheme
  if (options.updateMetaThemeColor !== false) {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", definition.metaColor)
  }
  if (options.persist !== false && typeof window !== "undefined") {
    try {
      window.localStorage.setItem(options.storageKey ?? "hyperserver-theme", definition.name)
      options.legacyStorageKeys?.forEach((key) => window.localStorage.removeItem(key))
    } catch { /* Storage can be blocked by the browser. */ }
  }
  return definition
}
