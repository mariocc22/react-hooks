import HookUseRef from "./hooks/useRef";
import HookUseReducer from "./hooks/useReducer";
import HookUseReducerAdvanced from "./hooks/useReduceAdvanced";
import HookUseMemo from "./hooks/useMemo";
import HookUseCallBack from "./hooks/useCallback";

const App = () => {
  return (
    <div className="app">
      <HookUseRef />
      <HookUseReducer />
      <HookUseReducerAdvanced />
      <HookUseMemo />
      <HookUseCallBack />
    </div>
  );
};

export default App;
