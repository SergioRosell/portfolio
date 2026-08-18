import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-row gap-30 items-center">
      <div className="flex flex-col items-center max-w-100">
        <h1>Hey, I'm Sergio</h1>
        <h2 className="text-center">COMPUTER ENGINEER AND FRONTEND DEVELOPER</h2>
        <p className="text-center">Passionate about designing and developing efficient, scalable, and high-quality software solutions.</p>
        <p>Based in Madrid, Spain</p>
      </div>
      <Image src="/Kingdom-Hearts-Anime-TV-series.webp" 
        alt="me" 
        width={400}
        height={400}
        className="flex-none rounded-full w-100 h-100 object-cover"
      />

    </section>
  )}