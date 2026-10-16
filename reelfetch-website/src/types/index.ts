import type { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  badge?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  tip: string;
  icon: LucideIcon | React.FC<{ className?: string }>;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Installation' | 'Permissions' | 'Compatibility' | 'Troubleshooting';
}
