import React from 'react';
import { Mic, MicOff, RotateCcw, Volume2 } from 'lucide-react';

export default function VoiceControls({ isListening, startListening, stopListening, resetSession }) {
  return (
    <div className="border-t p-6 bg-gradient-to-r from-purple-50 to-pink-50 flex justify-center gap-4">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`w-20 h-20 rounded-full flex items-center justify-center bg-purple-600 text-white`}
      >
        {isListening ? <MicOff size={36} /> : <Mic size={36} />}
      </button>

      <button
        onClick={resetSession}
        className="p-4 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  );
}
