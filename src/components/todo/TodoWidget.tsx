import React from "react";
import { TODOS } from "./todos";

const TodoWidget: React.FC = () => {
  return (
    <div className="w-[155px] h-[155px] rounded-[24px] bg-white text-[#1d1d1f] shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-3.5 flex flex-col select-none">
      <div className="flex items-start justify-between">
        <span className="text-[15px] font-semibold text-[#007aff]">TODO</span>
        <span className="text-lg font-bold leading-none">{TODOS.length}</span>
      </div>

      <div className="mt-2.5 flex flex-col gap-2 overflow-hidden">
        {TODOS.map(todo => (
          <div key={todo.id} className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0" />
            <span className="text-[13px] truncate">{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoWidget;
