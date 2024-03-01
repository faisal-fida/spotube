'use client';

import Player from "./player";
import data from "../data/songs.json";
import React, { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid'




export default function Song() {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
  <div className="mt-6 flex flex-wrap gap-4">
      {data.map((song) => (
        <div className="playlist-card group relative flex-col items-center gap-5 overflow-hidden rounded-md bg-zinc-500/5 p-4 shadow-lg outline-none transition-all duration-300 hover:bg-zinc-200/20 hover:shadow-xl focus:bg-zinc-200/20"
        ><div className="w-40">
          <div className="group relative mx-auto h-40 w-full flex-none shadow-lg">
            <img src={song.cover} alt={song.title} className="h-full w-full rounded-md object-cover shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]" />
            <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <button className="p-2 bg-zinc-500/20 rounded-full" onClick={() => setShowPlayer(true)}> 
              <PlayIcon className="h-6 w-6 text-white bg-black rounded-full p-1" />
            </button>
           
            </div>
          </div>
          <div className="pt-2">
            <div className="block truncate font-bold">{song.title}</div>
            <div className="text-xs text-gray-400">{song.artists.join(", ")}</div>
          </div>
        </div>
        {showPlayer && <Player songName={song.title} />}
        </div>
        
      ))}
      {/* Player componenet with song name as argument */}
      

 </div>
)};