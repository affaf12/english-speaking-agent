import React from 'react';
import { MessageSquare, Target, TrendingUp, Award } from 'lucide-react';

const modes = [
  { id: 'conversation', name: 'Conversation', icon: MessageSquare },
  { id: 'interview', name: 'Interview', icon: Target },
  { id: 'presentation', name: 'Presentation', icon: TrendingUp },
  { id: 'pronunciation', name: 'Pronunciation', icon: Award }
];

export default function ModeSelector({ mode, setMode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto p-4">
      {modes.map(m => {
        const Icon = m.icon;
        return (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`p-3 rounded-lg border-2 transition-all ${
              mode === m.id
                ? 'bg-purple-600 border-purple-600 text-white shadow-lg'
                : 'bg-white border-gray-200 text-gray-700 hover:border-purple-300'
            }`}
          >
            <Icon size={20} className="mx-auto mb-1" />
            <div className="text-xs font-semibold">{m.name}</div>
          </button>
        );
      })}
    </div>
  );
}
