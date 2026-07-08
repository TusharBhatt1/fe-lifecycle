import styles from "./Button.module.css";
export function Button({ title }: { title: string }) {
	return <button className={styles.btn}>{title}</button>;
}
