"use client";

import styles from "./Skeleton.module.scss";

interface SkeletonProps {
    /** Width of the skeleton. Can be a number (pixels) or string (e.g., "100%") */
    width?: number | string;
    /** Height of the skeleton. Can be a number (pixels) or string */
    height?: number | string;
    /** Border radius variant */
    variant?: "text" | "circular" | "rectangular" | "rounded";
    /** Additional CSS classes */
    className?: string;
    /** Animation style */
    animation?: "shimmer" | "pulse" | "none";
}

/**
 * Skeleton loading placeholder component
 * Used within Suspense boundaries for loading states
 */
export function Skeleton({
    width,
    height,
    variant = "rectangular",
    className = "",
    animation = "shimmer",
}: SkeletonProps) {
    const style: React.CSSProperties = {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
    };

    return (
        <div
            className={`${styles.skeleton} ${styles[variant]} ${styles[animation]} ${className}`}
            style={style}
            aria-hidden="true"
        />
    );
}

// ============================================================================
// PRESET SKELETON COMPONENTS
// ============================================================================

interface SkeletonTextProps {
    lines?: number;
    className?: string;
}

/** Text skeleton with multiple lines */
export function SkeletonText({ lines = 3, className = "" }: SkeletonTextProps) {
    return (
        <div className={`${styles.textContainer} ${className}`}>
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    width={i === lines - 1 ? "60%" : "100%"}
                    height={16}
                />
            ))}
        </div>
    );
}

interface SkeletonCardProps {
    hasImage?: boolean;
    imageHeight?: number;
    className?: string;
}

/** Card skeleton with optional image placeholder */
export function SkeletonCard({ hasImage = true, imageHeight = 200, className = "" }: SkeletonCardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            {hasImage && (
                <Skeleton variant="rectangular" height={imageHeight} width="100%" />
            )}
            <div className={styles.cardContent}>
                <Skeleton variant="text" height={24} width="70%" />
                <SkeletonText lines={2} />
            </div>
        </div>
    );
}

interface SkeletonGridProps {
    count?: number;
    columns?: number;
    hasImage?: boolean;
    className?: string;
}

/** Grid of skeleton cards */
export function SkeletonGrid({ count = 6, columns = 3, hasImage = true, className = "" }: SkeletonGridProps) {
    return (
        <div
            className={`${styles.grid} ${className}`}
            style={{ "--columns": columns } as React.CSSProperties}
        >
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonCard key={i} hasImage={hasImage} />
            ))}
        </div>
    );
}

/** Avatar/profile picture skeleton */
export function SkeletonAvatar({ size = 48 }: { size?: number }) {
    return <Skeleton variant="circular" width={size} height={size} />;
}

/** Table row skeleton */
export function SkeletonTableRow({ columns = 4 }: { columns?: number }) {
    return (
        <div className={styles.tableRow}>
            {Array.from({ length: columns }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    height={20}
                    width={i === 0 ? "30%" : i === columns - 1 ? "15%" : "20%"}
                />
            ))}
        </div>
    );
}

/** Table skeleton */
export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                {Array.from({ length: columns }).map((_, i) => (
                    <Skeleton key={i} variant="text" height={16} width="80%" />
                ))}
            </div>
            {Array.from({ length: rows }).map((_, i) => (
                <SkeletonTableRow key={i} columns={columns} />
            ))}
        </div>
    );
}

/** Page header skeleton */
export function SkeletonPageHeader() {
    return (
        <div className={styles.pageHeader}>
            <Skeleton variant="text" height={40} width="40%" />
            <Skeleton variant="text" height={20} width="60%" />
        </div>
    );
}

/** Detail page skeleton */
export function SkeletonDetailPage() {
    return (
        <div className={styles.detailPage}>
            <SkeletonPageHeader />
            <div className={styles.detailContent}>
                <div className={styles.detailMain}>
                    <Skeleton variant="rectangular" height={300} width="100%" />
                    <SkeletonText lines={5} />
                </div>
                <div className={styles.detailSidebar}>
                    <SkeletonCard hasImage={false} />
                    <SkeletonCard hasImage={false} />
                </div>
            </div>
        </div>
    );
}

