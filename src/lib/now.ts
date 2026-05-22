export type NowItem = {
  date: string;          // ISO date, e.g. "2026-05-21"
  display_date: string;  // "21 May" — pre-formatted, so the component doesn't format
  title: string;         // short headline shown on the collapsed card
  body: string;          // full description, revealed when the card is expanded
  category?: string;     // optional kind-of-work label, e.g. "Pipeline"
  tools?: string[];      // optional stack chips, e.g. ["Ollama", "Whisper"]
};

export type NowPayload = {
  updated: string;       // ISO date of last publish, e.g. "2026-05-22"
  cadence: string;       // human label, e.g. "refreshes every 3 days"
  how?: string;          // friendly explainer of how entries are generated
  closer?: string;       // optional small italic muted line below the list
  items: NowItem[];      // newest first
};

export function humanise(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}
