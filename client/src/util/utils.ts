export function setActiveStyling(active : {isActive: boolean, isPending: boolean, isTransitioning: boolean}) {
    if (active.isActive) {
      return {textDecoration: "underline"}
    }
}