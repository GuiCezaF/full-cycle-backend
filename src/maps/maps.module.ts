import { Module } from '@nestjs/common';
import { PlacesService } from './places/places.service';
import { PlacesController } from './places/places.controller';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';

@Module({
  providers: [
    PlacesService,
    { provide: GoogleMapsClient, useValue: new GoogleMapsClient() },
  ],
  controllers: [PlacesController, DirectionsController],
})
export class MapsModule {}
