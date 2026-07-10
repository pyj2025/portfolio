import React from "react";
import AppWindow from "../../../components/AppWindow";
import Todo from "../../../components/todo/Todo";

const TodoWindow: React.FC = () => (
  <AppWindow
    id="Todo"
    defaultSize={{ width: 320, height: 420 }}
    defaultPosition={({ width }) => ({ x: Math.max(width - 320 - 40, 20), y: 120 })}
    minWidth={280}
    minHeight={320}
  >
    <Todo />
  </AppWindow>
);

export default TodoWindow;
