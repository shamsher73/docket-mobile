import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from "native-base";
import React from "react"

const Error = ({ error }: { error: string }) => {
    return (
        <Alert w="100%" status="error" mt="1">
            <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                    <HStack space={2} flexShrink={1}>
                        <Alert.Icon mt="1" />
                        <Text fontSize="md" color="coolGray.800">
                            {error}
                        </Text>
                    </HStack>
                    <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} />
                </HStack>
            </VStack>
        </Alert>
    )
}

export default Error;