import type { SVGProps } from 'react'
import { cn } from '@/utils/cn'

export function LogoIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-8 w-8', className)}
      {...props}
    >
      <path
        d="M24 2C14.06 2 6 10.06 6 20c0 7.61 5.13 13.95 12.08 15.73.89.16 1.22-0.38 1.22-0.84 0-0.42-0.02-1.88-0.02-3.32-4.01.72-4.86-1.62-4.86-1.62-0.65-1.65-1.6-2.09-1.6-2.09-1.31-0.89 0.1-0.87 0.1-0.87 1.44 0.1 2.2 1.48 2.2 1.48 1.28 2.19 3.36 1.57 4.18 1.2.13-0.93 0.5-1.57 0.91-1.91-3.18-0.36-6.53-1.58-6.53-7.07 0-1.54 0.54-2.79 1.43-3.79-0.14-0.36-0.61-1.79 0.13-3.73 0 0 1.17-0.38 3.83 1.42 1.11-0.3 2.29-0.45 3.47-0.45 1.17 0 2.36 0.15 3.48 0.46 2.66-1.8 3.82-1.42 3.82-1.42 0.74 1.94 0.27 3.37 0.13 3.71 0.89 0.99 1.43 2.25 1.43 3.79 0 5.51-3.37 6.7 6.54 7.07 0.51 0.44 0.96 1.3 0.96 2.62 0 1.89-0.17 3.41-0.44 4.53 0 0.89-0.38 1.52 1.1 0.93C34.87 33.73 40 27.25 40 20 40 10.06 31.94 2 24 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function LogoSteam({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        d="M20 12c0-2.21-1.79-4-4-4s-4 1.79-4 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M26 16c0-3.31-2.69-6-6-6s-6 2.69-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.3"
      />
      <path
        d="M34 22c0-4.42-3.58-8-8-8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.15"
      />
    </svg>
  )
}
