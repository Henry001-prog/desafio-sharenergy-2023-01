import { useCallback } from 'react'
import { Box, HStack, Stack, Text } from '@chakra-ui/react'

import { ChangePageButton } from './ChangePageButton'
import { PaginationItem } from './PaginationItem'

// import { MiArrowLeft, MiArrowRight } from '../../assets/icons'

interface PaginationProps {
  totalCountOfRegisters?: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0)
}

// export function Pagination-old({
//   totalCountOfRegisters = 0, // total_rows
//   registerPerPage = 2,
//   currentPage = 1,
//   onPageChange,
// }: PaginationProps) {
//   const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

//   const previousPages =
//     currentPage > 1
//       ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
//       : []

//   const nextPages =
//     currentPage < lastPage
//       ? generatePagesArray(
//           currentPage,
//           Math.min(currentPage + siblingsCount, lastPage)
//         )
//       : []

//   const handlePageChange = useCallback(
//     (page: number) => {
//       if (page >= 1 && page <= lastPage) {
//         onPageChange(page)
//       }
//     },
//     [lastPage, onPageChange]
//   )

//   return (
//     <Stack
//       width="100%"
//       direction="row"
//       marginTop="5"
//       alignItems="center"
//       justifyContent="space-between"
//       data-testid="pagination"
//     >
//       <Box>
//         <strong>{currentPage}</strong> - <strong>{registerPerPage}</strong> de{' '}
//         <strong>{totalCountOfRegisters}</strong>
//       </Box>
//       <HStack spacing="5">
//         <ChangePageButton
//           aria-label="Left Button"
//           onClick={() => handlePageChange(currentPage - 1)}
//         />

//         <Stack
//           height="8"
//           direction="row"
//           backgroundColor="white"
//           paddingX="5"
//           alignItems="center"
//           borderRadius="50"
//         >
//           {currentPage > siblingsCount + 1 && (
//             <>
//               <PaginationItem
//                 pageNumber={1}
//                 onPageChange={onPageChange}
//                 data-testid="page-item-back"
//               />
//               {currentPage > 2 + siblingsCount && (
//                 <Text color="gray.300" width="6" align="center">
//                   ...
//                 </Text>
//               )}
//             </>
//           )}

//           {previousPages.length > 0 &&
//             previousPages.map((page) => (
//               <PaginationItem
//                 key={page}
//                 pageNumber={page}
//                 onPageChange={onPageChange}
//               />
//             ))}

//           <PaginationItem
//             pageNumber={currentPage}
//             isCurrent
//             onPageChange={onPageChange}
//             data-testid="page-item-back"
//           />

//           {nextPages.length > 0 &&
//             nextPages.map((page) => (
//               <PaginationItem
//                 key={page}
//                 pageNumber={page}
//                 onPageChange={onPageChange}
//               />
//             ))}

//           {currentPage + siblingsCount < lastPage && (
//             <>
//               {currentPage + 1 + siblingsCount < lastPage && (
//                 <Text color="gray.300" width="6" align="center">
//                   ...
//                 </Text>
//               )}
//               <PaginationItem
//                 pageNumber={lastPage}
//                 onPageChange={onPageChange}
//               />
//             </>
//           )}
//         </Stack>

//         <ChangePageButton
//           aria-label="Next Button"
//           onClick={() => handlePageChange(currentPage + 1)}
//         />
//       </HStack>
//     </Stack>
//   )
// }
