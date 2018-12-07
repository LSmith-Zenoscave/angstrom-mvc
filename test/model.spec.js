/* global it:false, describe:false, beforeEach:false */
'use strict'
import chai from 'chai'
import sinon from 'sinon'
import Model from '../src/Model'

chai.expect()

const expect = chai.expect

describe('Model', () => {
  let model

  beforeEach(() => {
    model = new Model({
      'a': 1,
      'b': 2,
      'c': 3,
      'everything': 42
    })
  })

  it('should create a instance', () => {
    expect(model).not.to.equal(null)
  })

  describe('.notifyAll()', () => {
    let observer = {}

    beforeEach(() => {
      observer.update = sinon.spy()
    })

    it('should notify on registered bind values', () => {
      model.registerObserver('foo', observer)
      model.notifyAll('foo')
      expect(observer.update.callCount).to.equal(1)
      expect(observer.update.firstCall.args[0]).contains({ 'everything': 42 })
    })

    it('should not notify on missing bind values', () => {
      model.registerObserver('bar', observer)
      model.notifyAll('not-bar')
      expect(observer.update.callCount).to.equal(0)
    })
  })
})
