"use client";

import React, {
  useEffect,
  useRef,
  useState,
  ChangeEvent,
  useMemo,
} from "react";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchProductInput: React.FC = () => {
  const [productName, setProductName] = useState("");
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isSearchable = useMemo(() => {
    return pathname === "/" || pathname.includes("/category/");
  }, [pathname]);

  useEffect(() => {
    if (!isSearchable) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (productName) {
        params.set("productname", productName);
      } else {
        params.delete("productname");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 250);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [productName, searchParams, replace, isSearchable]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  return (
    <div
      className="relative w-full"
      style={{ display: !isSearchable ? "none" : "" }}
    >
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        value={productName}
        onChange={handleChange}
        type="search"
        placeholder="Search product"
        className="focus:outline-none w-full rounded-lg bg-background pl-10 pr-4 py-2.5 text-sm"
      />
    </div>
  );
};

export default SearchProductInput;
