"use client";

import Image from "next/image";
import { ReactNode, FC, useMemo } from "react";
import { Bath, BedSingle, Building2, LandPlot, MapPin, Star } from "lucide-react";
import Link from "next/link";

type UnitAddress = {
    city: string;
    fullAddress: string;
};

type UnitDetails = {
    unitSize: number;
    numberOfBathrooms: number;
    numberOfBedrooms: number;
};

type Props = {
    id: number;
    available: boolean;
    averageRating: number;
    mainImage?: string;
    unitAddress: UnitAddress;
    unitDetails: UnitDetails;
    unitName: string;
    unitType: string;
    rentingPrice: number;
    description: string;
};

const DepartmentCard: FC<Props> = ({ 
    id,
    available, 
    averageRating, 
    mainImage, 
    unitAddress, 
    unitDetails, 
    unitName,
    unitType,
    rentingPrice,
    description
}) => {
    return (
        <div className="bg-white shadow-xl rounded-xl mb-6 lg:mb-8">
            <CardHeader available={available} rating={averageRating} />
            <CardBody 
                id={id}
                unitName={unitName} 
                mainImage={mainImage} 
                unitAddress={unitAddress} 
                rentingPrice={rentingPrice} 
                description={description} 
            />
            <CardFooter unitType={unitType} {...unitDetails} />
        </div>
    );
};

// CardHeader Component
const CardHeader: FC<{ available: boolean; rating: number }> = ({ available, rating }) => {
    return (
        <div className="flex items-center justify-end gap-x-2 px-4 pt-4">
            <div className="flex items-center gap-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"} />
                ))}
            </div>
            <span className="text-[#4D5F65] font-semibold">{rating.toFixed(1)}</span>
            <div className={`py-1 px-4 rounded-tr-lg rounded-bl-lg ${available ? "bg-green-600" : "bg-red-600"}`}>
                <span className="text-white text-base capitalize">
                    {available ? "Available" : "Not Available"}
                </span>
            </div>
        </div>
    );
};

type cardBodyProps = {
    id: number;
    unitName: string;
    mainImage?: string;
    unitAddress: UnitAddress;
    rentingPrice: number;
    description: string;
}
// CardBody Component
const CardBody: FC<cardBodyProps> = ({ id, unitName, mainImage, unitAddress, rentingPrice, description }) => {
    return (
        <div className="p-4 md:p-6">
            <div className="flex md:items-end md:flex-row flex-col justify-between gap-4 flex-wrap">
                <div className="flex md:items-center items-start md:flex-row flex-col gap-3 md:h-[230px]">
                    {mainImage ? (
                        <Image
                            src={mainImage}
                            alt={unitName}
                            width={270}
                            height={230}
                            loading="lazy"
                            className="md:w-[270px] md:h-[230px] w-full h-[270px] rounded-xl object-cover"
                        />
                    ) : (
                        <div className="w-[270px] h-[230px] bg-gray-200 flex items-center justify-center text-gray-500 rounded-xl">
                            No Image Available
                        </div>
                    )}

                    <div className="flex flex-col items-start justify-between gap-2 h-full py-3">
                        <div className="flex flex-col items-start gap-y-2">
                            <Link href={`departments/${id}`}>
                                <h3 className="text-lg md:text-2xl text-[#4D5F65] font-bold hover:underline">{unitName}</h3>
                            </Link>

                            <p className="text-sm md:text-base text-[#4D5F65] line-clamp-2">
                                {description}
                            </p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <MapPin className="text-base md:text-[20px] text-[#4D5F65]" />
                            <p className="text-sm md:text-base text-[#4D5F65]">
                                {unitAddress.fullAddress}, {unitAddress.city}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-y-2">
                    <span className="text-lg md:text-xl font-semibold text-[#4D5F65]">Price</span>
                    <span className="text-lg md:text-2xl font-bold text-[#4D5F65]">${rentingPrice}</span>
                </div>
            </div>
        </div>
    );
};

// CardFooter Component
const CardFooter: FC<UnitDetails & { unitType: string }> = ({ unitSize, numberOfBathrooms, numberOfBedrooms, unitType }) => {
    const footerData = useMemo(
        () => [
            { id: 1, icon: <Building2 className="text-[20px] text-[#4D5F65]" />, title: "Unit Type", value: unitType },
            { id: 2, icon: <LandPlot className="text-[20px] text-[#4D5F65]" />, title: "Area", value: unitSize },
            { id: 3, icon: <BedSingle className="text-[20px] text-[#4D5F65]" />, title: "Rooms", value: numberOfBedrooms },
            { id: 4, icon: <Bath className="text-[20px] text-[#4D5F65]" />, title: "Bathrooms", value: numberOfBathrooms },
        ],
        [unitSize, numberOfBathrooms, numberOfBedrooms, unitType]
    );

    return (
        <div className="bg-[#f5f3f3] rounded-xl py-3 px-6 flex items-center justify-between gap-4 flex-wrap">
            {footerData.map(({ id, icon, title, value }) => (
                <FooterItem key={id} icon={icon} title={title} value={value} />
            ))}
        </div>
    );
};

// FooterItem Component
const FooterItem: FC<{ icon: ReactNode; title: string; value: string | number }> = ({ icon, title, value }) => (
    <div className="flex items-center gap-x-1">
        {icon}
        <span className="md:text-base text-sm text-[#4D5F65] capitalize">
            {title}: <span className="font-bold">{value}</span>
        </span>
    </div>
);

export default DepartmentCard;
