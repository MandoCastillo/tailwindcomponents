import { useState } from 'react';
import { Plus } from '../assets/icons/svg';
import { useScreen } from '../hooks/useScreen';
import { Button } from './Button';

export const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(true);
  const { width } = useScreen();
  console.log(width);

  const sidebarHandler = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="flex flex-no-wrap">
      {width > 640 ? (
        <div
          className={`w-64 absolute sm:relative bg-gray-800 hidden shadow h-screen flex-col justify-between sm:flex`}
        >
          <div className="px-8">asd</div>
        </div>
      ) : (
        <div
          className={`w-64 z-40 absolute bg-gray-800 shadow h-screen flex-col justify-between sm:hidden  transition duration-150 ease-in-out ${
            showSideBar
              ? 'transform translate-x-0'
              : 'transform -translate-x-64'
          }`}
          id="mobile-nav"
        >
          <div
            className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
            id="mobile-toggler"
            onClick={sidebarHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
          <div className="px-8"></div>
        </div>
      )}
      <div className="container mx-auto py-10 md:w-4/5 w-11/12">
        {/* {isLoading && <p>Cargando...</p>} */}
        <Button
          text="Agregar"
          // onClick={() => addItem('aaaa')}
          // icon={VscAdd}
        />
        <Button
          text="Agregar"
          // onClick={() => addItem('aaaa')}
          icon={Plus}
        />
        <Button
          text="Guardar"
          // onClick={() => addItem('aaaa')}
          disabled={true}
        />
        {/* <Button text="Quitar" type="secondary" onClick={() => removeItem()} /> */}
        <Button
          text="Dark theme"
          type="secondary"
          disabled
          fullWidth
          loading
          onClick={() => document.documentElement.classList.toggle('dark')}
        />

        {/* <button className="btn btn--primary" onClick={() => addItem('aaaa')}>
         +
       </button> */}
        {/* <button onClick={() => removeItem()}>-</button>
          {cart.map((item) => (
            <p className="text-lg font-semibold">{item.nombre}</p>
          ))} */}
      </div>
    </div>
  );
};
