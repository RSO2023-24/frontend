import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {faCloudSun} from "@fortawesome/free-solid-svg-icons/faCloudSun";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {ServiceService} from "../../services/service.service";
import {Hike} from "../../models/Hike";
import {environment} from "../../../environment/environment";

interface Location {
    description: string;
    food: boolean;
    id: number;
    latitude: number;
    longtitude: number;
    name: string;
    sleep: boolean;
    toilets: boolean;
}

@Component({
    selector: 'app-hikes',
    templateUrl: './hikes.component.html',
    styleUrls: ['./hikes.component.css']
})
export class HikesComponent implements OnInit {
    faCloud = faCloudSun;
    faMapMarker = faLocationDot;
    temperature: any;
    difficulty = 1;
    latitude = 0;
    longitude = 0;
    maxDistance = 0;
    trails: Hike[] = [];
    selectedTrail?: Hike;
    loading: boolean = false;
    locations: Location[] = [];
    selectedLocationId?: Number;

    constructor(private http: HttpClient, private service: ServiceService) {
    }

    ngOnInit() {
        this.service.getLocations().subscribe(res => this.locations = res);
    }

    onSubmit(): void {
        this.service.getHikes(this.latitude, this.longitude, this.maxDistance, this.difficulty).subscribe((hikes: Hike[]) => {
            this.trails = hikes;
        });
    }

    getWeather(trail: Hike): void {
        this.service.getWeather(trail.startingLatitude, trail.startingLongitude).subscribe(res => {
            trail.cloudCoverage = res.current.cloud_cover;
            trail.temperature = res.current.temperature_2m;
            trail.humidity = res.current.relative_humidity_2m;
        })
    }

    getDifficultyLabel(difficulty: number): string {
        switch (difficulty) {
            case 1:
                return 'Easy';
            case 2:
                return 'Medium';
            case 3:
                return 'Hard';
            case 4:
                return 'Extreme';
            default:
                return 'Unknown';
        }
    }

    getLocation() {
        this.longitude = environment.lon;
        this.latitude = environment.lat;
    }

    onSelect($event: any) {
        let selected = this.locations.find(location => location.id === Number($event))
        if(selected) {
            this.longitude = selected.latitude;
            this.latitude = selected.longtitude;
        }
    }
}
