import Image from 'next/image';
import React from 'react';
import Location from '../svg/Location';

interface Props {
  key: number;
  place: { [key: string]: any };
}

const NearbyPlaceItem = ({ key, place }: Props) => {
  return (
    <div key={key} className="min-md:w-[350px]">
      <div className="flex max-sm:flex-col items-center shrink-0 rounded-lg m-2 px-3 py-3 bg-white">
        <div className="shrink-0 min-md:mr-2">
          <Image
            src={place.image}
            alt={place.name}
            width={100}
            height={100}
            className="object-cover w-[100px] h-[100px] rounded"
          />
        </div>

        <div className="[&>*]:mb-1 w-full">
          <div className="flex max-md:flex-col items-center">
            <span className="block min-sm:ml-2 max-w-[125px] overflow-ellipsis overflow-hidden whitespace-nowrap max-md:text-[14px]">
              {place.name}
            </span>
            <small className="ml-2 text-black/50 text-xs whitespace-nowrap max-md:text-[12px]">
              {place.category}
            </small>
          </div>

          <div className="flex text-gray-800 text-sm min-h-[50px] max-md:text-[12px] max-md:hidden">
            <div className="shrink-0">
              <Location size={20} />
            </div>
            <div className="">
              <span className="leading-6">{place.address}</span>
            </div>
          </div>

          <div>
            {/* {place.hashtag.join(',').length >} */}
            {place.hashtag.map((tag: string) => (
              <span className="text-xs text-gray-600 mr-1 p-1 border rounded-full max-md:hidden">
                &#35;{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearbyPlaceItem;
