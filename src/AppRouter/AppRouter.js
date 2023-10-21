import { publicRoutes } from "../router/index"
import { Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(el =>
                <Route
                    Component={el.component}
                    path={el.path}
                    exact={el.exact}
                    key={el.path}
                />  
            )}
        </Routes>
    );
}

export default AppRouter;