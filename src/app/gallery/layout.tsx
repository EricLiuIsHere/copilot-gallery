'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function GalleryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter((segment) => segment !== '').map((segment) => {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-5 gap-4">

        <nav className="text-gray-500 text-sm self-start col-span-1">
          <ul>
            <li className="mb-4">FE
              <ul className="ml-4">
                <li><Link href="/fe/css">CSS</Link></li>
                <li><Link href="/fe/html">HTML</Link></li>
                <li><Link href="/fe/javascript">Javascript</Link></li>
                <li><Link href="/fe/bug-fixes">Bug Fixes</Link></li>
                <li><Link href="/fe/test">Test</Link></li>
                <li><Link href="/fe/misc">MISC</Link></li>
              </ul>
            </li>
            <li className="mb-4">BE</li>
            <li className="mb-4">Test</li>
          </ul>
        </nav>
        <div className="col-span-4">
          <div className="text-gray-500 text-sm self-start">
            <Link href="/">
              <span className="hover:text-gray-700">Home</span>
            </Link>
            {pathSegments.length > 0 && (
              <>
                <span className="mx-2">{'>'}</span>
                <span className="font-medium">{pathSegments[pathSegments.length - 1]}</span>
              </>
            )}
          </div>
          {children}
        </div>
      </div>
    </main>
  )
}