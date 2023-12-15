import {render} from "@testing-library/vue";
import {createVuetify} from "vuetify";
import {VPagination} from "vuetify/components";
import {components, directives} from "vuetify/dist/vuetify";

const vuetify = createVuetify({
    components,
    directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('VPagination', () => {
    it('renders with aria-label', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot() // generates buttons with arialabel="Previous page" ariadisabled="true"
        expect(wrapper.html()).toContain('aria-label="Previous page"')
    })

    it('renders with aria-disabled', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot() // generates buttons with arialabel="Previous page" ariadisabled="true"
        expect(wrapper.html()).toContain('aria-disabled="true"')
    })

    it('does not render with arialabel', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot() // generates buttons with arialabel="Previous page" ariadisabled="true"
        expect(wrapper.html()).not.toContain('arialabel="Previous page"')
    })

    it('does not render with ariadisabled', () => {
        const wrapper = render(VPagination, {
            global: {
                plugins: [vuetify]
            }
        })

        expect(wrapper.html()).toMatchSnapshot() // generates buttons with arialabel="Previous page" ariadisabled="true"
        expect(wrapper.html()).not.toContain('ariadisabled="true"')
    })
})
