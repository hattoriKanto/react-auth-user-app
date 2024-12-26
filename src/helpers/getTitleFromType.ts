import { FormTypeEntity } from "../types";

export const getTitleFromType = (type: FormTypeEntity | string) => {
  let title = "";

  for (let i = 0; i < type.length; i++) {
    const currentCharacter = type[i];
    const previousCharacter = type[i - 1];

    if (
      currentCharacter === currentCharacter.toUpperCase() &&
      previousCharacter === previousCharacter.toLowerCase()
    ) {
      title += ` ${currentCharacter}`;
    } else if (i === 0) {
      title += currentCharacter.toUpperCase();
    } else {
      title += currentCharacter;
    }
  }

  return title;
};
