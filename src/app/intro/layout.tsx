'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function IntroLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter((segment) => segment !== '').map((segment) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  });
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <nav className="text-gray-500 text-sm self-start">
        <Link href="/">
          <span className="hover:text-gray-700">Home</span>
        </Link>
        {pathSegments.length > 0 && (
          <>
            <span className="mx-2">{'>'}</span>
            <span className="font-medium">{pathSegments[pathSegments.length - 1]}</span>
          </>
        )}
      </nav>

      {children}
    </main>
  )
}