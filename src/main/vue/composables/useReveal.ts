import type { Directive, DirectiveBinding } from 'vue'

export interface RevealOptions {
  delay?: number
  once?: boolean
  threshold?: number
  rootMargin?: string
  className?: string
}

type ResolvedOptions = Required<RevealOptions>

const DEFAULTS: ResolvedOptions = {
  delay: 0,
  once: true,
  threshold: 0.15,
  rootMargin: '0px',
  className: 'is-revealed',
}

interface ElementState {
  options: ResolvedOptions
  timeoutId?: ReturnType<typeof setTimeout>
}

const states = new WeakMap<Element, ElementState>()
const observers = new Map<string, IntersectionObserver>()
const registeredElements: Element[] = []

export function resetRevealStates() {
  registeredElements.forEach((el: Element) => {
    const state = states.get(el)
    if (state && el.classList.contains(state.options.className)) {
      el.classList.remove(state.options.className)
    }
  })
}

function observerKey(o: ResolvedOptions): string {
  return `${o.threshold}|${o.rootMargin}`
}

function getObserver(o: ResolvedOptions): IntersectionObserver {
  const key = observerKey(o)
  let observer = observers.get(key)
  if (!observer) {
    observer = new IntersectionObserver(onIntersect, {
      threshold: o.threshold,
      rootMargin: o.rootMargin,
    })
    observers.set(key, observer)
  }
  return observer
}

function onIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
  for (const entry of entries) {
    const state = states.get(entry.target)
    if (!state) {
      continue
    }

    clearTimeout(state.timeoutId)

    if (entry.isIntersecting) {
      state.timeoutId = setTimeout(() => {
        entry.target.classList.add(state.options.className)
      }, state.options.delay)

      if (state.options.once) {
        observer.unobserve(entry.target)
        states.delete(entry.target)
      }
    } else if (!state.options.once) {
      entry.target.classList.remove(state.options.className)
    }
  }
}

function resolveOptions(value: RevealOptions | number | undefined): ResolvedOptions {
  if (typeof value === 'number') {
    return { ...DEFAULTS, delay: value }
  }

  if (typeof value === 'object' && value !== null) {
    return { ...DEFAULTS, ...value }
  }

  return { ...DEFAULTS }
}

export const vReveal: Directive<HTMLElement, RevealOptions | number | undefined> = {
  mounted(el, binding: DirectiveBinding<RevealOptions | number | undefined>) {
    const options = resolveOptions(binding.value)
    states.set(el, { options })
    registeredElements.push(el)
    el.classList.add('reveal')
    getObserver(options).observe(el)
  },

  updated(el, binding) {
    const state = states.get(el)
    if (state) {
      state.options = resolveOptions(binding.value)
    }
  },

  unmounted(el) {
    const state = states.get(el)
    if (state) {
      clearTimeout(state.timeoutId)
    }

    states.delete(el)
    const index = registeredElements.indexOf(el)
    if (index > -1) {
      registeredElements.splice(index, 1)
    }

    observers.forEach((o) => o.unobserve(el))
  },
}
