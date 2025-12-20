"use client";

import { useState, useCallback, useMemo, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import styles from "./Filters.module.scss";

// ============================================================================
// SEARCH INPUT
// ============================================================================

interface SearchInputProps {
    /** Placeholder text */
    placeholder?: string;
    /** Initial value */
    defaultValue?: string;
    /** Callback when search changes (debounced) */
    onSearch?: (value: string) => void;
    /** Debounce delay in ms */
    debounceMs?: number;
    /** Additional CSS class */
    className?: string;
}

/**
 * Search input with debouncing
 */
export function SearchInput({
    placeholder = "Search...",
    defaultValue = "",
    onSearch,
    debounceMs = 300,
    className = "",
}: SearchInputProps) {
    const [value, setValue] = useState(defaultValue);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        // Clear existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set new timeout for debounced callback
        if (onSearch) {
            const id = setTimeout(() => {
                onSearch(newValue);
            }, debounceMs);
            setTimeoutId(id);
        }
    }, [onSearch, debounceMs, timeoutId]);

    const handleClear = useCallback(() => {
        setValue("");
        if (onSearch) {
            onSearch("");
        }
    }, [onSearch]);

    return (
        <div className={`${styles.searchContainer} ${className}`}>
            <span className={styles.searchIcon}>🔍</span>
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={styles.searchInput}
            />
            {value && (
                <button
                    type="button"
                    onClick={handleClear}
                    className={styles.clearButton}
                    aria-label="Clear search"
                >
                    ✕
                </button>
            )}
        </div>
    );
}

// ============================================================================
// FILTER CHIPS
// ============================================================================

interface FilterOption {
    value: string;
    label: string;
    count?: number;
    icon?: string;
}

interface FilterChipsProps {
    /** Available filter options */
    options: FilterOption[];
    /** Currently selected values */
    selected: string[];
    /** Callback when selection changes */
    onChange: (selected: string[]) => void;
    /** Whether to allow multiple selections */
    multiple?: boolean;
    /** Additional CSS class */
    className?: string;
}

/**
 * Filter chips for category selection
 */
export function FilterChips({
    options,
    selected,
    onChange,
    multiple = true,
    className = "",
}: FilterChipsProps) {
    const handleClick = useCallback((value: string) => {
        if (multiple) {
            if (selected.includes(value)) {
                onChange(selected.filter(v => v !== value));
            } else {
                onChange([...selected, value]);
            }
        } else {
            if (selected.includes(value)) {
                onChange([]);
            } else {
                onChange([value]);
            }
        }
    }, [selected, onChange, multiple]);

    const handleClearAll = useCallback(() => {
        onChange([]);
    }, [onChange]);

    return (
        <div className={`${styles.chipsContainer} ${className}`}>
            <div className={styles.chips}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => handleClick(option.value)}
                        className={`${styles.chip} ${selected.includes(option.value) ? styles.selected : ""}`}
                    >
                        {option.icon && <span className={styles.chipIcon}>{option.icon}</span>}
                        <span className={styles.chipLabel}>{option.label}</span>
                        {option.count !== undefined && (
                            <span className={styles.chipCount}>{option.count}</span>
                        )}
                    </button>
                ))}
            </div>
            {selected.length > 0 && (
                <button
                    type="button"
                    onClick={handleClearAll}
                    className={styles.clearFilters}
                >
                    Clear all
                </button>
            )}
        </div>
    );
}

// ============================================================================
// SELECT DROPDOWN
// ============================================================================

interface SelectOption {
    value: string;
    label: string;
}

interface SelectFilterProps {
    /** Label for the select */
    label?: string;
    /** Available options */
    options: SelectOption[];
    /** Currently selected value */
    value: string;
    /** Callback when selection changes */
    onChange: (value: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Additional CSS class */
    className?: string;
}

/**
 * Select dropdown filter
 */
export function SelectFilter({
    label,
    options,
    value,
    onChange,
    placeholder = "Select...",
    className = "",
}: SelectFilterProps) {
    return (
        <div className={`${styles.selectContainer} ${className}`}>
            {label && <label className={styles.selectLabel}>{label}</label>}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.select}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

// ============================================================================
// FILTER BAR (Combined)
// ============================================================================

interface FilterBarProps {
    /** Search placeholder */
    searchPlaceholder?: string;
    /** Filter options */
    filterOptions?: FilterOption[];
    /** Sort options */
    sortOptions?: SelectOption[];
    /** Callback when any filter changes */
    onFilterChange?: (filters: {
        search: string;
        categories: string[];
        sort: string;
    }) => void;
    /** Additional CSS class */
    className?: string;
}

/**
 * Combined filter bar with search, category chips, and sort
 */
export function FilterBar({
    searchPlaceholder = "Search...",
    filterOptions = [],
    sortOptions = [],
    onFilterChange,
    className = "",
}: FilterBarProps) {
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState<string[]>([]);
    const [sort, setSort] = useState("");

    const handleSearchChange = useCallback((value: string) => {
        setSearch(value);
        onFilterChange?.({ search: value, categories, sort });
    }, [categories, sort, onFilterChange]);

    const handleCategoriesChange = useCallback((value: string[]) => {
        setCategories(value);
        onFilterChange?.({ search, categories: value, sort });
    }, [search, sort, onFilterChange]);

    const handleSortChange = useCallback((value: string) => {
        setSort(value);
        onFilterChange?.({ search, categories, sort: value });
    }, [search, categories, onFilterChange]);

    return (
        <div className={`${styles.filterBar} ${className}`}>
            <div className={styles.filterBarTop}>
                <SearchInput
                    placeholder={searchPlaceholder}
                    onSearch={handleSearchChange}
                />
                {sortOptions.length > 0 && (
                    <SelectFilter
                        options={sortOptions}
                        value={sort}
                        onChange={handleSortChange}
                        placeholder="Sort by..."
                    />
                )}
            </div>
            {filterOptions.length > 0 && (
                <FilterChips
                    options={filterOptions}
                    selected={categories}
                    onChange={handleCategoriesChange}
                />
            )}
        </div>
    );
}

// ============================================================================
// URL-SYNCED FILTERS HOOK
// ============================================================================

interface UseUrlFiltersOptions {
    /** Search param name for search */
    searchParam?: string;
    /** Search param name for categories */
    categoryParam?: string;
    /** Search param name for sort */
    sortParam?: string;
}

/**
 * Hook to sync filters with URL search params
 */
export function useUrlFilters({
    searchParam = "q",
    categoryParam = "category",
    sortParam = "sort",
}: UseUrlFiltersOptions = {}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const search = searchParams.get(searchParam) || "";
    const categories = searchParams.getAll(categoryParam);
    const sort = searchParams.get(sortParam) || "";

    const updateFilters = useCallback((updates: {
        search?: string;
        categories?: string[];
        sort?: string;
    }) => {
        const params = new URLSearchParams(searchParams.toString());

        if (updates.search !== undefined) {
            if (updates.search) {
                params.set(searchParam, updates.search);
            } else {
                params.delete(searchParam);
            }
        }

        if (updates.categories !== undefined) {
            params.delete(categoryParam);
            updates.categories.forEach(cat => params.append(categoryParam, cat));
        }

        if (updates.sort !== undefined) {
            if (updates.sort) {
                params.set(sortParam, updates.sort);
            } else {
                params.delete(sortParam);
            }
        }

        startTransition(() => {
            router.push(`${pathname}?${params.toString()}`, { scroll: false });
        });
    }, [router, pathname, searchParams, searchParam, categoryParam, sortParam]);

    return {
        search,
        categories,
        sort,
        updateFilters,
        isPending,
    };
}

