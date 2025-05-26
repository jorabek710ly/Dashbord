import './App.css'
// Route
import { Routes, Route, } from 'react-router-dom'
// Layout 
import Layout from './pages/layout/Layout'
// Pages
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Posts from './pages/posts/Posts'
import Users from './pages/users/Users'
import SignIn from './pages/signin/SignIn'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import PostsDetail from './pages/posts-detail/PostsDetail'
import UserDetail from './pages/user-detail/UserDetail'
import Dashboard from './pages/dashboard/Dashboard'
import Student from './pages/dashboard/student/Student'
import Profile from './pages/dashboard/profile/Profile'
import Group from './pages/dashboard/Group/Group'

import Settings from './pages/dashboard/settings/Settings'
import Notification from './pages/dashboard/notification/Notification'
import Help from './pages/dashboard/help/Help'

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/post/:id' element={<PostsDetail />} />
          <Route path='/user/:id' element={<UserDetail />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<Group/>}/>
            <Route path='Student' element={<Student/>}/>
            <Route path='Profile' element={<Profile/>}/>
            <Route path='Settings' element={<Settings/>}/>
            <Route path='Notification' element={<Notification/>}/>
            <Route path='Help' element={<Help/>}/>
          </Route>
        </Route>
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
    </>
  )
}

export default App