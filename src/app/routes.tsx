import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "../pages/home/Home";
import Projects from "../pages/projects/Projects";
import Veyra from "../pages/projects/Veyra";
import TaskTracker from "../pages/projects/TaskTracker";
import Resume from "../pages/resume/Resume";
import About from "../pages/about/About";
import Lab from "../pages/lab/Lab";
import DebouncePlayground from "../features/lab/experiments/DebouncePlayground";
import RenderPlayground from "../features/lab/experiments/RenderPlayground";
import StatePlayground from "../features/lab/experiments/StatePlayground";
import RequestCancellation from "../features/lab/experiments/RequestCancellation";
import InfiniteScroll from "../features/lab/experiments/InfiniteScroll";
import PortfolioCaseStudy from "../pages/projects/PortfolioCaseStudy";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/veyra",
        element: <Veyra />,
      },
      {
        path: "/projects/task-tracker",
        element: <TaskTracker />,
      },
      {
        path: "/lab",
        element: <Lab />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/lab/debounce",
        element: <DebouncePlayground />,
      },
      {
        path: "/lab/render",
        element: <RenderPlayground />,
      },
      {
        path: "/lab/state",
        element: <StatePlayground />
      },
      {
        path: "/lab/request-cancellation",
        element: <RequestCancellation />,
      },
      {
        path: "/lab/infinite-scroll",
        element: <InfiniteScroll />,
      },
      {
        path: "/projects/portfolio",
        element: <PortfolioCaseStudy />,
      }
    ],
  },
]);