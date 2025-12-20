"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useUploadThing, type UploadEndpoint } from "@lib/uploadthing-client";
import styles from "./ImageUpload.module.scss";

interface ImageUploadProps {
    /** The upload endpoint to use */
    endpoint: UploadEndpoint;
    /** Current image URL (for preview) */
    value?: string | null;
    /** Callback when image is uploaded successfully */
    onChange: (url: string) => void;
    /** Callback when image is removed */
    onRemove?: () => void;
    /** Placeholder text */
    placeholder?: string;
    /** Aspect ratio for the preview */
    aspectRatio?: "square" | "portrait" | "landscape" | "banner";
    /** Whether the upload is disabled */
    disabled?: boolean;
    /** Additional CSS class */
    className?: string;
}

/**
 * Reusable image upload component
 * Uses UploadThing for file uploads with preview and removal
 */
export function ImageUpload({
    endpoint,
    value,
    onChange,
    onRemove,
    placeholder = "Click or drag to upload an image",
    aspectRatio = "square",
    disabled = false,
    className = "",
}: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const { startUpload, isUploading: uploadingState } = useUploadThing(endpoint, {
        onClientUploadComplete: (res) => {
            setIsUploading(false);
            setUploadProgress(0);
            setError(null);
            if (res?.[0]?.url) {
                onChange(res[0].url);
            }
        },
        onUploadError: (error) => {
            setIsUploading(false);
            setUploadProgress(0);
            setError(error.message || "Upload failed");
        },
        onUploadProgress: (progress) => {
            setUploadProgress(progress);
        },
    });

    const handleFileSelect = useCallback(async (files: FileList | null) => {
        if (!files || files.length === 0 || disabled) return;

        const file = files[0];

        // Validate file type
        if (!file.type.startsWith("image/")) {
            setError("Please select an image file");
            return;
        }

        setError(null);
        setIsUploading(true);
        await startUpload([file]);
    }, [startUpload, disabled]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        handleFileSelect(e.dataTransfer.files);
    }, [handleFileSelect]);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        if (!disabled) {
            setIsDragging(true);
        }
    }, [disabled]);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileSelect(e.target.files);
    }, [handleFileSelect]);

    const handleRemove = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        onRemove?.();
    }, [onRemove]);

    const isLoading = isUploading || uploadingState;

    return (
        <div className={`${styles.container} ${className}`}>
            <div
                className={`${styles.dropzone} ${styles[aspectRatio]} ${isDragging ? styles.dragging : ""} ${disabled ? styles.disabled : ""} ${value ? styles.hasImage : ""}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                {value ? (
                    // Image Preview
                    <div className={styles.preview}>
                        <Image
                            src={value}
                            alt="Uploaded image"
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className={styles.overlay}>
                            <label className={styles.changeButton}>
                                Change
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleInputChange}
                                    disabled={disabled || isLoading}
                                    className={styles.hiddenInput}
                                />
                            </label>
                            {onRemove && (
                                <button
                                    type="button"
                                    onClick={handleRemove}
                                    className={styles.removeButton}
                                    disabled={disabled || isLoading}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    // Upload Area
                    <label className={styles.uploadArea}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleInputChange}
                            disabled={disabled || isLoading}
                            className={styles.hiddenInput}
                        />

                        {isLoading ? (
                            <div className={styles.uploading}>
                                <div className={styles.spinner} />
                                <span>Uploading... {uploadProgress}%</span>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        style={{ width: `${uploadProgress}%` }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.placeholder}>
                                <span className={styles.icon}>📷</span>
                                <span className={styles.text}>{placeholder}</span>
                                <span className={styles.hint}>PNG, JPG, GIF up to 4MB</span>
                            </div>
                        )}
                    </label>
                )}
            </div>

            {error && (
                <p className={styles.error}>{error}</p>
            )}
        </div>
    );
}

// ============================================================================
// AVATAR UPLOAD (Circular variant)
// ============================================================================

interface AvatarUploadProps extends Omit<ImageUploadProps, "aspectRatio"> {
    /** Size of the avatar */
    size?: "small" | "medium" | "large";
}

/**
 * Circular avatar upload component
 */
export function AvatarUpload({
    size = "medium",
    ...props
}: AvatarUploadProps) {
    return (
        <div className={`${styles.avatarContainer} ${styles[size]}`}>
            <ImageUpload {...props} aspectRatio="square" />
        </div>
    );
}

