// import Home from "./pages/Home";
import React, { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import StartDisplay from "./components/StartDisplay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db } from "./data/data";


function App() {

  const [dbData , setDbData] = useState(db);

  return (
    <div className="home">
      <div className="container">
        <BrowserRouter>
          <Sidebar db={dbData} />
          <Routes>
            <Route path="/" element={<StartDisplay />} />
            <Route
              path="/:id"
              element={<Chat db={dbData} setDbData={setDbData} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
// function App() {

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Sidebar />,
//       children: [
//         { index: true, element: <StartDisplay /> },
//         {
//           path: ":id",element: <Chat />           
//         },
//       ],
//     },
//   ]);
//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   );
// }


export default App;


