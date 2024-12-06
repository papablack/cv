import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SkillLevel } from './types';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

interface SkillTagProps {
  children: React.ReactNode;
  level?: SkillLevel;
}

export const SKILL_LEVELS: Record<SkillLevel, { gradient: string; label: string }> = {
  CREATOR: {
    gradient: 'from-rose-600 to-pink-800',
    label: 'CREATOR'
  },
  NATIVE: {
    gradient: 'from-rose-600 to-pink-800',
    label: 'NATIVE'
  },
  EXPERT: {
    gradient: 'from-purple-700 to-indigo-800',
    label: 'EXPERT'
  },
  FLUENT: {
    gradient: 'from-purple-700 to-indigo-800',
    label: 'FLUENT'
  },
  ADVANCED: {
    gradient: 'from-blue-700 to-cyan-800',
    label: 'ADVANCED'
  },
  INTERMEDIATE: {
    gradient: 'from-emerald-700 to-teal-800',
    label: 'INTERMEDIATE'
  },
  BASIC: {
    gradient: 'from-gray-700 to-zinc-800',
    label: 'BASIC'
  }
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
  <h2 className="text-2xl font-bold mb-6 flex items-center section-title">
    <Icon className="w-6 h-6 mr-2 text-gray-300" />
    <span className="bg-gradient-to-b from-white via-gray-300 to-gray-800 text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] backdrop-blur-sm">
      {title}
    </span>
  </h2>
);

export const SkillTag: React.FC<SkillTagProps> = ({ children, level = 'BASIC' }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${SKILL_LEVELS[level].gradient} text-gray-100 border border-gray-700 mr-2 mb-2`}>
    {children} {level && `• ${SKILL_LEVELS[level].label}`}
  </span>
);
