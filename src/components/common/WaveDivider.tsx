import { cn } from '@/utils/cn'

interface WaveDividerProps {
  className?: string
  style?: React.CSSProperties
}

export function WaveDivider({ className, style }: WaveDividerProps) {
  return (
    <div className={cn('absolute bottom-0 left-0 w-full h-20 overflow-hidden pointer-events-none z-[9999]', className)} style={style}>
      <svg
        className="w-full h-full fill-background"
        preserveAspectRatio="none"
        viewBox="0 0 1440 160"
      >
        <path d="M0,0 C360,80 720,-20 1080,40 C1440,100 1440,160 1440,160 L0,160 Z" />
      </svg>
    </div>
  )
}