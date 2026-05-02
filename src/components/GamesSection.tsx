import { motion } from "framer-motion";
import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { games } from "@/data/portfolio";

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
            Interactive builds
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold text-foreground md:text-5xl">
            Games I built for the web
          </h2>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            Smaller projects where I explored engagement, browser interaction, and playful learning experiences.
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
                <ArrowUpRight className="h-4 w-4 text-primary opacity-0 transition-all group-hover:opacity-100" />
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
