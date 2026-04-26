import type { YachtLocation, YachtType } from '../../data/yachtChartersData'
import { YACHT_LOCATIONS, YACHT_TYPES } from '../../data/yachtChartersData'

export type DurationFilter = '4h' | '6h' | 'fullday'

export type YachtFilterState = {
  type: YachtType | 'all'
  location: YachtLocation | 'all'
  minGuests: number
  duration: DurationFilter
}

type Props = {
  value: YachtFilterState
  onChange: (next: YachtFilterState) => void
}

export default function YachtFilter({ value, onChange }: Props) {
  return (
    <div className="yacht-filter">
      <div className="yacht-filter__inner">
        <div className="yacht-filter__field">
          <label className="yacht-filter__label" htmlFor="yacht-type">
            Yacht type
          </label>
          <select
            id="yacht-type"
            className="yacht-filter__select"
            value={value.type}
            onChange={(e) =>
              onChange({ ...value, type: e.target.value as YachtType | 'all' })
            }
          >
            <option value="all">All types</option>
            {YACHT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="yacht-filter__field">
          <label className="yacht-filter__label" htmlFor="yacht-loc">
            Location
          </label>
          <select
            id="yacht-loc"
            className="yacht-filter__select"
            value={value.location}
            onChange={(e) =>
              onChange({
                ...value,
                location: e.target.value as YachtLocation | 'all',
              })
            }
          >
            <option value="all">All locations</option>
            {YACHT_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="yacht-filter__field yacht-filter__field--grow">
          <label className="yacht-filter__label" htmlFor="yacht-guests">
            Guest capacity (minimum)
            <span className="yacht-filter__value">{value.minGuests}+ guests</span>
          </label>
          <input
            id="yacht-guests"
            type="range"
            className="yacht-filter__range"
            min={2}
            max={20}
            step={1}
            value={value.minGuests}
            onChange={(e) =>
              onChange({ ...value, minGuests: Number(e.target.value) })
            }
          />
        </div>

        <div className="yacht-filter__field yacht-filter__field--durations">
          <span className="yacht-filter__label">Duration focus</span>
          <div className="yacht-filter__pills" role="group" aria-label="Duration">
            {(
              [
                { id: '4h' as const, label: '4 Hours' },
                { id: '6h' as const, label: '6 Hours' },
                { id: 'fullday' as const, label: 'Full Day' },
              ] as const
            ).map((d) => (
              <button
                key={d.id}
                type="button"
                className={`yacht-filter__pill ${value.duration === d.id ? 'yacht-filter__pill--active' : ''}`}
                onClick={() => onChange({ ...value, duration: d.id })}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
