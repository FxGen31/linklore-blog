import { Button } from '@/components/ui/button';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { DOTS, usePagination } from '@/hooks/use-pagination';
import { HTMLAttributes, useEffect } from 'react';

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
    currentPage: number;
    onPageChange: (_: number) => void;
    pageSize: number;
    siblingNumber?: number;
    totalNumber: number;
}

// Page pagination component
export default function Pagination({
    className,
    currentPage,
    onPageChange,
    pageSize,
    siblingNumber = 1,
    totalNumber,
}: PaginationProps) {
    // Values to ve displayed in pagination
    const paginationRange = usePagination({
        currentPage,
        pageSize,
        siblingNumber,
        totalNumber,
    });

    useEffect(() => {
        const totalPageNumber = Math.ceil(totalNumber / pageSize);
        if (currentPage > totalPageNumber) {
            onPageChange(totalPageNumber);
        }
    }, [totalNumber, pageSize, currentPage, onPageChange]);

    // Hide pagination when not needed
    if (currentPage <= 0 || paginationRange.length < 2) {
        return null;
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    const onNextPage = () => {
        if (currentPage < lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div
            className={cn(
                className,
                'flex justify-center gap-1 text-xs font-medium'
            )}
        >
            {/* Prev button */}
            <Button
                size='icon'
                onClick={onPrevPage}
                variant='outline'
                disabled={currentPage === 1}
            >
                <ChevronLeftIcon className='h-3 w-3' />
                <span className='sr-only'>Prev Page</span>
            </Button>
            {/* Pages */}
            <div className='flex sm:space-x-2'>
                {paginationRange.map((pageNumber, idx) => {
                    if (pageNumber === DOTS) {
                        return (
                            <Button
                                key={`${pageNumber}-${idx}`}
                                size='icon'
                                variant='outline'
                            >
                                &#8230;
                            </Button>
                        );
                    } else {
                        return (
                            <Button
                                onClick={() => onPageChange(pageNumber)}
                                key={`${pageNumber}-${idx}`}
                                size='icon'
                                variant={
                                    currentPage === pageNumber
                                        ? 'default'
                                        : 'outline'
                                }
                            >
                                {pageNumber}
                            </Button>
                        );
                    }
                })}
            </div>
            {/* Next button */}
            <Button
                size='icon'
                onClick={onNextPage}
                variant='outline'
                disabled={currentPage === lastPage}
            >
                <ChevronRightIcon className='h-3 w-3' />
                <span className='sr-only'>Next Page</span>
            </Button>
        </div>
    );
}
