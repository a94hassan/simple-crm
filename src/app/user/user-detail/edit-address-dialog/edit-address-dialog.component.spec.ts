import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressDialogComponent } from './edit-address-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('EditAddressDialogComponent', () => {
  let component: EditAddressDialogComponent;
  let fixture: ComponentFixture<EditAddressDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddressDialogComponent, MatDialogModule, BrowserAnimationsModule],
      providers: [{provide: MatDialogRef, useValue: {}}, {provide: UserService, useValue: {}}]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAddressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
