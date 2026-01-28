export default function TailWindDemo() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl rounded-2xl bg-white shadow-lg p-6 sm:p-10">
        <button className="btn-primary">
        Primary button
        </button>

        <button className="btn-secondary mt-3">
        Secondary button
        </button>
        <div className="card-gradient">
            <div className="card-gradient-inner p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Card với custom CSS + Tailwind
                </h2>
                <p className="text-slate-600 text-sm">
                Border này làm bằng CSS thường, bên trong dùng Tailwind cho spacing, font, màu.
                </p>
            </div>
        </div>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Tailwind CSS Demo
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Ví dụ đơn giản dùng flex, grid, spacing, màu sắc và responsive classes.
          </p>
        </div>

        {/* 2 columns layout */}
        <div className="grid gap-6 md:grid-cols-[2fr_1.3fr]">
          {/* Left column: cards */}
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                Flex & Spacing
              </h2>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  px-3 py-1
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-xs font-medium text-emerald-700">
                  gap-2 / gap-4
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1 text-xs font-medium text-amber-700">
                  flex / flex-row / flex-col
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 p-4 sm:p-5">
              <h2 className="text-lg font-semibold text-slate-900 mb-3">
                Buttons với Tailwind
              </h2>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
                  Primary
                </button>
                <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  Outline
                </button>
                <button className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500">
                  Rounded
                </button>
              </div>
            </div>
          </div>

          {/* Right column: list */}
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/60 p-4 sm:p-5">
            <h2 className="text-base font-semibold text-slate-900 mb-3">
              Một số classes đang dùng
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <code className="rounded bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-50">
                  min-h-screen flex items-center justify-center
                </code>
              </li>
              <li>
                <code className="rounded bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-50">
                  grid md:grid-cols-[2fr_1.3fr] gap-6
                </code>
              </li>
              <li>
                <code className="rounded bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-50">
                  rounded-2xl shadow-lg bg-white
                </code>
              </li>
              <li>
                <code className="rounded bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-50">
                  text-slate-900 / text-slate-500 / bg-slate-50
                </code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}