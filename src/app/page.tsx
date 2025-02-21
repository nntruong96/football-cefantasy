import { Button } from "@headlessui/react";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 p-2">
      <h2 className="font-semibold text-4xl text-center">
        Next + Tailwind + HeadlessUI
      </h2>
      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        Hello
      </Button>
    </div>
  );
}
