
import React, { useState, FC } from 'react';
import Button from './Button';
import { parseBulkQuotes } from '../services/geminiService';
import { Quote } from '../types';

interface BulkImportProps {
  onImport: (quotes: Partial<Quote>[]) => void;
  onCancel: () => void;
}

const BulkImport: FC<BulkImportProps> = ({ onImport, onCancel }) => {
  const [rawText, setRawText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProcess = async () => {
    if (!rawText.trim()) return;
    setIsProcessing(true);
    try {
      const parsed = await parseBulkQuotes(rawText);
      onImport(parsed);
    } catch (err) {
      console.error(err);
      alert("Intelligence Recovery Failed. Connection unstable.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-black border-4 border-white p-6 md:p-12 space-y-8 animate-in fade-in zoom-in-95 duration-300 max-w-5xl w-full">
      <div className="border-b-4 border-zinc-900 pb-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase leading-none text-pop">Intelligence Recovery</h2>
          <p className="mono text-[11px] text-zinc-500 mt-2 uppercase tracking-widest">Bulk Ingestion Protocol</p>
        </div>
        <div className="bg-red-900/20 text-red-500 px-4 py-2 mono text-[11px] font-black border-2 border-red-900/50 uppercase">Secured Channel</div>
      </div>

      <div className="space-y-6">
        <label className="block mono text-[11px] font-black text-white tracking-widest uppercase">Raw Intelligence Dump</label>
        <p className="text-zinc-500 text-xs font-black uppercase mb-2">Paste lists, book excerpts, or raw notes. AI will extract quotes, authors, and classification tags automatically.</p>
        <textarea
          disabled={isProcessing}
          value={rawText}
          onChange={(e) => setRawText(e.target.value)}
          placeholder="PASTE RAW DATA HERE..."
          className="w-full bg-[#050505] border-2 border-zinc-800 p-6 focus:border-white outline-none min-h-[300px] md:min-h-[400px] text-lg md:text-2xl font-black transition-colors placeholder:text-zinc-900 resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-4 border-zinc-900">
        <Button 
          onClick={handleProcess} 
          disabled={isProcessing || !rawText.trim()}
          className="flex-1 text-xl py-6 bg-white text-black border-white hover:bg-black hover:text-white"
        >
          {isProcessing ? 'DECRYPTING RAW DATA...' : 'PROCESS INTELLIGENCE'}
        </Button>
        <Button 
          variant="secondary" 
          onClick={onCancel} 
          disabled={isProcessing}
          className="flex-1 text-xl py-6 border-zinc-800 text-zinc-500 hover:border-white hover:text-white"
        >
          ABORT
        </Button>
      </div>
      
      {isProcessing && (
        <div className="flex items-center justify-center gap-4 text-white mono text-xs animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span>NEURAL SCAN IN PROGRESS... DO NOT CLOSE ARCHIVE</span>
        </div>
      )}
    </div>
  );
};

export default BulkImport;
