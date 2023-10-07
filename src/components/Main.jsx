import { Home, About, Skills, Projects, Contact } from './pages';

function Main() {
  return (
    <>
      <main id='main' className="w-full m-0 max-h-[calc(100vh-56px)] [&>*]:pt-16">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default Main