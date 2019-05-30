# FancyLogs

FancyLogs is a library that will allow you to do some... fancy logs like these:

![alt text](https://i.ibb.co/1qCSTp9/Captura-de-Pantalla-2019-05-30-a-les-13-38-47.png "Super fancy")
## Installation

Use yarn (or npm) to install the package.

```bash
yarn add fragment-fancylogs
```

## Usage

```js
import FancyLogs from 'fragment-fancylogs'

const customColors = {
  fragment: {
    backgroundColor: '#FD6953',
    textColor: '#000'
  }
}

//The first parameter allows you to add custom log options
//The second parameter enables or disabled the logger
const fancyLogs = new FancyLogs(customColors, process.env.NODE_ENV === 'dev')

fancyLogs.info('just so you now', 'This is very informative')
fancyLogs.success('hell yeah', { hey: 'ho' }, { lets: 'go' })
fancyLogs.warning('well it could get dangerous', { you: 'know' }, { what: 'I mean' })
fancyLogs.error('ups', { we: 'broke it' })
fancyLogs.fragment('custom fragment color', { contact_us: 'https://www.fragment.agency/' })

fancyLogs.setEnabled(false)
fancyLogs.error('no more logs', { we: 'we use this in production' })
```

If you use traditional JS you can add the script 'dist/FancyLogs.js' to your HTML and use FancyLogs using the same methods as the previous example.

```
<script src="FancyLogs.js"></script>
const fancyLogs = new FancyLogs.default(customColors)
fancyLogs.info('just so you now', 'This is very informative')
```
## License
FancyLogs is licensed under the MIT License. Developed by [Fragment Agency](https://www.fragment.agency) in 2019