'use client';

import Link from "next/link";
import Image from 'next/image';
import Passkey from '@/app/_assets/Passkey.jpg';

const Footer = () => {
    return (
        <>
            <footer className="mt-10 border-t border-primary/20 px-6 py-8 text-primary min-w-[98%] m-auto">
                <div className="pb-2">
                    <Image src={Passkey} alt="Passkey" width={65} height={65} />
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">
                            By CodeWithMSami
                        </h2>

                        <p className="max-w-xs text-primary/70">
                            Passkey is an advanced and secure password manager app. You can secure your passwords here with advanced Hash Security System.
                        </p>
                    </div>


                    {/* Links */}
                    <div>
                        <h3 className="mb-3 font-bold">
                            Quick Links
                        </h3>

                        <ul className="flex flex-col gap-2 text-primary/70">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-primary transition">
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link href="/terms" className="hover:text-primary transition">
                                    Terms of Use
                                </Link>
                            </li>

                            <li>
                                <Link href="/cookie-policy" className="hover:text-primary transition">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Connect */}
                    <div>
                        <h3 className="mb-3 font-bold">
                            Connect
                        </h3>

                        <ul className="flex flex-col gap-2 text-primary/70">
                            <li>
                                Email: codewithmsami@gmail.com
                            </li>

                            <li>
                                <Link href={'https://github.com/CodeWithMSami'}>GitHub: CodeWithMSami</Link>
                            </li>

                            <li>
                                <Link href={'https://youtube.com/@CodeWithMSami'}>Youtube: CodeWithMSami</Link>
                            </li>
                        </ul>
                    </div>

                </div>


                {/* Bottom */}
                <div className="mt-8 border-t border-primary/20 pt-4 text-center text-sm text-primary/60">
                    © {new Date().getFullYear()} CodeWithMSami. All rights reserved.
                </div>

            </footer>
        </>
    );
}

export default Footer
