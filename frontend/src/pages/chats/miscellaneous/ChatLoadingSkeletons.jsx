import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

function ChatLoadingSkeletons() {
    return (
        <Stack>
            {Array.from(Array(7)).map(() =>
                <Skeleton borderRadius={"7"} startColor='#48484c' endColor='#818189' height='50px' />
            )}

        </Stack>
    )
}

export default ChatLoadingSkeletons