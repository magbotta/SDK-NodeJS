import superagent from 'superagent'
import superagentProxy from 'superagent-proxy'
import superagentPromise from 'superagent-promise'

import constants from '../constants'
import { Conversation, Response, RecastError } from '../resources'

const agent = superagentPromise(superagentProxy(superagent), Promise)

export default class Request {

  constructor (token, language) {
    this.token = token
    this.language = language
  }

  /*
   * /request (with text string)
   */
  analyseText = async (text, options = {}) => {
    const token = options.token || this.token
    const proxy = options.proxy
    const data = { text, language: options.language || this.language }
    if (!token) { throw new RecastError('Parameter token is missing') }

    try {
      const request = agent('POST', constants.REQUEST_ENDPOINT)
        .set('Authorization', `Token ${this.token}`)
      if (proxy) { request.proxy(proxy) }

      const res = await request.send(data)
      return new Response(res.body.results)
    } catch (err) {
      throw new RecastError(err)
    }
  }

  /*
   * /request (with audio file)
   */
  analyseFile = async (file, options = {}) => {
    const token = options.token || this.token
    const proxy = options.token
    if (!token) { throw new RecastError('Parameter token is missing') }

    try {
      const request = agent('POST', constants.REQUEST_ENDPOINT)
        .set('Authorization', `Token ${this.token}`)
      if (proxy) { request.proxy(proxy) }

      const res = await request.attach('voice', file).send()
      return new Response(res.body.results)
    } catch (err) {
      throw new RecastError(err)
    }
  }

  /*
   * /converse
   */
  converseText = async (text, options = {}) => {
    const token = options.token || this.token
    const proxy = options.proxy
    const data = {
      text,
      language: options.language || this.language,
      conversation_token: options.conversationToken,
      memory: options.memory,
    }
    if (!token) { throw new RecastError('Parameter token is missing') }

    try {
      const request = agent('POST', constants.CONVERSE_ENDPOINT)
        .set('Authorization', `Token ${this.token}`)
      if (proxy) { request.proxy(proxy) }

      const res = await request.send(data)
      return new Conversation({ ...res.body.results, recastToken: this.token })
    } catch (err) {
      throw new RecastError(err.message)
    }
  }

}
