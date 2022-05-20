import { useEffect } from "react"

// When a certain variable changes use this hook to log the changed variable to the console
export default function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])
}