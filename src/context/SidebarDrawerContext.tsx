import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, ReactNode, useContext, useEffect } from 'react'

type SidebarDrawerData = UseDisclosureReturn

interface SidebarDrawerProviderProps {
  children: ReactNode
}

const SidebarDrawerContext = createContext({} as SidebarDrawerData)

export const SidebarDrawerProvider = ({ children }: SidebarDrawerProviderProps) => {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
