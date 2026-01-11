
import React, { useState, useEffect, useMemo, FC } from 'react';
import { Quote, Theme } from './types';
import { SEED_QUOTES, ICONS } from './constants';
import QuoteCard from './components/QuoteCard';
import QuoteForm from './components/QuoteForm';
import BulkImport from './components/BulkImport';
import Button from './components/Button';

const LOCAL_STORAGE_KEY = 'iron_words_grit_archive_v4';

const App: FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isBulkAdding, setIsBulkAdding] = useState(false);
  const [lastSave, setLastSave] = useState<number>(Date.now());
  const [isLoaded, setIsLoaded] = useState(false);

  // Initial Load from the "Database"
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setQuotes(parsed);
        } else {
          setQuotes(SEED_QUOTES);
        }
      } else {
        setQuotes(SEED_QUOTES);
      }
    } catch (e) {
      console.error("Critical database read error:", e);
      setQuotes(SEED_QUOTES);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync to the "Database" on every change
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quotes));
      setLastSave(Date.now());
    } catch (e) {
      console.error("Critical database write error:", e);
    }
  }, [quotes, isLoaded]);

  const filteredQuotes = useMemo(() => {
    return quotes.filter(q => {
      const matchesSearch = 
        q.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || q.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    }).sort((a, b) => b.createdAt - a.createdAt);
  }, [quotes, searchQuery, selectedTag]);

  const handleAddQuote = (text: string, author: string, source: string, tags: string[]) => {
    const newQuote: Quote = {
      id: crypto.randomUUID(),
      text,
      author,
      source,
      tags,
      createdAt: Date.now()
    };
    setQuotes(prev => [newQuote, ...prev]);
    setIsAdding(false);
  };

  const handleBulkImport = (newQuotes: Partial<Quote>[]) => {
    const processed = newQuotes.map(q => ({
      id: crypto.randomUUID(),
      text: q.text || "Untitled Fragment",
      author: q.author || "Unknown",
      source: q.source || "",
      tags: q.tags || [Theme.GRIT],
      createdAt: Date.now()
    })) as Quote[];

    setQuotes(prev => [...processed, ...prev]);
    setIsBulkAdding(false);
  };

  const handleDeleteQuote = (id: string) => {
    if (confirm('Permanently expunge this entry from THE GRIT ARCHIVE?')) {
      setQuotes(prev => prev.filter(q => q.id !== id));
    }
  };

  const handleClearArchive = () => {
    if (confirm('DANGER: This will PERMANENTLY WIPE your entire quote armory. Proceed?')) {
      if (confirm('FINAL WARNING: All forged entries will be lost forever.')) {
        setQuotes([]);
      }
    }
  };

  const handleExportArchive = () => {
    const dataStr = JSON.stringify(quotes, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `iron-words-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white pb-32 selection:bg-white selection:text-black font-black">
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b-[12px] border-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 md:h-32 flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <div className="text-white hover:scale-110 transition-transform cursor-pointer drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              <ICONS.Logo />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-black italic tracking-tighter leading-none oswald text-pop">
                IRON<span className="text-zinc-600">WORDS</span>
              </h1>
              <div className="flex items-center gap-2 mt-1 hidden sm:flex">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                <span className="mono text-[9px] uppercase text-zinc-400 tracking-[0.2em] font-black">Database: Secured (Local)</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex items-center gap-6">
              <div className="text-right">
                <span className="mono text-[11px] text-zinc-600 uppercase tracking-widest block font-black">Last Write</span>
                <span className="mono text-[11px] text-white uppercase font-black">{new Date(lastSave).toLocaleTimeString()}</span>
              </div>
              <div className="h-10 w-[2px] bg-zinc-900"></div>
              <div className="text-right">
                <span className="mono text-[11px] text-zinc-600 uppercase tracking-widest block font-black">Active Entries</span>
                <span className="mono text-lg text-white uppercase font-black">{quotes.length}</span>
              </div>
              <button 
                onClick={() => setIsBulkAdding(true)}
                className="p-3 text-zinc-600 hover:text-white border-4 border-zinc-900 hover:border-white transition-all"
                title="Bulk Import Intelligence"
              >
                <ICONS.Bulk />
              </button>
            </div>
            <Button 
              size="lg" 
              onClick={() => setIsAdding(true)}
              icon={<ICONS.Plus />}
            >
              <span className="hidden xs:inline">Secure Entry</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:py-28">
        <section className="mb-20 md:mb-32">
          <div className="relative group max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-white transition-colors scale-75 md:scale-90">
              <ICONS.Search />
            </div>
            <input 
              type="text"
              placeholder="SEARCH THE ARMORY..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#050505] border-b-[2px] border-zinc-900 p-2 md:p-3 pl-10 md:pl-14 text-base md:text-xl focus:border-white outline-none transition-all placeholder:text-zinc-950 oswald font-black uppercase italic"
            />
          </div>
          
          <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <span className="mono text-[11px] text-zinc-700 mr-2 uppercase tracking-[0.4em] font-black">Tactical Filters:</span>
            <button 
              onClick={() => setSelectedTag(null)}
              className={`mono text-[10px] md:text-xs px-3 py-1.5 md:px-5 md:py-2.5 border-2 transition-all tracking-[0.1em] font-black ${
                !selectedTag ? 'bg-white text-black border-white' : 'text-zinc-700 border-zinc-900 hover:border-white hover:text-white'
              }`}
            >
              FULL ARCHIVE
            </button>
            {Object.values(Theme).slice(0, 10).map(tag => (
              <button 
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`mono text-[10px] md:text-xs px-3 py-1.5 md:px-5 md:py-2.5 border-2 transition-all uppercase tracking-[0.1em] font-black ${
                  selectedTag === tag ? 'bg-white text-black border-white' : 'text-zinc-700 border-zinc-900 hover:border-white hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {(isAdding || isBulkAdding) && (
          <div className="fixed inset-0 z-[60] bg-black/99 backdrop-blur-3xl flex items-start md:items-center justify-center p-4 md:p-16 overflow-y-auto">
            <div className="w-full max-w-6xl my-auto flex justify-center">
              {isAdding ? (
                <QuoteForm onAdd={handleAddQuote} onCancel={() => setIsAdding(false)} />
              ) : (
                <BulkImport onImport={handleBulkImport} onCancel={() => setIsBulkAdding(false)} />
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-24 md:mb-32">
          <h2 className="text-xl md:text-5xl font-black tracking-[1em] md:tracking-[1.5em] text-zinc-900 uppercase oswald text-center md:text-left">THE GRIT ARCHIVE</h2>
          <div className="hidden md:block h-3 flex-1 bg-zinc-950 ml-20"></div>
        </div>
        
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {filteredQuotes.map(quote => (
            <QuoteCard key={quote.id} quote={quote} onDelete={handleDeleteQuote} />
          ))}
          
          {filteredQuotes.length === 0 && (
            <div className="col-span-full py-64 md:py-96 bg-[#020202] text-center border-[14px] border-zinc-950 sharp-border shadow-inner">
              <p className="oswald text-4xl md:text-9xl uppercase tracking-[0.8em] font-black mb-10 md:mb-16 opacity-5 italic">Archive Empty</p>
              <p className="mono text-sm md:text-xl uppercase tracking-[1em] opacity-10 font-black px-16 italic">INPUT NEW DATA ENTRIES.</p>
            </div>
          )}
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-10 py-32 md:py-56 border-t-[14px] border-white flex flex-col md:flex-row justify-between items-center gap-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
           <div className="flex items-center gap-12">
             <div className="text-white scale-150 opacity-50">
              <ICONS.Logo />
             </div>
             <div className="text-base mono uppercase tracking-[1.2em] text-zinc-700 font-black">
              IRON WORDS // DATA SECURED
             </div>
           </div>
           <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={handleExportArchive}
              className="flex items-center gap-6 mono text-xs uppercase font-black text-zinc-600 hover:text-white border-[6px] border-zinc-950 hover:border-white px-12 py-5 transition-all tracking-[0.6em]"
            >
              <ICONS.Download />
              EXTRACT ARCHIVE
            </button>
            <button 
              onClick={handleClearArchive}
              className="flex items-center gap-6 mono text-xs uppercase font-black text-zinc-900 hover:text-red-600 border-[6px] border-zinc-950 hover:border-red-900 px-12 py-5 transition-all tracking-[0.6em]"
            >
              WIPE ARMORY
            </button>
           </div>
        </div>
        <div className="text-base md:text-xl mono uppercase text-zinc-900 font-black tracking-[1.5em]">&copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};

export default App;
