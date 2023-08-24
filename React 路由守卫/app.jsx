import { useEffect } from "react";
import { useRoutes, useNavigate, useLocation, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  // 定义路由数组
  const routers = [
    { path: "/", element: <Page1 />, auth: true },
    { path: "/page2", element: <Page2 />, children: [{ path: "/page2/ikun", element: <Ikun /> }], auth: true },
    { path: "/login", element: <Login /> },
    { path: "/404", element: <NotFound /> },
  ];

  return <BeforeEach routers={routers}></BeforeEach>;
}

// 路由守卫
function BeforeEach({ routers }) {
  const navigate = useNavigate();
  const location = useLocation();
  const router = useRoutes(routers);

  // 在路由数组中找当前页面路由对应的路由项
  const findRouter = (routers, path) => {
    for (const route of routers) {
      // 返回一级路由
      if (route.path === path) return route;
      // 返回二级路由
      if (route.children) {
        const childRoute = findRouter(route.children, path);
        if (childRoute) return childRoute;
      }
    }
    return null;
  };

  // 判断路由
  const existingRouter = (location, navigate) => {
    const { pathname } = location;
    // 在数组中查询路由项
    const findRoute = findRouter(routers, pathname);
    // 若查询失败，则跳到404页
    if (!findRoute) {
      navigate("/404");
      return;
    }
    // 若路由项中有 auth 需求，则进行验证
    if (findRoute.auth && !localStorage.getItem("token")) {
      navigate("/login");
    }
  };
  useEffect(() => {
    existingRouter(location, navigate);
  });
  return router;
}

// 以下是模拟页面
const Page1 = () => <div>Page1 page</div>;

const Page2 = () => {
  return (
    <>
      Page2 page<Outlet></Outlet>
    </>
  );
};

const Ikun = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    return navigate("/login");
  };
  return (
    <section>
      你干嘛！<button onClick={onLogout}>logout</button>
    </section>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    localStorage.setItem("token", "JKUN");
    setTimeout(() => {navigate("/");}, 1000);
  };
  return <button onClick={onLogin}>login</button>;
};

const NotFound = () => {
  return <section>NotFound page</section>;
};

export default App;
