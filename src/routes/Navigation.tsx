import { BrowserRouter, Navigate, NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterFormikPage,
    RegisterPage
} from "../03-forms/pages";


import logo from '../logo.svg';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
    return (
        <BrowserRouter>

            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />

                    <ul>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/register">Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-yup">Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-components">Formik Components</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-basic">Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-register">Register Formik</NavLink>
                        </li>

                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/formik-abstraction">Formik Abtractation</NavLink>
                        </li>


                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'nav-active' : ''} to="/dynamic-form">DynamicForm</NavLink>
                        </li>

                    </ul>

                </nav>


                <Routes>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="formik-components" element={<FormikComponents />} />
                    <Route path="formik-abtractation" element={<FormikAbstraction />} />
                    <Route path="formik-register" element={<RegisterFormikPage />} />
                    <Route path="dynamic-form" element={<DynamicForm />} />
                    <Route path="home" element={<h1>Home Page</h1>} />

                    <Route path="/*" element={<Navigate to="/home" replace />} />
                </Routes>




            </div>

        </BrowserRouter>
    )
}
