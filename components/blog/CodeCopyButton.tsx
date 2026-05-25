'use client';

import React, { useState } from 'react';

import Copied from '../svgs/Copied';
import Copy from '../svgs/Copy';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface CodeCopyButtonProps {
  code: string;
}

export function CodeCopyButton({ code }: CodeCopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const writeClipboard = async (text: string) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  const copyToClipboard = async () => {
    try {
      await writeClipboard(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="absolute top-3 right-3">
      {isCopied && (
        <div className="absolute right-0 bottom-[calc(100%+8px)] rounded-full border border-emerald-500/20 bg-emerald-500/12 px-2.5 py-1 text-xs font-medium text-emerald-700 shadow-lg backdrop-blur-md dark:text-emerald-300">
          Copied
        </div>
      )}
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={copyToClipboard}
            className="flex size-8 items-center justify-center rounded-md border border-border/70 bg-background/80 opacity-0 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-muted group-hover:opacity-100 focus-visible:opacity-100"
            title={isCopied ? 'Copied!' : 'Copy code'}
            aria-label={isCopied ? 'Copied code' : 'Copy code'}
          >
            {isCopied ? (
              <Copied className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="text-secondary h-4 w-4" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {isCopied ? 'Copied to clipboard!' : 'Copy to clipboard'}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
