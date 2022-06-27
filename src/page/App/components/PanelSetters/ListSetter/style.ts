import { css } from "@emotion/react"
import { illaPrefix, globalColor } from "@illa-design/theme"
import { publicPaddingStyle } from "@/page/App/components/InspectPanel/style"

export const labelStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`

export const listWrapperStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${globalColor(`--${illaPrefix}-grayBlue-08`)};
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px 0;
`

export const resetButtonStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const resetIconStyle = css`
  width: 14px;
  height: 14px;
  margin-right: 4px;
`

export const listSetterWrapperStyle = css`
  ${publicPaddingStyle};
`