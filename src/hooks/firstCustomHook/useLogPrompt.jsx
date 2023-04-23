import { useEffect } from "react";

export default function useLogPrompt(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
