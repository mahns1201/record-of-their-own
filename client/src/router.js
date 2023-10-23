import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import ChannelCreate from "./pages/home/channel-create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/channel/create",
    element: <ChannelCreate />,
  },
]);

export default router;
