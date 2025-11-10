import React from 'react';
import { Award, Book } from 'lucide-react';

export default function StatsPanel({ score, sessionStats, mode }) {
  return (
    <>
      {/* Scores */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <div className="flex items-center gap-2 border-b pb-3 mb-4">
          <Award className="text-purple-600" size={24} />
          <h3 className="font-bold text-gray-800">Your Performance</h3>
        </div>

        <div className="space-y-3">
          {Object.entries(score).map(([key, value]) => (
            <div key={key}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 capitalize">{key}</span>
                <span className="text-sm font-bold text-purple-600">{value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full transition-all duration-500" style={{ width: `${value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Session Stats */}
      <div className="bg-white rounded-xl shadow-lg p-4">
        <h3 className="font-bold text-gray-800 mb-3">Session Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Words Spoken:</span>
            <span className="font-bold text-gray-800">{sessionStats.wordsSpoken}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="font-bold text-gray-800">{sessionStats.conversationTime}s</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Turns:</span>
            <span className="font-bold text-gray-800">{sessionStats.turns}</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
        <div className="flex items-start gap-2">
          <Book className="text-purple-600 flex-shrink-0 mt-1" size={16} />
          <div className="text-xs text-gray-700">
            <strong>Tip:</strong> {mode === 'conversation' && 'Speak naturally and use complete sentences.'}
            {mode === 'interview' && 'Take a pause before answering. Structure your responses clearly.'}
            {mode === 'presentation' && 'Speak slowly and clearly. Vary your tone.'}
            {mode === 'pronunciation' && 'Focus on enunciating each word clearly.'}
          </div>
        </div>
      </div>
    </>
  );
}
