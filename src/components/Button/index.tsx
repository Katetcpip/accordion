import { Product } from "components/Question"
import { useState } from 'react';

type Props = {
    item: Product;
  }

function Button (props: Props){
  const {item} = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center w-full">
        <div onClick={() => setIsActive(!isActive)} className='bg-slate-600 border-b-4 border-fuchsia-200 shadow-md w-3/5 flex p-6 flex-row justify-between text-fuchsia-50 hover:bg-slate-500 items-center'>
            <p className='cursor-pointer'>{item.que}</p>
            <button>{isActive ? '-' : '+'}</button>
        </div>
         {isActive && <div className='flex flex-row text-start bg-zinc-100 w-3/5 p-6 showAnswer'><p>{item.descr}</p></div>}
    </div>

    );
}
export default Button;
