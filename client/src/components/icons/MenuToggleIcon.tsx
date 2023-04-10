import { motion } from "framer-motion";
import styles from "../sidebarMenu/styles.module.scss";
import { MouseEventHandler } from "react";

interface PathProps {
  d?: string;
  variants: {
    closed: { opacity: number } | { d: string };
    open: { opacity: number } | { d: string };
  };
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggleIcon = ({
  toggle,
}: {
  toggle: MouseEventHandler<HTMLButtonElement>;
}) => (
  <motion.div
    animate={{ x: 20 }}
    transition={{ type: "spring", stiffness: 100 }}
  >
    <button onClick={toggle} className={styles["button"]}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  </motion.div>
);
