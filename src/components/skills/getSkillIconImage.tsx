import codeFile from "../../image/icons/codeFile.png";
import { SKILL_ICONS } from "./constants";
import IconImageContainer from "./IconImageContainer";

export const getSkillIconImage = (name: string) => {
  const config = SKILL_ICONS[name] ?? { src: codeFile };
  const style =
    config.size !== undefined
      ? { width: config.size, height: config.height ?? config.size }
      : undefined;
  const image = <img src={config.src} alt={name} style={style} />;

  return config.bg ? <IconImageContainer>{image}</IconImageContainer> : image;
};
