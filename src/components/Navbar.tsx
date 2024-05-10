import { HStack, Image, } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorMode from "./ColorMode";
function Navbar() {
  return (
    <div>
      <HStack padding={15} justifyContent="space-between">
        <Image src={logo} boxSize="60px" />
        <ColorMode />
      </HStack>
    </div>
  );
}

export default Navbar;
