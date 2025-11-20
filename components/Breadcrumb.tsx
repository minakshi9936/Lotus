'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // Define page mappings
  const pageMappings: Record<string, string> = {
    '/': 'Home',
    '/room': 'Rooms',
    '/service': 'Services',
    '/about': 'About Us',
    '/gallery': 'Gallery',
    '/contact': 'Contact',
  };

  // Generate breadcrumb items
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    let currentPath = '';
    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      const label = pageMappings[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbs.push({ label, href: currentPath });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-slate-50 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-slate-600">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center">
              {index === 0 ? (
                <Link
                  href={crumb.href}
                  className="flex items-center hover:text-green-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-slate-900 font-medium">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="hover:text-green-600 transition-colors"
                >
                  {crumb.label}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight size={16} className="mx-2 text-slate-400" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}