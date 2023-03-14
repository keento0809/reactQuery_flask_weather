/* Motion for Header */
export const variantsForHeader = {
  header: {
    x: 300,
    transition: { type: "spring", stiffness: 100 },
    whileHover: { scale: 1.2 },
    whileTap: { scale: 1.1 },
  },
  hidden: { opacity: 0, x: 0, y: 50 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.4, stiffness: 100 },
  },
};
