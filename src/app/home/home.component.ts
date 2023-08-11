import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList; // The filteredLocationList should contain the total set of housing locations values by default when the page loads
  }

  filterResults(text: string) {
    if(!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => housingLocation.name.toLowerCase().includes(text.toLowerCase()));
    text = '';
  }
}
