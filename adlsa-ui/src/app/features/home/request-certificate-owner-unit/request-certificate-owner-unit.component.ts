import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnitLocation } from '../../../domain/unit-location/models/unit-location';
import { Component, OnInit } from '@angular/core';
import { SubUnitType } from 'src/app/domain/sub-unit/models/sub-unit';
import { SubUnitRepository } from 'src/app/domain/sub-unit/sub-unit.repository';
import { UnitLocationRepository } from 'src/app/domain/unit-location/unit-location.repository';

@Component({
    selector: 'app-request-certificate-owner-unit',
    templateUrl: './request-certificate-owner-unit.component.html',
})

export class RequestsCertificateOwnerComponent implements OnInit {

    subUnitType: SubUnitType[];
    unitLocations: UnitLocation[];
    unitNumber!: FormControl;
    unitType!: FormControl;
    electricityNumber!: FormControl;
    redgion!: FormControl;
    valueRent!: FormControl;
    form!: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private subUnitRepository: SubUnitRepository,
        private unitLocationRepository: UnitLocationRepository,
    ) {

    }
    ngOnInit(): void {
        this.initForm()
        this.getAllSubUnitType();
        this.getAllUnitLocation();
    }

    initForm(): void {
        this.form = this.formBuilder.group({
            unitNumber: [''],
            unitType: [''],
            redgion: [''],
            electricityNumber: [''],
            valueRent: ['']
        });
        this.unitNumber = this.form.controls.unitNumber as FormControl;
        this.unitType = this.form.controls.unitType as FormControl;
        this.redgion = this.form.controls.redgion as FormControl;
        this.electricityNumber = this.form.controls.electricityNumber as FormControl;
        this.valueRent = this.form.controls.valueRent as FormControl;
    }

    getAllSubUnitType(): void {
        this.subUnitRepository.getAllSubUnitType().subscribe(res => {
            this.subUnitType = res.data;
            console.log(this.subUnitType)
        })
    }
    getAllUnitLocation(): void {
        this.unitLocationRepository.getAllUnitLocation().subscribe(res => {
            this.unitLocations = res.data;
            console.log(this.unitLocations)
        })
    }


}
