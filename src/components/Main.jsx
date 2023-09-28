import { Home, About } from './';

function Main() {
  return (
    <>
      <main className="w-full max-h-[calc(100vh-56px)] overflow-y-auto p-2 pt-0 m-auto">
        <Home />
        <About />
      </main>
    </>
  )
}

export default Main