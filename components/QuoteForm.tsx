
import React, { useState, FC, FormEvent } from 'react';
import Button from './Button';
import { Theme } from '../types';
import { suggestTags } from '../services/geminiService';
import { ICONS } from '../constants';

interface QuoteFormProps {
  onAdd: (text: string, author: string, source: string, tags: string[]) => void;
  onCancel: () => void;
}

const QuoteForm: FC<QuoteFormProps> = ({ onAdd, onCancel }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [source, setSource] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isSuggesting, setIsSuggesting] = useState(false);

  const toggleTag = (tag: string) => {
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const handleSuggest = async () => {
    if (!text) return;
    setIsSuggesting(true);
    try {
      const suggested = await suggestTags(text);
      setTags(suggested);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text || !author) return;
    onAdd(text, author, source, tags);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black border-4 border-white p-6 md:p-10 space-y-8 md:space-y-10 animate-in fade-in zoom-in-95 duration-300 max-h-screen overflow-y-auto shadow-[0_0_100px_rgba(255,255,255,0.1)]">
      <div className="flex justify-between items-center border-b-4 border-zinc-900 pb-6">
        <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-pop">Forge Entry</h2>
        <div className="hidden sm:block text-zinc-400 mono text-[11px] tracking-widest uppercase font-black">Priority: High</div>
      </div>
      
      <div className="space-y-6 md:space-y-8">
        <div>
          <label className="block mono text-[11px] font-black text-white mb-3 tracking-widest uppercase">The Raw Data (Quote)</label>
          <textarea
            required
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full bg-[#0a0a0b] border-2 border-zinc-800 p-4 md:p-6 focus:border-white outline-none min-h-[120px] md:min-h-[160px] text-lg md:text-2xl font-black transition-colors placeholder:text-zinc-800"
            placeholder="Type the hard truth here..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <label className="block mono text-[11px] font-black text-white mb-3 tracking-widest uppercase">Architect</label>
            <input
              required
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-[#0a0a0b] border-2 border-zinc-800 p-4 md:p-6 focus:border-white outline-none text-base md:text-lg font-black transition-colors placeholder:text-zinc-800"
              placeholder="Author"
            />
          </div>
          <div>
            <label className="block mono text-[11px] font-black text-white mb-3 tracking-widest uppercase">Source Material</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full bg-[#0a0a0b] border-2 border-zinc-800 p-4 md:p-6 focus:border-white outline-none text-base md:text-lg font-black transition-colors placeholder:text-zinc-800"
              placeholder="Optional: Book, Movie, Battle"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <label className="block mono text-[11px] font-black text-white tracking-widest uppercase">Tactical Classification</label>
            <button 
              type="button" 
              onClick={handleSuggest}
              disabled={isSuggesting || !text}
              className="text-[11px] mono uppercase font-black text-white hover:underline disabled:opacity-20 flex items-center gap-2 transition-all"
            >
              <ICONS.Zap /> {isSuggesting ? 'Analyzing...' : 'Auto-Classify'}
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-[150px] md:max-h-none overflow-y-auto md:overflow-visible pr-2">
            {Object.values(Theme).map(theme => (
              <button
                key={theme}
                type="button"
                onClick={() => toggleTag(theme)}
                className={`mono text-[10px] px-2 py-3 border-2 transition-all font-black text-center uppercase ${
                  tags.includes(theme) 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-400'
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-4 border-zinc-900">
        <Button type="submit" className="flex-1 text-base md:text-xl py-4 md:py-6 bg-white text-black border-white hover:bg-black hover:text-white font-black">Secure Entry</Button>
        <Button type="button" variant="secondary" onClick={onCancel} className="flex-1 text-base md:text-xl py-4 md:py-6 border-zinc-800 text-zinc-500 hover:border-white hover:text-white font-black">Abandon</Button>
      </div>
    </form>
  );
};

export default QuoteForm;
