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
      <svg
        className="absolute bottom-0 left-0 w-full h-full fill-background"
        preserveAspectRatio="none"
        viewBox="0 0 1440 200"
      >
        <path d="M0,0 L1440,0 L1440,200 C1260,160 1080,180 900,160 C720,140 480,180 240,160 C120,180 0,160 0,200 Z" />
      </svg>
    </div>
  )
}
