"use client";
import { CSSProperties, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import styles from "./ToggleDark.module.css";

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const getGreenPosition = (): CSSProperties | null => {
        if (!isMounted) return null;
        return theme === "light" ? { right: "2px" } : { left: "2px" };
    }

    const greenPosition = getGreenPosition();

    return (
        <div className={styles.container}>
            <div className={styles.icon} onClick={() => setTheme("dark")}>🌙</div>
            <div className={styles.icon} onClick={() => setTheme("light")}>🔆</div>
            {greenPosition && <div className={styles.green} style={greenPosition} />}
        </div>
    );
};

export default DarkModeToggle;
