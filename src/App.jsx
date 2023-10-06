import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import Futurednfts from "./Sections/futurednfts";


export default function App() {
  return (
    <div>
      <nav className="py-10 px-14 pb-0">
        <Nav />
      </nav>
      <section className="py-10 px-14">
        <Hero />
      </section>
      <section className="py-10 px-14">
        <Futurednfts />
      </section>
    </div>
  )
}