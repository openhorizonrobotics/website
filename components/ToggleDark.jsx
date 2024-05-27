"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./ToggleDark.module.css";

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const getGreenPosition = () => {
        if (!isMounted) return null; // Don't apply styles on server-side rendering
            return theme === "light" ? { right: "2px" } : { left: "2px" };
        }

    return (
        <div className={styles.container}>
            <div className={styles.icon} onClick={() => setTheme("dark")}>🌙</div>
            <div className={styles.icon} onClick={() => setTheme("light")}>🔆</div>
            <div className={styles.green} style={getGreenPosition()} />
        </div>
    );
};

export default DarkModeToggle;
