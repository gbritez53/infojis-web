import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="max-w-7xl mx-auto p-5 h-screen">
      {children}
    </main>
  )
}
