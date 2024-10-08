import Image from "next/image";
import Link from "next/link";
import { Link as LinkType } from "./types";

interface LinkTreeProps {
  links: LinkType[];
}

export default function LinkTree({ links }: LinkTreeProps) {
  return (
    <div>
      <h2 className="text-3xl font-satisfy font-thin text-center mb-2">
        Jim Chen's LinkTree
      </h2>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {Object.entries(
          links.reduce((acc, link) => {
            if (!acc[link.category]) acc[link.category] = [];
            acc[link.category].push(link);
            return acc;
          }, {} as Record<string, LinkType[]>)
        ).map(([category, categoryLinks]) => (
          <div key={category}>
            <h2 className="text-2xl font-norma mb-2 text-center">
              {category}
            </h2>
            {categoryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="flex items-center p-4 rounded transition duration-300
                hover:bg-gray-400 hover:shadow-lg hover:scale-110 min-w-[180px]
                group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/icons/${link.icon}`}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="mr-3"
                />
                <span className="transition duration-300 font-normal group-hover:font-bold group-hover:underline text-xl font-dekko">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
