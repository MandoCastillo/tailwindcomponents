// import { Sidebar } from './components/Sidebar';
import { Content } from './dashboard/Content';
import { Date } from './dashboard/Date';
import { Header } from './dashboard/Header';
import { HelloMessage } from './dashboard/HelloMessage';
import { Menu } from './dashboard/Menu';
import { RecentInfo } from './dashboard/RecentInfo';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    // <div classNameName="h-screen">
    //   <Sidebar />
    // </div><Provider store={store}>

    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <Router>
        <div className="flex items-start justify-between">
          <Menu />
          <div
            className="flex flex-col w-full md:space-y-4"
            // onClick={hideMenuOnclick}
          >
            <Header />
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
              <HelloMessage />
              <RecentInfo />
              <Date />
              <Content />
            </div>
          </div>
        </div>
      </Router>
    </main>
  );
}

export default App;
