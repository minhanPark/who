"use client";

import { ModalContainer } from "./modal-container";
import { Modal } from "./type";
import { Accordion } from "../accordion";
import { AccodionItem } from "../accodion-item";

type Project = {
  header: string;
  taskList: string[];
  techStack: string;
};

const optatumProjectList: Project[] = [
  {
    header: "AML 솔루션",
    taskList: [
      "공통 에러처리를 위해 React Query의 Provider를 커스텀",
      "최적화를 위해 파일들의 캐시 설정을 다르게 적용하도록 Nginx설정 작업",
      "React Query를 통해 data에 관한 상태 관리를 처리 후 그 외의상태 관리는 보일러 플레이트가 적고 쉽게 적용이 가능한 Zustand를 활용해 처리하도록 작업",
      "백엔드 없이 작업 진행이 필요해 MSW 구성을 통해 api 모킹 작업",
    ],
    techStack:
      "React, Typescript, MUI, Tanstack-query, Zustand,React-hook-form, Docker, Nginx, MSW",
  },
  {
    header: "국내 PG 솔루션",
    taskList: [
      "사용자 친화적인 UI / UX를 위해 react MUI를 이용한 솔루션 페이지 작업",
      "Recoil로 상태 관리",
      "데이터를 불러올 때 공통적인 hook 처리와 caching 기능을 활용하기 위해 React-query를 이용해 데이터 fetching 및 caching 작업",
      "안정적인 서비스 유지와 스케일 업을 위해서 docker swarm을 통해 서비스로 배포",
    ],
    techStack:
      "React, Typescript, MUI, React-query, Recoil, React-hook-form, Docker, Nginx",
  },
  {
    header: "결제위젯 Javascript SDK",
    taskList: [
      "자바스크립트 모듈인 CommonJS와 AMD에 대한 공통 지원을 위해 Webpack 설정 후 빌드를 통해서 UMD 형태로 결제 모듈 SDK 제공 작업",
      "사용자 편의를 위해 npm 패키지를 사용해 결제위젯 SDK 설치할 수 있도록 npm에 배포 작업",
      " 직접 CDN 주소와 script 태그를 통해서 추가할 수 있도록 UNPKG에서 생겨난 주소를 Nginx에서 도메인 연결 작업",
    ],
    techStack: "Typescript, Webpack",
  },
  {
    header: "개발 서버 이전으로 인한 새 개발 서버 구축 보조 및 개발 환경 구축",
    taskList: [
      "새 개발 서버에 docker / docker swarm 설치 및 설정",
      "사내 구성원들의 편의성을 위해 도메인을 추가하고 Nginx를 이용해 proxy 서버 구축",
      "개발자 경험 향상을 위해 CI / CD 도입을 결정하고 Portainer, Jenkins, Teamcity, Registry, Gitea, Redmine을 docker swarm 및 compose로 구축",
      "작업에 필요한 yml, conf 파일 작성 및 ssl 인증서 작업",
    ],
    techStack:
      "Docker, Docker Swarm, Nginx, Let’s Encrypt, Portainer, Jenkins, Teamcity, Registry, Gitea, Redmine",
  },
  {
    header: "자사 홈페이지 개발",
    taskList: [
      "검색엔진 최적화를 위해 Next.js를 활용해서 홈페이지 개발",
      "React의 Context를 통해서 상태 관리",
      "글로벌 고객을 위해서 i18n 적용으로 다국어 서비스 제공",
      "안정적인 서비스 유지와 스케일 업을 위해서 docker swarm을 통해 서비스로 배포",
    ],
    techStack: "Next.js, next-i18next, Docker, Nginx",
  },
];

const strongFriendProjectList: Project[] = [
  {
    header: "자사 홈페이지 개발",
    taskList: [
      "Express와 Pug로 페이지 개발",
      "Passport.js와 Mongodb를 통해서 인증 및 게시판 구현",
      "gulp를 통해서 빌드에 필요한 작업 실행 및 구축",
    ],
    techStack: "Express, Pug, Passport.js, Mongodb, mongoose, gulp, Sass",
  },
];

export function WorkExperience({
  closeModal,
  constraints,
  icon,
  title,
}: Modal) {
  return (
    <ModalContainer
      closeModal={closeModal}
      constraints={constraints}
      icon={icon}
      maxWidth="max-w-xl"
      title={title}
    >
      <div className="w-full h-96 flex flex-col overflow-y-scroll p-2">
        <h2 className="font-bold text-xl">(주)옵타움플랫폼</h2>
        <p className="text-xs text-slate-500 leading-6">
          프론트엔드 개발(2020년 7월 ~ 현재)
        </p>
        <Accordion type="multiple">
          {optatumProjectList.map((p, index) => (
            <AccodionItem
              key={index}
              header={p.header}
              taskList={p.taskList}
              techStack={p.techStack}
            />
          ))}
        </Accordion>
        <h2 className="font-bold text-xl mt-7">(주)건강한친구</h2>
        <p className="text-xs text-slate-500 leading-6">
          웹 개발(2019년 3월 ~ 2020년 7월)
        </p>
        <Accordion type="multiple">
          {strongFriendProjectList.map((p, index) => (
            <AccodionItem
              key={index}
              header={p.header}
              taskList={p.taskList}
              techStack={p.techStack}
            />
          ))}
        </Accordion>
      </div>
    </ModalContainer>
  );
}
