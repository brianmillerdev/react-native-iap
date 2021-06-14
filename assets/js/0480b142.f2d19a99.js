(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[836],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5392:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],p={},l={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How can a user cancel a subscription in my app?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/dooboolab/react-native-iap/edit/master/docs/docs/faq.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Manual installation",permalink:"/docs/manual_install"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c=[{value:"How can a user cancel a subscription in my app?",id:"how-can-a-user-cancel-a-subscription-in-my-app",children:[]},{value:"Can I buy product right away skipping fetching products if I already know productId?",id:"can-i-buy-product-right-away-skipping-fetching-products-if-i-already-know-productid",children:[]},{value:"How do I validate receipt in iOS?",id:"how-do-i-validate-receipt-in-ios",children:[]},{value:"How do I validate receipt in Android?",id:"how-do-i-validate-receipt-in-android",children:[]},{value:"How to make consumable product in Android developer mode?",id:"how-to-make-consumable-product-in-android-developer-mode",children:[]},{value:"How do I use <code>react-native-iap</code> in Expo?",id:"how-do-i-use-react-native-iap-in-expo",children:[]},{value:"How do I handle promoted products in iOS?",id:"how-do-i-handle-promoted-products-in-ios",children:[]},{value:"Using Face ID &amp; Touch to checkout on iOS",id:"using-face-id--touch-to-checkout-on-ios",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-can-a-user-cancel-a-subscription-in-my-app"},"How can a user cancel a subscription in my app?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For both iOS and Android your users cannot cancel subscriptions inside your app. You need to direct your users to iTunes/the App Store or Google Play.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can do this on iOS 12 or later (for earlier iOS versions, use ",(0,o.kt)("a",{parentName:"p",href:"https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions"},"this URL"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Linking.openURL('https://apps.apple.com/account/subscriptions')\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can do this on Android:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Linking.openURL('https://play.google.com/store/account/subscriptions?package=YOUR_PACKAGE_NAME&sku=YOUR_PRODUCT_ID\n")),(0,o.kt)("p",{parentName:"li"},"  (change ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_PACKAGE_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_PRODUCT_ID"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"More on ",(0,o.kt)("inlineCode",{parentName:"p"},"Linking")," in React Native: ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/linking"},"https://facebook.github.io/react-native/docs/linking")))),(0,o.kt)("h3",{id:"can-i-buy-product-right-away-skipping-fetching-products-if-i-already-know-productid"},"Can I buy product right away skipping fetching products if I already know productId?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You could only in Android in ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-iap@^2.*"),"."),(0,o.kt)("p",{parentName:"li"},"  However, now you should always ",(0,o.kt)("inlineCode",{parentName:"p"},"fetchProducts")," first in both platforms.\nIt is because Android ",(0,o.kt)("inlineCode",{parentName:"p"},"BillingClient")," has been updated ",(0,o.kt)("inlineCode",{parentName:"p"},"billingFlowParams"),"\nto include ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/com/android/billingclient/api/SkuDetails"},"SkuDetails")," instead ",(0,o.kt)("inlineCode",{parentName:"p"},"sku")," string which is\nhard to share between ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"android"),"."),(0,o.kt)("p",{parentName:"li"},"  It happened since ",(0,o.kt)("inlineCode",{parentName:"p"},"com.android.billingclient:billing:2.0.*"),"."),(0,o.kt)("p",{parentName:"li"},"  Therefore we've planned to store items to be fetched in Android before\nrequesting purchase from ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native")," side, and you should always fetch\nlist of items to \u201cpurchase\u201d before requesting purchase."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Related ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/p/e4b55491479b"},"blog"),"."),(0,o.kt)("li",{parentName:"ul"},"Related issue ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/283"},"#283"),".")))),(0,o.kt)("h3",{id:"how-do-i-validate-receipt-in-ios"},"How do I validate receipt in iOS?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Official doc is ",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Resolved issues in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/203"},"#203"),", ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/237"},"#237"),".")),(0,o.kt)("h3",{id:"how-do-i-validate-receipt-in-android"},"How do I validate receipt in Android?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Offical doc is ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/google/play/billing/billing_library_overview"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"I've developed this feature for other developers to contribute easily who are\naware of these things. The doc says you can also get the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken")," via\nplay console without any of your backend server."),(0,o.kt)("p",{parentName:"li"},"  You can get this by following process:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Open ",(0,o.kt)("a",{parentName:"li",href:"https://play.google.com/apps/publish/"},"Google Play Console"),">"," Select your app\n",">"," Development tools\n",">"," Services & APIs\n",">"," Find in \u201cYour license key for this application\u201d.\n",(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/27132443"},"reference"),".")))),(0,o.kt)("h3",{id:"how-to-make-consumable-product-in-android-developer-mode"},"How to make consumable product in Android developer mode?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are facing ",(0,o.kt)("inlineCode",{parentName:"li"},'"You already own this item"')," on developer(test) mode,\nyou might check related issue ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/126"},"#126"))),(0,o.kt)("h3",{id:"how-do-i-use-react-native-iap-in-expo"},"How do I use ",(0,o.kt)("inlineCode",{parentName:"h3"},"react-native-iap")," in Expo?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should detach from ",(0,o.kt)("inlineCode",{parentName:"li"},"expo")," and get ",(0,o.kt)("inlineCode",{parentName:"li"},"expokit")," out of it."),(0,o.kt)("li",{parentName:"ul"},"Releated issue in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dooboolab/react-native-iap/issues/174"},"#174"),".")),(0,o.kt)("h3",{id:"how-do-i-handle-promoted-products-in-ios"},"How do I handle promoted products in iOS?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offical doc is ",(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/app-store/promoting-in-app-purchases/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"No initial setup needed from ",(0,o.kt)("inlineCode",{parentName:"li"},"4.4.5"),".")),(0,o.kt)("p",null,"Somewhere early in your app's lifecycle,\ncall ",(0,o.kt)("inlineCode",{parentName:"p"},"initConnection")," first (see above), then\nadd a listener for the ",(0,o.kt)("inlineCode",{parentName:"p"},"iap-promoted-product")," event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { NativeModules, NativeEventEmitter } from 'react-native'\nconst { RNIapIos } = NativeModules;\nconst IAPEmitter = new NativeEventEmitter(RNIapIos);\n\nIAPEmitter.addListener('iap-promoted-product', async () => {\n  // Check if there's a persisted promoted product\n  const productId = await RNIap.getPromotedProductIOS();\n  if (productId !== null) { // You may want to validate the product ID against your own SKUs\n    try {\n      await RNIap.buyPromotedProductIOS(); // This will trigger the App Store purchase process\n    } catch(error) {\n      console.warn(error);\n    }\n  }\n});\n")),(0,o.kt)("h3",{id:"using-face-id--touch-to-checkout-on-ios"},"Using Face ID & Touch to checkout on iOS"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After you have completed the setup and set your deployment target to ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS 12"),",\nFaceID and Touch to purchase will be activated by default in production."),(0,o.kt)("p",{parentName:"li"},"  Please note that in development or TestFlight, it will ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use FaceID/Touch\nto checkout because they are using the Sandbox environment."))))}d.isMDXComponent=!0}}]);