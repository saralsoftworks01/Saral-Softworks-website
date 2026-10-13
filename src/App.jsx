import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import MyBaariPage from './pages/MyBaariPage.jsx'
import LegalPage, { LegalIndex, NotFound } from './pages/LegalPage.jsx'
import { companyPrivacy, companyTerms, mybaariPrivacy, mybaariTerms, mybaariRefunds } from './legal/docs.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybaari" element={<MyBaariPage />} />
          <Route path="mybaari/privacy" element={<LegalPage doc={mybaariPrivacy} />} />
          <Route path="mybaari/terms" element={<LegalPage doc={mybaariTerms} />} />
          <Route path="mybaari/refunds" element={<LegalPage doc={mybaariRefunds} />} />
          <Route path="privacy" element={<LegalPage doc={companyPrivacy} />} />
          <Route path="terms" element={<LegalPage doc={companyTerms} />} />
          <Route path="legal" element={<LegalIndex />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
