import { motion } from "framer-motion";
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
    <section id="games" className="border-t border-border py-24">
      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Interactive
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Games I Built
          </h2>
          <p className="mt-4 font-body text-sm text-muted-foreground">
            Fun, interactive browser games built with JavaScript.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {games.map((game, i) => (
            <motion.a
              key={game.title}
              href={game.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30"
              style={{ boxShadow: "var(--shadow-card)" }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-card-hover)" }}
            >
              <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                <Gamepad2 className="h-5 w-5 text-primary" />
                {game.title}
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 text-primary" />
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
