import tw, { styled } from "twin.macro";

export const Container = styled.footer([
  tw`flex items-center justify-center h-20`,
  tw`text-white bg-blue-50`,
]);

export const Link = styled.a([
  tw`px-4 py-2 mx-2 rounded-full text-blue-700`,
  tw`hover:(bg-blue-500 bg-opacity-10)`,
  tw`focus:(bg-blue-500 bg-opacity-20)`,
]);
