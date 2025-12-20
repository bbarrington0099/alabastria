import Link from "next/link";
import styles from "./page.module.scss";

export const metadata = {
    title: "Unauthorized | Alabastria",
    description: "You do not have permission to access this page.",
};

export default function UnauthorizedPage() {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>🛡️</div>
            <h1 className={styles.title}>Access Denied</h1>
            <p className={styles.message}>
                The gates to this realm remain closed to you. You do not possess
                the required authority to enter these halls.
            </p>
            <div className={styles.actions}>
                <Link href="/" className={styles.homeLink}>
                    Return to Safety
                </Link>
            </div>
        </div>
    );
}

