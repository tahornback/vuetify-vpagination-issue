import {render,screen} from "@testing-library/vue";
import {createVuetify} from "vuetify";
import {VPagination} from "vuetify/components";
import {components, directives} from "vuetify/dist/vuetify";
import '@testing-library/jest-dom'

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('VPagination Current', () => {
    it('renders buttons with arialabel', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
        screen.getAllByRole('button').forEach(b => {
            expect(b).toHaveAttribute('arialabel')
        })
    })

    it('renders non current-page buttons with ariadisabled', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
        screen.getAllByRole('button').forEach(b => {
            if(!b.hasAttribute('ariacurrent'))
                expect(b).toHaveAttribute('ariadisabled')
        })
    })

    it('renders current page button with ariacurrent', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
        expect(screen.getByText('1').parentElement).toHaveAttribute('ariacurrent')
    })
})

describe.skip('VPagination Expected', () => {
    it('renders buttons with aria-label', () => {
        render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        screen.getAllByRole('button').forEach(b => {
            expect(b).toHaveAttribute('aria-label')
        })

        screen.getByLabelText('Previous page') // This does not work in Vuetify 3.4.7 since `arialabel` isn't a proper label
    })

    it('renders non current-page buttons with aria-disabled', () => {
        render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        screen.getAllByRole('button').forEach(b => {
            if(!b.hasAttribute('aria-current'))
                expect(b).toHaveAttribute('aria-disabled')
        })
    })

    it('renders current page button with aria-current', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(screen.getByLabelText('Page 1, Current page').parentElement).toHaveAttribute('aria-current') // This does not work in Vuetify 3.4.7 since `arialabel` isn't a proper label
    })
})
