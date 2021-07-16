import { useState } from 'react';
import { ArrowLeft, Plus } from '../assets/icons/svg';
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
            className="h-10 w-10 bg-gray-400 absolute z-0 right-0 -mr-5 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer transform -rotate-45"
            id="mobile-toggler"
            onClick={sidebarHandler}
          >
            <ArrowLeft
              className={`transform ${
                showSideBar ? 'rotate-45' : 'rotate-225'
              }`}
            />
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
