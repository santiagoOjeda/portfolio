import * as React from 'react';

export interface IMenuProps {
  onClick: (value: string) => void;
  value: string;
}

export function MenuButton(props: IMenuProps) {
  return (
    <button className=' cursor-pointer hover:scale-160 hover:font-bold transition-transform duration-300' onClick={() => props.onClick(props.value)}>{props.value}</button>
  )
}

export function Menu (props: IMenuProps) {
  return (
    <section id='menu' className='absolute flex flex-col items-center justify-center bg-black hover:bg-[#22FEEB]  hover:text-black   text-white p-4 rounded-full w-[200px] h-[200px] shadow-[0_0_15px_#22FEEB] hover:shadow-[0_0_50px_#22FEEB] hover:w-[400px] hover:h-[400px] transition-all duration-300 group'>
      <p className='text-center text-2xl max-w-50 group-hover:opacity-0 transition-opacity duration-300'>How can 
      I help you?</p> 
      <div className='absolute flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300' >
        <MenuButton value='Timeline' onClick={() => {}}/> 
        <MenuButton value='About' onClick={() => {}}/>
        <MenuButton value='Contact' onClick={() => {}}/>
      </div>
    </section>
  );
}
