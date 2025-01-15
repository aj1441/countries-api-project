// import { ColorModeButton } from "@/components/ui/color-mode"

// const Demo = () => {
//   return <ColorModeButton /> 
// }




// // Code to toggle between light and dark mode
// import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
// import { useColorMode } from "../components/ui/color-mode"
// import { LuMoon, LuSun } from "react-icons/lu"


// const ColorModeButton = () => {
//   const { toggleColorMode, colorMode } = useColorMode()
//   return (
//     <ClientOnly fallback={<Skeleton boxSize="8" />}>
//       <IconButton onClick={toggleColorMode} variant="outline" size="sm" className="icon-button">
//       {colorMode === "light" ? (
//           <>
//             <LuSun /> <span>Light Mode</span>
//           </>
//         ) : (
//           <>
//             <LuMoon /> <span>Dark Mode</span>
//           </>
//         )}
//       </IconButton>
//     </ClientOnly>
//   )
// }
// export default ColorModeButton;