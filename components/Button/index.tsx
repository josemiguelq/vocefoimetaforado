import tw, { styled } from "twin.macro";

const Button = styled.button([
  tw`w-full inline-flex items-center justify-center rounded-full py-3 px-6`,
  tw`bg-purple-700 text-white text-sm uppercase tracking-wide`,
  tw`hover:(bg-purple-800)`,
  tw`focus:(bg-purple-900 outline-none)`,
  tw`md:(w-auto)`,
]);

export default Button;
