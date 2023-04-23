import HookUseRef from "./hooks/useRef";
import HookUseReducer from "./hooks/useReducer";
import HookUseReducerAdvanced from "./hooks/useReduceAdvanced";
import HookUseMemo from "./hooks/useMemo";
import HookUseCallBack from "./hooks/useCallback";
import HookUseContext from "./hooks/useContext";
import FirstCustomHook from "./hooks/firstCustomHook/firstCustomHook";

const App = () => {
  return (
    <div className="app">
      {/* Normal Hooks */}
      <HookUseRef />
      <HookUseReducer />
      <HookUseReducerAdvanced />
      <HookUseMemo />
      <HookUseCallBack />
      <HookUseContext />
      {/* Custom Hooks */}
      <FirstCustomHook />
    </div>
  );
};

export default App;
