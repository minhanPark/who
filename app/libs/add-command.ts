export type FolderName = "runningwater" | "about" | "workExperience";

interface AddCommand {
  command: string;
  currentFolder: FolderName;
}

interface Folder {
  name: string;
  displayName: string;
  super: string;
  pwd: string;
  children: [string[], string[]];
}

//-runningwater
//--about
//  -- introduce.txt
//  -- links.txt
//--work-experience
//  -- optatumplatform.txt
//  -- strong-friend.txt
const runningwater: Folder = {
  name: "runningwater",
  displayName: "~",
  super: "",
  pwd: "/runningwater",
  children: [["about", "work-experience"], []],
};

const about: Folder = {
  name: "about",
  displayName: "about",
  super: "runningwater",
  pwd: "/runningwater/about",
  children: [[], ["introduce.txt", "links.txt"]],
};

const workExperience: Folder = {
  name: "work-experience",
  displayName: "work-experience",
  super: "runningwater",
  pwd: "/runningwater/work-experience",
  children: [[], ["optatumplatform.txt", "strong-friend.txt"]],
};

const folders = {
  runningwater,
  about,
  workExperience,
};

export const getFolders = (key: FolderName) => {
  return folders[key];
};

const commandMap = {
  help: `
    <p><span style="color:blue">pwd</span>라고 입력하면 현재 위치를 확인가능합니다.</p>
    <p><span style="color:blue">ls</span>라고 입력하면 현재 폴더에 있는 폴더와 파일이 보입니다.</p>
    <p><span style="color:blue">cat 파일명</span>이라고 입력하면 내용을 확인가능합니다.</p>
    <p><span style="color:blue">cd 위치</span>를 입력하면 현재 위치를 변경합니다.</p>
  `,
  ls: `
        <p>ls라고 적으면 나오는 애들</p>
        <p>두번째 목록</p>
    `,
};

const addCommand = ({ command, currentFolder }: AddCommand) => {
  // 사용할 명령어
  // help
  // pwd
  // ls
  // cd
  // cat
  let commands = "";
  // 여기서 명령어를 추가한다.
  const [reservedWord, option] = command.split(" ");
  switch (reservedWord) {
    case "help": {
      commands = commandMap["help"];
      break;
    }
    default: {
      commands = `zsh: command not found: ${reservedWord} ${option ?? ""}`;
    }
  }
  return { addedCommands: commands, newCurrentFolder: currentFolder };
};

export default addCommand;
