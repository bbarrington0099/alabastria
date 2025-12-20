"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithCredentials } from "@actions/auth";
import { Button } from "@common/Button";
import { Input } from "@common/Input";
import styles from "./LoginForm.module.scss";

export function LoginForm() {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);

        const result = await signInWithCredentials(formData);

        if (result.success) {
            router.push("/");
            router.refresh();
        } else {
            setError(result.error || "An error occurred");
            setIsLoading(false);
        }
    }

    return (
        <form action={handleSubmit} className={styles.form}>
            <div className={styles.header}>
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to continue your adventure</p>
            </div>

            {error && (
                <div className={styles.errorAlert}>
                    <span className={styles.errorIcon}>⚠</span>
                    {error}
                </div>
            )}

            <div className={styles.fields}>
                <Input
                    type="email"
                    name="email"
                    label="Email"
                    placeholder="adventurer@alabastria.local"
                    required
                    autoComplete="email"
                    autoFocus
                />

                <Input
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                isLoading={isLoading}
            >
                Enter the Realm
            </Button>
        </form>
    );
}

