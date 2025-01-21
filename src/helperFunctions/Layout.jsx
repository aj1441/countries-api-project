// import { ChakraProvider, ColorModeProvider, extendTheme } from "@chakra-ui/react";
// import PropTypes from 'prop-types';

// const theme = extendTheme({});

// export default function Layout({ children }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <ColorModeProvider>
//         {children}
//       </ColorModeProvider>
//     </ChakraProvider>
//   );
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };





// import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
// import { useColorMode } from "../components/ui/color-mode"
// import { LuMoon, LuSun } from "react-icons/lu"

// const Layout = () => {
//   const { toggleColorMode, colorMode } = useColorMode()
//   return (
//     <ClientOnly fallback={<Skeleton boxSize="8" />}>
//       <IconButton onClick={toggleColorMode} variant="outline" size="sm">
//         {colorMode === "light" ? <LuSun /> : <LuMoon />}
//       </IconButton>
//     </ClientOnly>
//   )
// }

// export default Layout

// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import PropTypes from 'prop-types';

// const theme = extendTheme({});

// export default function Layout({ children }) {
//   return (
//     <ChakraProvider theme={theme}>
//       {children}
//     </ChakraProvider>
//   );
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// };


// import { ColorModeProvider } from "../components/ui/color-mode"
// import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
// import PropTypes from 'prop-types';

// export default function Layout({ children }) {
//   return (
//     <ChakraProvider theme={defaultSystem}>
//       <ColorModeProvider>{children}</ColorModeProvider>
//     </ChakraProvider>
//   );
// }

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
//   };