'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function GalleryLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const pathName = usePathname();
  const pathSegments = pathName.split('/').filter((segment) => segment !== '').map((segment, index, array) => {
    if (index === array.length - 1 && !isNaN(Number(segment))) {
      return null;
    }
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }).filter((segment) => segment !== null);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="text-gray-500 text-sm self-start">
        <Link href="/">
          <span className="hover:text-gray-700">Home</span>
        </Link>
        {pathSegments.map((segment, index) => (
          <>
            <span className="mx-2">{'>'}</span>
            {index === pathSegments.length - 1 ? (
              <span className="font-medium">{segment}</span>
            ) : (
              <Link href={`/${pathSegments.slice(0, index + 1).join('/').toLowerCase()}`}>
                {segment}
              </Link>
            )}
          </>
        ))}
      </nav>

      {children}
    </main>
  )
}