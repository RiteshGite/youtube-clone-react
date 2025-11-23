import { useMemo, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import getNthPrime from "../utils/helper";

const Demo = () => {
  const [dark, setDark] = useState(false);
  const [text, setText] = useState(0);
  const dispatch = useDispatch();

  dispatch(closeMenu());

  const prime = useMemo(() => getNthPrime(text), [text]);

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <div
      className={`m-auto m-20 border border-black w-96 h-96 p-4 
        ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
        onClick={() => setDark(!dark)}
      >
        Toggle Dark Mode
      </button>

      <div className="m-2 p-2">
        <input
          type="number"
          value={text}
          onChange={handleChange}   
          className="border border-black w-80 px-2 bg-white text-black"
        />
      </div>

      <h1 className="font-bold m-10 text-xl">
        Nth Prime: {prime}
      </h1>
    </div>
  );
};

export default Demo;
