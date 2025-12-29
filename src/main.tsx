import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router' // 2번 단계에서 만들 파일

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter 대신 RouterProvider를 쓰고, 설정된 router 객체를 넘겨줍니다 */}
    <RouterProvider router={router} />
  </StrictMode>
)
