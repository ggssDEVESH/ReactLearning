React uses Reconciliation Algorithm --> React Fiber 

virtual DOM is representation of actual DOM. 

suppose we have 7 Restro cards -- vdom 1 and after clicking the button 3 Restro cards It checks the difference and update the vdom.

In 2016 --  react fiber is new way to find the diff.

whenever react state variable then the entire component is getting rerender the component. using Reconcilation algorithm.

if useEffect is called only once when the array is empty/ not there. something as dependency then it useeffect is called everytime the dependency changes.. does not use outside the function.. never use useEffect/useState inside if else condition and it makes code inconsistency.. 

Do not use anchor tag in react. for routs because it refreshes entire page.. use Link from react-router-dom which helps in taking to the page without refresh of page.

two types of routing 
1.client side routing --> No network call is made..
2.server side routing -->  make a network call get the data and show it here..

single page application.

redux -->
click on ADD button --> dispact action --> calls reducer function --> modify the slice (redux object) --> calls a selector (subscribing to store) --> updates automatically.

for reduxtoolkit we are installing @redux/toolkit and react-redux 
-build store, connect our store, slice, dispatch..