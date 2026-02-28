"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = project.images.length > 0 ? project.images : ["/placeholder-project.svg"];

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    },
    [images.length]
  );

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    },
    [images.length]
  );

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpenModal(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      className="rounded-xl bg-charcoal-card overflow-hidden border border-white/5 hover:border-white/10 transition-colors cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-charcoal"
    >
      <div className="relative aspect-[4/3] bg-charcoal overflow-hidden group">
        <Image
          src={images[currentIndex]}
          alt={`${project.title} screenshot ${currentIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={images[currentIndex].startsWith("http")}
        />
        {/* Center icon: view/expand — indicates card opens modal on click */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-50 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200"
          aria-hidden
        >
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/60 text-white border border-white/20 shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </span>
        </div>
        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="carousel-arrow left-2 opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="carousel-arrow right-2 opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-accent" : "bg-white/50"
                }`}
                aria-hidden
              />
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-grey-text text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs text-grey-text bg-white/10 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Visit Website
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}
