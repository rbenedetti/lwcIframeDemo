import {LightningElement, track} from 'lwc';
import pageUrl from '@salesforce/resourceUrl/external';

export default class ExternalContainer extends LightningElement {
  @track navigateTo;
  externalWindow = null;

  constructor () {
    super ();

    // Navigate to a static resource Container
    this.navigateTo = pageUrl;
    // Can navigate anywhere :)
    //this.navigateTo = 'https://todomvc.com/examples/vue/';
    window.addEventListener ('message', this.listenForMessage.bind(this));
  }

  renderedCallback(){
      // Get a reference to the iframe
      this.externalWindow = this.template.querySelector('iframe');
  }

  listenForMessage (message) {
      // Get a message from the child
      if(message.data === 'childloaded') {
          console.log('child has loaded');
        this.externalWindow.contentWindow.postMessage({idNumber:'4Y1SL65848Z411439',customer:'123abc'})
      }
  }
}
