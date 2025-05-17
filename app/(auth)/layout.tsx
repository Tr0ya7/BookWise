import Image from "next/image"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => (
    <main className="auth-container">
        <section className="auth-form">
            <div className="auth-box">
                <div className="flex flex-row gap-3">
                    <Image width="37" height="37" src="/icons/logo.svg" alt="logo" />
                    <h1>
                        BookWise
                    </h1>
                </div>
                <div>
                    { children }
                </div>
            </div>            
        </section>
        <section className="auth-illustration">
            <Image className="size-full object-cover" width="1000" height="1000" src="/images/auth-illustration.png" alt="auth illustration" />
        </section>
    </main>
)

export default Layout