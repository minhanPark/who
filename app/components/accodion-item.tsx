import { useId } from "react";
import { FcBookmark } from "react-icons/fc";

import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

type Props = {
  header: string;
  taskList: string[];
  techStack: string;
};

export function AccodionItem({ header, taskList, techStack }: Props) {
  const unuqueValue = useId();
  return (
    <AccordionItem value={unuqueValue}>
      <AccordionTrigger>{header}</AccordionTrigger>
      <AccordionContent>
        <div className="px-2">
          <ul className="list-disc list-inside leading-7">
            {taskList.map((w, index) => (
              <li key={index}>{w}</li>
            ))}
          </ul>
          <div className="bg-neutral-300 mt-2 p-2 flex items-start gap-1">
            <div className="">
              <FcBookmark className="h-5 w-5" />
            </div>
            <p className="text-sm">{techStack}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
