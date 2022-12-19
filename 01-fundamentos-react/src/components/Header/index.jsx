import React from "react";
import styles from "./header.module.css";
import IgniteLogo from '../../assets/Ignite_simbol.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img src={IgniteLogo} alt="Logotipo do ignite" />
			<strong>Ignite Feed</strong>
		</header>
	);
}
