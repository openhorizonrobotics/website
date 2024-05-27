"use client";

import { useTheme } from "next-themes";
import styles from "./ToggleDark.module.css";

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={styles.container}>
            <div className={styles.icon} onClick={() => setTheme("dark")}>🌙</div>
            <div className={styles.icon} onClick={() => setTheme("light")}>🔆</div>
            <div className={styles.green} style={theme === "light" ? { right: "2px" } : { left: "2px" }}></div>
        </div>
    );
};

export default DarkModeToggle;
