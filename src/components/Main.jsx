import { Home, About } from './pages';

function Main() {
  return (
    <>
      <main id='main' className="w-full max-w-full max-h-[calc(100vh-56px)] p-2 [&>*]:pt-16">
        <Home />
        <About />
      </main>
    </>
  )
}

export default Main