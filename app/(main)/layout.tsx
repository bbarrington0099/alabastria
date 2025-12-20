import { auth } from "@lib/auth";
import { redirect } from "next/navigation";
import { Header } from "@components/layout/Header";
import styles from "./layout.module.scss";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // If logged in but must change password, redirect
    if (session?.user?.mustChangePassword) {
        redirect("/change-password");
    }

    return (
        <div className={styles.layout}>
            <Header user={session?.user || null} />
            <main className={styles.main}>{children}</main>
        </div>
    );
}
