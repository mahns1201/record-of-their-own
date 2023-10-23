import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import ChannelCreate from "./pages/channel/channel-create";
import ChannelDetail from "./pages/channel/channel-detail";
import RecordCreate from "./pages/record/record-create";

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
  {
    path: "/channel/:channelName/record/create",
    element: <RecordCreate />,
  },
]);

export default router;
