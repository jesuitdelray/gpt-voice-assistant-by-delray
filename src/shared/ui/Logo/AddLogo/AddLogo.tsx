import styles from "./AddLogo.module.scss";
import { PlusIcon } from "@/frontend/shared/assets/icons";
import { HTMLAttributes } from "react";

export function AddLogo({ ...otherProps }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.addLogoContainer} {...otherProps}>
      <PlusIcon className={styles.addLogoContainerIcon} />
    </div>
  );
}
