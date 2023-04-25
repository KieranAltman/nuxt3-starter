const events = new Map<string, Set<Function>>()

export const useAPPEventHub = () => {
  function on(event: string, handler: () => void) {
    const handlers = events.get(event) || new Set()
    handlers.add(handler)
    events.set(event, handlers)
  }

  function once(event: string, handler: (...args: any[]) => void) {
    function _handler(..._args: any[]) {
      off(event, _handler)
      handler(..._args)
    }
    return on(event, _handler)
  }

  function off(event: string, handler: () => void) {
    const handlers = events.get(event) || new Set()
    handlers.delete(handler)

    if (handlers.size === 0) {
      events.delete(event)
    }
  }

  function emit(event: string, ...payload: any[]) {
    const handlers = events.get(event)
    if (!handlers) return

    handlers.forEach(handler => {
      handler(...payload)
    })
  }

  return { on, once, off, emit }
}
