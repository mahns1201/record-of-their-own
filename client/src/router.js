import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import ChannelCreate from "./pages/channel/channel-create";
import ChannelDetail from "./pages/channel/channel-detail";
import RecordCreate from "./pages/record/record-create";
import ParticipantCreate from "./pages/participant/participant-create";
import ChannelJoin from "./pages/channel/channel-join";

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
    path: "/channel/join/:channelId",
    element: <ChannelJoin />,
  },
  {
    path: "/channel/:channelId",
    element: <ChannelDetail />,
  },
  {
    path: "/channel/:channelId/record/create",
    element: <RecordCreate />,
  },
  {
    path: "/channel/:channelId/participant/create",
    element: <ParticipantCreate />,
  },
]);

export default router;
