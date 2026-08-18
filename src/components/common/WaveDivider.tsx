import { cn } from '@/utils/cn'

interface WaveDividerProps {
  className?: string
  style?: React.CSSProperties
}

export function WaveDivider({ className, style }: WaveDividerProps) {
  return (
    <div
      className={cn('relative w-full h-20 pointer-events-none z-[9999] -mt-10', className)}
      style={style}
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-full fill-background"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
      >
        <path d="M0,100 C300,40 600,160 900,60 C1200,-40 1440,120 1440,120 L1440,200 L0,200 Z" />
      </svg>
    </div>
  )
}
