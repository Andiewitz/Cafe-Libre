import type { ReactNode } from 'react'

interface WaveDividerProps {
  color?: string
  flip?: boolean
  className?: string
  style?: React.CSSProperties
}

export function WaveDivider({ color = 'fill-secondary', flip = false, className, style }: WaveDividerProps) {
  return (
    <div
      className={`absolute left-0 w-full h-16 overflow-hidden pointer-events-none z-[9999] ${className || ''}`}
      style={style}
    >
      <svg
        className={`w-full h-full ${color} ${flip ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.15,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  )
}
