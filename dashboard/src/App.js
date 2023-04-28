import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { Employees, Kanban, Editor, Calender, ColorPicker, Line, Bar, Pie, ColorMapping, Area} from './pages';
import './App.css';

const App = () => {
    const activeMenu = true;
  return (
    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style ={{ zIndex : '1000'}}>
                    <TooltipComponent content="Settings" position="Top" >
                        <button type="button" 
                        className="text-3xl p-3 
                        hover:drop-shadow-xl 
                        hover:light-bg-gray text-white" 
                        style={{background: 'blue', borderRadius: '50%'}}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                    {activeMenu ?(
                        <div className="w-72 fixed sidebar
                        dark:bg-secondary-dark-bg
                        bg-white">
                            Sidebar
                        </div>
                    ) : (
                        <div className="w-0
                        dark:bg-secondary-dark-bg">
                           Sidebar
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md:static
                        bg-main-bg dark:bg-main-dark-bg
                        navbar w-full">
                            Navbar
                        </div>
                    </div>
                    <div>
                        {/* Dashboard */}
                        <Routes>
                            <Route path="/" element="Home"/>
                            <Route path="/Home" element="Home"/>
                        

                            {/* Pages */}
                            <Route path="/salary" element="Salary"/>
                            <Route path="/employees" element="Employee"/>

                            {/* Apps */}
                            <Route path="/kanban" element="Kanban"/>
                            <Route path="/editor" element="Editor"/>
                            <Route path="/calender" element="Calender"/>
                            <Route path="/color-picker" element="ColorPicker"/>

                            {/* Charts */}
                            <Route path="/line" element="Line"/>
                            <Route path="/bar" element="Bar"/>
                            <Route path="/pie" element="Pie"/>


                            {/* Tables */}
                            <Route path="/basic-table" element="BasicTable"/>
                        </Routes>

                    </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App