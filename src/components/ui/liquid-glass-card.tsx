import * as React from 'react'
import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-white text-[#2E170C] flex flex-col gap-4 rounded-2xl border border-[#E5D7CA] p-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-header" className={cn('flex flex-col gap-1.5', className)} {...props} />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold text-[#2E170C]', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-[#8E7365] text-xs', className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('p-0', className)} {...props} />
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="card-footer" className={cn('flex items-center pt-4', className)} {...props} />
  )
}

function LiquidCard({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className="h-full">
      <div
        data-slot="card"
        className={cn(
          'text-[#2E170C] bg-white rounded-3xl border border-[#E7D9CC] py-6 px-6 shadow-[0_8px_24px_rgba(46,23,12,0.06)] hover:shadow-[0_12px_32px_rgba(46,23,12,0.12)] transition-all duration-300 flex flex-col justify-between',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, LiquidCard }
