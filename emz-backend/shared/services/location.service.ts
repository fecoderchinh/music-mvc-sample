import { Injectable } from '@nestjs/common';
import * as pcVN from 'pc-vn'

@Injectable()
export class LocationService {
    getProvinceByCode( provinceCode ){
        const provinces: [] = pcVN.getProvinces();
        const find = provinces.filter( i => i['code'] == provinceCode );
        if( find.length > 0 ) return find[0];
        return null;
    }
    
    getDistrictByCode( districtCode ){
        const districts: [] = pcVN.getDistricts();
        const find = districts.filter( i => i['code'] == districtCode );
        if( find.length > 0 ) return find[0];
        return null;
    }
    
    getWardByCode( wardCode ){
        const wards: [] = pcVN.getWards();
        const find = wards.filter( i => i['code'] == wardCode );
        if( find.length > 0 ) return find[0];
        return null;
    }
}



