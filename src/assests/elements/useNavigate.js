import React from 'react'
import { useRouter } from 'next/router'

const useNavigate = () => {
  const router = useRouter()

  const navigate = (href) => {
    router.push(href)
  };

  return { navigate }
}

export default useNavigate