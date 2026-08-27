import Logo from '@/components/logo'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center pt-24 px-3'>
      <h1 className='text-2xl font-bold mb-7 lg:text-3xl'>Find all events around you</h1>
      <p className='text-3xl lg:text-5xl font-bold tracking-tight'>Browse more than 10,000 events around you</p>

      <p>
        Browse more than <span className='font-bold text-primary'> 100 events </span> around you
      </p>

      <form className='w-full sw:w-[580px]'>
        <input className = "w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10" type="text" placeholder='search events in any city...'  spellCheck={false}/>

        <section className='mt-4 flex items-center justify-between text-xs text-white/50'>
          <p>Popular: </p>
          <div className='space-x-2 font-semibold'>
            
            <Link href="events/Lahore">Lahore</Link>
            <Link href="events/Karachi">Karachi</Link>
          </div>
        </section>
      </form>
    </main>
    
  )
}
