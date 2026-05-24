import { useEffect, useRef } from 'react'

export default function AtmosphericBackground() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${-x}px, ${-y}px)`
      }
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div
        ref={blob1Ref}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary-fixed/20 blur-[120px]"
      />
      <div
        ref={blob2Ref}
        className="absolute bottom-[0%] right-[0%] w-[30%] h-[50%] rounded-full bg-primary-fixed/30 blur-[100px]"
      />
    </div>
  )
}
