// components/ErrorBoundary.tsx
'use client'

import React from 'react'

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Chart ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <p className="text-red-500">Chart failed to load.</p>
    }

    return this.props.children
  }
}
