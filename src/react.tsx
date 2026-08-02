import {
  createElement,
  forwardRef,
  type ComponentType,
  type CSSProperties,
  type HTMLAttributes,
  type SVGProps,
} from "react"

import {
  createAgentAvatarProfile,
  resolveAgentAvatarSize,
  type AgentAvatarSize,
  type AgentAvatarStatus,
} from "./avatar.js"
import { iconDefinitions, type IconName } from "./icons.js"

type AvatarStyle = CSSProperties & Record<`--hs-agent-avatar-${string}`, string>

export interface AgentAvatarProps extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  name: string
  seed?: string
  size?: AgentAvatarSize
  status?: AgentAvatarStatus
  decorative?: boolean
  label?: string
}

export const AgentAvatar = forwardRef<HTMLSpanElement, AgentAvatarProps>(function AgentAvatar(
  { name, seed = name, size = "md", status, decorative = false, label, className, style, title, ...props },
  ref,
) {
  const profile = createAgentAvatarProfile(seed)
  const pixelSize = resolveAgentAvatarSize(size)
  const avatarStyle: AvatarStyle = {
    "--hs-agent-avatar-size": `${pixelSize}px`,
    "--hs-agent-avatar-base": profile.palette.base,
    "--hs-agent-avatar-accent": profile.palette.accent,
    "--hs-agent-avatar-glow": profile.palette.glow,
    "--hs-agent-avatar-visor": profile.palette.visor,
    "--hs-agent-avatar-feature": profile.palette.feature,
    "--hs-agent-avatar-tilt": `${profile.tilt}deg`,
    ...style,
  }
  const accessibleLabel = label ?? `${name}, агент`

  return <span
    ref={ref}
    className={["hs-agent-avatar", className].filter(Boolean).join(" ")}
    data-variant={profile.variant}
    data-antenna={profile.antenna}
    style={avatarStyle}
    title={title ?? (decorative ? undefined : accessibleLabel)}
    aria-hidden={decorative || undefined}
    aria-label={decorative ? undefined : accessibleLabel}
    role={decorative ? undefined : "img"}
    {...props}
  >
    <span className="hs-agent-avatar__antenna" aria-hidden="true" />
    <span className="hs-agent-avatar__face" aria-hidden="true">
      <span className="hs-agent-avatar__eyes">
        <i className="hs-agent-avatar__eye" />
        <i className="hs-agent-avatar__eye" />
      </span>
      <i className="hs-agent-avatar__mouth" />
    </span>
    {status ? <span className="hs-agent-avatar__status" data-status={status} aria-hidden="true" /> : null}
  </span>
})

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
