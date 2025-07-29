
// // src/components/CloudCrossword.tsx
// import React from "react"
// import Crossword from "@jaredreisinger/react-crossword"
// import { Box } from "@chakra-ui/react"
// import { useColorModeValue } from "@/components/ui/color-mode"

// // Sample puzzle data
// const puzzleData = {
//   across: {
//     3: {
//       clue: "Movie Setting",
//       answer: "VINEYARD",
//       row: 1,
//       col: 2
//     },
//     5: {
//       clue: "The Bon Bon...",
//       answer: "DELUXE",
//       row: 2,
//       col: 3
//     },
//     7: {
//       clue: "Warms the grapes?",
//       answer: "WINGS",
//       row: 3,
//       col: 5
//     },
//     8: {
//       clue: "Used to carry grapes",
//       answer: "BASKET",
//       row: 3,
//       col: 1
//     },
//     10: {
//       clue: "Fiery patriarch of the family",
//       answer: "ALBERTO",
//       row: 8,
//       col: 0
//     }
//   },
//   down: {
//     1: {
//       clue: "Pedro, aka...",
//       answer: "PETE",
//       row: 0,
//       col: 5
//     },
//     2: {
//       clue: "Fruit that defines the harvest",
//       answer: "GRAPES",
//       row: 0,
//       col: 7
//     },
//     4: {
//       clue: "Paul's love interest",
//       answer: "VICTORIA",
//       row: 1,
//       col: 0
//     },
//     6: {
//       clue: "Emotion between Paul and Victoria",
//       answer: "LOVE",
//       row: 2,
//       col: 4
//     },
//     9: {
//       clue: "Don Pedro's ingredient",
//       answer: "SALT",
//       row: 3,
//       col: 4
//     }
//   }
// };

// export default function CloudCrossword() {
//   const bg = useColorModeValue("sky.50", "sky.900")
//   const cellBg = useColorModeValue("white", "gray.700")
//   const textColor = useColorModeValue("vine.800", "vine.200")
//   const focusBg = useColorModeValue("#d1eaff", "#0a3a66")
//   const highlightBg = useColorModeValue("#75c0ff", "#0a3a66")

//   return (
//     <Box
//       /* 1) Make the outer box wider so cells can grow */
//       w={{ base: "100%", md: "800px" }}
//       maxW="full"
//       mx="auto"
//       p="4"
//       bg={bg}
//       rounded="md"
//       shadow="md"

//       /* 2) Tweak the crossword’s CSS to force uniform square cells & black blocks */
//       sx={{
//         /* The overall grid wrapper */
//         ".crossword": {
//           display: "inline-grid",
//           gridGap: "2px",
//           justifyContent: "center",
//         },
//         /* Every cell (white or black) */
//         ".crossword .cell": {
//           width:  "45px !important",
//           height: "45px !important",
//           padding: 0,
//           position: "relative",
//         },
//         /* The “no‑letter” cells that should be black */
//         ".crossword .cell.nocell": {
//           backgroundColor: "black !important",
//         },
//         /* Number in the corner of each white cell */
//         ".crossword .cell-number": {
//           color:        textColor,
//           position:     "absolute",
//           top:          "2px",
//           left:         "2px",
//           fontSize:     "0.6em",
//           fontWeight:   "bold",
//         },
//         /* The input box inside each white cell */
//         ".crossword input": {
//           width:         "100% !important",
//           height:        "100% !important",
//           textAlign:     "center",
//           fontSize:      "1.1rem",
//           lineHeight:    "1",
//           background:    cellBg,
//           color:         textColor,
//           border:        "none",
//         },
//       }}
//     >
//       <Crossword
//         data={puzzleData}
//         theme={{
//           /* keep your existing theme colors */
//           background:          bg,
//           cellBackground:      cellBg,
//           numberBackground:    bg,
//           focusBackground:     focusBg,
//           highlightBackground: highlightBg,
//           textColor,
//         }}
//         style={{
//           width:      "100%",
//           fontFamily: "sans-serif",
//         }}
//       />
//     </Box>
//   )
// }

