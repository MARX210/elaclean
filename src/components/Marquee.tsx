const ITEMS = ['Sofás', 'Colchões', 'Cadeiras', 'Tapetes', 'Todos os estofados', 'A domicílio', 'Francisco Beltrão e região']

export default function Marquee() {
  const base = [...ITEMS, ...ITEMS]
  return (
    <div className="bg-[#17100b] border-y border-white/10 py-5 overflow-hidden">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {[...base, ...base].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-2xl md:text-4xl font-medium tracking-tight"
            style={{ color: '#EADBC4' }}
          >
            {item}
            <span className="text-[#C69C6D] text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
