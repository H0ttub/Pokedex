import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveredPokemonComponent } from './discovered-pokemon.component';

describe('DiscoveredPokemonComponent', () => {
  let component: DiscoveredPokemonComponent;
  let fixture: ComponentFixture<DiscoveredPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveredPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoveredPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
