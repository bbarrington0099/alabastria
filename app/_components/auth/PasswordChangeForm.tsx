"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { changePassword } from "@actions/auth";
import { Button } from "@common/Button";
import { Input } from "@common/Input";
import styles from "./PasswordChangeForm.module.scss";

interface PasswordChangeFormProps {
    isFirstLogin?: boolean;
}

export function PasswordChangeForm({ isFirstLogin = false }: PasswordChangeFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        const result = await changePassword(formData);

        if (result.success) {
            setSuccess(true);
            if (isFirstLogin) {
                // Redirect to home after first login password change
                setTimeout(() => {
                    router.push("/");
                    router.refresh();
                }, 1500);
            }
        } else {
            setError(result.error || "An error occurred");
        }

        setIsLoading(false);
    }

    return (
        <form action={handleSubmit} className={styles.form}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    {isFirstLogin ? "Set Your Password" : "Change Password"}
                </h1>
                <p className={styles.subtitle}>
                    {isFirstLogin
                        ? "Welcome! Please create a new password to secure your account."
                        : "Update your password to keep your account secure."}
                </p>
            </div>

            {error && (
                <div className={styles.errorAlert}>
                    <span className={styles.errorIcon}>⚠</span>
                    {error}
                </div>
            )}

            {success && (
                <div className={styles.successAlert}>
                    <span className={styles.successIcon}>✓</span>
                    Password changed successfully!
                    {isFirstLogin && " Redirecting..."}
                </div>
            )}

            <div className={styles.fields}>
                <Input
                    type="password"
                    name="currentPassword"
                    label={isFirstLogin ? "Temporary Password" : "Current Password"}
                    placeholder="••••••••"
                    required
                    autoComplete="current-password"
                    autoFocus
                />

                <Input
                    type="password"
                    name="newPassword"
                    label="New Password"
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                    helperText="Minimum 8 characters"
                />

                <Input
                    type="password"
                    name="confirmPassword"
                    label="Confirm New Password"
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                isLoading={isLoading}
                disabled={success}
            >
                {isFirstLogin ? "Set Password & Continue" : "Update Password"}
            </Button>
        </form>
    );
}

