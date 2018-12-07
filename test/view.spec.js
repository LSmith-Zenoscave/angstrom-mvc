/* global it:false, describe:false, beforeEach:false */
'use strict'
import chai from 'chai'
import sinon from 'sinon'
import { JSDOM } from 'jsdom'
import View from '../src/View'

chai.expect()

const { document } = (new JSDOM('', {})).window

const expect = chai.expect

describe('View', () => {
  let view, element, update

  beforeEach(() => {
    element = document.createElement('div')
    update = sinon.spy()
    view = new View(element, '<div>{{a}}{{b}}{{not_in_current_state}}</div>', update)
  })

  it('should create a instance', () => {
    expect(view).not.to.equal(null)
  })

  describe('.update()', () => {
    beforeEach(() => {
      update.resetHistory()
    })
    it('should update the template', () => {
      view.update({ 'a': 1, 'b': 'this_should_be_found', 'c': 3 })
      expect(view.element.textContent).to.include('this_should_be_found')
    })

    it('should call the update callback', () => {
      view.update({})
      expect(update.callCount).to.equal(1)
    })

    it('should not replace undefined or unused state properties', () => {
      view.update({ 'a': 1, 'b': 2, 'bad_property': 'should_not_be_found' })
      expect(view.element.textContent).to.include('{{not_in_current_state}}')
      expect(view.element.textContent).to.not.include('should_not_be_found')
    })

    it('should clear the element after each update', () => {
      view.update({ 'a': 'old', 'b': 'old' })
      expect(view.element.childElementCount).to.equal(1)
      view.update({ 'a': 'new', 'b': 'new' })
      expect(view.element.childElementCount).to.equal(1)
    })
  })
})
