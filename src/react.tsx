import { createElement, forwardRef, type ComponentType, type SVGProps } from "react"

import { iconDefinitions, type IconName } from "./icons.js"

export interface HyperIconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: string | number
  title?: string
}

export const HyperIcon = forwardRef<SVGSVGElement, HyperIconProps>(function HyperIcon(
  { name, size = 24, title, children: _children, ...props },
  ref,
) {
  const accessible = Boolean(title || props["aria-label"])
  return <svg
    ref={ref}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden={accessible ? undefined : true}
    role={accessible ? "img" : undefined}
    {...props}
  >
    {title && <title>{title}</title>}
    {iconDefinitions[name].nodes.map(([tag, attributes], index) => createElement(tag, { ...attributes, key: index }))}
  </svg>
})

export type NamedIconProps = Omit<HyperIconProps, "name">

const namedIcon = (name: IconName, displayName: string): ComponentType<NamedIconProps> => {
  const Component = forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => <HyperIcon ref={ref} name={name} {...props} />)
  Component.displayName = displayName
  return Component
}

export const PlusIcon = namedIcon("plus", "PlusIcon")
export const TrashIcon = namedIcon("trash", "TrashIcon")
export const SettingsIcon = namedIcon("settings", "SettingsIcon")
export const PaperclipIcon = namedIcon("paperclip", "PaperclipIcon")
export const MicIcon = namedIcon("mic", "MicIcon")
export const VoiceIcon = namedIcon("voice", "VoiceIcon")
export const BrainIcon = namedIcon("brain", "BrainIcon")
export const VolumeIcon = namedIcon("volume", "VolumeIcon")
export const SendIcon = namedIcon("send", "SendIcon")
export const StopIcon = namedIcon("stop", "StopIcon")
export const MenuIcon = namedIcon("menu", "MenuIcon")
export const MoreIcon = namedIcon("more", "MoreIcon")
export const PencilIcon = namedIcon("pencil", "PencilIcon")
export const PinIcon = namedIcon("pin", "PinIcon")
export const CloseIcon = namedIcon("close", "CloseIcon")
export const FileIcon = namedIcon("file", "FileIcon")
export const ChatIcon = namedIcon("chat", "ChatIcon")
export const ServicesIcon = namedIcon("services", "ServicesIcon")
export const CopyIcon = namedIcon("copy", "CopyIcon")
export const EyeIcon = namedIcon("eye", "EyeIcon")
export const CheckIcon = namedIcon("check", "CheckIcon")
export const RefreshIcon = namedIcon("refresh", "RefreshIcon")
export const SearchIcon = namedIcon("search", "SearchIcon")
export const PanelCloseIcon = namedIcon("panelClose", "PanelCloseIcon")
export const PanelOpenIcon = namedIcon("panelOpen", "PanelOpenIcon")
export const ArchiveIcon = namedIcon("archive", "ArchiveIcon")
export const FilesIcon = namedIcon("files", "FilesIcon")
