import tw, { styled } from "twin.macro";

const Card = styled.section([
  tw`rounded-lg max-w-xl mx-auto px-10 py-8`,
  tw`bg-blue-700 text-white text-xl text-left tracking-wide`,
  {
    minHeight: "16rem",
    boxShadow: `
      0px 4px 12px rgba(29, 78, 216, 0.12),
      0px 2px 4px rgba(29, 78, 216, 0.25),
      inset 0px 1px 4px rgba(255, 255, 255, 0.32),
      inset 0px -1px 0px rgba(0, 0, 0, 0.05)
    `,
  },
]);

export default Card;
