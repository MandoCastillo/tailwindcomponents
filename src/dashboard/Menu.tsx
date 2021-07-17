import { Button } from '../components/Button';
import { MenuItem } from './MenuItem';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const Menu = () => {
  // const [hideMenu, setHideMenu] = useState(false);

  const { hideMenu } = useSelector((state: RootState) => state.ui);

  return (
    <div
      className={`h-screen mt-16 lg:mt-0 z-50 shadow-lg w-64 absolute lg:shadow-none lg:block lg:relative lg:w-80 transition duration-150 ease-in-out ${
        hideMenu ? 'transform -translate-x-64' : ''
      }`}
    >
      <div className="bg-white h-full dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="font-bold dark:text-white text-xl">Plannifer</p>
        </div>
        <nav className="mt-6">
          <div>
            <MenuItem link="/" text="home" />
            <MenuItem link="/page1" text="page1" />
            <MenuItem link="/page2" text="page2" />
            <Button
              text="Dark theme"
              fullWidth
              onClick={() => document.documentElement.classList.toggle('dark')}
            />
            {/* {(breakpoint === Breakpoints.sm ||
              breakpoint === Breakpoints.md ||
              breakpoint === Breakpoints.lg) && (
              <Button
                text="Hide menu"
                fullWidth
                onClick={() => setHideMenu(!hideMenu)}
              />
            )} */}
          </div>
        </nav>
      </div>
    </div>
  );
};
