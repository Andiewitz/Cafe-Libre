import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

export interface MaterialSymbolProps extends HTMLAttributes<HTMLElement> {
  name: string
  filled?: boolean
  variationSettings?: string
}

export function MaterialSymbol({
  name,
  filled = false,
  className = '',
  variationSettings,
  ...props
}: MaterialSymbolProps) {
  const fillSetting =
    filled || variationSettings ? { fontVariationSettings: variationSettings || "'FILL' 1" } : {}
  return (
    <span className={cn('material-symbols-outlined', className)} style={fillSetting} {...props}>
      {name}
    </span>
  )
}
