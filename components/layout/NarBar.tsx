'use client'

import { UserButton, useAuth} from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const NavBar = () => {
    {/* Variables*/}
    const router = useRouter()
    const { userId } = useAuth()
    return(
        <div className="sticky top-0 border border-b-primary/10 bg-secondary">
            <Container>
                <div className="flex items-center justify-between">
                    {/* logo and brand Name */}
                    <div className="flex items-center gap-1 cursor-pointer" onClick={()=> router.push('/')}>
                        <Image src='/logo.png' alt='logo' width='30' height='30'/>
                        <div className="font-bold text-xl">Booking Tour</div>
                    </div>
                    {/* Button login sign-in */}
                    <div className="flex gap-3 items-center">
                        <div>theme</div>
                            <UserButton afterSignOutUrl="/"/>
                            {!userId && <> 
                            <Button onClick={() => router.push('/sign-in')} variant='outline' size='sm'>Đăng ký</Button>
                            <Button onClick={() => router.push('/sign-up')} size='sm'>Đăng nhập</Button>
                            </>}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default NavBar;
