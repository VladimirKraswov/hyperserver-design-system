export declare const agentAvatarPaletteNames: readonly ["ember", "lagoon", "berry", "sprout", "ultraviolet", "sunset", "orbit", "plasma"];
export type AgentAvatarPaletteName = typeof agentAvatarPaletteNames[number];
export type AgentAvatarStatus = "online" | "busy" | "offline";
export type AgentAvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | number;
export interface AgentAvatarPalette {
    readonly name: AgentAvatarPaletteName;
    readonly base: string;
    readonly accent: string;
    readonly glow: string;
    readonly visor: string;
    readonly feature: string;
}
export interface AgentAvatarProfile {
    readonly palette: AgentAvatarPalette;
    readonly variant: number;
    readonly tilt: number;
    readonly antenna: "left" | "center" | "right";
}
export declare const agentAvatarPalettes: readonly [{
    readonly name: "ember";
    readonly base: "#ff6b35";
    readonly accent: "#6846e8";
    readonly glow: "#ffd29f";
    readonly visor: "#21192c";
    readonly feature: "#fff8f2";
}, {
    readonly name: "lagoon";
    readonly base: "#526cff";
    readonly accent: "#21c9b7";
    readonly glow: "#c9f7f2";
    readonly visor: "#141d35";
    readonly feature: "#f4ffff";
}, {
    readonly name: "berry";
    readonly base: "#df4c8b";
    readonly accent: "#ffad45";
    readonly glow: "#ffe0ee";
    readonly visor: "#2d1730";
    readonly feature: "#fff7fb";
}, {
    readonly name: "sprout";
    readonly base: "#16a58f";
    readonly accent: "#86d64a";
    readonly glow: "#d4ffe5";
    readonly visor: "#142c2a";
    readonly feature: "#f2fff8";
}, {
    readonly name: "ultraviolet";
    readonly base: "#7657e8";
    readonly accent: "#e968f2";
    readonly glow: "#e9ddff";
    readonly visor: "#1e1737";
    readonly feature: "#fffaff";
}, {
    readonly name: "sunset";
    readonly base: "#ef5652";
    readonly accent: "#f4c74d";
    readonly glow: "#ffe5ad";
    readonly visor: "#35191c";
    readonly feature: "#fff9ec";
}, {
    readonly name: "orbit";
    readonly base: "#4771d2";
    readonly accent: "#73baff";
    readonly glow: "#d8eaff";
    readonly visor: "#141f38";
    readonly feature: "#f7fbff";
}, {
    readonly name: "plasma";
    readonly base: "#974fd0";
    readonly accent: "#36cbdc";
    readonly glow: "#eedcff";
    readonly visor: "#24152f";
    readonly feature: "#fbf8ff";
}];
export declare const hashAgentAvatarSeed: (seed: string) => number;
export declare const createAgentAvatarProfile: (seed: string) => AgentAvatarProfile;
export declare const resolveAgentAvatarSize: (size?: AgentAvatarSize) => number;
//# sourceMappingURL=avatar.d.ts.map