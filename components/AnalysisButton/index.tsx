import tw, { styled } from "twin.macro";

const AnalysisButton = styled.button([
  tw`px-4 py-2 rounded-full`,
  tw`bg-blue-50 text-blue-700 w-full`,
  tw`md:(w-auto)`,
  tw`hover:(bg-blue-100)`,
  tw`focus:(bg-blue-200 outline-none)`,
]);

export default AnalysisButton;
