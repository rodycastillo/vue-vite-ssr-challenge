import CardBalanceVue from "../CardBalance.vue";
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'


describe('should render a card balance, passing props', () => {
  it('should render a card balance', () => {
    const balance = "1450.25"
    const wrapper = mount(CardBalanceVue, {
      props: {
        balance
      }
    })
    expect(wrapper.text()).toBe("S/ 1450.25")
  })
})