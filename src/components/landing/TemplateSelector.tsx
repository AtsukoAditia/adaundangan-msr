"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";
import { templateRegistry } from "@/lib/theme/registry";

interface TemplateSelectorProps {
  templates?: Array<{
    id: string;
    name: string;
    description: string;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
    };
  }>;
}

export default function TemplateSelector({ templates }: TemplateSelectorProps) {
  // Convert registry Record to array if no templates prop provided
  const displayTemplates = templates || Object.values(templateRegistry).map(t => ({
    id: t.id,
    name: t.name,
    description: t.description,
    colors: {
      primary: t.colors.primary,
      secondary: t.colors.secondary,
      accent: t.colors.accent,
    },
  }));

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-ivory to-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-burgundy mb-4 sm:text-4xl lg:text-5xl">
              Pilih Template Favoritmu
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lima desain elegan yang bisa disesuaikan dengan gaya pernikahanmu
            </p>
          </div>
        </ScrollReveal>

        {/* Template Grid */}
        <StaggerChildren stagger={0.12} delay={0.2}>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-5">
            {displayTemplates.map((template) => (
              <StaggerItem key={template.id}>
                <motion.div
                  className="group relative flex flex-col rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Color Preview */}
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
                      <motion.div
                        className="w-12 h-12 rounded-full shadow-lg ring-4 ring-white"
                        style={{ backgroundColor: template.colors.primary }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <motion.div
                        className="w-10 h-10 rounded-full shadow-md ring-4 ring-white"
                        style={{ backgroundColor: template.colors.secondary }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                      />
                      <motion.div
                        className="w-8 h-8 rounded-full shadow-md ring-4 ring-white"
                        style={{ backgroundColor: template.colors.accent }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-burgundy mb-2">
                      {template.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                      {template.description}
                    </p>

                    {/* Preview Button */}
                    <Link
                      href={`/template/${template.id}`}
                      className="inline-flex items-center justify-center rounded-full bg-burgundy px-4 py-2.5 text-sm font-semibold text-ivory transition-all hover:bg-burgundy-600 hover:shadow-md active:scale-95"
                    >
                      Preview
                    </Link>
                  </div>

                  {/* Hover Overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-burgundy/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
