<p align="center">
  <img src="misc/logo2.png" />
</p>

# Recast.AI - SDK Node.js
Recast.AI official SDK in Node.js

## Synospis

This module is a wrapper around the [Recast.AI](https://recast.ai/) [API](https://man.recast.ai/) API, and allows you to:
* [Analyse your text](https://github.com/RecastAI/SDK-NodeJS/wiki/Analyse-text)
* [Manage your conversation](https://github.com/RecastAI/SDK-NodeJS/wiki/Manage-your-conversation)
* [Receive and send messages](https://github.com/RecastAI/SDK-NodeJS/wiki/Receive-and-send-messages)

## Installation

Install the package using npm, as shown below:
```bash
npm install --save recastai
```

You can now use the SDK in your code.

#### ES5

Using the entire SDK:
```js
var recastai = require('recastai').default

var client = new recastai('YOUR_TOKEN')
```

Extracting one single API:
```js
var recastai = require('recastai').default

var converse = new recastai.converse('YOUR_TOKEN')
```

#### ES6

Using the entire SDK:
```js
import recastai from 'recastai'

const client = new recastai('YOUR_TOKEN')
```

Extracting one single API:
```js
import { converse } from 'recastai'

const clientConverse = new converse('YOUR_TOKEN')
```

## Sample projects

Check out our [NodeJS starter-kit](https://github.com/RecastAI/starter-NodeJS) for a usage example of the SDK.

## RESOURCES
* [Bot Builder Guide](https://recast.ai/docs): Best practices and tips to use the Recast.AI platform 
* [API Documentation](https://man.recast.ai/)

## TUTORIALS
* [Your first bot](https://blog.recast.ai/build-your-first-bot-with-recast-ai/) - Build your first bot with Bot Builder
* [Bots 101, Intro for Developers](https://recast.ai/blog/bots-introduction-developers/) - Overview of how to get started building your bot's server


## Author

Jérôme Houdan, jerome.houdan@recast.ai

You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

## License

Copyright (c) [2016] [Recast.AI](https://recast.ai)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
