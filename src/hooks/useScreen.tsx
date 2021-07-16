import { useRef } from "react"

export const useScreen = () => {
  const width = useRef(window.screen.width).current

  return {width}
}