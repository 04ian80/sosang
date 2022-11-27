import React from 'react';
import CaretDownFill from '../svg/CaretDownFill';
import InputGroup from './InputGroup';

const Select = () => {
  const cate = ['--업종을 선택해주세요.--', '한식', '양식', '일식', '중식', '아시안', '분식'];
  // const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <InputGroup name="category" label="업종">
      <div className="relative z-20">
        <select
          name="category"
          className="relative base-input appearance-none hover:bg-transparent focus:bg-transparent outline-none bg-transparent z-20"
        >
          {cate.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute top-4 right-5 z-10">
          <CaretDownFill size={14} color="#00000080" />
        </div>
      </div>
    </InputGroup>
  );
};

export default Select;
