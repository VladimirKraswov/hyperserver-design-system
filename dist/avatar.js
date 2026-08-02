export const agentAvatarPaletteNames = [
    "ember",
    "lagoon",
    "berry",
    "sprout",
    "ultraviolet",
    "sunset",
    "orbit",
    "plasma",
];
export const agentAvatarPalettes = [
    { name: "ember", base: "#ff6b35", accent: "#6846e8", glow: "#ffd29f", visor: "#21192c", feature: "#fff8f2" },
    { name: "lagoon", base: "#526cff", accent: "#21c9b7", glow: "#c9f7f2", visor: "#141d35", feature: "#f4ffff" },
    { name: "berry", base: "#df4c8b", accent: "#ffad45", glow: "#ffe0ee", visor: "#2d1730", feature: "#fff7fb" },
    { name: "sprout", base: "#16a58f", accent: "#86d64a", glow: "#d4ffe5", visor: "#142c2a", feature: "#f2fff8" },
    { name: "ultraviolet", base: "#7657e8", accent: "#e968f2", glow: "#e9ddff", visor: "#1e1737", feature: "#fffaff" },
    { name: "sunset", base: "#ef5652", accent: "#f4c74d", glow: "#ffe5ad", visor: "#35191c", feature: "#fff9ec" },
    { name: "orbit", base: "#4771d2", accent: "#73baff", glow: "#d8eaff", visor: "#141f38", feature: "#f7fbff" },
    { name: "plasma", base: "#974fd0", accent: "#36cbdc", glow: "#eedcff", visor: "#24152f", feature: "#fbf8ff" },
];
const sizeMap = {
    xs: 24,
    sm: 32,
    md: 44,
    lg: 60,
    xl: 84,
};
export const hashAgentAvatarSeed = (seed) => {
    let hash = 2166136261;
    for (let index = 0; index < seed.length; index += 1) {
        hash ^= seed.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
};
export const createAgentAvatarProfile = (seed) => {
    const hash = hashAgentAvatarSeed(seed.trim().toLocaleLowerCase() || "agent");
    const palette = agentAvatarPalettes[hash % agentAvatarPalettes.length] ?? agentAvatarPalettes[0];
    const antennaIndex = (hash >>> 7) % 3;
    return {
        palette,
        variant: (hash >>> 3) % 6,
        tilt: ((hash >>> 11) % 7) - 3,
        antenna: ["left", "center", "right"][antennaIndex] ?? "center",
    };
};
export const resolveAgentAvatarSize = (size = "md") => typeof size === "number" ? Math.max(20, Math.round(size)) : sizeMap[size];
//# sourceMappingURL=avatar.js.map