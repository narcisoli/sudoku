
/**
 * Generate a classname using an array or an object as input. All inputs are coverted into a string with empty space as delimitator
 * @returns {string}
 */
export function classes(...classes: (string | false | undefined | null | { [className: string]: any })[]): string {
    return classes.map(c => c && typeof c === 'object' ? Object.keys(c).map(key => !!c[key] && key) : [c])
        .reduce((flattened, c) => flattened.concat(c), [] as string[]).filter(c => !!c).join(' ')
}
