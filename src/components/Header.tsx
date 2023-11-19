import Link from "next/link";
import { getPages } from "../../sanity/sanity-utils";

const Header = async () => {
  const pages = await getPages();

  return (
    <header className="border-b border-gray-600">
      <div className="container mx-auto flex justify-between py-6 px-3">
        <Link
          href="/"
          className="text-2xl text-gray-900 font-bold no-underline hover:text-gray-800"
        >
          Next-Sanity-Blog
        </Link>

        <nav className="flex flex-wrap gap-5 items-center text-base justify-center">
          {pages.reverse().map((page) => (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="hover:text-gray-300 text-gray-400 no-underline hover:underline"
            >
              {page.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
