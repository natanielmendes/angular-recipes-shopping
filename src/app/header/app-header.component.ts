import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html'
})
export class HeaderComponent {
    @Output() selectedFeature = new EventEmitter<string>();

    collapsed = false;

    onSelect(feature: string) {
        this.selectedFeature.emit(feature);
    }
}