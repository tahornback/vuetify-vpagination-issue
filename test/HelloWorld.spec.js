import {describe, expect, it} from "vitest";
import {render} from "@testing-library/vue";
import HelloWorld from "../src/components/HelloWorld.vue";
import {createVuetify} from "../../vuetify/packages/vuetify";
import '@testing-library/jest-dom'

describe('Demonstration of different ARIA cases in Vue', () => {
    it('renders p tag with coded aria-label with aria-label attribute', () => {
        const wrapper = render(HelloWorld, {
            global: {
                plugins:[createVuetify()]
            }
        })

        expect(wrapper.getByText('aria-label in Vue')).toHaveAttribute('aria-label', 'paragraph using aria-label')
    })

    it('renders p tag with coded ariaLabel with arialabel attribute', () => {
        const wrapper = render(HelloWorld, {
            global: {
                plugins:[createVuetify()]
            }
        })

        expect(wrapper.getByText('ariaLabel in Vue')).toHaveAttribute('arialabel', 'paragraph using ariaLabel')
    })

    it('renders p tag with coded arialabel with arialabel attribute', () => {
        const wrapper = render(HelloWorld, {
            global: {
                plugins:[createVuetify()]
            }
        })

        expect(wrapper.getByText('arialabel in Vue')).toHaveAttribute('arialabel', 'paragraph using arialabel')
    })
})
