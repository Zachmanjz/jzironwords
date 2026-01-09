
import React, { FC } from 'react';
import { Quote } from '../types';
import { ICONS } from '../constants';

interface QuoteCardProps {
  quote: Quote;
  onDelete: (id: string) => void;
}

const QuoteCard: FC<QuoteCardProps> = ({ quote, onDelete }) => {
  return (
    <div className="group relative bg-[#050505] border-[6px] border-zinc-950 p-10 md:p-14 flex flex-col justify-between hover:border-white hover:bg-[#0a0a0a] transition-all duration-700 sharp-border shadow-2xl">
      <div className="absolute top-0 left-0 w-3 h-0 bg-white group-hover:h-full transition-all duration-1000"></div>
      
      <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
        <button 
          onClick={() => onDelete(quote.id)}
          className="text-zinc-900 hover:text-red-600 transition-colors p-3 scale-150"
          title="Expunge Entry"
        >
          <ICONS.Trash />
        </button>
      </div>

      <div className="mb-14">
        <span className="mono text-xs text-zinc-800 block mb-10 tracking-[1em] uppercase font-black">ARMORY // {quote.id.slice(0, 8)}</span>
        <blockquote className="relative z-10 text-xl md:text-3xl font-black leading-tight text-white tracking-tighter text-pop italic">
          "{quote.text}"
        </blockquote>
      </div>

      <div className="mt-auto">
        <div className="mb-10 flex flex-col items-start gap-3">
          <p className="oswald text-2xl md:text-4xl font-black text-white tracking-widest leading-none underline decoration-[12px] decoration-zinc-950 group-hover:decoration-white transition-all underline-offset-[16px] uppercase italic">{quote.author}</p>
          {quote.source && (
            <span className="mono text-xs text-zinc-700 font-black uppercase tracking-[0.6em] mt-6 italic">FILE: {quote.source}</span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 pt-10 border-t-[6px] border-zinc-950">
          {quote.tags.map(tag => (
            <span 
              key={tag} 
              className="mono text-xs uppercase bg-white text-black px-6 py-3 font-black tracking-widest border-2 border-white hover:bg-black hover:text-white transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
