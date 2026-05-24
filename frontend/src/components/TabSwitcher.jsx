export default function TabSwitcher({ mode, onSwitch }) {
  return (
    <div className="flex p-1 bg-surface-container-low rounded-lg mb-8 relative">
      <button
        className={`relative z-10 flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-widest transition-colors ${
          mode === 'student' ? 'text-on-surface' : 'text-on-surface-variant'
        }`}
        onClick={() => onSwitch('student')}
      >
        Student
      </button>
      <button
        className={`relative z-10 flex-1 py-3 text-center font-label-md text-label-md uppercase tracking-widest transition-colors ${
          mode === 'staff' ? 'text-on-surface' : 'text-on-surface-variant'
        }`}
        onClick={() => onSwitch('staff')}
      >
        Faculty/Staff
      </button>
      <div
        className="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-surface-container-lowest shadow-sm rounded-md active-tab-indicator"
        style={{ transform: mode === 'staff' ? 'translateX(100%)' : 'translateX(0%)' }}
      />
    </div>
  )
}
