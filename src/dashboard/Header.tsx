import { useDispatch, useSelector } from 'react-redux';
import { MenuHamburger } from '../assets/icons/svg';
import { IconButton } from '../components/IconButton';
import { hideMenu } from '../redux/actions/uiActions';
import { RootState } from '../redux/store';
import { Chain } from './../assets/icons/svg';

export const Header = () => {
  const dispatch = useDispatch();
  const { hideMenu: hideMenuValue } = useSelector(
    (state: RootState) => state.ui,
  );

  return (
    <header className="w-full h-16 z-40 flex items-center justify-between bg-white dark:bg-gray-700">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 lg:w-full">
        <div className="relative p-1 flex items-center w-full space-x-4 justify-end">
          <div className="lg:hidden">
            <IconButton
              icon={MenuHamburger}
              onClick={() => dispatch(hideMenu(!hideMenuValue))}
            />
          </div>
          <IconButton icon={Chain} />
          <span className="w-1 h-8 rounded-lg bg-gray-200"></span>
          <button className="flex items-center text-gray-500 dark:text-white text-md">
            Charlie R
            <svg
              width="20"
              height="20"
              className="ml-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
