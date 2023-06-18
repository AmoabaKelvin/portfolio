// This component is a navigation component, it will display the
// navigation in the form of vscode tabs. The tabs will be clickable
// and will take you to the respective page. The tabs will be:
// _hello, _about, _projects, _contact
// An active tab will have a yellow line above the tab name. The name
// will be yellow as well. The inactive tabs will be white with black
// They will have borders on the left and right side of the tab.
'use client';
import { usePathname, useRouter } from 'next/navigation';

interface TabProps {
  path: string;
  name: string;
}

function Tab({ path, name }: TabProps) {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div
      className={`w-full md:w-[15%] text-center border-r border-gray-600 h-full flex justify-center items-center hover:cursor-pointer transition-all duration-300 ${
        pathName === path
          ? 'border-t border-t-[#e25967] bg-gray-900'
          : 'border-t border-gray-600'
      }`}
      onClick={() => router.push(path)}
    >
      <p
        className={`${pathName === path ? 'text-[#f3c158]' : 'text-gray-500'}`}
      >
        {name}
      </p>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="flex items-center h-8 border-t border-b border-gray-600 bg-gray-950 border-b-gray-900">
      {/* Tabs */}
      <Tab path="/" name="_hello" />
      <Tab path="/projects" name="_projects" />
      <Tab path="/contact" name="_contact" />
    </div>
  );
}
