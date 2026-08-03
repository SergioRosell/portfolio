import Hero from './components/hero/hero';
import Projects from './components/projects-by-me/projects';
import Formation from './components/formation/formation';
import WorkExperience from './components/work-experience/work-experience';
import AboutMe from './components/about-me/about-me';
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col">
          <Hero />
          <AboutMe />
          <Projects />
          <Formation />
          <WorkExperience />
        </div>

      </main>
    </div>
  );
}
