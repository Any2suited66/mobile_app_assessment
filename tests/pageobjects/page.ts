/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    
    platformLocator(androidSelector: string, iosSelector: string) { 
        const selector = driver.isAndroid ? androidSelector : iosSelector;
        return $(`${selector}`)
        }


        
}


