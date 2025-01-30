import type { Metadata } from "next";
import AdminSideBar from '@/components/admin/adminSideBar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "This is admin dashboard",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<AdminLayoutProps>) {
  return (
    <div className='fix-height overflow-hidden flex items-center justify-between'>
      <div className='fix-height w-14 p-1 bg-purple-600 text-white lg:w-1/5 lg:p-5'><AdminSideBar /></div>
      <div className='fix-height overflow-y-scroll w-full lg:w-4/5'>{children}</div>
    </div>
  );
}
