"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
    /** Whether the modal is open */
    isOpen: boolean;
    /** Callback when modal should close */
    onClose: () => void;
    /** Modal title */
    title?: string;
    /** Modal content */
    children: React.ReactNode;
    /** Size variant */
    size?: "small" | "medium" | "large" | "fullscreen";
    /** Whether clicking the backdrop closes the modal */
    closeOnBackdrop?: boolean;
    /** Whether pressing Escape closes the modal */
    closeOnEscape?: boolean;
    /** Whether to show the close button */
    showCloseButton?: boolean;
    /** Additional CSS class for the modal content */
    className?: string;
    /** Footer content */
    footer?: React.ReactNode;
}

/**
 * Modal component using React Portals
 * Renders above all other content
 */
export function Modal({
    isOpen,
    onClose,
    title,
    children,
    size = "medium",
    closeOnBackdrop = true,
    closeOnEscape = true,
    showCloseButton = true,
    className = "",
    footer,
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    // Handle escape key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (closeOnEscape && e.key === "Escape") {
            onClose();
        }
    }, [closeOnEscape, onClose]);

    // Handle backdrop click
    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (closeOnBackdrop && e.target === e.currentTarget) {
            onClose();
        }
    }, [closeOnBackdrop, onClose]);

    // Focus management and body scroll lock
    useEffect(() => {
        if (isOpen) {
            // Store current active element
            previousActiveElement.current = document.activeElement as HTMLElement;

            // Focus the modal
            modalRef.current?.focus();

            // Prevent body scroll
            document.body.style.overflow = "hidden";

            // Add escape key listener
            document.addEventListener("keydown", handleKeyDown);
        } else {
            // Restore body scroll
            document.body.style.overflow = "";

            // Restore focus to previous element
            previousActiveElement.current?.focus();
        }

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    // Don't render if not open
    if (!isOpen) return null;

    // Render portal
    return createPortal(
        <div
            className={styles.backdrop}
            onClick={handleBackdropClick}
            role="presentation"
        >
            <div
                ref={modalRef}
                className={`${styles.modal} ${styles[size]} ${className}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
                tabIndex={-1}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className={styles.header}>
                        {title && (
                            <h2 id="modal-title" className={styles.title}>
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                type="button"
                                className={styles.closeButton}
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className={styles.content}>
                    {children}
                </div>

                {/* Footer */}
                {footer && (
                    <div className={styles.footer}>
                        {footer}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

// ============================================================================
// CONFIRMATION MODAL
// ============================================================================

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "danger" | "warning" | "info";
    isLoading?: boolean;
}

/**
 * Pre-styled confirmation modal
 */
export function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    variant = "info",
    isLoading = false,
}: ConfirmModalProps) {
    const handleConfirm = () => {
        if (!isLoading) {
            onConfirm();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            size="small"
            footer={
                <div className={styles.confirmFooter}>
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        {cancelText}
                    </button>
                    <button
                        type="button"
                        className={`${styles.confirmButton} ${styles[variant]}`}
                        onClick={handleConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : confirmText}
                    </button>
                </div>
            }
        >
            <p className={styles.confirmMessage}>{message}</p>
        </Modal>
    );
}

// ============================================================================
// MODAL HOOK
// ============================================================================

import { useState } from "react";

/**
 * Hook to manage modal state
 */
export function useModal(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen(prev => !prev), []);

    return { isOpen, open, close, toggle };
}

