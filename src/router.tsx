import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import EntryDetail from './pages/EntryDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 페이지를 찾을 수 없습니다! 😅</div>, // 에러 발생 시 보여줄 컴포넌트
    children: [
      {
        index: true, // "/" 경로일 때 기본으로 보여줄 페이지
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'entry/:id',
        element: <EntryDetail />,
      },
    ],
  },
])
