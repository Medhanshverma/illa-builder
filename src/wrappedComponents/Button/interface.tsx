import { ButtonProps } from "@illa-design/button/src"
import { TooltipWrapperProps } from "@/wrappedComponents/TooltipWrapper/interface"

export type alignmentType = "start" | "center" | "end" | "fullWidth"

export interface WrappedButtonProps
  extends Pick<
      ButtonProps,
      | "variant"
      | "leftIcon"
      | "rightIcon"
      | "disabled"
      | "loading"
      | "borderColor"
      | "backgroundColor"
      | "textColor"
      | "colorScheme"
    >,
    Pick<TooltipWrapperProps, "tooltipText"> {
  text?: string
  submit?: boolean
  submitTargetId?: string
  alignment?: alignmentType
  borderRadius?: string
}