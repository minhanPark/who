"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { VscBlank } from "react-icons/vsc";
import { IoCloseSharp } from "react-icons/io5";
import { BiMinus } from "react-icons/bi";
import { useForm, SubmitHandler, Controller, set } from "react-hook-form";

import type { ScreenType } from "../interactive-resume/page";
import addCommand, { getFolders, FolderName } from "../libs/add-command";

interface Props {
  changeScreen: (screen: ScreenType) => void;
}

// /로 시작하면 절대위치고, 절대 위치에서는 하나씩 타고 내려가서 자식인지 판단하고 마지막에 자신으로 바꾼다.
// 위에 경우가 아니면 상대위치고 .. 로 타고 올라 갈때 부모가 있는 지  판단한다. 그리고 부모로 바꾼다
// .이나 ./ 일때는 그냥 현재위치 그대로 하면된다.
// ~ 일땐 runningwater폴더로 바꾼다.

interface FormValues {
  command: string;
}
//-runningwater
//--about
//  -- introduce.txt
//  -- links.txt
//--work-experience
//  -- optatumplatform
//  -- strong-friend
const getCurrentDisplayName = (currentFolder: FolderName) => {
  const displayName = getFolders(currentFolder).displayName;
  return `Runnungwater@runningwater ${displayName} % `;
};

const Terminal = ({ changeScreen }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [commands, setCommands] = useState<string[]>([]);
  const [currentFolder, setCurrentFolder] =
    useState<FolderName>("runningwater");
  const router = useRouter();
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      command: getCurrentDisplayName("runningwater"),
    },
  });
  const displayName = getCurrentDisplayName(currentFolder);

  const onValid: SubmitHandler<FormValues> = (data) => {
    // 다른 명령어 없이 공백 문자로만 입력하면? trim을 한 후에 그대로 입력을 한다.
    if (data.command.trim() === displayName.trim()) {
      setCommands((prev) => [...prev, `<p>${displayName}</p>`]);
      return;
    }

    // const reg = /<[^>]*>?/g;
    //   const cmd = `<p>${data.command.replace(reg, "")}</p>`;
    //   const addedCommand = addCommand(data.command.replace(reg, ""));
    //   setCommands((prev) => [
    //     ...prev,
    //     cmd,
    //     addedCommand === ""
    //       ? "<p>존재하지 않는 명령어입니다.</p>"
    //       : addedCommand,
    //   ]);
    const tagReg = /<[^>]*>?/g;
    const commandWithTagsRemoved = data.command
      .split(displayName)[1]
      .replace(tagReg, "");
    // cd ~
    // ls 등등 나옴
    const { addedCommands, newCurrentFolder } = addCommand({
      command: commandWithTagsRemoved,
      currentFolder,
    });
    // 받아오는 값중에 폴더가 다르면 폴더를 변경
    // displayname을 그린다.
    if (newCurrentFolder !== currentFolder) {
      setCurrentFolder(newCurrentFolder);
    }
    // 나오는 명령어를 모두 그린다.
    setCommands((prev) => [
      ...prev,
      `<p>${displayName}${commandWithTagsRemoved}</p>`,
      addedCommands,
    ]);
    /**
     * 들어오는 문자열에는 태그를 모두 제거한다.
     * 거기서 내가 사용할 태그를 붙여서 쓴다.
     */
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onValid)();
      reset({ command: getCurrentDisplayName(currentFolder) });
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
                if (e.target.value.indexOf(displayName) === 0) {
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
