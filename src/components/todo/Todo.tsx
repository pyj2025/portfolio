import React from "react";
import { TODOS } from "./todos";

const Todo: React.FC = () => {
  return (
    <div className="w-full h-full bg-[var(--wc-bg)] text-[color:var(--wc-text)] overflow-y-auto px-5 py-4">
      <div className="flex items-baseline justify-between mb-2">
        <h1 className="text-2xl font-bold text-[#007aff]">TODO</h1>
        <span className="text-2xl font-bold text-[color:var(--wc-muted)]">
          {TODOS.length}
        </span>
      </div>

      <div className="flex flex-col divide-y divide-[color:var(--win-border)]">
        {TODOS.map(todo => (
          <div key={todo.id} className="flex items-start gap-3 py-3">
            <span className="w-5 h-5 rounded-full border-2 border-gray-400 shrink-0 mt-0.5" />
            <span className="text-[15px] leading-snug break-words">{todo.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
