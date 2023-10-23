import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import ChannelCreate from "./pages/channel/channel-create";
import ChannelDetail from "./pages/channel/channel-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  // channel
  {
    path: "/channel/create",
    element: <ChannelCreate />,
  },
  {
    path: "/channel/:channelName",
    element: <ChannelDetail />,
  },
]);

export default router;
