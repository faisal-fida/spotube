import Song from "../components/song";

export default function Home() {
  return (
    <div className="relative flex h-screen items-stretch gap-2 p-2">
  <div className="bg-zinc mx-auto flex-1 overflow-y-auto rounded-lg">
    <div className="relative z-10 mt-4 px-6">
      <div className="flex h-16 items-center justify-center">
        <div className="relative w-96">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900" placeholder="Search" />
        </div>
      </div>

      <h2 className="text-2xl font-bold">Made for you</h2>
      <div className="mt-6 flex flex-wrap gap-4">
        
     <Song  />
        
      </div>
    </div>
  </div>
</div>

  );
}
