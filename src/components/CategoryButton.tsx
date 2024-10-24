import React from 'react';
import * as icons from 'lucide-react';
import { Category } from '../types';

interface CategoryButtonProps {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryButton({ category, isSelected, onClick }: CategoryButtonProps) {
  const IconComponent = icons[category.icon as keyof typeof icons];
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
        isSelected
          ? `bg-${category.color}-100 text-${category.color}-800`
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <IconComponent className="w-4 h-4" />
      {category.name}
    </button>
  );
}