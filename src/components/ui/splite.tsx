'use client'

import { Suspense, lazy, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

// The Spline runtime calls canvas.focus() once the scene loads, which scrolls
// the page down to the canvas. Force preventScroll on canvas focus instead.
function usePreventCanvasFocusScroll() {
  useEffect(() => {
    const original = HTMLCanvasElement.prototype.focus
    HTMLCanvasElement.prototype.focus = function (options?: FocusOptions) {
      original.call(this, { preventScroll: true, ...options })
    }
    return () => {
      HTMLCanvasElement.prototype.focus = original
    }
  }, [])
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  usePreventCanvasFocusScroll()
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
