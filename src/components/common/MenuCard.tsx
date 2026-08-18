import type { ReactNode } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/utils/formatters'
import { ArrowRightIcon } from '@/components/icons/IconSet'

export interface MenuCardProps {
  name: string
  description: string
  price: number
  image?: ReactNode
  popular?: boolean
}

export function MenuCard({ name, description, price, image, popular }: MenuCardProps) {
  return (
    <Card className="group">
      {image && (
        <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
          {image}
          {popular && (
            <Badge variant="secondary" className="absolute top-3 right-3">
              Popular
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{name}</CardTitle>
          <span className="text-primary font-bold">{formatPrice(price)}</span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <button
          type="button"
          className="flex items-center text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
        >
          Add to order
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </button>
      </CardFooter>
    </Card>
  )
}
