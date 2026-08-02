export {
  applyTheme,
  cssVariable,
  isTheme,
  loadStoredTheme,
  normalizeTheme,
  themeNames,
  themes,
  themeTokenNames,
  type ApplyThemeOptions,
  type HyperTheme,
  type ThemeColorScheme,
  type ThemeDefinition,
  type ThemeStorageOptions,
  type ThemeTokenName,
  type ThemeTokens,
} from "./themes.js"

export {
  iconDefinitions,
  iconNames,
  renderIconSvg,
  type IconDefinition,
  type IconName,
  type IconNode,
  type RenderIconOptions,
} from "./icons.js"

export {
  agentAvatarPaletteNames,
  agentAvatarPalettes,
  createAgentAvatarProfile,
  hashAgentAvatarSeed,
  resolveAgentAvatarSize,
  type AgentAvatarPalette,
  type AgentAvatarPaletteName,
  type AgentAvatarProfile,
  type AgentAvatarSize,
  type AgentAvatarStatus,
} from "./avatar.js"
