// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <p>WebP</p>
      <picture>
        <source srcSet="/logo_wolf.webp" width="97" type="image/webp" />
        <img src="/logo_wolf.png" alt="Mavs Logo" />
      </picture>

      <p>AVIF</p>
      <picture>
        <source srcSet="/logo_wolf.avif" width="97" type="image/avif" />
        <img src="/logo_wolf.png" alt="Mavs Logo" />
      </picture>
    </main>
  )
}
