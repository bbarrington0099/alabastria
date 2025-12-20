import { redirect } from "next/navigation";
import { auth } from "@lib/auth";
import { LoginForm } from "@components/auth/LoginForm";
import styles from "./page.module.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Alabastria",
    description: "Sign in to access the world of Alabastria",
};

export default async function LoginPage() {
    const session = await auth();

    // If already logged in, redirect appropriately
    if (session?.user) {
        if (session.user.mustChangePassword) {
            redirect("/change-password");
        }
        redirect("/");
    }

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
                <LoginForm />
                <p className={styles.footer}>
                    Lore of the Land
                </p>
            </div>
        </main>
    );
}

