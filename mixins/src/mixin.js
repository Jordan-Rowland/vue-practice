export const mixinStuff ={
    data() {
        return {
            text: 'hello'
        }
    },
    computed: {
        reverseComputed() {
            return this.text.split('').reverse().join('')
        },
        lengthComputed() {
            return this.text + ` (${this.text.length})`
        }
    }
}
