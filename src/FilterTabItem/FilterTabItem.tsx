import React, { FC } from 'react';
import { TodoFilter } from '../models/todoFilter';
import './component.css';

interface FilterTabItemProps {
  id: TodoFilter;
  onClick: (id: TodoFilter) => void;
  label: string;
  isActive: boolean;
}

const FilterTabItem: FC<FilterTabItemProps> = ({ id, onClick, label, isActive }) => {
  return (
    <button
      className={`filter_buttons ${isActive && 'active_tab'}`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  );
};

export default FilterTabItem;

