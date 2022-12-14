import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import {
  RiInputMethodLine,
  RiGitMergeLine,
  RiDashboardLine,
  RiContactsLine,
} from 'react-icons/ri'

export const SidebarNav = () => {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}
