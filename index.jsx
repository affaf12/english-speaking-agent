import React, { useState, useEffect, useRef } from 'react';
import ChatArea from './ChatArea';
import VoiceControls from './VoiceControls';
import StatsPanel from './StatsPanel';
import ModeSelector from './ModeSelector';
import { Volume2, VolumeX } from 'lucide-react';

export default function VoiceCommunicationAgent() {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('conversation');
  const [score, setScore] = useState({ fluency: 0, clarity: 0, pronunciation: 0, listening: 0 });
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [sessionStats, setSessionStats] = useState({ wordsSpoken: 0, conversationTime: 0, turns: 0 });

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const welcome = {
      role: 'assistant',
      content: `Hello! I'm your AI Voice Communication Coach. 🎤
      Click the microphone to start speaking and improve your speaking and listening skills!`
    };
    setMessages([welcome]);
  }, []);

  const addMessage = (role, content) => {
    setMessages(prev => [...prev, { role, content }]);
  };

  const toggleVoice = () => {
    setVoiceEnabled(!voiceEnabled);
  };

  const resetSession = () => {
    setMessages([{
      role: 'assistant',
      content: 'Session reset! Ready to start fresh. Click the microphone when you\'re ready to speak.'
    }]);
    setScore({ fluency: 0, clarity: 0, pronunciation: 0, listening: 0 });
    setSessionStats({ wordsSpoken: 0, conversationTime: 0, turns: 0 });
    startTimeRef.current = null;
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white shadow-md p-4 border-b-2 border-purple-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">AI Voice Communication Coach</h1>
          <button
            onClick={toggleVoice}
            className={`p-3 rounded-lg ${voiceEnabled ? 'bg-purple-600' : 'bg-gray-400'} text-white`}
          >
            {voiceEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>
      </div>

      {/* Mode Selector */}
      <ModeSelector mode={mode} setMode={setMode} />

      <div className="flex-1 flex max-w-6xl mx-auto w-full gap-4 p-4 overflow-hidden">
        <ChatArea
          messages={messages}
          loading={loading}
          transcript={transcript}
          messagesEndRef={messagesEndRef}
        />

        <div className="w-72 space-y-4">
          <StatsPanel score={score} sessionStats={sessionStats} mode={mode} />
        </div>
      </div>

      <VoiceControls
        isListening={isListening}
        startListening={() => {}}
        stopListening={() => {}}
        resetSession={resetSession}
      />
    </div>
  );
}
