import { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  let z=useRef(0);

  console.log("rendering....");


  return (
    <div className="w-96 h-96 border border-black p-6 bg-gray-100 rounded-lg shadow flex flex-col justify-start gap-10 my-6">
      
     
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Let X = {x}</h1>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-700"
          onClick={() => {
            x = x + 1;
            console.log("x=",x);
          }}
        >
          Increase X
        </button>
      </div>

      
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">State Y = {y}</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
      </div>

      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Ref Z = {z.current}</h1>
        <button
          className="px-4 py-2 bg-orange-600 text-white rounded shadow hover:bg-orange-700"
          onClick={() => {
            z.current=z.current+1;
            console.log("z=",z.current)
          }}
        >
          Increase Z
        </button>
      </div>
      
    </div>
  );
};

export default Demo2;
