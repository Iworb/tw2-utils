/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * IE11 requires the following for NgClass support on SVG elements
 */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */

declare global {
  interface EventTarget {
    delegateEventListener(eventName, childSelector, fn): void;
  }
}

((document, EventTarget) => {
  const elementProto = window.Element.prototype;
  let matchesFn = elementProto.matches;

  /* Check various vendor-prefixed versions of Element.matches */
  if (!matchesFn) {
    ['webkit', 'ms', 'moz'].some((prefix) => {
      const prefixedFn = prefix + 'MatchesSelector';
      if (elementProto.hasOwnProperty(prefixedFn)) {
        matchesFn = elementProto[prefixedFn];
        return true;
      }
    });
  }

  /* Traverse DOM from event target up to parent, searching for selector */
  function passedThrough(event, selector, stopAt): Node | boolean {
    let currentNode = event.target;

    while (true) {
      if (matchesFn.call(currentNode, selector)) {
        return currentNode;
      } else if (currentNode !== stopAt && currentNode !== document.body) {
        currentNode = currentNode.parentNode;
      } else {
        return false;
      }
    }
  }

  /* Extend the EventTarget prototype to add a delegateEventListener() event */
  EventTarget.prototype.delegateEventListener = function(eName, toFind, fn): void {
    this.addEventListener(eName, (event) => {
      const found = passedThrough(event, toFind, event.currentTarget);

      if (found) {
        // Execute the callback with the context set to the found element
        // jQuery goes way further, it even has it's own event object
        fn.call(found, event);
      }
    });
  };

})(window.document, window.EventTarget || window.Element);
