import { MaterialSymbol } from '@/components/ui/MaterialSymbol'

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full p-16 bg-surface-container shadow-inner border-t border-outline-variant/20 relative z-10">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 max-w-[1200px] mx-auto px-5 md:px-16 py-12">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-2">
            <MaterialSymbol name="local_cafe" filled className="text-primary text-2xl" />
            <span className="font-headline-sm font-bold text-primary">Café Aura</span>
          </div>
          <p className="font-body-md text-on-surface-variant">
            © 2024 Café Aura. Crafted with passion for the ritual of coffee.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors"
              href="#"
            >
              <MaterialSymbol name="public" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors"
              href="#"
            >
              <MaterialSymbol name="mail" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 mt-12 md:mt-0">
          <div className="flex flex-col gap-4">
            <h5 className="font-label-md text-primary uppercase tracking-widest mb-2">Explore</h5>
            <a
              className="font-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href="#"
            >
              Sustainability
            </a>
            <a
              className="font-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href="#"
            >
              Wholesale
            </a>
            <a
              className="font-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href="#"
            >
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-label-md text-primary uppercase tracking-widest mb-2">Legal</h5>
            <a
              className="font-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-label-md text-on-surface-variant hover:text-secondary transition-colors duration-200"
              href="#"
            >
              Shipping
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
