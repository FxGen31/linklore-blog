import { useMemo } from 'react';

// Convert range to array
const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

// Use -1 to represent dots(`...`)
export const DOTS = -1;

interface UsePaginationProps {
    currentPage: number;
    pageSize: number;
    siblingNumber?: number;
    totalNumber: number;
}

/**
 * usePagination hook generates a pagination range based on the provided parameters.
 * @param totalNumber - Total number of items
 * @param pageSize - Number of items per page
 * @param siblingNumber - Number of sibling pages to display on each side of the current page (default: 1)
 * @param currentPage - Current page number
 * @returns An array representing the pagination range
 */
export const usePagination = ({
    currentPage,
    pageSize,
    siblingNumber = 1,
    totalNumber,
}: UsePaginationProps): number[] => {
    const paginationRange = useMemo(() => {
        if (totalNumber <= 0 || pageSize <= 0 || currentPage <= 0) {
            console.log('Invalid input parameters for usePagination hook.');
            return [];
        }
        // Ensure always reserve an extra page for remaining data
        const totalPageNumber = Math.ceil(totalNumber / pageSize);

        /* 
            siblingNumber + firstPage + lastPage + currentPage + 2*DOTS
            ex. 1 ... 3 4 5 ... 7
        */
        const maxDisplayedPageNumber = siblingNumber + 5;

        /*
            Case 1:
            Total page number is less than the maximum page number which can be shown in the
            paginationComponent, return the range [1, totalPageNumber]
        */
        if (maxDisplayedPageNumber >= totalPageNumber) {
            return range(1, totalPageNumber);
        }

        // Calculate left and right sibling indexes and ensure they are within the range [1, totalPageNumber]
        const leftSiblingIndex = Math.max(currentPage - siblingNumber, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingNumber,
            totalPageNumber
        );

        /*
            Hide dots when there is only one page between the siblingIndexes and range boundaries. 
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageNumber - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageNumber;

        /*
            Case 2: 
            Hide left dots, show rights dots
        */
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingNumber;
            const leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageNumber];
        }

        /*
            Case 3: Hide right dots, show left dots
        */
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingNumber;
            const rightRange = range(
                totalPageNumber - rightItemCount + 1,
                totalPageNumber
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        /*
            Case 4: Show both left and right dots
        */
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalNumber, pageSize, siblingNumber, currentPage]);

    return paginationRange || [];
};
