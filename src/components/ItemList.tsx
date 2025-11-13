import React, { useMemo, useState } from "react";

type Item = {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: number;
  short: string;
  description: string;
  image?: string;
};

type Props = {
  items: Item[];
};

export default function ItemList({ items }: Props) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(items.map((i) => i.category)))];
  }, [items]);

  const filtered = useMemo(() => {
    const minVal = min ? parseFloat(min) : -Infinity;
    const maxVal = max ? parseFloat(max) : Infinity;
    const qLower = q.toLowerCase();
    return items.filter((i) => {
      const matchesQ = !q ||
        i.title.toLowerCase().includes(qLower) ||
        i.description.toLowerCase().includes(qLower);
      const matchesCat = category === "all" || i.category === category;
      const matchesPrice = i.price >= minVal && i.price <= maxVal;
      return matchesQ && matchesCat && matchesPrice;
    });
  }, [items, q, category, min, max]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Buscar</label>
          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nombre o descripción"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Categoría</label>
          <select
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <div>
            <label className="block text-sm font-medium mb-1">Min</label>
            <input
              type="number"
              className="w-24 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Max</label>
            <input
              type="number"
              className="w-24 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <li key={i.slug} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <a href={`/item/${i.slug}`} className="block">
              {i.image ? (
                <img src={i.image} alt={i.title} className="mb-3 h-36 w-full rounded object-cover" />
              ) : null}
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold">{i.title}</h3>
                <span className="text-sm text-gray-500">${i.price.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{i.short}</p>
              <span className="mt-2 inline-block rounded bg-gray-100 px-2 py-1 text-xs text-gray-700">{i.category}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
