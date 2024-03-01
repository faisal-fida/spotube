import { PlayIcon } from '@heroicons/react/24/solid'

export default function Player(songName: {songName: string}) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/80 p-4">
        <div className="flex items-center gap-4">
          <div className="flex-none w-16 h-16">
            <img src="https://i.scdn.co/image/ab67616d0000b273e1d3e8b4f8b2d0a0c1c7a6b0" alt="Album cover" className="w-full h-full rounded-md object-cover" />
          </div>
          <div className="flex-1">
            <div className="font-bold">{String(songName.songName)}</div>
            <div className="text-sm text-gray-400">Artist</div>
          </div>
          <div className="flex-none">
            <button className="p-2 bg-zinc-500/20 rounded-full">
              <PlayIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  