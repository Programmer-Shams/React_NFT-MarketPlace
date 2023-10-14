import Hero from "./Sections/Hero"
import Nav from "./Sections/Nav"
import Futurednfts from "./Sections/Futurednfts"
import Creator from "./Sections/Creator"
import Explore from "./Sections/Explore"
import Community from "./Sections/Community"
import Footer from "./Sections/Footer"


export default function App() {
  return (
    <div>
      <nav className="py-10 px-20 pb-0">
        <Nav />
      </nav>
      <section className="py-10 px-20">
        <Hero />
      </section>
      <section className="py-10 px-20">
        <Futurednfts />
      </section>
      <section className="py-10 px-20">
        <Creator />
      </section>
      <section className="py-10 px-20">
        <Explore />
      </section>
      <section className="py-10 px-20">
        <Community />
      </section>
      <section className="pt-10">
        <Footer />
      </section>
    </div>
  )
}