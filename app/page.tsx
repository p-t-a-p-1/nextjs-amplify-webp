// import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <picture>
        <source srcSet="/logo_wolf.webp" width="97" type="image/webp" />
        <img src="/logo_wolf.png" alt="Mavs Logo" />
      </picture>
    </main>
  )
}
