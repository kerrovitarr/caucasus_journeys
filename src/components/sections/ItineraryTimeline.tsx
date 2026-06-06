import type { ItineraryDay } from "@/data/tours";

type ItineraryTimelineProps = {
  days: ItineraryDay[];
};

export function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  return (
    <ol className="relative grid gap-5">
      {days.map((day) => (
        <li key={day.day} className="grid gap-4 rounded-lg border border-forest/10 bg-paper p-5 shadow-soft sm:grid-cols-[5rem_1fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-wine font-display text-2xl text-paper">
            {day.day}
          </div>
          <div>
            <h3 className="font-display text-2xl leading-tight text-forest">Day {day.day}: {day.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone">{day.summary}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
