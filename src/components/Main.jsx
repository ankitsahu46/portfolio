import { Home, About } from './pages';

function Main() {
  return (
    <>
      <main id='main' className="w-full m-0 max-h-[calc(100vh-56px)] [&>*]:pt-16">
        <Home />
        <About />
      </main>
    </>
  )
}

export default Main