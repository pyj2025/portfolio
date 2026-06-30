import { useCallback, useState } from "react";

type HistoryState<T> = {
  stack: T[];
  pointer: number;
};

export default function useNavHistory<T>(initial: T) {
  const [state, setState] = useState<HistoryState<T>>({
    stack: [initial],
    pointer: 0,
  });

  const current = state.stack[state.pointer];

  const navigate = useCallback((next: T) => {
    setState(s => {
      if (s.stack[s.pointer] === next) return s;
      const stack = s.stack.slice(0, s.pointer + 1);
      stack.push(next);
      return { stack, pointer: stack.length - 1 };
    });
  }, []);

  const back = useCallback(() => {
    setState(s => (s.pointer > 0 ? { ...s, pointer: s.pointer - 1 } : s));
  }, []);

  const forward = useCallback(() => {
    setState(s =>
      s.pointer < s.stack.length - 1 ? { ...s, pointer: s.pointer + 1 } : s,
    );
  }, []);

  return {
    current,
    navigate,
    back,
    forward,
    canBack: state.pointer > 0,
    canForward: state.pointer < state.stack.length - 1,
  };
}
