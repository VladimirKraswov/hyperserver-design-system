import { type ComponentType, type HTMLAttributes, type SVGProps } from "react";
import { type AgentAvatarSize, type AgentAvatarStatus } from "./avatar.js";
import { type IconName } from "./icons.js";
export interface AgentAvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
    name: string;
    seed?: string;
    size?: AgentAvatarSize;
    status?: AgentAvatarStatus;
    decorative?: boolean;
    label?: string;
}
export declare const AgentAvatar: import("react").ForwardRefExoticComponent<AgentAvatarProps & import("react").RefAttributes<HTMLSpanElement>>;
export interface HyperIconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
    size?: string | number;
    title?: string;
}
export declare const HyperIcon: import("react").ForwardRefExoticComponent<Omit<HyperIconProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
export type NamedIconProps = Omit<HyperIconProps, "name">;
export declare const PlusIcon: ComponentType<NamedIconProps>;
export declare const TrashIcon: ComponentType<NamedIconProps>;
export declare const SettingsIcon: ComponentType<NamedIconProps>;
export declare const PaperclipIcon: ComponentType<NamedIconProps>;
export declare const MicIcon: ComponentType<NamedIconProps>;
export declare const VoiceIcon: ComponentType<NamedIconProps>;
export declare const BrainIcon: ComponentType<NamedIconProps>;
export declare const VolumeIcon: ComponentType<NamedIconProps>;
export declare const SendIcon: ComponentType<NamedIconProps>;
export declare const StopIcon: ComponentType<NamedIconProps>;
export declare const MenuIcon: ComponentType<NamedIconProps>;
export declare const MoreIcon: ComponentType<NamedIconProps>;
export declare const PencilIcon: ComponentType<NamedIconProps>;
export declare const PinIcon: ComponentType<NamedIconProps>;
export declare const CloseIcon: ComponentType<NamedIconProps>;
export declare const FileIcon: ComponentType<NamedIconProps>;
export declare const ChatIcon: ComponentType<NamedIconProps>;
export declare const ServicesIcon: ComponentType<NamedIconProps>;
export declare const CopyIcon: ComponentType<NamedIconProps>;
export declare const EyeIcon: ComponentType<NamedIconProps>;
export declare const CheckIcon: ComponentType<NamedIconProps>;
export declare const RefreshIcon: ComponentType<NamedIconProps>;
export declare const SearchIcon: ComponentType<NamedIconProps>;
export declare const PanelCloseIcon: ComponentType<NamedIconProps>;
export declare const PanelOpenIcon: ComponentType<NamedIconProps>;
export declare const ArchiveIcon: ComponentType<NamedIconProps>;
export declare const FilesIcon: ComponentType<NamedIconProps>;
//# sourceMappingURL=react.d.ts.map