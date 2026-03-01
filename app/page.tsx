"use client";

import { useState, useMemo } from "react";
import { projects } from "@/lib/projects";
import type { Project, ProjectCategory } from "@/lib/types";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { CategoryTabs } from "@/components/CategoryTabs";

const YOUR_NAME = "Shyhrete Buzaku";
// Intro line — edit to match your focus. Examples:
// "I build web and mobile products. Here's a selection of my recent work."
// "I design and build experiences for the web and for mobile. Below are some projects I've shipped."

export default function Home() {
  const [category, setCategory] = useState<ProjectCategory>("websites");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === category),
    [category]
  );

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <p className="text-grey-text text-sm uppercase tracking-wider mb-2">
          Portfolio
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-accent">{YOUR_NAME}</span>
        </h1>
        <p className="text-grey-text text-base md:text-lg max-w-2xl">
          I build modern WEB apps and cross-platform mobile apps.
        </p>
        <p className="text-grey-text text-base md:text-lg max-w-2xl mb-10">
           Here's a selection of my recent work.
        </p>

        <CategoryTabs active={category} onChange={setCategory} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={setModalProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-grey-text mt-8">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </main>
  );
}
