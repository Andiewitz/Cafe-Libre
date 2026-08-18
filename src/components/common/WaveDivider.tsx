import { cn } from '@/utils/cn'

interface WaveDividerProps {
  className?: string
  style?: React.CSSProperties
}

export function WaveDivider({ className, style }: WaveDividerProps) {
  return (
    <div
      className={cn('relative w-full h-20 pointer-events-none -mt-2 z-[9999]', className)}
      style={style}
    >
      {/* Top edge blends with hero section - wavy top */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full fill-background"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
      >
        {/* Non-uniform wavy path - creates organic dripping effect from bottom */}
        <path d="M0,40 C180,40 240,10 420,10 C600,10 660,50 840,30 C1020,10 1080,-10 1260,20 C1440,50 1260,80 1440,120 L1440,200 L0,200 Z" />
      </svg>
    </div>
  )
}
