'use client'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[999] bg-black/30 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
