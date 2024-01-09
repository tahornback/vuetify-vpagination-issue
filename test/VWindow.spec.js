import {render,screen} from "@testing-library/vue";
import {createVuetify} from "vuetify";
import {VWindow} from "vuetify/components";
import {components, directives} from "vuetify/dist/vuetify";
import '@testing-library/jest-dom'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('VWindow Current', () => {
    it('renders buttons with arialabel', () => {
        const wrapper = render(VWindow, {
            global: {
                plugins: [vuetify]
            },
            props: {
                showArrows: true
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
        screen.getAllByRole('button').forEach(b => {
            expect(b).toHaveAttribute('arialabel')
        })
    })
})

describe.skip('VWindow Expected', () => {
    it('renders buttons with aria-label', () => {
        render(VWindow, {
            global: {
                plugins: [vuetify]
            },
            props: {
                showArrows: true
            }
        })

        screen.getAllByRole('button').forEach(b => {
            expect(b).toHaveAttribute('aria-label')
        })
    })
})
