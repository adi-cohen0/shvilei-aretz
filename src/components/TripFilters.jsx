import { DIFFICULTY_LABELS } from '../utils/trips.js';

export default function TripFilters({
  regions,
  selectedCategory,
  setSelectedCategory,
  selectedRegion,
  setSelectedRegion,
  selectedDifficulty,
  setSelectedDifficulty,
  maxHours,
  setMaxHours,
  onReset,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">אזור בארץ</label>
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
        >
          <option value="">כל האזורים</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">רמת קושי</label>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
        >
          <option value="">כל רמות הקושי</option>
          {Object.entries(DIFFICULTY_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">משך מקסימלי (שעות)</label>
        <input
          type="number"
          min="1"
          max="10"
          value={maxHours}
          onChange={(e) => setMaxHours(e.target.value)}
          placeholder="לדוגמה: 4"
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-emerald-600"
        />
      </div>

      <div>
        <button
          onClick={onReset}
          className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-lg transition-colors"
        >
          איפוס סינונים
        </button>
      </div>
    </div>
  );
}