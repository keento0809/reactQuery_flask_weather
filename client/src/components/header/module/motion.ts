/* Motion for Header */
export const variantsForHeader = {
  icon_initial: { x: 300, y: 0 },
  icon_animate: {
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
  searchMode_initial: { x: 0, y: 100, opacity: 0 },
  searchMode_animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
};
