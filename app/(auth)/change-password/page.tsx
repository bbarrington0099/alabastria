import { redirect } from "next/navigation";
import { auth } from "@lib/auth";
import { PasswordChangeForm } from "@components/auth/PasswordChangeForm";
import styles from "../login/page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Change Password | Alabastria",
    description: "Update your password to secure your account",
};

export default async function ChangePasswordPage() {
    const session = await auth();

    // If not logged in, redirect to login
    if (!session?.user) {
        redirect("/login");
    }

    const isFirstLogin = session.user.mustChangePassword;

    return (
        <main className={styles.container}>
            <div className={styles.background}>
                <div className={styles.overlay} />
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>⚔</span>
                    <span className={styles.logoText}>Alabastria</span>
                </div>
                <PasswordChangeForm isFirstLogin={isFirstLogin} />
                <p className={styles.footer}>
                    {isFirstLogin
                        ? "Secure your account before continuing"
                        : "Keep your account safe"}
                </p>
            </div>
        </main>
    );
}

