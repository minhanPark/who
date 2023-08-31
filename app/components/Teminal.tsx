"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VscBlank } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import type { ScreenType } from "../interactive-resume/page";
import addCommand from "../libs/add-command";

interface Props {
  changeScreen: (screen: ScreenType) => void;
}

interface FormValues {
  command: string;
}

const pwd = "Runnungwater@runningwater ~: ";

const Terminal = ({ changeScreen }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [commands, setCommands] = useState<string[]>([]);
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      command: pwd,
    },
  });
  const onValid: SubmitHandler<FormValues> = (data) => {
    // 다른 명령어 없이 공백 문자로만 입력하면? trim을 한 후에 그대로 입력을 한다.
    if (data.command.trim() === pwd.trim()) {
      const cmd = `<p>${pwd}</p>`;
      setCommands((prev) => [...prev, cmd]);
    } else {
      const reg = /<[^>]*>?/g;
      const cmd = `<p>${data.command.replace(reg, "")}</p>`;
      const addedCommand = addCommand(data.command.replace(reg, ""));
      setCommands((prev) => [
        ...prev,
        cmd,
        addedCommand === ""
          ? "<p>존재하지 않는 명령어입니다.</p>"
          : addedCommand,
      ]);
    }
    // 해당하는 명령어가 있다면? 커맨드 뒤에 붙여서 실행한다.
    // 해당하는 명령어가 없다면? 커맨드 뒤에 해당 하는 명령어가 없다고 붙여서 실행한다.

    /**
     * 들어오는 문자열에는 태그를 모두 제거한다.
     * 거기서 내가 사용할 태그를 붙여서 쓴다.
     */
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onValid)();
      reset({ command: pwd });
    }
  };
  return (
    <motion.div
      style={{
        position: "relative",
        width: 500,
        height: 500,
        background: "black",
        display: "flex",
        flexDirection: "column",
      }}
      drag
      dragMomentum={false}
    >
      <div
        style={{
          background: "#81ecec",
          height: 25,
        }}
      >
        <div
          style={{
            background: "#ff7675",
            width: 50,
            height: 25,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <div
            style={{
              background: "red",
              display: "flex",
              borderRadius: "50%",
              width: 18,
              height: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => router.push("/")}
          >
            {isHovered ? <IoCloseSharp size={15} /> : <VscBlank size={15} />}
          </div>
          <div
            style={{
              background: "blue",
              display: "flex",
              borderRadius: "50%",
              width: 18,
              height: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => changeScreen("icon")}
          >
            {isHovered ? <BiMinus size={15} /> : <VscBlank size={15} />}
          </div>
        </div>
      </div>
      <div
        style={{
          background: "white",
          flex: 1,
        }}
        onPointerDownCapture={(e) => e.stopPropagation()}
      >
        <div dangerouslySetInnerHTML={{ __html: commands.join("") }} />

        <Controller
          name="command"
          control={control}
          render={({ field: { value, onChange } }) => (
            <textarea
              value={value}
              onChange={(e) => {
                if (e.target.value.indexOf(pwd) === 0) {
                  onChange(e);
                }
                return;
              }}
              style={{ width: "100%", resize: "none" }}
              onKeyDown={handleKeyDown}
            />
          )}
        />
      </div>
    </motion.div>
  );
};

export default Terminal;
