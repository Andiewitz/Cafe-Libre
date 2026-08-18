import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'
import { CoffeeBeanIcon } from '@/components/icons/IconSet'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo })
    if (process.env.NODE_ENV === 'development') {
      const safeStr = (val: unknown) => {
        try {
          return typeof val === 'string' ? val : JSON.stringify(val)
        } catch {
          return String(val)
        }
      }
      document.body.innerHTML =
        '<div style="padding:40px;background:#c53030;color:#fff;font-family:monospace;white-space:pre-wrap;">' +
        '<h2>React Error Boundary Caught:</h2>' +
        '<pre>' +
        'Error: ' +
        safeStr(error.message) +
        '\n\n' +
        'Stack: ' +
        safeStr(error.stack) +
        '\n\n' +
        'Component Stack:\n' +
        safeStr(errorInfo?.componentStack) +
        '</pre></div>'
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return <>{this.props.fallback}</>
      }

      return (
        <div className="flex min-h-screen items-center justify-center bg-cream">
          <div className="text-center">
            <CoffeeBeanIcon className="mx-auto mb-4 h-16 w-16 text-accent opacity-30" />
            <h1 className="font-display text-4xl font-bold text-primary">Something went wrong</h1>
            <p className="mt-2 text-primary-muted">
              We couldn't load this page. Please refresh and try again.
            </p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
