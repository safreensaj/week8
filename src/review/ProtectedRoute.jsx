import { useState } from "react"
import { Navigate,Outlet } from "react-router-dom"

function ProtectedRoute() {
    const isloggedIn=localStorage.getItem("isloggedIn")
  return isloggedIn ==="true"? <Outlet/>: <Navigate to={"/"} replace />
}

export default ProtectedRoute