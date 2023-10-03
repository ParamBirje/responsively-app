import { useContext, useEffect, useState } from 'react';
import { JSToggleContext } from 'renderer/context/JSToggleProvider';
import Toggle from 'renderer/components/Toggle';

const ToggleJS = () => {
  const javascriptContext = useContext(JSToggleContext);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    setIsOn(javascriptContext?.allowJavascript as boolean);
  }, [javascriptContext?.allowJavascript]);

  const toggleJavascript = () => {
    javascriptContext?.setAllowJavascript((prev) => !prev);
  };

  return (
    <div className="flex flex-row items-center justify-start px-4">
      <span className="w-1/2">Allow Javascript</span>
      <div className="flex items-center gap-2 border-l px-4 dark:border-slate-400">
        <Toggle isOn={isOn} onChange={toggleJavascript} />
      </div>
    </div>
  );
};

export default ToggleJS;
