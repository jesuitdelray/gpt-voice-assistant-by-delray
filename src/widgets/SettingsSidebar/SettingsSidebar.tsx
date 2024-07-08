import { Typography } from "@/shared/ui/Typography"
import styles from "./SettingsSidebar.module.scss"
import { useState } from "react"
import { SettingsIcon } from "@/shared/icons/SettingsIcon"
import clsx from "clsx"

export function SettingsSidebar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        setIsOpen(prev => !prev)
    }

    return (
        <div className={clsx(styles.container, isOpen && styles.open)}>
            <div className={styles.innerContainer}>
                <Typography className={styles.settingsTitle} variant="label-2">
                    Settings
                </Typography>
            </div>
            <div className={styles.caretIconContainer} onClick={handleClick}>
                <SettingsIcon
                    style={{
                        transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
                        transition: "transform 0.3s",
                    }}
                />
            </div>
        </div>
    )
}
