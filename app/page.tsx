import Hero from './components/hero/hero';
import Projects from './components/projects-by-me/projects';
import Formation from './components/formation/formation';
import WorkExperience from './components/work-experience/work-experience';

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-80">
          <Hero />
          <WorkExperience />
          <Projects />
          <Formation />
    </main>
  );
}
