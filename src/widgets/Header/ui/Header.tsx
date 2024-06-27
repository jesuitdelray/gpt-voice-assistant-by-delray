import { useState } from "react"
import { labels } from "../const/const"
import styles from "./Header.module.scss"
import clsx from "clsx"

export function Header() {
    const [activeSection, setActiveSection] = useState(labels[0])

    return (
        <div className={styles.container}>
            {labels.map(label => (
                <p
                    key={label}
                    className={clsx(styles.label, activeSection === label && styles.active)}
                    onClick={() => setActiveSection(label)}
                >
                    {label}
                </p>
            ))}
        </div>
    )
}
