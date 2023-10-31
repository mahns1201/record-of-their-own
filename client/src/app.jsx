import React from "react";
import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelCreate from "./pages/channel/channel-create";
import ChannelJoin from "./pages/channel/channel-join";
import ChannelDetail from "./pages/channel/channel-detail";
import RecordCreate from "./pages/record/record-create";
import ParticipantCreate from "./pages/participant/participant-create";
import ParticipantDetail from "./pages/participant/participant-detail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/create" element={<ChannelCreate />} />
        <Route path="/channel/join/:channelId" element={<ChannelJoin />} />
        <Route path="/channel/:channelId/record/create" element={<RecordCreate />} />
        <Route path="/channel/:channelId/participant/:participantId" element={<ParticipantDetail />} />
        <Route path="/channel/:channelId/participant/create" element={<ParticipantCreate />} />
        <Route path="/channel/:channelId" element={<ChannelDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
