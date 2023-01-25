import { Spinner, VStack, Heading } from "native-base";

export function LoadingScreen() {
  return (
    <VStack flex alignItems="center" justifyContent="center">
      <Spinner size="lg" />
      <Heading color="primary.500" fontSize="md" marginTop={2}>
        Cargando
      </Heading>
    </VStack>
  );
}
