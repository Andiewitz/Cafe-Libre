import { CoffeeBeanIcon } from '@/components/icons/IconSet'

export function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <CoffeeBeanIcon className="mx-auto mb-4 h-12 w-12 animate-spin text-accent" />
        <p className="font-display text-xl text-primary">Brewing your page...</p>
      </div>
    </div>
  )
}
