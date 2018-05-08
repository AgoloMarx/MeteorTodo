### How do you add a readme?


## Findings:

- Code in `/client` are bundled up no matter if they are being used or not. e.g `notImportedAnywhere.js` will be bundled and parsed even if there are no instances of the code below: 
```
import notImportedAnywhere from './notImportedAnywhere'; // This line does not exist anywhere
```

- Separating component JS code into `/imports/components/` finally allowed dynamic imports to work

- We are using the package `react-loadable` to help dynamically import our routes. More info here: https://jamie.build/react-loadable.html
