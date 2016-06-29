import {Component} from '@angular/core';

@Component({
    selector: 'web-part-2',
    template: '<h1>{{text}}</h1>'
})
export class WebPart2Component {
    text: string = 'Web Part 2 Loaded';
}