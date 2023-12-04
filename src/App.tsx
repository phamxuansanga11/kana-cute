import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRouters, publicRouters } from "./routers";
import PrivateRouters from "./routers/privateRouters";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {publicRouters.map((route) => {
          const Component = route.component;
          return (
            <Route key={route.key} element={<Component />} path={route.path} />
          );
        })}
        <Route element={<PrivateRouters />}>
          {privateRouters.map((route) => {
            const Component = route.component;
            return (
              <Route
                key={route.key}
                element={<Component />}
                path={route.path}
              />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
