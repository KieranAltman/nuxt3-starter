export function useAPPEventBus() {
  const bus = useEventBus(Symbol('app'))
  return bus
}
