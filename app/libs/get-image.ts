/**
 * 시간에 맞춰 dark or light 이미지를 가져온다.
 * @param type state 위치 일때는 state or error 위치일 때는 error
 */

const getImage = (type: "state" | "error") => {
  const isDay = new Date().getHours() > 8 && new Date().getHours() < 18;
  if (type === "state") {
    return isDay ? "/background-light.webp" : "/background-dark.webp";
  } else {
    return isDay ? "/background-light.jpg" : "/background-dark.jpg";
  }
};

export default getImage;
