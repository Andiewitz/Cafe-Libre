import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import * as DialogPrimitive from '@radix-ui/react-dialog'

export interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: ReactNode
}

export function Dialog({ open, onOpenChange, title, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            'fixed top-0 right-0 z-50 h-full w-full max-w-xs overflow-y-auto',
            'bg-cream p-6 shadow-xl',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            'data-[side=bottom]:slide-out-to-right data-[side=top]:slide-out-to-top',
          )}
        >
          <DialogPrimitive.Title className="sr-only">
            {title || 'Navigation menu'}
          </DialogPrimitive.Title>
          {children}
          <DialogPrimitive.Close
            className={cn(
              'absolute top-4 right-4 rounded-full p-2 text-charcoal',
              'hover:bg-light-gray/50 transition-colors',
            )}
          >
            <span className="sr-only">Close menu</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
