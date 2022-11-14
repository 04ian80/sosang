import React, { useRef } from 'react';
import CaretDownFill from '../svg/CaretDownFill';
import InputGroup from './InputGroup';

const Select = () => {
  // const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <InputGroup name="category" label="업종">
      <div className="relative">
        <select name="category" className="base-input appearance-none outline-none">
          <option value={''}>--업종을 선택해주세요.--</option>
          <option value={'한식'}>한식</option>
          <option value={'양식'}>양식</option>
          <option value={'일식'}>일식</option>
          <option value={'중식'}>중식</option>
          <option value={'아시안'}>아시안</option>
          <option value={'분식'}>분식</option>
        </select>
        <div className="absolute top-4 right-5">
          <CaretDownFill size={14} color="#00000080" />
        </div>
      </div>
    </InputGroup>
  );
};

export default Select;
