import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Simulator from './pages/Simulator'
import NotFound from './pages/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    {/* 👇 关键：basename 和仓库名完全一致 */}
    <BrowserRouter basename="/oier-gaokao-recovery-simulator">
      <Routes>
        {/* 首页 */}
        <Route path="/" element={<Home />} />

        {/* 子页面 */}
        <Route path="/about" element={<About />} />
        <Route path="/simulator" element={<Simulator />} />

        {/* 404 兜底 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
