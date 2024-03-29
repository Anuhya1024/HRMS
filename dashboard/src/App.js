import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import {Navbar, Footer, Sidebar, ThemeSettings, Login, UserProfile} from './components';
import { Employees, Kanban, Editor, Calendar, ColorPicker, Line, Bar, Pie, ColorMapping, Area, Home, Leaves} from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
import AssignProjects from './pages/AssignProjects';

const App = () => {
    const {activeMenu} = useStateContext();
    
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
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className="w-0
                        dark:bg-secondary-dark-bg">
                           <Sidebar/>
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className="fixed md:static
                        bg-main-bg dark:bg-main-dark-bg
                        navbar w-full">
                            <Navbar/>
                        </div>
                   
                    <div>
                        {/* Dashboard */}
                        <Routes>
                            <Route path="/" element={<Login/>}/>
                            <Route path="/home" element={<Home/>}/>
                        

                            {/* Pages */}
                            <Route path="/leaves" element={<Leaves/>}/>
                            <Route path="/employees" element={<Employees/>}/>
                            <Route path="/projects" element={<AssignProjects/>}/>
                            <Route path="profile" element={<UserProfile/>}/>

                            {/* Apps */}
                            <Route path="/kanban" element={<Kanban/>}/>
                            <Route path="/editor" element={<Editor/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/color-picker" element={<ColorPicker/>}/>

                            {/* Charts */}
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/pie" element={<Pie/>}/>


                            {/* Tables */}
                            
                        </Routes>
                    </div>
                    </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App