export declare const themeNames: readonly ["peach-light", "ember-dark"];
export type HyperTheme = typeof themeNames[number];
export type ThemeColorScheme = "light" | "dark";
export declare const themeTokenNames: readonly ["paper", "panel", "panel-strong", "surface", "surface-raised", "surface-soft", "surface-hover", "line", "line-strong", "ink", "ink-soft", "muted", "muted-faint", "accent", "accent-hover", "accent-soft", "accent-faint", "accent-ink", "plum", "plum-soft", "success", "success-soft", "danger", "danger-soft", "user-bubble", "code", "code-block", "code-toolbar", "code-line", "code-text", "code-muted", "syntax-comment", "syntax-keyword", "syntax-string", "syntax-number", "syntax-title", "syntax-variable", "syntax-built-in", "input", "overlay", "drop-overlay", "disabled", "shadow", "shadow-small", "accent-shadow", "ambient"];
export type ThemeTokenName = typeof themeTokenNames[number];
export type ThemeTokens = Readonly<Record<ThemeTokenName, string>>;
export interface ThemeDefinition {
    readonly name: HyperTheme;
    readonly label: string;
    readonly description: string;
    readonly colorScheme: ThemeColorScheme;
    readonly metaColor: string;
    readonly tokens: ThemeTokens;
}
export declare const themes: Readonly<Record<HyperTheme, ThemeDefinition>>;
export declare const isTheme: (value: unknown) => value is HyperTheme;
export declare const normalizeTheme: (value: unknown, fallback?: HyperTheme) => HyperTheme;
export declare const cssVariable: (token: ThemeTokenName) => "--accent" | "--accent-faint" | "--accent-hover" | "--accent-ink" | "--accent-shadow" | "--accent-soft" | "--ambient" | "--code" | "--code-block" | "--code-line" | "--code-muted" | "--code-text" | "--code-toolbar" | "--danger" | "--danger-soft" | "--disabled" | "--drop-overlay" | "--ink" | "--ink-soft" | "--input" | "--line" | "--line-strong" | "--muted" | "--muted-faint" | "--overlay" | "--panel" | "--panel-strong" | "--paper" | "--plum" | "--plum-soft" | "--shadow" | "--shadow-small" | "--success" | "--success-soft" | "--surface" | "--surface-hover" | "--surface-raised" | "--surface-soft" | "--syntax-built-in" | "--syntax-comment" | "--syntax-keyword" | "--syntax-number" | "--syntax-string" | "--syntax-title" | "--syntax-variable" | "--user-bubble";
export interface ThemeStorageOptions {
    storageKey?: string;
    legacyStorageKeys?: readonly string[];
    fallback?: HyperTheme;
}
export declare const loadStoredTheme: (options?: ThemeStorageOptions) => HyperTheme;
export interface ApplyThemeOptions extends ThemeStorageOptions {
    target?: HTMLElement;
    attribute?: "data-theme" | "data-hyper-theme";
    persist?: boolean;
    updateMetaThemeColor?: boolean;
}
export declare const applyTheme: (theme: HyperTheme, options?: ApplyThemeOptions) => ThemeDefinition;
//# sourceMappingURL=themes.d.ts.map