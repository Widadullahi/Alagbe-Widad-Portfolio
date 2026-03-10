import { Gamepad2, ArrowUpRight } from "lucide-react";

const games = [
  {
    title: "Medical Quiz Game",
    description: "Test your medical knowledge with this interactive quiz game designed for healthcare students.",
    url: "https://medicalquizgamee.netlify.app/",
  },
  {
    title: "Memory Match Game",
    description: "A classic memory matching card game — flip, match, and challenge your brain.",
    url: "https://memorymatchgamee.netlify.app/",
  },
  {
    title: "Pharmacy Snake Game",
    description: "A fun twist on the classic snake game with a pharmacy theme — collect pills and avoid obstacles.",
    url: "https://pharmacysnakegame.netlify.app/",
  },
];

const GamesSection = () => {
  return (
    <section id="games" className="border-t border-border py-20">
      <div className="px-6 lg:px-16">
        <h2 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-primary">
          <Gamepad2 className="h-4 w-4" />
          Games
        </h2>
        <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Interactive browser games built with vanilla JavaScript
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                <Gamepad2 className="h-5 w-5 text-primary" />
                {game.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
