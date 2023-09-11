'use client';

import { CheckCircledIcon, ClipboardCopyIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

// A button used to copy and paste code
export const CopyToClipBoard = ({ text }: { text: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    // Copy the content to clipboard
    const copy = async () => {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);

        // Reset the CopyToClipBoard component after 3 seconds
        setTimeout(() => {
            setIsCopied(false);
        }, 3000);
    };

    return (
        <button disabled={isCopied} onClick={copy}>
            {isCopied ? (
                <div className='flex items-center'>
                    <span>Copied!</span>
                    <CheckCircledIcon className='ml-2 h-4 w-4' />
                    <span className='sr-only'>Check circled icon</span>
                </div>
            ) : (
                <div className='flex items-center'>
                    <span>Copy</span>
                    <ClipboardCopyIcon className='ml-2 h-4 w-4' />
                    <span className='sr-only'>Clipboard copy icon</span>
                </div>
            )}
        </button>
    );
};
