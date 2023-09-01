const commandMap = {
  ls: `
        <p>ls라고 적으면 나오는 애들</p>
        <p>두번째 목록</p>
    `,
  help: `
        <p style='color:red'>help라고 나오는 애들</p>
        <p>입니다.</p>
   `,
};

const addCommand = (command: string) => {
  let commands = "";
  // 여기서 명령어를 추가한다.
  if (command.includes("ls")) {
    commands = commandMap["ls"];
  }
  if (command.includes("help")) {
    commands = commandMap["help"];
  }
  return commands;
};

export default addCommand;
