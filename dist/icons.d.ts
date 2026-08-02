export type IconNode = readonly [
    tag: "path" | "circle" | "rect",
    attributes: Readonly<Record<string, string | number>>
];
export interface IconDefinition {
    readonly name: string;
    readonly nodes: readonly IconNode[];
}
export declare const iconDefinitions: {
    readonly plus: IconDefinition;
    readonly trash: IconDefinition;
    readonly settings: IconDefinition;
    readonly paperclip: IconDefinition;
    readonly mic: IconDefinition;
    readonly voice: IconDefinition;
    readonly brain: IconDefinition;
    readonly volume: IconDefinition;
    readonly send: IconDefinition;
    readonly stop: IconDefinition;
    readonly menu: IconDefinition;
    readonly more: IconDefinition;
    readonly pencil: IconDefinition;
    readonly pin: IconDefinition;
    readonly close: IconDefinition;
    readonly file: IconDefinition;
    readonly chat: IconDefinition;
    readonly services: IconDefinition;
    readonly copy: IconDefinition;
    readonly eye: IconDefinition;
    readonly check: IconDefinition;
    readonly refresh: IconDefinition;
    readonly search: IconDefinition;
    readonly panelClose: IconDefinition;
    readonly panelOpen: IconDefinition;
    readonly archive: IconDefinition;
    readonly files: IconDefinition;
};
export type IconName = keyof typeof iconDefinitions;
export declare const iconNames: readonly ("archive" | "brain" | "chat" | "check" | "close" | "copy" | "eye" | "file" | "files" | "menu" | "mic" | "more" | "panelClose" | "panelOpen" | "paperclip" | "pencil" | "pin" | "plus" | "refresh" | "search" | "send" | "services" | "settings" | "stop" | "trash" | "voice" | "volume")[];
export interface RenderIconOptions {
    size?: string | number;
    strokeWidth?: string | number;
    className?: string;
    title?: string;
}
export declare const renderIconSvg: (name: IconName, options?: RenderIconOptions) => string;
//# sourceMappingURL=icons.d.ts.map