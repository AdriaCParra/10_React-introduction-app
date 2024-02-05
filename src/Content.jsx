import { Parts } from "./Part";

export const Content = ({ parts, exercises }) => {
  return (
    <>
      <Parts parts={parts[0]} exercises={exercises[0]} />
      <Parts parts={parts[1]} exercises={exercises[1]} />
      <Parts parts={parts[2]} exercises={exercises[2]} />
    </>
  );
};
